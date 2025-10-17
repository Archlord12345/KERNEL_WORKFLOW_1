import "../App.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Projet E-commerce",
      category: "Web Development",
      description: "Plateforme de vente en ligne complète avec système de paiement intégré",
    },
    {
      title: "Application Mobile Fitness",
      category: "Mobile App",
      description: "Application de suivi d'activité physique avec coaching personnalisé",
    },
    {
      title: "Dashboard Analytique",
      category: "Data Visualization",
      description: "Tableau de bord interactif pour visualiser des données complexes",
    },
    {
      title: "Site Vitrine Corporate",
      category: "Web Design",
      description: "Site institutionnel moderne pour une entreprise internationale",
    },
    {
      title: "Système de Réservation",
      category: "Web Application",
      description: "Solution de réservation en ligne pour hôtels et restaurants",
    },
    {
      title: "Plateforme d'Apprentissage",
      category: "EdTech",
      description: "Plateforme LMS avec cours en ligne et suivi de progression",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Portfolio</h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Découvrez nos réalisations récentes
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-6xl opacity-20">📱</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2 mt-1">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
