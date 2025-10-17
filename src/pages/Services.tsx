// Services.jsx
import {
  FaLaptopCode,
  FaMobileAlt,
  FaLightbulb,
  FaPaintBrush,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";

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
  return (
    <section className="relative min-h-screen py-20 px-4 bg-blue-50 text-gray-800 overflow-hidden">
      {/* Animated Bubble Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${10 + Math.random() * 40}px`,
              height: `${10 + Math.random() * 40}px`,
              opacity: `${0.2 + Math.random() * 0.4}`,
            }}
          ></div>
        ))}
      </div>

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

      {/* Bubble animation styles */}
      <style jsx>{`
        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(59, 130, 246, 0.3); /* blue-500 with opacity */
          border-radius: 50%;
          animation-name: floatUp;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-50vh) scale(1.1);
          }
          100% {
            transform: translateY(-100vh) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
