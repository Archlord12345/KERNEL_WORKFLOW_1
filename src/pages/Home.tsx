import { Scene3D } from "@/components/3d/Scene3D";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-down mb-4" style={{ animationDelay: "0s", animationFillMode: "both" }}>
            <img
              src="./images/logo_sans-fond.png"
              alt="Logo Kernel Forge"
              className="mx-auto w-20 h-auto md:w-28"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
              Bienvenue chez KERNEL FORGE
            </h1>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transformons vos idées en réalité avec des solutions innovantes et créatives
            </p>
          </div>
          <div className="flex gap-4 justify-center animate-bounce-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 font-medium transform hover:scale-105">
              <span className="flex items-center gap-2">
                Commencer
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* 3D Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Innovation en 3D
            </h2>
            <p className="text-muted-foreground">
              Explorez nos créations interactives
            </p>
          </div>
          <div className="max-w-4xl mx-auto animate-scale-in">
            <Scene3D />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nos Expertises
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { color: "from-primary to-primary-glow", delay: "0s" },
              { color: "from-secondary to-secondary-glow", delay: "0.2s" },
              { color: "from-accent to-accent-glow", delay: "0.4s" },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary transition-all duration-300 animate-fade-in-up hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transform hover:scale-105"
                style={{ animationDelay: item.delay, animationFillMode: "both" }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 transform group-hover:rotate-12 transition-transform duration-300 animate-float`}></div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  Expertise {i + 1}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Des solutions sur mesure qui transforment votre vision en réalité digitale exceptionnelle.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto text-center relative z-10 animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous aujourd'hui pour une consultation gratuite
          </p>
          <button className="px-10 py-4 bg-white text-primary rounded-xl hover:bg-white/90 transition-all duration-300 font-bold text-lg transform hover:scale-110 hover:shadow-2xl">
            Discutons de votre projet
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
