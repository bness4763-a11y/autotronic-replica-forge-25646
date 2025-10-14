
import Header from "@/components/Header";
import Simulator from "@/components/Simulator";
import ServicesSection from "@/components/ServicesSection";
import ProgrammationSection from "@/components/ProgrammationSection";
import ReparationSection from "@/components/ReparationSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroImage from "@/assets/mercedes-amg-1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen w-full font-sans">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between py-12 px-4 sm:py-16 lg:py-20 min-h-[600px] sm:min-h-[700px] bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`
      }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primaryRed rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primaryRed rounded-full blur-3xl"></div>
        </div>
        
        {/* LEFT: Title and CTA */}
        <div className="flex-1 max-w-2xl px-4 sm:px-6 lg:px-12 z-10">
          <div className="inline-flex items-center bg-primaryRed/10 text-primaryRed px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm border border-primaryRed/20">
            ⚡ Vous conduisez, nous optimisons
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            MH AUTO Performance,{" "}
            <span className="block text-primaryRed bg-white/90 px-3 sm:px-4 py-2 inline-block transform -rotate-1 shadow-lg rounded-lg mt-2">
              spécialiste
            </span>
            <span className="block mt-2">
              reprogrammation et réparation automobile
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
            Spécialisés dans la réparation, l'entretien et la reprogrammation de tout type de véhicule.
            <br className="hidden sm:block" />
            <span className="text-gray-200">Plus de puissance, moins de consommation.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:0629631976"
              className="inline-block bg-primaryRed rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-white text-lg sm:text-xl font-black shadow-xl hover:bg-yellow-600 transition-all duration-300 hover:scale-105 text-center"
            >
              📞 06 29 63 19 76
            </a>
            <a
              href="#programmation"
              className="inline-block bg-white/90 backdrop-blur-sm border-2 border-white text-gray-900 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-black hover:bg-white hover:scale-105 transition-all duration-300 text-center"
            >
              Nos Services
            </a>
          </div>
        </div>
        
        {/* RIGHT: Simulator */}
        <div className="flex-1 flex items-start justify-center lg:justify-end px-4 sm:px-6 lg:px-12 mb-8 lg:mb-0 w-full lg:w-auto">
          <Simulator />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* PROGRAMMATION SECTION */}
      <ProgrammationSection />

      {/* REPARATION SECTION */}
      <ReparationSection />

      {/* BENEFITS SECTION */}
      <BenefitsSection />

      {/* SECTION PRESENTATION */}
      <AboutSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
