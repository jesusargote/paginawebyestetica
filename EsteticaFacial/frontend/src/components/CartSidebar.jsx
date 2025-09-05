// src/components/CartSidebar.jsx
import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { X, Trash2, ShoppingBag, Plus, Minus } from "lucide-react";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shakeCart, setShakeCart] = useState(false); // 👈 estado para la animación
  const { cart, removeFromCart, clearCart, updateCartItemQuantity } = useApp();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Bloquear scroll cuando el carrito esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggleCart = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const handleCheckout = () => {
    alert("¡Gracias por tu compra! Te contactaremos pronto para coordinar el envío.");
    clearCart();

    // 👇 activar animación shake del carrito
    setShakeCart(true);
    setTimeout(() => setShakeCart(false), 500);

    handleToggleCart();
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateCartItemQuantity(itemId, newQuantity);
  };

  return (
    <>
      {/* Botón flotante del carrito */}
      <button
        onClick={handleToggleCart}
        className={`fixed right-6 top-24 bg-spa-green text-white p-4 rounded-full shadow-lg z-40 flex items-center justify-center transition-all duration-300 hover:bg-spa-green-dark hover:shadow-xl
          ${cart.length > 0 ? "animate-pulse" : ""}
          ${shakeCart ? "animate-shake" : ""}`}
        aria-label="Abrir carrito de compras"
      >
        <div
          className={`relative transition-transform duration-300 ${
            cart.length > 0 ? "scale-110" : "scale-100"
          }`}
        >
          <ShoppingBag size={28} className="drop-shadow" />
        </div>
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggleCart}
      />

      {/* Sidebar del carrito */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="h-full flex flex-col">
          {/* Encabezado */}
          <div className="flex justify-between items-center p-6 border-b border-spa-beige">
            <h2 className="text-2xl font-playfair font-semibold text-spa-dark flex items-center">
              <ShoppingBag size={24} className="mr-2" />
              Mi Carrito
            </h2>
            <button
              onClick={handleToggleCart}
              className="text-spa-dark hover:text-spa-green transition-colors"
              aria-label="Cerrar carrito"
            >
              <X size={24} />
            </button>
          </div>

          {/* Lista de productos */}
          <div className="flex-grow overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-spa-beige mb-4" />
                <p className="text-xl font-playfair text-spa-dark mb-2">
                  Tu carrito está vacío
                </p>
                <p className="text-spa-dark mb-6">
                  Agrega algunos productos para comenzar
                </p>
                <button onClick={handleToggleCart} className="btn btn-primary">
                  Seguir comprando
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start border-b border-spa-beige pb-6"
                  >
                    <div
                      className="w-20 h-20 bg-cover bg-center rounded-spa mr-4"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-spa-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-spa-green font-medium mb-2">
                        ${item.price.toLocaleString()}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-spa-beige rounded-spa">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity - 1)
                            }
                            className="p-1 text-spa-dark hover:text-spa-green"
                            aria-label="Reducir cantidad"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-1 text-spa-dark">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }
                            className="p-1 text-spa-dark hover:text-spa-green"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pie del carrito */}
          {cart.length > 0 && (
            <div className="border-t border-spa-beige p-6 bg-spa-light-gray">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-spa-dark">Subtotal:</span>
                <span className="text-spa-green font-bold">
                  ${total.toLocaleString()}
                </span>
              </div>

              <p className="text-sm text-spa-dark mb-6 text-center">
                * El envío se calcula al finalizar la compra
              </p>

              <div className="space-y-3">
                <button
                  onClick={clearCart}
                  className="btn btn-secondary w-full flex items-center justify-center"
                >
                  <Trash2 size={18} className="mr-2" />
                  Vaciar carrito
                </button>

                <button
                  onClick={handleCheckout}
                  className="btn btn-primary w-full py-3 text-lg"
                >
                  Finalizar compra
                </button>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleToggleCart}
                  className="text-spa-green hover:text-spa-green-dark underline text-sm"
                >
                  Seguir comprando
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
