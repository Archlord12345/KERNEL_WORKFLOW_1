const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            À propos de KERNEL FORGE
          </h1>
          <p className="text-xl text-muted-foreground">
            Notre histoire et nos valeurs
          </p>
        </div>

        <div className="space-y-8">
          <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 animate-fade-in-up hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transform hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl animate-glow"></div>
              <h2 className="text-3xl font-semibold group-hover:text-primary transition-colors">Notre mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nous nous engageons à créer des solutions innovantes qui transforment la façon dont
              les entreprises interagissent avec leurs clients. Notre approche centrée sur
              l'utilisateur garantit des résultats exceptionnels.
            </p>
          </div>

          <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-secondary transition-all duration-300 animate-fade-in-up hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)] transform hover:scale-[1.02]" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-glow rounded-xl animate-glow" style={{ animationDelay: "0.5s" }}></div>
              <h2 className="text-3xl font-semibold group-hover:text-secondary transition-colors">Notre équipe</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Une équipe passionnée de professionnels dédiés à l'excellence et à l'innovation. Nous
              combinons expertise technique et créativité pour offrir des solutions sur mesure.
            </p>
          </div>

          <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-accent transition-all duration-300 animate-fade-in-up hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)] transform hover:scale-[1.02]" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-glow rounded-xl animate-glow" style={{ animationDelay: "1s" }}></div>
              <h2 className="text-3xl font-semibold group-hover:text-accent transition-colors">Nos valeurs</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start group/item">
                <span className="w-3 h-3 bg-gradient-to-br from-primary to-primary-glow rounded-full mt-2 mr-4 animate-pulse"></span>
                <span className="text-lg group-hover/item:text-foreground transition-colors">Excellence dans tout ce que nous faisons</span>
              </li>
              <li className="flex items-start group/item">
                <span className="w-3 h-3 bg-gradient-to-br from-secondary to-secondary-glow rounded-full mt-2 mr-4 animate-pulse" style={{ animationDelay: "0.3s" }}></span>
                <span className="text-lg group-hover/item:text-foreground transition-colors">Innovation continue et amélioration</span>
              </li>
              <li className="flex items-start group/item">
                <span className="w-3 h-3 bg-gradient-to-br from-accent to-accent-glow rounded-full mt-2 mr-4 animate-pulse" style={{ animationDelay: "0.6s" }}></span>
                <span className="text-lg group-hover/item:text-foreground transition-colors">Transparence et intégrité</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
