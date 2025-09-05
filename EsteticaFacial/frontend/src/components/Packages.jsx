import { useState } from 'react';
import { servicesData } from '../data';
import { useApp } from '../context/AppContext';
import ReservationForm from './ReservationForm';
import { Clock, Users, Star, Calendar } from 'lucide-react';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openServiceModal } = useApp();

  const handleReserveClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  // Función para obtener un icono según el tipo de paquete
  const getPackageIcon = (title) => {
    if (title.toLowerCase().includes('pareja')) return <Users size={20} />;
    if (title.toLowerCase().includes('luna')) return <Star size={20} />;
    return <Calendar size={20} />;
  };

  return (
    <>
      <section id="paquetes" className="py-16 bg-spa-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-dark mb-4">
              Paquetes Especiales
            </h2>
            <p className="text-lg text-spa-dark max-w-3xl mx-auto">
              Experiencias completas diseñadas para tu bienestar y renovación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.packages.map(pkg => (
              <div key={pkg.id} className="bg-white rounded-spa shadow-spa overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-spa-green text-white p-6 text-center relative">
                  <div className="absolute top-4 left-4 text-spa-gold">
                    {getPackageIcon(pkg.title)}
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold">{pkg.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-spa-dark mb-4 italic">{pkg.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-spa-green">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm font-medium">3 horas</span>
                    </div>
                    <div className="text-2xl font-playfair font-bold text-spa-green">
                      ${pkg.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <ul className="list-none mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="mb-3 flex items-start">
                        <span className="text-spa-green mr-2 mt-1 flex-shrink-0">✓</span>
                        <span className="text-spa-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handleReserveClick(pkg)}
                    className="btn btn-primary w-full group"
                  >
                    Reservar ahora
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Reserva */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-spa shadow-spa max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-spa-dark hover:text-spa-green z-10"
            >
              ✕
            </button>
            
            <div className="bg-spa-green text-white p-6 text-center">
              <h3 className="text-2xl font-playfair font-semibold">{selectedPackage.title}</h3>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center text-spa-green">
                  <Clock size={20} className="mr-2" />
                  <span className="font-medium">3 horas aprox.</span>
                </div>
                <div className="text-2xl font-playfair font-bold text-spa-green">
                  ${selectedPackage.price.toLocaleString()}
                </div>
              </div>
              
              <ReservationForm service={selectedPackage} onClose={handleCloseModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Packages;