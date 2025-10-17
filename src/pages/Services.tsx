// Services.jsx
import {
  FaLaptopCode,
  FaMobileAlt,
  FaLightbulb,
  FaPaintBrush,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { useCallback } from "react";

const services = [
  {
    title: "Développement Web",
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
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative min-h-screen py-20 px-4 bg-blue-50 text-gray-800 overflow-hidden">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#f0f7ff",
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#3b82f6", // blue-500
            },
            links: {
              enable: true,
              distance: 150,
              color: "#3b82f6",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: "bounce",
            },
            size: {
              value: 3,
            },
            opacity: {
              value: 0.5,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
          },
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-blue-700">
          Nos Services
        </h1>
        <p className="text-lg text-blue-900/80 text-center mb-14 max-w-2xl mx-auto">
          Des solutions complètes pour accompagner votre croissance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 group hover:border-blue-500"
            >
              <div className="text-4xl text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-blue-900/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
