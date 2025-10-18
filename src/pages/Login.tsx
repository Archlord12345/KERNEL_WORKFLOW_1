import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Mail } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Effets d’arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Conteneur principal */}
      <div className="w-full max-w-md bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-xl relative z-10 animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Connexion
        </h1>

        <p className="text-center text-muted-foreground mb-6">
          Entrez votre adresse e-mail pour accéder à l’espace administrateur.
        </p>

        {error && (
          <div className="mb-4 text-destructive font-medium text-center bg-destructive/10 border border-destructive/20 rounded-lg py-2">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 w-5 h-5 text-primary" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="vous@exemple.com"
              autoComplete="email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all transform hover:scale-105"
          >
            {loading ? "Vérification..." : "Se connecter"}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Si l’e-mail est valide et appartient à un administrateur, vous serez redirigé vers le tableau de bord.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
