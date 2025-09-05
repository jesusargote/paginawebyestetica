// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spa-green': '#8AAE9F', // Color principal para botones y acentos
        'spa-green-hover': '#7a9d8d', // Color para el efecto hover del botón
        'spa-beige': '#F5F0E6', // Color de fondo principal
        'spa-gold': '#D4AF37', // Color de acento para elementos de lujo
        'spa-dark': '#333333', // Color para textos principales
        'spa-light-gray': '#F9F9F9', // Color para fondos de secciones o tarjetas
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'spa': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'spa': '12px',
      }
    },
  },
  plugins: [],
}
