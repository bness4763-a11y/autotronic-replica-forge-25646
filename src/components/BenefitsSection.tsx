
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
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Pourquoi Choisir <span className="text-primaryRed">Autotronic</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des avantages concrets et mesurables pour votre véhicule
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
            >
              <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-4xl font-black text-gray-900 mb-2">
                {benefit.percentage}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                15 Ans d'Excellence en Reprogrammation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primaryRed rounded-full mr-4"></div>
                  <span className="text-gray-700">Plus de 2000 véhicules reprogrammés</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primaryRed rounded-full mr-4"></div>
                  <span className="text-gray-700">Matériel professionnel dernière génération</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primaryRed rounded-full mr-4"></div>
                  <span className="text-gray-700">Garantie sur toutes nos interventions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primaryRed rounded-full mr-4"></div>
                  <span className="text-gray-700">Formation continue aux nouvelles technologies</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primaryRed to-red-600 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Diagnostic Gratuit</h4>
              <p className="mb-6">
                Nous analysons gratuitement le potentiel de votre véhicule avant toute intervention.
              </p>
              <a
                href="tel:0629631976"
                className="inline-block bg-white text-primaryRed px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
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
