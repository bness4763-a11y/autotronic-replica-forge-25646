
import { MapPin, Phone, Clock, Mail, Car } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Contactez <span className="text-primaryRed">Nous</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Prêt à booster votre véhicule ? Contactez-nous pour un devis personnalisé
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primaryRed/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primaryRed" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Téléphone</h4>
                    <a href="tel:0629631976" className="text-primaryRed font-semibold text-lg hover:underline">
                      06 29 63 19 76
                    </a>
                    <p className="text-gray-600 text-sm">Appel gratuit, réponse rapide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primaryRed/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primaryRed" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-700">
                      Sainte-Geneviève-des-Bois<br />
                      91700, Essonne
                    </p>
                    <p className="text-gray-600 text-sm">Proche A6, parking gratuit</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primaryRed/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primaryRed" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Horaires</h4>
                    <div className="text-gray-700 space-y-1">
                      <p>Lun - Ven: 8h00 - 18h00</p>
                      <p>Samedi: 8h00 - 16h00</p>
                      <p className="text-primaryRed font-semibold">Dimanche: Sur RDV</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primaryRed/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Car className="w-6 h-6 text-primaryRed" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Véhicule de Prêt</h4>
                    <p className="text-gray-700">
                      Disponible sur demande
                    </p>
                    <p className="text-gray-600 text-sm">Pour les interventions longues</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Zone d'intervention */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                🗺️ Zone d'Intervention
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>• Sainte-Geneviève-des-Bois</div>
                <div>• Évry-Courcouronnes</div>
                <div>• Corbeil-Essonnes</div>
                <div>• Brunoy</div>
                <div>• Montgeron</div>
                <div>• Yerres</div>
                <div>• Viry-Châtillon</div>
                <div>• Et toute l'Essonne</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Demande de Devis Gratuit
            </h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryRed focus:border-transparent"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryRed focus:border-transparent"
                    placeholder="06 XX XX XX XX"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryRed focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Marque *</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryRed focus:border-transparent" required>
                    <option value="">Sélectionner</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Modèle *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryRed focus:border-transparent"
                    placeholder="Ex: A3, 320d, 308..."
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Service souhaité</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryRed focus:border-transparent">
                  <option value="">Sélectionner un service</option>
                  <option value="reprogrammation">Reprogrammation moteur</option>
                  <option value="e85">Conversion E85</option>
                  <option value="fap">Suppression FAP/AdBlue</option>
                  <option value="diagnostic">Diagnostic</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primaryRed focus:border-transparent"
                  placeholder="Décrivez votre demande, année du véhicule, kilométrage..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primaryRed text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors duration-300"
              >
                Envoyer la Demande
              </button>
              
              <p className="text-sm text-gray-600 text-center">
                * Champs obligatoires - Réponse sous 2h en moyenne
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
