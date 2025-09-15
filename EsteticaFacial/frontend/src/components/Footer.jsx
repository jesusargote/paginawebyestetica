import { Facebook, Youtube, Music } from "lucide-react"; // Music = TikTok sustituto

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Branding */}
        <div>
          <h3 className="text-2xl font-playfair font-bold text-white mb-4">
            Estética Facial & Spa
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Cuidamos tu piel y realzamos tu belleza con tratamientos
            especializados y productos naturales de la mejor calidad.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="flex flex-col space-y-2 text-sm">
          <h4 className="text-lg font-semibold text-white mb-3">Enlaces</h4>
          <a href="#servicios" className="hover:text-spa-green transition">
            Servicios
          </a>
          <a href="#paquetes" className="hover:text-spa-green transition">
            Paquetes
          </a>
          <a href="#estetica" className="hover:text-spa-green transition">
            Estética
          </a>
          <a href="#contacto" className="hover:text-spa-green transition">
            Contacto
          </a>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Síguenos</h4>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-spa-green transition"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-spa-green transition"
            >
              <Music className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-spa-green transition"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Estética Facial & Spa. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
