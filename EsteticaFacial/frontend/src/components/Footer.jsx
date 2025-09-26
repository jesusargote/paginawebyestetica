import { Facebook, Youtube, Music } from "lucide-react"; // Music = TikTok sustituto

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Columna 1: Branding */}
        <div className="md:col-span-2">
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Estética Facial & Spa
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Cuidamos tu piel y realzamos tu belleza con tratamientos
            especializados y productos naturales de la mejor calidad.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-xl font-semibold text-white mb-4">Enlaces</h4>
          <a href="#servicios" className="hover:text-spa-green transition-colors duration-300 text-lg">
            Servicios
          </a>
          <a href="#paquetes" className="hover:text-spa-green transition-colors duration-300 text-lg">
            Paquetes
          </a>
          <a href="#estetica" className="hover:text-spa-green transition-colors duration-300 text-lg">
            Estética
          </a>
          <a href="#contacto" className="hover:text-spa-green transition-colors duration-300 text-lg">
            Contacto
          </a>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Síguenos</h4>
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800 rounded-full hover:bg-spa-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Síguenos en Facebook"
            >
              <Facebook className="w-8 h-8 text-white group-hover:text-gray-900" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800 rounded-full hover:bg-spa-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Síguenos en TikTok"
            >
              <Music className="w-8 h-8 text-white group-hover:text-gray-900" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gray-800 rounded-full hover:bg-spa-green transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Síguenos en YouTube"
            >
              <Youtube className="w-8 h-8 text-white group-hover:text-gray-900" />
            </a>
          </div>
          
          {/* Información de contacto adicional */}
          <div className="mt-8 space-y-2 text-sm">
            <p className="flex items-center">
              <span className="mr-2">📞</span> +1 234 567 890
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span> info@esteticafacialyspa.com
            </p>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Estética Facial & Spa. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}