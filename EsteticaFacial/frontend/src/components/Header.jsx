// src/components/Header.jsx
import { useState } from 'react';
import { useApp } from '../context/AppContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useApp();

  return (
    <header className="bg-white shadow-spa fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="font-playfair text-2xl font-bold text-spa-green">
          Spa & Estética Facial
        </a>
        
        <div className="flex items-center gap-4">
          {/* Icono del carrito con contador */}
          <div className="relative">
            <span className="text-2xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </div>
          
          <button 
            className="md:hidden text-spa-dark text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
          <ul className="md:flex space-y-4 md:space-y-0 md:space-x-8">
            <li><a href="#servicios" className="text-spa-dark hover:text-spa-green font-medium">Servicios</a></li>
            <li><a href="#paquetes" className="text-spa-dark hover:text-spa-green font-medium">Paquetes</a></li>
            <li><a href="#estetica" className="text-spa-dark hover:text-spa-green font-medium">Estética</a></li>
            <li><a href="#tienda" className="text-spa-dark hover:text-spa-green font-medium">Tienda</a></li>
            <li><a href="#testimonios" className="text-spa-dark hover:text-spa-green font-medium">Testimonios</a></li>
            <li><a href="#contacto" className="text-spa-dark hover:text-spa-green font-medium">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;