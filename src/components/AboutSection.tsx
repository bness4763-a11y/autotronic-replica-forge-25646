
import { Award, Users, Wrench, Shield } from "lucide-react";

const stats = [
  { icon: Award, number: "15+", label: "Années d'expérience" },
  { icon: Users, number: "2000+", label: "Clients satisfaits" },
  { icon: Wrench, number: "50+", label: "Marques traitées" },
  { icon: Shield, number: "100%", label: "Interventions garanties" }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
              AUTOTRONIC <span className="text-primaryRed">PERFORMANCE</span>
            </h2>
            
            <div className="text-xl text-gray-800 leading-relaxed mb-8">
              <p className="font-bold text-2xl mb-6 text-primaryRed">
                Reprogrammation &amp; Optimisation
              </p>
              <p className="text-lg leading-loose mb-6">
                Chez Autotronic Performance, nous sommes fiers d'être pleinement impliqués dans chaque projet de reprogrammation moteur.
              </p>
              <p className="text-lg leading-loose mb-6">
                Notre expertise et notre passion nous permettent d'optimiser les performances de votre véhicule : plus de puissance, de couple, tout en réduisant la consommation.
              </p>
              <p className="text-lg leading-loose">
                Faites confiance à plus de 15 ans d'expérience pour booster et protéger votre moteur !
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block bg-primaryRed text-white px-8 py-4 rounded-lg font-bold hover:bg-red-600 transition-colors duration-300 text-center"
              >
                Nous Contacter
              </a>
              <a
                href="tel:0629631976"
                className="inline-block border-2 border-primaryRed text-primaryRed px-8 py-4 rounded-lg font-bold hover:bg-primaryRed hover:text-white transition-all duration-300 text-center"
              >
                Appeler Maintenant
              </a>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primaryRed/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primaryRed" />
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🏆 Nos Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primaryRed rounded-full mr-3"></div>
                  <span className="text-gray-700">Centre agréé préfecture</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primaryRed rounded-full mr-3"></div>
                  <span className="text-gray-700">Formation constructeurs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primaryRed rounded-full mr-3"></div>
                  <span className="text-gray-700">Matériel homologué</span>
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
