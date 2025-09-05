// src/components/ServiceModal.jsx
import { useApp } from '../context/AppContext';
import ReservationForm from './ReservationForm';

const ServiceModal = () => {
  const { selectedService, isModalOpen, closeModal } = useApp();

  if (!isModalOpen || !selectedService) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={closeModal}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 text-spa-green bg-spa-beige rounded-full p-2 shadow-md hover:bg-spa-green hover:text-white transition-colors"
        >
          ✕
        </button>
        <div 
          className="h-64 bg-cover bg-center rounded-t-lg" 
          style={{backgroundImage: `url(${selectedService.image})`}}
        />
        <div className="p-6">
          <h3 className="text-2xl font-playfair font-semibold text-spa-dark mb-2">{selectedService.title}</h3>
          <div className="flex justify-between text-spa-green font-medium mb-3">
            <span>{selectedService.time}</span>
            <span>${selectedService.price.toLocaleString()}</span>
          </div>
          <p className="text-spa-dark mb-4">{selectedService.description}</p>
          <h4 className="text-lg font-playfair font-semibold text-spa-dark mb-2">Ritual:</h4>
          <p className="text-spa-dark mb-6">{selectedService.ritual}</p>
          <ReservationForm service={selectedService} />
        </div>
      </div>
    </div>
  );
};


export default ServiceModal;