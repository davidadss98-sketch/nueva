"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { formatCOP } from "@/utils/whatsapp";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, addToCart, decreaseQuantity, getTotal } =
    useCartStore();

  // Costo fijo del domicilio
  const DELIVERY_FEE = 5000;

  // Estados para los campos de envío y pago
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    apartment: "",
    neighborhood: "",
    notes: "",
    paymentMethod: "Efectivo",
  });

  if (!isOpen) return null;

  const subtotal = getTotal();
  const totalWithDelivery = subtotal + DELIVERY_FEE;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    // Construcción del mensaje para WhatsApp con todos los detalles
    let message = `*¡Nuevo Pedido - Daruma Burger!* 🍔%0A%0A`;
    message += `*Cliente:* ${formData.name}%0A`;
    message += `*Teléfono:* ${formData.phone}%0A%0A`;
    
    message += `*📍 Dirección de Entrega (Bogotá):*%0A`;
    message += `- Dirección: ${formData.address}%0A`;
    if (formData.apartment) message += `- Int / Apt / Casa: ${formData.apartment}%0A`;
    message += `- Barrio: ${formData.neighborhood}%0A`;
    if (formData.notes) message += `- Indicaciones: ${formData.notes}%0A%0A`;

    message += `*💳 Método de Pago:* ${formData.paymentMethod}%0A%0A`;

    message += `*🛒 Productos:*%0A`;
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (${formatCOP(item.price * item.quantity)})%0A`;
    });

    message += `%0ASubtotal: ${formatCOP(subtotal)}`;
    message += `%0ADomicilio: ${formatCOP(DELIVERY_FEE)}`;
    message += `%0A*Total a Pagar: ${formatCOP(totalWithDelivery)}*`;

    // Reemplaza con tu número real de WhatsApp de pedidos (ej: 573001234567)
    const phoneWhatsApp = "573000000000";
    window.open(`https://wa.me/${phoneWhatsApp}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-sumi/50"
        onClick={closeCart}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md bg-washi h-full flex flex-col shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-sumi/10">
          <h2 className="font-display font-bold text-lg">Tu pedido</h2>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="text-2xl leading-none hover:text-hanko"
          >
            ×
          </button>
        </div>

        <div className="flex-1 px-5 py-4 flex flex-col gap-4">
          {cart.length === 0 && (
            <p className="font-body text-sumi/60 text-sm">
              Aún no has agregado nada. Ve al menú y elige algo rico.
            </p>
          )}

          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="font-body font-medium text-sm">{item.name}</p>
                <p className="font-mono text-xs text-sumi/60">
                  {formatCOP(item.price)}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-sm">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-6 h-6 rounded-sm2 border border-sumi/20 hover:border-hanko"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="w-6 h-6 rounded-sm2 border border-sumi/20 hover:border-hanko"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-sumi/10 flex flex-col gap-4">
            {/* Formulario de Datos y Pago integrado en el mismo cajón */}
            <form onSubmit={handleCheckout} className="flex flex-col gap-3">
              <h3 className="font-bold text-sm text-sumi/80 border-b border-sumi/10 pb-1">
                Datos de Entrega (Bogotá)
              </h3>

              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 text-sm bg-white border border-sumi/20 rounded-sm2 text-sumi focus:outline-none focus:border-hanko"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono de contacto"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 text-sm bg-white border border-sumi/20 rounded-sm2 text-sumi focus:outline-none focus:border-hanko"
              />

              <input
                type="text"
                name="address"
                placeholder="Dirección (Ej: Calle 100 # 15-20)"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 text-sm bg-white border border-sumi/20 rounded-sm2 text-sumi focus:outline-none focus:border-hanko"
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apt / Torre / Casa"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full p-2 text-sm bg-white border border-sumi/20 rounded-sm2 text-sumi focus:outline-none focus:border-hanko"
                />
                <input
                  type="text"
                  name="neighborhood"
                  placeholder="Barrio"
                  required
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  className="w-full p-2 text-sm bg-white border border-sumi/20 rounded-sm2 text-sumi focus:outline-none focus:border-hanko"
                />
              </div>

              <textarea
                name="notes"
                placeholder="Indicaciones (Color de casa, portería...)"
                rows="2"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full p-2 text-sm bg-white border border-sumi/20 rounded-sm2 text-sumi focus:outline-none focus:border-hanko"
              />

              <h3 className="font-bold text-sm text-sumi/80 border-b border-sumi/10 pb-1 pt-2">
                Método de Pago
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <label className={`flex items-center justify-center p-2.5 border rounded-sm2 cursor-pointer font-medium ${formData.paymentMethod === 'Efectivo' ? 'border-hanko bg-hanko/10 text-hanko' : 'border-sumi/20 text-sumi'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Efectivo"
                    checked={formData.paymentMethod === 'Efectivo'}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  💵 Efectivo
                </label>

                <label className={`flex items-center justify-center p-2.5 border rounded-sm2 cursor-pointer font-medium ${formData.paymentMethod === 'Transferencia Bre-B' ? 'border-hanko bg-hanko/10 text-hanko' : 'border-sumi/20 text-sumi'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Transferencia Bre-B"
                    checked={formData.paymentMethod === 'Transferencia Bre-B'}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  📱 Bre-B
                </label>
              </div>

              {/* Totales con Domicilio */}
              <div className="flex flex-col gap-1 pt-3 border-t border-sumi/10 text-sm">
                <div className="flex items-center justify-between text-sumi/70 text-xs">
                  <span>Subtotal</span>
                  <span>{formatCOP(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sumi/70 text-xs">
                  <span>Domicilio (Bogotá)</span>
                  <span>{formatCOP(DELIVERY_FEE)}</span>
                </div>
                <div className="flex items-center justify-between font-body font-semibold pt-1">
                  <span>Total a Pagar</span>
                  <span className="font-mono text-hanko">
                    {formatCOP(totalWithDelivery)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-center bg-hanko text-washi font-semibold py-3 rounded-sm2 hover:bg-hanko/90 transition-colors mt-2"
              >
                Confirmar Pedido por WhatsApp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
