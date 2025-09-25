import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="services/fotoportada.jpg"
          alt="Spa y estética facial de lujo"
          className="w-full h-full object-cover"
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo o marca */}
          <div className="mb-8 animate-fade-in-up">
            <div className="">
              <img src="services/logo.png" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
           
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-spa-dark mb-6 leading-tight animate-fade-in-up stagger-delay-1 text-shadow">
            Spa & Estética Facial <span className="text-spa-green">Nubia Argote</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-spa-dark mb-10 font-light max-w-3xl mx-auto animate-fade-in-up stagger-delay-2 text-shadow">
            Relaja, equilibra y luce una piel radiante con nuestros rituales personalizados y productos naturales premium
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 animate-fade-in-up stagger-delay-3">
            <a href="#servicios" className="btn btn-primary text-lg px-8 py-4">
              Reservar ahora
            </a>
            <a href="#tienda" className="btn btn-secondary text-lg px-8 py-4">
              Comprar cosméticos
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-16 flex-wrap">
            <div className="benefit-item animate-fade-in-up stagger-delay-4">
              <span className="text-2xl">✨</span> Incluye: musicoterapia, aromaterapia y jacuzzi
            </div>
            <div className="benefit-item animate-fade-in-up stagger-delay-5">
              <span className="text-2xl">💳</span> Pagos: PSE, Nequi y Daviplata
            </div>
            <div className="benefit-item animate-fade-in-up stagger-delay-6">
              <span className="text-2xl">📍</span> Atención por cita · Popayán/Colombia
            </div>
          </div>
          
          {/* Flecha indicadora para hacer scroll */}
          <div className="mt-16 animate-bounce">
            <div className="scroll-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;