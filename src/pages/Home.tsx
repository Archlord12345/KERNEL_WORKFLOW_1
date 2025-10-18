import React from "react";
import { Sparkles, Server, Code, MessageSquare, Gamepad2, Cpu } from "lucide-react";
import logo from "../../images/logo_sans-fond.png";

const Home: React.FC = () => {
  const services = [
    {
      title: "Nos services",
      desc: "Gestion, automatisation et supervision des infrastructures Linux et open source.",
      icon: <Server className="w-10 h-10 text-blue-500" />,
    },
     {
      title: "Administrations",
      desc: "Gestion, automatisation et supervision des infrastructures Linux et open source.",
      icon: <Server className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Nos logiciels",
      desc: "Développement d’applications open source fiables, performantes et scalables.",
      icon: <Code className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Commentaires",
      desc: "Partage, feedback et collaboration entre membres de la communauté.",
      icon: <MessageSquare className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Minecraft Online",
      desc: "Serveur communautaire pour explorer, apprendre et s’amuser ensemble.",
      icon: <Gamepad2 className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Projets étudiants",
      desc: "Encadrement et mise en œuvre de projets académiques innovants.",
      icon: <Cpu className="w-10 h-10 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-down mb-6">
            <img
              src={logo}
              alt="Logo Kernel Forge"
              className="mx-auto w-24 h-auto md:w-32 drop-shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           KERNEL FORGE
          </h1>
          
        
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto text-center">
          <p className="text-gray-300 mb-16 text-xl max-w-3xl mx-auto leading-relaxed">
            Collectif étudiant passionné par l'open source et Linux. Nous développons des solutions innovantes et partageons nos connaissances avec la communauté.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center max-w-6xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:from-slate-700 hover:to-slate-800"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">{service.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-950 via-purple-950 to-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Nos Expertises
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Site & Applications",
                desc: "Création de sites web et d'applications mobiles modernes et performantes.",
              },
              {
                title: "Design & UX",
                desc: "Conception d’interfaces intuitives avec une expérience utilisateur soignée.",
              },
              {
                title: "Réseaux & Sécurité",
                desc: "Configuration, gestion et sécurisation des infrastructures réseau.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-center text-white">
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour collaborer sur vos projets open source.
        </p>
        <button
          className="px-10 py-4 bg-white text-blue-600 rounded-xl hover:scale-110 transition-all duration-300 font-bold"
          onClick={() => (window.location.href = 'mailto:contact@kernelforge.com')}
        >
          Contacter Nous
        </button>
      </section>
    </div>
  );
};

export default Home;
