import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Menu, X } from "lucide-react"; // Íconos elegantes

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useApp();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-spa-green text-3xl">🌿</span>
          <span className="font-playfair text-2xl font-bold text-spa-dark">Estética Facial</span>
        </a>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-spa-dark hover:text-spa-green transition">Servicios</a>
          <a href="#paquetes" className="text-spa-dark hover:text-spa-green transition">Paquetes</a>
          <a href="#estetica" className="text-spa-dark hover:text-spa-green transition">Estética</a>
          <a href="#tienda" className="text-spa-dark hover:text-spa-green transition">Tienda</a>
          <a href="#testimonios" className="text-spa-dark hover:text-spa-green transition">Testimonios</a>
          <a href="#contacto" className="text-spa-dark hover:text-spa-green transition">Contacto</a>
          {/* Botón CTA */}
          <a 
            href="#reserva"
            className="ml-4 bg-spa-green text-white px-4 py-2 rounded-full hover:bg-spa-dark transition"
          >
            Reserva ahora
          </a>
        </nav>

        {/* Iconos */}
        <div className="flex items-center gap-4">
          {/* Carrito */}
          <div className="relative cursor-pointer">
            <ShoppingBag className="text-spa-dark w-6 h-6 hover:text-spa-green transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-spa-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <nav className="flex flex-col space-y-4 p-6 text-center">
            <a href="#servicios" className="text-spa-dark hover:text-spa-green">Servicios</a>
            <a href="#paquetes" className="text-spa-dark hover:text-spa-green">Paquetes</a>
            <a href="#estetica" className="text-spa-dark hover:text-spa-green">Estética</a>
            <a href="#tienda" className="text-spa-dark hover:text-spa-green">Tienda</a>
            <a href="#testimonios" className="text-spa-dark hover:text-spa-green">Testimonios</a>
            <a href="#contacto" className="text-spa-dark hover:text-spa-green">Contacto</a>
            <a href="#reserva" className="bg-spa-green text-white px-4 py-2 rounded-full hover:bg-spa-dark transition">
              Reserva ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
