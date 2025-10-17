const Blog = () => {
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
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Blog
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Articles, tutoriels et actualités tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group cursor-pointer animate-fade-in-up transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
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
              <button className="mt-4 text-primary font-medium hover:underline inline-flex items-center gap-2">
                Lire la suite
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
