import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Login: React.FC = () => {
  const { loginEmailOnly, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await loginEmailOnly(email);
    setLoading(false);
    if (result.ok) {
      navigate("/admin", { replace: true });
    } else {
      setError(result.message || "Accès refusé");
    }
  };

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, isAdmin, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connexion (email seul)</h1>
        {error && (
          <div className="mb-4 text-destructive font-medium">{error}</div>
        )}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="vous@exemple.com"
              autoComplete="email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Vérification..." : "Se connecter"}
          </button>
          <p className="text-xs text-muted-foreground">Si l'email existe et est admin dans `profiles`, vous serez redirigé vers l'admin.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
