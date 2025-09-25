// src/components/ReservationForm.jsx
import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const ReservationForm = ({ service }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // ← Nuevo estado para éxito

  const { addReservation, closeModal } = useApp();

  // 2. AUTO-CERRAR modal de éxito después de 3 segundos
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        closeModal();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showSuccess, closeModal]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert('Por favor ingresa tu nombre completo');
      return false;
    }

    if (!formData.phone || formData.phone.replace(/\D/g, '').length < 10) {
      alert('Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)');
      return false;
    }

    if (!formData.date) {
      alert('Por favor selecciona una fecha');
      return false;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert('Por favor selecciona una fecha futura');
      return false;
    }

    if (!formData.time) {
      alert('Por favor selecciona una hora');
      return false;
    }

    return true;
  };

// SI LA ANTERIOR NO FUNCIONA, USA ESTA VERSIÓN CON EMOJIS BÁSICOS
const sendWhatsAppMessage = (reservation) => {
  const phoneNumber = "573023313705";
  
  const fecha = new Date(formData.date);
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
  
  // EMOJIS BÁSICOS QUE SIEMPRE FUNCIONAN
  const message = `👉 *NUEVA RESERVA - ${service.title.toUpperCase()}* 👈

✅ *Información del Cliente:*
   • Nombre: ${formData.name}
   • Teléfono: ${formData.phone}
   • Fecha: ${fechaFormateada}
   • Hora: ${formData.time}

✅ *Detalles del Servicio:*
   • Tratamiento: ${service.title}
   • Duración: ${service.time}
   • Precio: $${service.price.toLocaleString()}

✅ *Notas Adicionales:*
${formData.notes ? `   • ${formData.notes}` : '   • Ninguna especificada'}

——————————————
📋 *Estado:* PENDIENTE DE CONFIRMACIÓN
——————————————

_Reserva generada automáticamente desde la web_`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    try {
      // Pequeño delay para mejor UX
      await new Promise(resolve => setTimeout(resolve, 800));

      const reservation = {
        id: Date.now(),
        service: service.title,
        price: service.price,
        date: formData.date,
        time: formData.time,
        customer: {
          name: formData.name,
          phone: formData.phone
        },
        notes: formData.notes,
        status: 'pending'
      };

      // 1. Guardar en el sistema
      addReservation(reservation);
      
      // 2. Enviar a WhatsApp
      sendWhatsAppMessage(reservation);
      
      // 3. Mostrar éxito (sin alert, se cierra automáticamente)
      setShowSuccess(true);

    } catch (error) {
      console.error('Error al procesar la reserva:', error);
      alert('Hubo un error al procesar tu reserva. Por favor intenta nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  // 2. COMPONENTE DE ÉXITO MEJORADO (sin botón Aceptar)
  if (showSuccess) {
    return (
      <div className="text-center py-8">
        <div className="animate-bounce mb-4">
          <span className="text-6xl">✅</span>
        </div>
        <h3 className="text-2xl font-playfair font-bold text-spa-green mb-2">
          ¡Reserva Exitosa!
        </h3>
        <p className="text-spa-dark mb-4">
          Se ha enviado la información por WhatsApp
        </p>
        <div className="bg-spa-beige p-3 rounded-spa animate-pulse">
          <p className="text-sm text-spa-dark">
            Cerrando automáticamente en 3 segundos...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. ELIMINADO el campo de email */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-spa-dark mb-1">
            Nombre completo *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
            placeholder="Ingresa tu nombre completo"
            disabled={isSending}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-spa-dark mb-1">
            Teléfono *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
            placeholder="3023313705"
            disabled={isSending}
          />
        </div>
        
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-spa-dark mb-1">
            Fecha *
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent appearance-none transition-colors"
            disabled={isSending}
          />
        </div>
        
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-spa-dark mb-1">
            Hora *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
            disabled={isSending}
          >
            <option value="">Seleccionar hora</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
            <option value="16:00">04:00 PM</option>
            <option value="17:00">05:00 PM</option>
          </select>
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-spa-dark mb-1">
            Notas adicionales (opcional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
            placeholder="Alergias, preferencias, comentarios especiales..."
            disabled={isSending}
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="text-xl font-playfair font-semibold text-spa-green">
          Total: ${service.price.toLocaleString()}
        </div>
        
        <button
          type="submit"
          disabled={isSending}
          className={`bg-spa-green text-white py-3 px-6 rounded-lg transition flex items-center gap-2 ${
            isSending 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-green-700'
          }`}
        >
          {isSending ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            '📱 Confirmar y enviar por WhatsApp'
          )}
        </button>
      </div>
      
      {/* Información mejorada */}
      <div className="bg-spa-beige p-3 rounded-spa text-sm text-spa-dark">
        <p className="flex items-center gap-2 mb-1">📋 <span>Los campos marcados con * son obligatorios</span></p>
        <p className="flex items-center gap-2">⚡ <span>Confirmación inmediata por WhatsApp</span></p>
      </div>
    </form>
  );
};

export default ReservationForm;