import { Check } from "lucide-react";

import "../App.css";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "499€",
      description: "Parfait pour les petits projets",
      features: [
        "Site web responsive",
        "Jusqu'à 5 pages",
        "Design personnalisé",
        "SEO de base",
        "Support 30 jours",
      ],
    },
    {
      name: "Professional",
      price: "1499€",
      description: "Pour les entreprises en croissance",
      features: [
        "Tout du plan Starter",
        "Jusqu'à 15 pages",
        "Blog intégré",
        "Optimisation SEO avancée",
        "Support 90 jours",
        "Formation incluse",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      description: "Solutions sur mesure",
      features: [
        "Tout du plan Professional",
        "Pages illimitées",
        "Application web complexe",
        "API personnalisée",
        "Support prioritaire",
        "Maintenance incluse",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tarifs
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Des forfaits adaptés à tous les besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card/80 backdrop-blur-sm rounded-xl p-8 border-2 ${
                plan.popular ? "border-primary shadow-[0_0_40px_hsl(var(--primary)/0.3)] scale-105" : "border-border hover:border-primary"
              } relative transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-scale-in`}
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "both" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium animate-bounce-in">
                  Populaire
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Choisir ce plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
