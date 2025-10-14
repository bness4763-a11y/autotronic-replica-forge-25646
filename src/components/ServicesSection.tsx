import { Zap, Fuel, Wrench, Shield, Gauge, Star } from "lucide-react";
import mercedesInteriorImage from "@/assets/mercedes-interior.jpg";
import mercedesAmgImage from "@/assets/mercedes-amg-2.jpg";

const services = [
  {
    icon: Zap,
    title: "Reprogrammation Moteur",
    description: "Optimisation des performances de votre véhicule avec des gains de puissance et de couple significatifs.",
    features: ["Jusqu'à +30% de puissance", "Couple optimisé", "Cartographie sur mesure"]
  },
  {
    icon: Fuel,
    title: "Conversion E85",
    description: "Installation de kits FlexFuel pour rouler à l'éthanol E85 et réduire vos coûts de carburant.",
    features: ["Économies jusqu'à 40%", "Kit homologué", "Installation garantie"]
  },
  {
    icon: Wrench,
    title: "Suppression FAP/AdBlue",
    description: "Suppression professionnelle des systèmes anti-pollution défaillants pour éviter les pannes.",
    features: ["Diagnostic complet", "Suppression logicielle", "Garantie technique"]
  },
  {
    icon: Shield,
    title: "Diagnostic Auto",
    description: "Diagnostic complet de votre véhicule avec analyse détaillée des systèmes électroniques.",
    features: ["Outils professionnels", "Rapport détaillé", "Conseils personnalisés"]
  },
  {
    icon: Gauge,
    title: "Optimisation Performance",
    description: "Réglages fins pour maximiser les performances tout en préservant la fiabilité du moteur.",
    features: ["Réglage personnalisé", "Tests sur banc", "Suivi post-installation"]
  },
  {
    icon: Star,
    title: "Maintenance Préventive",
    description: "Entretien spécialisé pour maintenir les performances optimales de votre véhicule modifié.",
    features: ["Contrôles réguliers", "Mises à jour", "Support technique"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Nos <span className="text-primaryRed">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Découvrez notre gamme complète de services de reprogrammation et d'optimisation automobile
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={mercedesInteriorImage} alt="Diagnostic Mercedes" className="w-full h-60 sm:h-80 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={mercedesAmgImage} alt="Mercedes AMG Performance" className="w-full h-60 sm:h-80 object-cover" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primaryRed/20 group"
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primaryRed/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primaryRed/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primaryRed" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primaryRed rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
