// src/components/AdminPanel.jsx
import { useApp } from '../context/AppContext';

const AdminPanel = () => {
  const { reservations } = useApp();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-playfair font-bold mb-6">Panel de Administración - Reservas</h2>
      
      {reservations.length === 0 ? (
        <p>No hay reservas aún.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-spa shadow-spa">
            <thead>
              <tr className="bg-spa-green text-white">
                <th className="py-3 px-4 text-left">Cliente</th>
                <th className="py-3 px-4 text-left">Servicio</th>
                <th className="py-3 px-4 text-left">Fecha</th>
                <th className="py-3 px-4 text-left">Hora</th>
                <th className="py-3 px-4 text-left">Total</th>
                <th className="py-3 px-4 text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={reservation.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4">{reservation.customer.name}</td>
                  <td className="py-3 px-4">{reservation.service}</td>
                  <td className="py-3 px-4">{reservation.date}</td>
                  <td className="py-3 px-4">{reservation.time}</td>
                  <td className="py-3 px-4">${reservation.price.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      reservation.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {reservation.status === 'pending' ? 'Pendiente' : 'Confirmada'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;