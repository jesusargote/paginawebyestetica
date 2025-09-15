import { useState } from "react";
import { servicesData } from "../data";
import { useApp } from "../context/AppContext";

// 🔹 Subcomponente ProductCard para hacerlo más limpio y escalable
const ProductCard = ({ product, addToCart }) => {
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    setTimeout(() => {
      addToCart(product);
      setAdding(false);
    }, 600); // Simula proceso de añadir
  };

  return (
    <div className="bg-white rounded-spa shadow-spa overflow-hidden transition-transform duration-300 hover:-translate-y-1 group">
      {/* Imagen del producto */}
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${product.image})` }}
        role="img"
        aria-label={product.title}
      >
        {/* Badge si es nuevo o destacado */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-spa-green text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            Nuevo
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-playfair font-semibold text-spa-dark mb-2 group-hover:text-spa-green transition">
          {product.title}
        </h3>

        <div className="text-lg font-bold text-spa-green mb-3">
          ${product.price.toLocaleString()}
        </div>

        <p className="text-spa-dark text-sm flex-grow">{product.description}</p>

        {/* Botón dinámico */}
        <button
          onClick={handleAdd}
          disabled={adding || !product.inStock}
          className={`mt-4 btn btn-primary w-full ${
            !product.inStock ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {adding ? "Agregando..." : !product.inStock ? "Agotado" : "Añadir al carrito"}
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  const { addToCart } = useApp();

  return (
    <section id="tienda" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-dark mb-4">
            Nuestra Tienda
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre productos premium seleccionados cuidadosamente para el cuidado y bienestar de tu piel.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
