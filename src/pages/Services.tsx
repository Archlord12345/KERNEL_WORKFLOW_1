
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
  return (
    <section className="relative min-h-screen py-20 px-4 bg-blue-50 text-gray-800 overflow-hidden">
      {/* BACKGROUND SVG DECORATION */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#dbeafe"
            fillOpacity="1"
            d="M0,160L60,160C120,160,240,160,360,170.7C480,181,600,203,720,192C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* CONTENT */}
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
