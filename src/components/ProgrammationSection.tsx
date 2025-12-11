import { Zap, Settings, Fuel, Gauge, Wrench, Code, Shield, Cog } from "lucide-react";
import reprogrammationImage from "@/assets/reprogrammation-moteur.jpeg";
import diagnosticImage from "@/assets/diagnostic.jpg";

const services = [
  {
    icon: Settings,
    title: "GESTION MOTEUR",
    description: "Reprogrammation calculateur afin de modifier la cartographie moteur cela permet d'augmenter la puissance et réduire la consommation"
  },
  {
    icon: Wrench,
    title: "RÉPARATION ET CLONAGE",
    description: "Vous avez changé votre calculateur, ou le votre ne répond plus, ne vous inquiétez pas on a la solution"
  },
  {
    icon: Shield,
    title: "SOLUTION FAP, EGR",
    description: "Vous avez un problème avec votre système d'antipollution FAP ou EGR, contactez nous afin de trouver la solution"
  },
  {
    icon: Code,
    title: "ELV, EZS",
    description: "Réparation et clonage système d'antidémarrage Mercedes ELV, EZS"
  },
  {
    icon: Fuel,
    title: "CONVERSION E85",
    description: "Conversion flexfuel bio éthanol E85 sans boitier supplémentaire pour une économie d'énergie"
  },
  {
    icon: Gauge,
    title: "STAGE 1, STAGE 2",
    description: "Augmenter les performances de votre voiture en choisissant le stage1 ou stage 2 (plus de puissance, plus de couple, moins de consommation)"
  },
  {
    icon: Zap,
    title: "SOLUTION ADBLUE",
    description: "On a la solution de tous vos problème ADBLUE"
  },
  {
    icon: Cog,
    title: "CODAGE EN LIGNE",
    description: "Pour les voitures récentes, tout changement de pièce électrique nécessite l'opération de codage en ligne : Bloc ABS, calculateur boite de vitesse, calculateur Airbag, bloc optique ..."
  }
];

const ProgrammationSection = () => {
  return (
    <section id="programmation" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            <span className="text-primaryRed">INTERVENTION</span> ÉLECTRONIQUE
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Grâce à nos outils professionnels et notre savoir faire, on pourra intervenir sur tout type de calculateur en toute sécurité
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <img src={reprogrammationImage} alt="Reprogrammation moteur" className="w-full h-48 sm:h-64 md:h-80 object-cover" />
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <img src={diagnosticImage} alt="Diagnostic automobile" className="w-full h-48 sm:h-64 md:h-80 object-cover" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primaryRed/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primaryRed/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primaryRed" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="tel:0629631976"
            className="inline-block bg-primaryRed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-black text-base sm:text-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Contactez nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgrammationSection;
