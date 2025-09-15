// src/components/Services.jsx
import { useRef } from "react";
import { servicesData } from "../data";
import { useApp } from "../context/AppContext";
import useFilter from "../hooks/useFilter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const { openServiceModal } = useApp();
  const { activeCategory, setActiveCategory, categories, filteredItems } = useFilter(servicesData.services);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="servicios" className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-spa-dark max-w-3xl mx-auto">
            Descubre nuestros tratamientos especializados para el cuidado de tu piel y bienestar
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-spa-green text-white"
                  : "bg-white text-spa-green border border-spa-green"
              }`}
            >
              {category === "all"
                ? "Todos"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Flechas de navegación */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-spa-green hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-spa-green hover:text-white transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carrusel horizontal */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-1"
        >
          {filteredItems.map((service) => (
            <div
              key={service.id}
              className="min-w-[280px] max-w-[300px] flex-shrink-0 bg-white rounded-spa shadow-spa overflow-hidden snap-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="p-4">
                <h3 className="text-lg font-playfair font-semibold text-spa-dark mb-1">
                  {service.title}
                </h3>
                <div className="flex justify-between text-spa-green font-medium mb-2 text-sm">
                  <span>{service.time}</span>
                  <span>${service.price.toLocaleString()}</span>
                </div>
                <p className="text-sm text-spa-dark mb-3">{service.description}</p>
                <button
                  onClick={() => openServiceModal(service)}
                  className="bg-spa-green text-white text-sm py-2 px-4 rounded-lg w-full hover:bg-green-700 transition"
                >
                  Reservar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
