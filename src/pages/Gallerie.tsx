import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Gallerie = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer:
        "Les délais varient selon la complexité du projet. En moyenne, un site web simple prend 2-4 semaines, tandis qu'une application plus complexe peut nécessiter 2-3 mois. Nous établissons un calendrier détaillé lors de notre première rencontre.",
    },
    {
      question: "Proposez-vous un support après la livraison ?",
      answer:
        "Oui, nous offrons un support technique gratuit pendant 30 jours après la livraison. Nous proposons également des forfaits de maintenance mensuelle pour garantir le bon fonctionnement de votre projet sur le long terme.",
    },
    {
      question: "Comment se déroule le processus de développement ?",
      answer:
        "Notre processus comprend 5 étapes : consultation initiale, conception et wireframing, développement, tests et assurance qualité, puis déploiement. Vous êtes impliqué à chaque étape avec des révisions régulières.",
    },
    {
      question: "Travaillez-vous avec des clients internationaux ?",
      answer:
        "Absolument ! Nous travaillons avec des clients du monde entier. Notre équipe est flexible et peut s'adapter à différents fuseaux horaires pour faciliter la communication et la collaboration.",
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer:
        "Nous utilisons les technologies les plus récentes et éprouvées : React, TypeScript, Node.js, et diverses bases de données. Le choix des technologies dépend des besoins spécifiques de chaque projet.",
    },
    {
      question: "Puis-je modifier mon projet après le lancement ?",
      answer:
        "Bien sûr ! Nous construisons tous nos projets avec la maintenance et l'évolutivité à l'esprit. Vous pouvez nous contacter à tout moment pour des modifications ou de nouvelles fonctionnalités.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Gallerie
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Questions fréquemment posées
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm rounded-xl border border-border overflow-hidden animate-fade-in-up hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallerie;
