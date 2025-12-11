
import { Award, Users, Wrench, Shield } from "lucide-react";

const stats = [
  { icon: Award, number: "15+", label: "Années d'expérience" },
  { icon: Users, number: "2000+", label: "Clients satisfaits" },
  { icon: Wrench, number: "50+", label: "Marques traitées" },
  { icon: Shield, number: "100%", label: "Interventions garanties" }
];

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
              MH AUTO <span className="text-primaryRed">PERFORMANCE</span>
            </h2>
            
            <div className="text-gray-800 leading-relaxed mb-6 sm:mb-8">
              <p className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-primaryRed">
                Reprogrammation &amp; Optimisation
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose mb-4 sm:mb-6">
                Chez MH AUTO Performance, nous sommes fiers d'être pleinement impliqués dans chaque projet de reprogrammation moteur.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose mb-4 sm:mb-6">
                Notre expertise et notre passion nous permettent d'optimiser les performances de votre véhicule : plus de puissance, de couple, tout en réduisant la consommation.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose">
                Faites confiance à plus de 15 ans d'expérience pour booster et protéger votre moteur !
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-block bg-primaryRed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-red-600 transition-colors duration-300 text-center"
              >
                Nous Contacter
              </a>
              <a
                href="tel:0629631976"
                className="inline-block border-2 border-primaryRed text-primaryRed px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-primaryRed hover:text-white transition-all duration-300 text-center"
              >
                Appeler Maintenant
              </a>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primaryRed/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primaryRed" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 sm:mt-6 lg:mt-8 bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                🏆 Nos Certifications
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primaryRed rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Centre agréé préfecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primaryRed rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Formation constructeurs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primaryRed rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Matériel homologué</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
