// src/components/ReservationForm.jsx
import { useState } from 'react';
import { useApp } from '../context/AppContext';

const ReservationForm = ({ service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const { addReservation, closeModal } = useApp();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      id: Date.now(),
      service: service.title,
      price: service.price,
      date: formData.date,
      time: formData.time,
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      },
      notes: formData.notes,
      status: 'pending'
    };

    addReservation(reservation);
    alert('¡Reserva realizada con éxito! Te contactaremos pronto para confirmar.');
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-spa-dark mb-1">Nombre completo</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-spa-dark mb-1">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-spa-dark mb-1">Teléfono</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
            placeholder="(123) 456-7890"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-spa-dark mb-1">Fecha</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent appearance-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-spa-dark mb-1">Hora</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent transition-colors"
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
      </div>

      
      <div className="flex justify-between items-center pt-4">
        <div className="text-xl font-playfair font-semibold text-spa-green">
          Total: ${service.price.toLocaleString()}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Confirmar reserva
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
