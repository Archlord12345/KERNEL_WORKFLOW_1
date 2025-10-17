import {
  FaCode,
  FaMobileAlt,
  FaLightbulb,
  FaPaintBrush,
  FaBullhorn,
  FaLifeRing,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-3xl text-white" />,
      title: "Développement Web",
      description:
        "Création de sites web modernes, rapides et adaptés à tous les supports.",
      bg: "https://images.unsplash.com/photo-1502880195258-849b2010d8c5", // dev web
    },
    {
      icon: <FaMobileAlt className="text-3xl text-white" />,
      title: "Applications Mobiles",
      description:
        "Applications natives et hybrides pour Android et iOS avec design fluide.",
      bg: "https://images.unsplash.com/photo-1558655146-d09347e92766", // mobile
    },
    {
      icon: <FaLightbulb className="text-3xl text-white" />,
      title: "Consulting IT",
      description:
        "Stratégies technologiques pour optimiser vos processus métiers.",
      bg: "https://images.unsplash.com/photo-1581090700227-1e8e7b36dd8e", // consulting
    },
    {
      icon: <FaPaintBrush className="text-3xl text-white" />,
      title: "Design UX/UI",
      description:
        "Interfaces intuitives centrées sur l’utilisateur pour une meilleure expérience.",
      bg: "https://images.unsplash.com/photo-1603570419945-34e2ab3a75f3", // design
    },
    {
      icon: <FaBullhorn className="text-3xl text-white" />,
      title: "Marketing Digital",
      description:
        "Campagnes ciblées et gestion de la visibilité sur les canaux digitaux.",
      bg: "https://images.unsplash.com/photo-1560264280-88b68371db39", // marketing
    },
    {
      icon: <FaLifeRing className="text-3xl text-white" />,
      title: "Support Technique",
      description:
        "Maintenance proactive et assistance pour garantir la fiabilité de vos outils.",
      bg: "https://images.unsplash.com/photo-1581091870622-4c4e0c3c4a43", // support
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-6 md:px-12 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/white-wall-3.png')",
      }}
      aria-label="Liste des services proposés"
    >
      {/* Arrière-plan stylisé en dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none z-0"></div>

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
              className="relative rounded-xl p-6 border border-border transition-all duration-300 hover:scale-[1.03] shadow-md group overflow-hidden"
              style={{
                backgroundImage: `url(${service.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={`Service : ${service.title}`}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-300"></div>

              <div className="relative z-10 flex flex-col items-start">
                <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
