// src/App.jsx
import { AppProvider } from './context/AppContext';
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

function App() {
  return (
    <AppProvider>
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
        <ServiceModal />
        <CartSidebar />
      </div>
    </AppProvider>
  );
}

export default App;