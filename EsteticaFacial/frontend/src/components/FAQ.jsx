import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, Clock, Leaf, Heart } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipo de tratamientos ofrecen?",
    answer: "Ofrecemos tratamientos faciales, corporales y de relajación, diseñados para mejorar la salud y apariencia de tu piel. Todos nuestros servicios utilizan tecnología de vanguardia y productos de la más alta calidad."
  },
  {
    question: "¿Cuánto dura una sesión típica?",
    answer: "La duración varía según el tratamiento. Nuestras sesiones generalmente duran entre 60 y 90 minutos, incluyendo tiempo para la consulta inicial y la preparación. Los tratamientos especializados pueden extenderse hasta 2 horas."
  },
  {
    question: "¿Usan productos naturales y orgánicos?",
    answer: "Sí, priorizamos productos orgánicos, sostenibles y dermatológicamente probados. Todos nuestros tratamientos están libres de parabenos, sulfatos y crueldad animal, cuidando tu piel sin químicos agresivos."
  },
  {
    question: "¿Necesito reservar con anticipación?",
    answer: "Recomendamos reservar al menos con 48 horas de anticipación para garantizar disponibilidad, especialmente durante fines de semana y temporada alta. Aceptamos reservas de último momento sujetas a disponibilidad."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de crédito y débito principales, transferencias bancarias, así como aplicaciones móviles de pago. También ofrecemos planes de pago para tratamientos extensivos."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Función para obtener el icono según el índice
  const getIcon = (index) => {
    const icons = [Sparkles, Clock, Leaf, Heart, Sparkles];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-5 h-5 text-spa-green flex-shrink-0" />;
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-spa-light/20 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-spa-dark mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros tratamientos y servicios.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="flex items-start gap-4">
                    {getIcon(index)}
                    <span className="font-semibold text-spa-dark text-lg md:text-xl pr-4">
                      {faq.question}
                    </span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-spa-green flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="px-6 pb-6 ml-9 border-t border-spa-light/30">
                    <p className="pt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿No encontraste lo que buscabas?
          </p>
          <button className="bg-spa-green hover:bg-spa-dark text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-spa-green focus:ring-opacity-50">
            Contactar con nosotros
          </button>
        </div>
      </div>
    </section>
  );
}