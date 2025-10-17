import { motion } from "framer-motion";

// Données des fonctionnalités
const features = [
  { title: "Performance", description: "Optimisé pour la vitesse et une expérience utilisateur fluide.", icon: "⚡" },
  { title: "Modularité", description: "Composants réutilisables et faciles à intégrer.", icon: "🧩" },
  { title: "Design moderne", description: "Interface élégante avec animations subtiles.", icon: "🎨" },
];

// Données des services
const services = [
  { name: "Nos services", color: "bg-blue-500" },
  { name: "Nos logiciels", color: "bg-green-500" },
  { name: "Commentaires", color: "bg-yellow-400" },
  { name: "Minecraft Online", color: "bg-purple-500" },
  { name: "Administration", color: "bg-red-500" },
];

// GitHub floating symbols
const GitHubSymbol = ({ x, y, size, color, duration }) => (
  <motion.div
    className={`absolute text-${color} text-xl`}
    style={{ left: x, top: y, fontSize: size }}
    animate={{ y: [y, y + 50, y] }}
    transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
  >
    🐱
  </motion.div>
);

const Home = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-blue-600">
      {/* Background symbols */}
      {Array.from({ length: 15 }).map((_, i) => (
        <GitHubSymbol
          key={i}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 100}%`}
          size={`${12 + Math.random() * 16}px`}
          color={["white", "gray-200", "blue-300", "white"][i % 4]}
          duration={3 + Math.random() * 3}
        />
      ))}

      {/* Hero Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white"
        >
          Bienvenue sur KERNEL FORGE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-white mb-10 mx-auto max-w-3xl"
        >
          Un template moderne et élégant pour booster vos projets React avec style et performance.
        </motion.p>
      </section>

      {/* Collectif + Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-white mx-auto max-w-3xl"
        >
          Collectif étudiant passionné par l'open source et Linux. Nous développons des solutions innovantes et partageons nos connaissances avec la communauté.
        </motion.p>

        {/* Services Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center justify-center items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className={`${service.color} p-6 rounded-xl text-white font-semibold text-center shadow-lg cursor-pointer transition-all max-w-xs w-full`}
            >
              {service.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16"
        >
          Fonctionnalités principales
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
              className="p-6 sm:p-8 bg-white bg-opacity-20 rounded-2xl border border-white/20 text-center transition-all text-white max-w-sm w-full"
            >
              <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
