import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SimulationResult = () => {
  const [searchParams] = useSearchParams();
  const marque = searchParams.get("marque") || "";
  const modele = searchParams.get("modele") || "";
  const version = searchParams.get("version") || "";
  const moteur = searchParams.get("moteur") || "";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-4 sm:mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour au simulateur
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4">
              Reprogrammation Moteur
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primaryRed mb-2">
              {marque} {modele}
            </div>
            <div className="text-lg sm:text-xl text-muted-foreground">
              {version} - {moteur}
            </div>
          </div>

          {/* Main Content Card */}
          <Card className="mb-6 sm:mb-8 bg-card">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Entrez dans l'univers de la performance raffinée avec la reprogrammation moteur Ethanol E85 signée <span className="font-bold text-primaryRed">MH Auto</span>.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Offrez à votre <span className="font-bold">{marque} {modele}</span> une optimisation moteur sur mesure, alliant puissance, élégance et respect de l'environnement.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Grâce à notre technologie exclusive, nous sublimons le comportement de votre véhicule tout en préservant son caractère prestigieux — pour une expérience de conduite inégalée.
                </p>

                <div className="bg-grayBg dark:bg-muted p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Les avantages de la reprogrammation E85</h2>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primaryRed font-bold mt-1">✓</span>
                      <span>Gain de puissance significatif et couple amélioré</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primaryRed font-bold mt-1">✓</span>
                      <span>Économies substantielles sur le carburant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primaryRed font-bold mt-1">✓</span>
                      <span>Réduction des émissions polluantes jusqu'à 70%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primaryRed font-bold mt-1">✓</span>
                      <span>Protection optimale du moteur grâce à l'indice d'octane élevé</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primaryRed font-bold mt-1">✓</span>
                      <span>Garantie constructeur préservée avec nos solutions homologuées</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primaryRed/10 dark:bg-primaryRed/20 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Notre expertise MH Auto</h2>
                  <p className="text-foreground mb-4">
                    Fort de plusieurs années d'expérience dans la reprogrammation moteur, MH Auto Performance met à votre service son savoir-faire technique et son équipement de pointe.
                  </p>
                  <p className="text-foreground">
                    Chaque intervention est réalisée sur banc de puissance avec un suivi personnalisé, garantissant des résultats optimaux et durables pour votre {marque} {modele}.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-primaryRed text-white">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
                Prêt à optimiser votre {marque} {modele} ?
              </h2>
              <p className="text-center text-base sm:text-lg mb-6 sm:mb-8">
                Contactez-nous dès maintenant pour un diagnostic personnalisé et un devis gratuit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <a href="tel:0629631976" className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Phone className="w-6 sm:w-8 h-6 sm:h-8" />
                  <div className="text-center">
                    <div className="font-semibold text-sm sm:text-base">Téléphone</div>
                    <div className="text-xs sm:text-sm">06 29 63 19 76</div>
                  </div>
                </a>
                
                <a href="mailto:contact@mhauto.fr" className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Mail className="w-6 sm:w-8 h-6 sm:h-8" />
                  <div className="text-center">
                    <div className="font-semibold text-sm sm:text-base">Email</div>
                    <div className="text-xs sm:text-sm">contact@mhauto.fr</div>
                  </div>
                </a>
                
                <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-lg">
                  <MapPin className="w-6 sm:w-8 h-6 sm:h-8" />
                  <div className="text-center">
                    <div className="font-semibold text-sm sm:text-base">Adresse</div>
                    <div className="text-xs sm:text-sm">Votre région</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link to="/#contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primaryRed hover:bg-gray-100 font-bold">
                    Demander un devis gratuit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SimulationResult;
