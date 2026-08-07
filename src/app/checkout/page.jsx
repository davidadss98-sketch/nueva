"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { formatCOP, buildOrderMessage, buildWhatsAppUrl } from "@/utils/whatsapp";

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCartStore();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "Efectivo contraentrega",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      ...form,
      items: cart,
      total: getTotal(),
    };
    const message = buildOrderMessage(order);
    const url = buildWhatsAppUrl(message);
    clearCart();
    window.location.href = url;
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto px-5 py-24 text-center">
        <p className="font-body text-sumi/70 mb-4">
          Tu carrito está vacío.
        </p>
        <Link href="/menu" className="text-hanko font-medium underline">
          Ir al menú
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-5 py-14">
      <h1 className="font-display font-extrabold text-3xl mb-8">
        <span className="brush-underline">Confirmar pedido</span>
      </h1>

      <div className="bg-white/60 border border-sumi/10 rounded-sm2 p-5 mb-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm font-body py-1"
          >
            <span>
              {item.quantity}x {item.name}
            </span>
            <span className="font-mono">
              {formatCOP(item.price * item.quantity)}
            </span>
          </div>
        ))}
        <div className="flex justify-between font-semibold pt-3 mt-3 border-t border-sumi/10">
          <span>Total</span>
          <span className="font-mono text-hanko">
            {formatCOP(getTotal())}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          required
          name="fullName"
          placeholder="Nombre completo"
          value={form.fullName}
          onChange={handleChange}
          className="border border-sumi/20 rounded-sm2 px-4 py-3 bg-white/60 font-body focus:outline-none focus:border-hanko"
        />
        <input
          required
          name="phone"
          placeholder="Teléfono"
          value={form.phone}
          onChange={handleChange}
          className="border border-sumi/20 rounded-sm2 px-4 py-3 bg-white/60 font-body focus:outline-none focus:border-hanko"
        />
        <input
          required
          name="address"
          placeholder="Dirección de entrega"
          value={form.address}
          onChange={handleChange}
          className="border border-sumi/20 rounded-sm2 px-4 py-3 bg-white/60 font-body focus:outline-none focus:border-hanko"
        />
        <input
          required
          name="city"
          placeholder="Ciudad"
          value={form.city}
          onChange={handleChange}
          className="border border-sumi/20 rounded-sm2 px-4 py-3 bg-white/60 font-body focus:outline-none focus:border-hanko"
        />
        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
          className="border border-sumi/20 rounded-sm2 px-4 py-3 bg-white/60 font-body focus:outline-none focus:border-hanko"
        >
          <option>Efectivo contraentrega</option>
          <option>Transferencia / Nequi contraentrega</option>
        </select>
        <textarea
          name="notes"
          placeholder="Instrucciones adicionales (opcional)"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          className="border border-sumi/20 rounded-sm2 px-4 py-3 bg-white/60 font-body focus:outline-none focus:border-hanko"
        />

        <button
          type="submit"
          className="mt-2 bg-hanko text-washi font-semibold py-3 rounded-sm2 hover:bg-hanko/90 transition-colors"
        >
          Enviar pedido por WhatsApp
        </button>
      </form>
    </div>
  );
}
