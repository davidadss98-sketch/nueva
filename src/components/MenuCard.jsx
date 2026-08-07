"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { formatCOP } from "@/utils/whatsapp";
import ProductModal from "@/components/ProductModal";

export default function MenuCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addToCart = useCartStore((s) => s.addToCart);
  const openCart = useCartStore((s) => s.openCart);

  const handleAddDirect = (e) => {
    e.stopPropagation();
    addToCart(product);
    openCart();
  };

  return (
    <>
      <div className="flex flex-col bg-white/60 border border-sumi/10 rounded-sm2 overflow-hidden hover:border-hanko/40 transition-colors shadow-sm">
        {/* Contenedor de la foto (Al hacer clic aquí se abre el modal) */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="h-48 flex items-center justify-center bg-washi overflow-hidden cursor-pointer relative group"
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <span className="text-6xl">{product.emoji}</span>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-sumi/80 text-washi text-xs px-3 py-1 rounded-full font-medium transition-opacity">
              Ver detalles
            </span>
          </div>
        </div>
        
        {/* Sección de texto */}
        <div className="flex flex-col flex-1 p-3.5 gap-1.5">
          <h3 
            onClick={() => setIsModalOpen(true)}
            className="font-display font-bold text-base cursor-pointer hover:text-hanko transition-colors"
          >
            {product.name}
          </h3>
          <p className="font-body text-xs text-sumi/70 flex-1 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="font-mono font-semibold text-hanko text-sm">
              {formatCOP(product.price)}
            </span>
            <button
              onClick={handleAddDirect}
              className="bg-sumi text-washi text-xs font-medium px-3 py-1.5 rounded-sm2 hover:bg-hanko transition-colors z-10"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
