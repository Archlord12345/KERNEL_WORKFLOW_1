const Blog = () => {

import "../App.css";
  const articles = [
    {
      title: "Les tendances du web design en 2024",
      date: "15 Mars 2024",
      excerpt: "Découvrez les dernières tendances qui façonnent le design web moderne",
      readTime: "5 min",
    },
    {
      title: "Introduction à React 18",
      date: "10 Mars 2024",
      excerpt: "Explorez les nouvelles fonctionnalités de React 18 et leur impact",
      readTime: "8 min",
    },
    {
      title: "Optimisation des performances web",
      date: "5 Mars 2024",
      excerpt: "Techniques et meilleures pratiques pour accélérer votre site",
      readTime: "6 min",
    },
    {
      title: "SEO en 2024 : Guide complet",
      date: "1 Mars 2024",
      excerpt: "Stratégies SEO essentielles pour améliorer votre visibilité",
      readTime: "10 min",
    },
    {
      title: "L'importance de l'accessibilité web",
      date: "25 Février 2024",
      excerpt: "Créer des expériences inclusives pour tous les utilisateurs",
      readTime: "7 min",
    },
    {
      title: "TypeScript pour les débutants",
      date: "20 Février 2024",
      excerpt: "Introduction pratique à TypeScript et ses avantages",
      readTime: "12 min",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Blog</h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Articles, tutoriels et actualités tech
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all hover:shadow-lg group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime} de lecture</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-muted-foreground">{article.excerpt}</p>
              <button className="mt-4 text-primary font-medium hover:underline">
                Lire la suite →
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
