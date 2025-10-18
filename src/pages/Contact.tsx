import { Mail, Phone, MapPin, Send } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Effets d’arrière-plan animés */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Titre principal */}
        <div className="animate-fade-in-down text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nous sommes à votre écoute — un collectif passionné par l’open source, prêt à collaborer avec vous.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Infos de contact */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-blue-300 group-hover:text-blue-400 transition-colors">
                    Email
                  </h3>
                  <p className="text-gray-400">contact@kernelforge.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-purple-300 group-hover:text-purple-400 transition-colors">
                    Téléphone
                  </h3>
                  <p className="text-gray-400">+237 6 90 12 34 56</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-pink-300 group-hover:text-pink-400 transition-colors">
                    Adresse
                  </h3>
                  <p className="text-gray-400">
                    Yaoundé, Cameroun <br /> Université de Yaoundé I
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl">
              <h3 className="font-semibold mb-2 text-blue-300">Horaires d'ouverture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Lundi - Vendredi : 9h00 - 18h00 <br />
                Samedi - Dimanche : Fermé
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Envoyez-nous un message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                  placeholder="jean@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                  placeholder="Demande d'information"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-500 resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg flex justify-center items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
