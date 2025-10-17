import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

interface AuthContextValue {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  loginWithOtp: (email: string) => Promise<{ ok: boolean; message?: string }>;
  loginEmailOnly: (email: string) => Promise<{ ok: boolean; message?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Restore local email-only session if present
    const localAdminEmail = localStorage.getItem("local_admin_email");
    if (localAdminEmail) {
      setIsAuthenticated(true);
      setIsAdmin(true);
    }

    // Get initial Supabase session (optional)
    supabase.auth.getSession().then(async ({ data }) => {
      const session = data.session;
      if (session?.user) {
        setIsAuthenticated(true);
        await refreshAdminFlag(session.user.id);
      }
    });
    // Subscribe to auth state changes
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setIsAuthenticated(true);
        refreshAdminFlag(session.user.id);
      } else {
        // If no Supabase session, keep local session if exists
        const localEmail = localStorage.getItem("local_admin_email");
        if (!localEmail) {
          setIsAuthenticated(false);
          setIsAdmin(false);
        }
      }
    });
    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const refreshAdminFlag = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", userId)
      .single();
    if (!error && data) setIsAdmin(!!data.is_admin);
    else setIsAdmin(false);
  };

  const login = async (email: string, password: string) => {
    // Basic client-side validation to avoid empty submissions
    if (!email || !password) {
      return { ok: false, message: "Email et mot de passe requis" };
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return { ok: false, message: error.message };
    }
    return { ok: true };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("local_admin_email");
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  const loginWithOtp = async (email: string) => {
    if (!email) return { ok: false, message: "Email requis" };
    const redirectTo = window.location.origin; // after magic link, return to app root
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } });
    if (error) return { ok: false, message: error.message };
    return { ok: true };
  };

  const loginEmailOnly = async (email: string) => {
    if (!email) return { ok: false, message: "Email requis" };
    // Check via RPC to avoid RLS issues
    const { data, error } = await supabase.rpc("is_admin_email", { p_email: email });
    if (error) return { ok: false, message: error.message };
    if (!data) return { ok: false, message: "Accès admin refusé" };
    // Set local session
    localStorage.setItem("local_admin_email", email);
    setIsAuthenticated(true);
    setIsAdmin(true);
    return { ok: true };
  };

  const value = useMemo(() => ({ isAuthenticated, isAdmin, login, loginWithOtp, loginEmailOnly, logout }), [isAuthenticated, isAdmin]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const ProtectedRoute: React.FC<{ children: React.ReactElement; requireAdmin?: boolean }> = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (requireAdmin && !isAdmin) return <Navigate to="/" replace />;
  return children;
};
