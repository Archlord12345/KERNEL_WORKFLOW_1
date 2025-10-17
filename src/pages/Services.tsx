const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes et performants adaptés à vos besoins",
    },
    {
      title: "Applications Mobile",
      description: "Développement d'applications natives et hybrides pour iOS et Android",
    },
    {
      title: "Consulting IT",
      description: "Conseil stratégique pour optimiser votre infrastructure technologique",
    },
    {
      title: "Design UX/UI",
      description: "Création d'expériences utilisateur intuitives et engageantes",
    },
    {
      title: "Marketing Digital",
      description: "Stratégies marketing pour augmenter votre visibilité en ligne",
    },
    {
      title: "Support Technique",
      description: "Assistance et maintenance pour garantir la continuité de vos services",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Nos Services</h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Des solutions complètes pour accompagner votre croissance
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 group-hover:scale-110 transition-transform"></div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
