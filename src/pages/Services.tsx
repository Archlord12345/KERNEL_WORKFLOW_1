import { FaCode, FaMobileAlt, FaLightbulb, FaPaintBrush, FaBullhorn, FaLifeRing } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl text-primary" />,
      title: "Développement Web",
      description: "Création de sites web modernes, rapides et adaptés à tous les supports.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-primary" />,
      title: "Applications Mobiles",
      description: "Applications natives et hybrides pour Android et iOS avec design fluide.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-primary" />,
      title: "Consulting IT",
      description: "Stratégies technologiques pour optimiser vos processus métiers.",
    },
    {
      icon: <FaPaintBrush className="text-3xl text-primary" />,
      title: "Design UX/UI",
      description: "Interfaces intuitives centrées sur l’utilisateur pour une meilleure expérience.",
    },
    {
      icon: <FaBullhorn className="text-3xl text-primary" />,
      title: "Marketing Digital",
      description: "Campagnes ciblées et gestion de la visibilité sur les canaux digitaux.",
    },
    {
      icon: <FaLifeRing className="text-3xl text-primary" />,
      title: "Support Technique",
      description: "Maintenance proactive et assistance pour garantir la fiabilité de vos outils.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-6 md:px-12 bg-background relative overflow-hidden"
      aria-label="Liste des services proposés"
    >
      {/* Arrière-plan stylisé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background pointer-events-none"></div>
      <div className="absolute top-24 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-24 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      {/* Contenu principal */}
      <div className="container mx-auto relative z-10">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-down">
            Nos Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Des solutions digitales sur mesure pour booster votre présence en ligne.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group hover:scale-105 transform animate-scale-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
              aria-label={`Service : ${service.title}`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:rotate-12 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
