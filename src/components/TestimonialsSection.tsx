
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marc Dubois",
    vehicle: "BMW 320d",
    rating: 5,
    comment: "Incroyable ! +35ch et -2L/100km sur ma BMW. Service professionnel et résultats au rendez-vous. Je recommande vivement !",
    location: "Évry"
  },
  {
    name: "Sophie Martin",
    vehicle: "Audi A3 TDI",
    rating: 5,
    comment: "Excellent travail sur ma A3. La voiture a retrouvé une seconde jeunesse avec un couple bien plus généreux. Merci !",
    location: "Corbeil-Essonnes"
  },
  {
    name: "Jean-Pierre Leroy",
    vehicle: "Peugeot 308 HDI",
    rating: 5,
    comment: "15 ans d'expérience ça se sent ! Travail soigné, explications claires et résultats exceptionnels sur ma 308.",
    location: "Sainte-Geneviève-des-Bois"
  },
  {
    name: "Alexandre Chen",
    vehicle: "Mercedes C220d",
    rating: 5,
    comment: "Reprogrammation E85 parfaite ! Économies substantielles et performance préservée. Un vrai professionnel !",
    location: "Brunoy"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Ils Nous Font <span className="text-primaryRed">Confiance</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl relative hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primaryRed/20 absolute top-4 right-4 sm:top-6 sm:right-6" />
              
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic pr-6">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t border-gray-200 pt-3 sm:pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.vehicle}</p>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center bg-primaryRed/10 text-primaryRed px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current mr-2" />
            <span className="font-bold">4.9/5 sur Google Reviews</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
