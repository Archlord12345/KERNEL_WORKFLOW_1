import React, { useState } from "react";

/* Supabase client (accessible dans ce fichier) */
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vxcwfigplayrlwbclwqg.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: ici vous pouvez appeler votre API d'authentification
    alert(`Tentative de connexion avec ${email}`);
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-md bg-white rounded-xl p-8 shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Connexion</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="votre@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
