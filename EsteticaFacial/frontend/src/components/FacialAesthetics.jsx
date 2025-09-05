import { useState, useRef } from 'react';
import { servicesData } from '../data';

const FacialAesthetics = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const videoRefs = useRef([]);
  const [playingVideos, setPlayingVideos] = useState({});

  const categories = ['all', ...new Set(servicesData.facialTreatments.map(t => t.category))];
  
  const filteredTreatments = activeCategory === 'all' 
    ? servicesData.facialTreatments 
    : servicesData.facialTreatments.filter(t => t.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const toggleVideo = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (videoElement.paused) {
        // Pausar todos los demás videos antes de reproducir el actual
        videoRefs.current.forEach((video, i) => {
          if (video && i !== index && !video.paused) {
            video.pause();
            setPlayingVideos(prev => ({ ...prev, [i]: false }));
          }
        });
        videoElement.play();
        setPlayingVideos(prev => ({ ...prev, [index]: true }));
      } else {
        videoElement.pause();
        setPlayingVideos(prev => ({ ...prev, [index]: false }));
      }
    }
  };

  return (
    <section id="estetica" className="py-16 bg-spa-beige">
      <div className="container mx-auto px-4">
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
                className="bg-white p-6 rounded-spa shadow-spa-light hover:shadow-spa transition-all duration-300 flex items-start"
              >
                <div className="bg-spa-gold/10 p-3 rounded-full mr-4">
                  <span className="text-spa-gold text-xl">✓</span>
                </div>
                <p className="text-spa-dark font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tratamientos Faciales con Filtros */}
        <div className="mb-12">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-4 text-center">
              Tratamientos Faciales
            </h3>
            
            {/* Filtros por categoría */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-spa-gold text-white'
                      : 'bg-white text-spa-dark hover:bg-spa-gold/20'
                  }`}
                >
                  {category === 'all' ? 'Todos' : category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map(treatment => (
              <div 
                key={treatment.id} 
                className="bg-white rounded-spa overflow-hidden shadow-spa-light hover:shadow-spa transition-all duration-300"
              >
                {treatment.image && (
                  <div className="h-48 bg-spa-gold/10 overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h4 className="text-xl font-playfair font-semibold text-spa-dark mb-3">
                    {treatment.title}
                  </h4>
                  
                  <p className="text-spa-dark mb-4 line-clamp-3">
                    {treatment.description}
                  </p>
                  
                  {treatment.details && (
                    <>
                      <button 
                        onClick={() => toggleExpand(treatment.id)}
                        className="text-spa-gold hover:text-spa-dark font-medium text-sm flex items-center mb-3"
                      >
                        {expandedCard === treatment.id ? 'Ver menos' : 'Ver detalles'} 
                        <span className="ml-1">
                          {expandedCard === treatment.id ? '▲' : '▼'}
                        </span>
                      </button>
                      
                      {expandedCard === treatment.id && (
                        <div className="bg-spa-beige/30 p-4 rounded-lg mb-4">
                          <ul className="space-y-2">
                            {treatment.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-spa-gold mr-2">•</span>
                                <span className="text-spa-dark text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                  
                  {treatment.price && (
                    <div className="mt-4 pt-4 border-t border-spa-beige">
                      <p className="text-spa-gold font-semibold">
                        Desde {treatment.price}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Aparatología con Videos */}
        <div className="mb-12">
          <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-6 text-center">
            Tecnología y Aparatología
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.aparatologia.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-spa shadow-spa-light hover:shadow-spa transition-all duration-300 text-center group relative"
              >
                {/* Contenedor vertical del video */}
                <div
                  className="relative aspect-[9/16] w-full overflow-hidden cursor-pointer rounded-lg mb-3"
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

                  {/* Overlay play/pause */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!playingVideos[index] ? (
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Nombre del tratamiento */}
                <p className="text-spa-dark font-medium">{item.name}</p>

                {/* Si quieres quitar descripción, elimina esto */}
                {item.description && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-48 z-10">
                    <div className="bg-spa-dark text-white text-sm p-3 rounded-lg shadow-lg">
                      {item.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-4">
            ¿Necesitas asesoramiento personalizado?
          </h3>
          <p className="text-spa-dark mb-6 max-w-2xl mx-auto">
            Nuestros especialistas te recomendarán el tratamiento más adecuado para tus necesidades
          </p>
          <button className="bg-spa-gold hover:bg-spa-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
            Solicitar consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacialAesthetics;