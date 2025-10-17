import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Login: React.FC = () => {
  const { loginWithOtp } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const result = await loginWithOtp(email);
    setLoading(false);
    if (result.ok) {
      setSuccess("Lien de connexion envoyé. Vérifiez votre email pour vous connecter.");
    } else {
      setError(result.message || "Impossible d'envoyer le lien de connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Connexion (sans mot de passe)
        </h1>
        {error && (
          <div className="mb-4 text-destructive font-medium">{error}</div>
        )}
        {success && (
          <div className="mb-4 text-green-600 font-medium">{success}</div>
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
            {loading ? "Envoi du lien..." : "Envoyer le lien de connexion"}
          </button>
          <p className="text-xs text-muted-foreground">Après le clic sur le lien, si votre email est admin dans `profiles`, l'onglet Admin sera accessible.</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
