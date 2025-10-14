import { Car, Cog, Shield, Wrench } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";
import mechanicImage from "@/assets/workshop-mechanic.jpg";

const services = [
  {
    number: "01",
    icon: Car,
    title: "RÉPARATION MOTEUR",
    description: "Diagnostic et réparation complète de votre moteur avec des pièces de qualité"
  },
  {
    number: "02",
    icon: Cog,
    title: "RÉPARATION BOITE DE VITESSE AUTOMATIQUE MERCEDES BENZ",
    description: "Spécialiste de la réparation des boîtes automatiques Mercedes avec garantie"
  },
  {
    number: "03",
    icon: Shield,
    title: "RÉPARATION SYSTÈME DE FREINAGE",
    description: "Maintenance et réparation complète de votre système de freinage pour votre sécurité"
  },
  {
    number: "04",
    icon: Wrench,
    title: "ENTRETIEN PÉRIODIQUE MOTEUR ET BOÎTE DE VITESSE",
    description: "Entretien régulier pour prolonger la durée de vie de votre véhicule"
  }
];

const ReparationSection = () => {
  return (
    <section id="reparation" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            <span className="text-primaryRed">RÉPARATION</span> AUTOMOBILE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Service complet de réparation automobile avec expertise technique
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={workshopImage} alt="Atelier de réparation" className="w-full h-80 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={mechanicImage} alt="Mécanicien professionnel" className="w-full h-80 object-cover" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primaryRed text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-4">
                    {service.number}
                  </div>
                  <div className="w-12 h-12 bg-primaryRed/10 rounded-xl flex items-center justify-center group-hover:bg-primaryRed/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primaryRed" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReparationSection;
