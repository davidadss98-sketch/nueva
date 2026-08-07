"use client";

import { useState } from "react";
import { formatCOP } from "@/utils/whatsapp";
import { useCartStore } from "@/store/useCartStore";

export default function ProductModal({ product, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Fondo oscuro translúcido con prioridad alta */}
      <div
        className="absolute inset-0 bg-sumi/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Tarjeta del Modal flotando por encima de todo */}
      <div className="relative bg-washi text-sumi w-full max-w-lg rounded-sm2 shadow-2xl overflow-hidden z-50 flex flex-col">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-sumi/70 text-washi w-8 h-8 rounded-full flex items-center justify-center hover:bg-hanko transition-colors"
        >
          ✕
        </button>

        {/* Imagen del producto */}
        {product.image && (
          <div className="w-full h-56 md:h-64 relative bg-sumi/10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Contenido detallado */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="text-3xl mb-1 inline-block">{product.emoji}</span>
              <h2 className="font-display font-bold text-2xl">{product.name}</h2>
            </div>
            <span className="font-mono font-bold text-lg text-hanko">
              {formatCOP(product.price)}
            </span>
          </div>

          <p className="font-body text-sumi/80 text-sm leading-relaxed">
            {product.description || "Elaborado al momento con ingredientes frescos de la más alta calidad y carne 100% Wagyu."}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-sumi/10 mt-2">
            <div className="flex items-center gap-3 font-mono">
              <span className="text-sm font-semibold text-sumi/60">Cantidad:</span>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-sm2 border border-sumi/20 flex items-center justify-center hover:border-hanko font-bold"
              >
                −
              </button>
              <span className="text-base font-bold w-4 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-sm2 border border-sumi/20 flex items-center justify-center hover:border-hanko font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-hanko text-washi font-semibold px-6 py-3 rounded-sm2 hover:bg-hanko/90 transition-colors text-sm shadow-md"
            >
              Añadir • {formatCOP(product.price * quantity)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
