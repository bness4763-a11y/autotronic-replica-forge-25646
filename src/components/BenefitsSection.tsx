
import { TrendingUp, DollarSign, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Performance Augmentée",
    description: "Jusqu'à +30% de puissance et +40% de couple",
    percentage: "+30%",
    color: "bg-green-500"
  },
  {
    icon: DollarSign,
    title: "Économies Carburant",
    description: "Réduction de la consommation jusqu'à 15%",
    percentage: "-15%",
    color: "bg-blue-500"
  },
  {
    icon: Shield,
    title: "Fiabilité Garantie",
    description: "Tous nos réglages sont testés et garantis",
    percentage: "100%",
    color: "bg-primaryRed"
  },
  {
    icon: Clock,
    title: "Installation Rapide",
    description: "Intervention réalisée en moins de 2h",
    percentage: "2h",
    color: "bg-purple-500"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Pourquoi Choisir <span className="text-primaryRed">MH AUTO</span> ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Des avantages concrets et mesurables pour votre véhicule
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${benefit.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 sm:mb-2">
                {benefit.percentage}
              </div>
              
              <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 sm:mt-16 bg-white p-5 sm:p-8 lg:p-12 rounded-xl sm:rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-4 sm:mb-6">
                15 Ans d'Excellence en Reprogrammation
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primaryRed rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Plus de 2000 véhicules reprogrammés</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primaryRed rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Matériel professionnel dernière génération</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primaryRed rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Garantie sur toutes nos interventions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primaryRed rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Formation continue aux nouvelles technologies</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primaryRed to-red-600 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-white">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">Diagnostic Gratuit</h4>
              <p className="text-sm sm:text-base mb-4 sm:mb-6">
                Nous analysons gratuitement le potentiel de votre véhicule avant toute intervention.
              </p>
              <a
                href="tel:0629631976"
                className="inline-block bg-white text-primaryRed px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
