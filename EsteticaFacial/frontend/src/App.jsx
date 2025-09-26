// src/App.jsx
import { AppProvider, useApp } from './context/AppContext'; // Asegúrate de importar useApp
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import FacialAesthetics from './components/FacialAesthetics';
import Shop from './components/Shop';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceModal from './components/ServiceModal';
import CartSidebar from './components/CartSidebar';
// **NUEVA IMPORTACIÓN**
import ConsultationModal from './components/ConsultationModal';

// Componente principal que usa el contexto para mostrar los modales
function MainContent() {
  // **USO DEL CONTEXTO**
  const { isConsultationModalOpen, isServiceModalOpen } = useApp(); // Asumiendo que ahora ServiceModal también usa un estado de visibilidad similar

  return (
    <div className="font-inter text-spa-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <Packages />
        <FacialAesthetics />
        <Shop />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />

      {/* **INTEGRACIÓN DEL MODAL DE CONSULTA CON LÓGICA CONDICIONAL** */}
      {isConsultationModalOpen && <ConsultationModal />}
      
      {/* Puedes aplicar la misma lógica al ServiceModal si aún lo usas con un estado en el contexto */}
      {/* {isServiceModalOpen && <ServiceModal />} */}
      {/* O si ServiceModal se maneja de otra forma: */}
      <ServiceModal />
      
      <CartSidebar />
    </div>
  );
}

// El componente App solo se encarga de envolver con el Provider
function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;