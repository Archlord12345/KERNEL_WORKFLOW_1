import React from "react";

const Admin = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Panneau d'administration</h1>
        <p className="mb-6">Interface de gestion (prototype). Ajoutez ici des outils pour gérer pages, articles, utilisateurs, etc.</p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Gérer les pages</h2>
            <p className="text-sm text-muted-foreground">Créer / modifier / supprimer les pages publiques.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Gérer le contenu du chat</h2>
            <p className="text-sm text-muted-foreground">Configurer messages d'accueil, modération, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
