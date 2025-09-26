// src/components/FacialAesthetics.jsx
import { useState, useRef } from "react";
import { servicesData } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useApp } from "../context/AppContext";

const FacialAesthetics = () => {
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);

  const { openServiceModal, openConsultationModal } = useApp();

  const videoRefs = useRef([]);
  const [playingVideos, setPlayingVideos] = useState({});

  const scrollRefTreatments = useRef(null);
  const scrollRefAparatologia = useRef(null);

  const categories = ["all", ...new Set(servicesData.facialTreatments.map((t) => t.category))];

  const filteredTreatments =
    activeCategory === "all"
      ? servicesData.facialTreatments
      : servicesData.facialTreatments.filter((t) => t.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const toggleVideo = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (videoElement.paused) {
        videoRefs.current.forEach((video, i) => {
          if (video && i !== index && !video.paused) {
            video.pause();
            setPlayingVideos((prev) => ({ ...prev, [i]: false }));
          }
        });
        videoElement.play();
        setPlayingVideos((prev) => ({ ...prev, [index]: true }));
      } else {
        videoElement.pause();
        setPlayingVideos((prev) => ({ ...prev, [index]: false }));
      }
    }
  };

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const { clientWidth } = ref.current;
    ref.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="estetica" className="py-16 bg-spa-beige">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-dark mb-4">
            Estética Facial y Corporal
          </h2>
          <p className="text-lg text-spa-dark max-w-3xl mx-auto">
            Tratamientos especializados para diferentes necesidades de la piel
          </p>
        </div>

        {/* Servicios Incluidos */}
        <div className="mb-12">
          <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-6 text-center">
            Servicios Incluidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.includedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-spa shadow-spa-light hover:shadow-spa transition-all duration-300 flex items-start"
              >
                <div className="bg-spa-gold/10 p-2 rounded-full mr-4">
                  <span className="text-spa-gold text-lg">✓</span>
                </div>
                <p className="text-spa-dark text-sm font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tratamientos Faciales con Carrusel */}
        <div className="mb-12 relative">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-4 text-center">
              Tratamientos Faciales
            </h3>
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-spa-gold text-white"
                      : "bg-white text-spa-dark hover:bg-spa-gold/20"
                  }`}
                >
                  {category === "all" ? "Todos" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Flechas navegación tratamientos */}
          <button
            onClick={() => scroll(scrollRefTreatments, "left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-spa-gold hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scroll(scrollRefTreatments, "right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-spa-gold hover:text-white"
          >
            <ChevronRight size={22} />
          </button>

          {/* Carrusel horizontal tratamientos */}
          <div
            ref={scrollRefTreatments}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-1"
          >
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="min-w-[260px] max-w-[280px] flex-shrink-0 bg-white rounded-spa shadow-spa-light hover:shadow-spa transition-all duration-300 snap-center"
              >
                {treatment.image && (
                  <div className="h-36 overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-4">
                  <h4 className="text-lg font-playfair font-semibold text-spa-dark mb-2">
                    {treatment.title}
                  </h4>
                  <p className="text-sm text-spa-dark mb-3 line-clamp-3">{treatment.description}</p>

                  {treatment.details && (
                    <>
                      <button
                        onClick={() => toggleExpand(treatment.id)}
                        className="text-spa-gold hover:text-spa-dark text-xs font-medium flex items-center mb-2"
                      >
                        {expandedCard === treatment.id ? "Ver menos ▲" : "Ver detalles ▼"}
                      </button>

                      {expandedCard === treatment.id && (
                        <div className="bg-spa-beige/30 p-3 rounded-lg mb-3">
                          <ul className="space-y-1">
                            {treatment.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-spa-gold mr-2">•</span>
                                <span className="text-spa-dark text-xs">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}

                  {treatment.price && (
                    <div className="mt-3 pt-2 border-t border-spa-beige">
                      <p className="text-spa-gold font-semibold text-sm">Desde {treatment.price}</p>
                    </div>
                  )}

                  <button
                    onClick={() => openServiceModal(treatment)}
                    className="bg-spa-gold text-white text-sm py-2 px-4 rounded-lg w-full hover:bg-spa-dark transition"
                  >
                    Reservar ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aparatología con Carrusel */}
        <div className="mb-12 relative">
          <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-6 text-center">
            Tecnología y Aparatología
          </h3>

          {/* Flechas navegación aparatología */}
          <button
            onClick={() => scroll(scrollRefAparatologia, "left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-spa-gold hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => scroll(scrollRefAparatologia, "right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-spa-gold hover:text-white"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={scrollRefAparatologia}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-1"
          >
            {servicesData.aparatologia.map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] max-w-[240px] flex-shrink-0 bg-white p-4 rounded-spa shadow-spa-light hover:shadow-spa transition-all duration-300 text-center group relative snap-center"
              >
                {/* Video vertical */}
                <div
                  className="relative aspect-[9/16] w-full overflow-hidden cursor-pointer rounded-lg mb-2"
                  onClick={() => toggleVideo(index)}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.video}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster={item.poster}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    {!playingVideos[index] ? "▶️" : "⏸"}
                  </div>
                </div>

                <p className="text-spa-dark text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-3">
            ¿Necesitas asesoramiento personalizado?
          </h3>
          <p className="text-spa-dark mb-5 max-w-2xl mx-auto">
            Nuestros especialistas te recomendarán el tratamiento más adecuado para tus necesidades
          </p>
          <button 
            onClick={openConsultationModal}
            className="bg-spa-gold hover:bg-spa-dark text-white font-medium py-3 px-8 rounded-full transition"
          >
            Solicitar consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacialAesthetics;
