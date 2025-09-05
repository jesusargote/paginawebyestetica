import { servicesData } from '../data';
import { useApp } from '../context/AppContext';

const Shop = () => {
  const { addToCart } = useApp();

  return (
    <section id="tienda" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-dark mb-4">Nuestra Tienda</h2>
          <p className="text-lg text-spa-dark max-w-3xl mx-auto">Productos premium para el cuidado de tu piel</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.products.map(product => (
            <div key={product.id} className="bg-white rounded-spa shadow-spa overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${product.image})`}}></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-spa-dark mb-2">{product.title}</h3>
                <div className="text-lg font-bold text-spa-green mb-3">${product.price.toLocaleString()}</div>
                <p className="text-spa-dark mb-4">{product.description}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="btn btn-primary w-full"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;