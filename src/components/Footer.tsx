
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-grayBg text-white">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              MH AUTO Performance - Spécialiste en reprogrammation moteur depuis 15 ans. Optimisation, performance et économies pour votre véhicule.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primaryRed rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primaryRed rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primaryRed rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors">Reprogrammation Moteur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors">Conversion E85</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors">Suppression FAP</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors">Diagnostic Auto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primaryRed transition-colors">Optimisation Performance</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primaryRed mr-3" />
                <a href="tel:0629631976" className="text-gray-300 hover:text-primaryRed transition-colors">
                  06 29 63 19 76
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primaryRed mr-3 mt-1" />
                <div className="text-gray-300">
                  Sainte-Geneviève-des-Bois<br />
                  91700 Essonne
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primaryRed mr-3 mt-1" />
                <div className="text-gray-300">
                  Lun-Ven: 8h-18h<br />
                  Sam: 8h-16h
                </div>
              </div>
            </div>
          </div>
          
          {/* Zone d'intervention */}
          <div>
            <h3 className="text-xl font-bold mb-6">Zone d'Intervention</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
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
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MH AUTO Performance. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
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
