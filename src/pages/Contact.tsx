import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contactez nous</h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Une question, une suggestion, ou envie de collaborer avec KERNEL FORGE ? N'hésitez pas à nous écrire, nous serons ravis d'échanger avec vous !
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">ravel.nghomsi@facsciences-uy1.cm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+237 6 57 63 56 44</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    Faculté des Sciences de l'Université de Yaoundé I
                    <br />
                    BP 812 Yaoundé, Cameroun
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <h3 className="font-semibold mb-2">Horaires d'ouverture</h3>
              <p className="text-muted-foreground text-sm">
                Lundi - Vendredi : 9h00 - 18h00
                <br />
                Samedi - Dimanche : Fermé
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="jean@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Demande d'information"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          
           <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6">Temps de réponse</h2> <br/>
            <p>Nous nous efforçons de répondre à tous les messages dans les 24 heures. Pour les demandes urgentes, n'hésitez pas à le préciser dans votre message.</p>
           
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-6">Temps de réponse</h2> <br/>
            <p>Nous nous efforçons de répondre à tous les messages dans les 24 heures. Pour les demandes urgentes, n'hésitez pas à le préciser dans votre message.</p>
           
          </div>
          <h2 className="text-2xl font-semibold mb-6">Nos domaines</h2>
          <p>Développement logiciel</p>
          <p>Administration système Linux</p>
          <p>Hébergement web</p>
          <p>Conseil et formation</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
