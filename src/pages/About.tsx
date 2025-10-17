const About = () => {

import "../App.css";
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">À propos de nous</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Notre histoire et nos valeurs
        </p>

        <div className="space-y-8">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous nous engageons à créer des solutions innovantes qui transforment la façon dont
              les entreprises interagissent avec leurs clients. Notre approche centrée sur
              l'utilisateur garantit des résultats exceptionnels.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Une équipe passionnée de professionnels dédiés à l'excellence et à l'innovation. Nous
              combinons expertise technique et créativité pour offrir des solutions sur mesure.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>Excellence dans tout ce que nous faisons</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>Innovation continue et amélioration</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                <span>Transparence et intégrité</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
