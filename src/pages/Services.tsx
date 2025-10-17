

import {
  FaLaptopCode,
  FaMobileAlt,
  FaLightbulb,
  FaPaintBrush,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";

import "../App.css";

const services = [
  {
    title: "Développement Web's",
    description: "Création de sites web modernes et performants adaptés à vos besoins.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Applications Mobile",
    description: "Développement d'applications natives et hybrides pour iOS et Android.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Consulting IT",
    description: "Conseil stratégique pour optimiser votre infrastructure technologique.",
    icon: <FaLightbulb />,
  },
  {
    title: "Design UX/UI",
    description: "Création d'expériences utilisateur intuitives et engageantes.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Marketing Digital",
    description: "Stratégies marketing pour augmenter votre visibilité en ligne.",
    icon: <FaBullhorn />,
  },
  {
    title: "Support Technique",
    description: "Assistance et maintenance pour garantir la continuité de vos services.",
    icon: <FaTools />,
  },
];

const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes et performants adaptés à vos besoins",
    },
    {
      title: "Applications Mobile",
      description: "Développement d'applications natives et hybrides pour iOS et Android",
    },
    {
      title: "Consulting IT",
      description: "Conseil stratégique pour optimiser votre infrastructure technologique",
    },
    {
      title: "Design UX/UI",
      description: "Création d'expériences utilisateur intuitives et engageantes",
    },
    {
      title: "Marketing Digital",
      description: "Stratégies marketing pour augmenter votre visibilité en ligne",
    },
    {
      title: "Support Technique",
      description: "Assistance et maintenance pour garantir la continuité de vos services",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nos Services
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner votre croissance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-scale-in transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 group-hover:rotate-12 transition-transform animate-glow"></div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
