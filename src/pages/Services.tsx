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
    <section className="min-h-screen py-20 px-4 bg-[#f9fafb] text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
          Nos Services
        </h1>
        <p className="text-lg text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          Des solutions complètes pour accompagner votre croissance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
