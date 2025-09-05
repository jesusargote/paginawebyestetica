// src/components/Services.jsx (versión con filtrado)
import { servicesData } from '../data';
import { useApp } from '../context/AppContext';
import useFilter from '../hooks/useFilter';

const Services = () => {
  const { openServiceModal } = useApp();
  const { activeCategory, setActiveCategory, categories, filteredItems } = useFilter(servicesData.services);

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-dark mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-spa-dark max-w-3xl mx-auto">Descubre nuestros tratamientos especializados para el cuidado de tu piel y bienestar</p>
        </div>
        
        {/* Filtros por categoría */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-spa-green text-white'
                  : 'bg-white text-spa-green border border-spa-green'
              }`}
            >
              {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(service => (
            <div key={service.id} className="bg-white rounded-spa shadow-spa overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}}></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-spa-dark mb-2">{service.title}</h3>
                <div className="flex justify-between text-spa-green font-medium mb-3">
                  <span>{service.time}</span>
                  <span>${service.price.toLocaleString()}</span>
                </div>
                <p className="text-spa-dark mb-4">{service.description}</p>
                <button 
                  onClick={() => openServiceModal(service)}
                  className="btn btn-primary w-full"
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