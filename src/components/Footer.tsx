
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-grayBg text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              MH AUTO Performance - Spécialiste en reprogrammation moteur depuis 15 ans. Optimisation, performance et économies pour votre véhicule.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primaryRed rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primaryRed rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primaryRed rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6">Nos Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors text-sm sm:text-base">Reprogrammation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors text-sm sm:text-base">Conversion E85</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors text-sm sm:text-base">Suppression FAP</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors text-sm sm:text-base">Diagnostic Auto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors text-sm sm:text-base">Optimisation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6">Contact</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primaryRed mr-2 sm:mr-3 flex-shrink-0" />
                <a href="tel:0629631976" className="text-gray-300 hover:text-primaryRed transition-colors text-sm sm:text-base">
                  06 29 63 19 76
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primaryRed mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  Ste-Geneviève-des-Bois<br />
                  91700 Essonne
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primaryRed mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm sm:text-base">
                  Lun-Ven: 8h-18h<br />
                  Sam: 8h-16h
                </div>
              </div>
            </div>
          </div>
          
          {/* Zone d'intervention - Hidden on smallest screens */}
          <div className="hidden lg:block">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6">Zone d'Intervention</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>• Sainte-Geneviève-des-Bois</li>
              <li>• Évry-Courcouronnes</li>
              <li>• Corbeil-Essonnes</li>
              <li>• Brunoy</li>
              <li>• Montgeron</li>
              <li>• Yerres</li>
              <li>• Viry-Châtillon</li>
              <li>• Toute l'Essonne</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 MH AUTO Performance. Tous droits réservés.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-primaryRed transition-colors">Mentions Légales</a>
              <a href="#" className="text-gray-400 hover:text-primaryRed transition-colors">CGV</a>
              <a href="#" className="text-gray-400 hover:text-primaryRed transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
