import React from "react";
import { useAuth } from "@/context/AuthContext";

const Admin: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Tableau de bord Admin
        </h1>
        <p className="text-muted-foreground mb-8">
          Espace réservé à l'administration du site.
        </p>
        <button
          onClick={logout}
          className="px-6 py-3 rounded-lg bg-destructive text-destructive-foreground hover:opacity-90 transition"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Admin;
