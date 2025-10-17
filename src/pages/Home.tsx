import React from "react";
import { Sparkles } from "lucide-react";
import logo from "../../images/logo_sans-fond.png";
const Home: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-down mb-4" style={{ animationDelay: "0s", animationFillMode: "both" }}>
            <img
              src={logo}
              alt="Logo Kernel Forge"
              className="mx-auto w-20 h-auto md:w-28"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent animate-glow">
            Bienvenue chez KERNEL FORGE
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up max-w-2xl mx-auto">
            Transformons vos idées en réalité avec des solutions innovantes et créatives
          </p>
          <div className="flex gap-4 justify-center animate-bounce-in">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Commencer
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300">
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-8 text-xl animate-fade-in-up max-w-2xl mx-auto">
            Collectif étudiant passionné par l'open source et Linux. Nous développons des solutions innovantes et partageons nos connaissances avec la communauté.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative bg-gray-50">
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
            Nos Expertises
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Site & Applications", desc: "Création de sites web et d'applications mobiles performantes.", color: "from-blue-500 to-blue-300", delay: "0s" },
              { title: "Design", desc: "Design moderne et UX réfléchi pour une expérience utilisateur optimale.", color: "from-purple-500 to-purple-300", delay: "0.2s" },
              { title: "Réseaux", desc: "Configuration et sécurisation des infrastructures réseau.", color: "from-pink-500 to-pink-300", delay: "0.4s" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: item.delay, animationFillMode: "both" }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6`}></div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative text-center text-white">
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins
        </p>
        <button
          className="px-10 py-4 bg-white text-blue-500 rounded-xl hover:scale-110 transition-all duration-300 font-bold animate-bounce-in"
          onClick={() => window.location.href = "mailto:contact@kernelforge.com"}
        >
          Contacter Nous
        </button>
      </section>
    </div>
  );
};

export default Home;
