"use client";

import { useCartStore } from "@/store/useCartStore";
import { formatCOP } from "@/utils/whatsapp";

export default function MenuCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const openCart = useCartStore((s) => s.openCart);

  const handleAdd = () => {
    addToCart(product);
    openCart();
  };

  return (
    <div className="flex flex-col bg-white/60 border border-sumi/10 rounded-sm2 overflow-hidden hover:border-hanko/40 transition-colors shadow-sm">
      {/* Contenedor de la foto con mayor altura para que resalte */}
      <div className="h-48 flex items-center justify-center bg-washi overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-6xl">{product.emoji}</span>
        )}
      </div>
      
      {/* Sección de texto reducida y más compacta para dar balance */}
      <div className="flex flex-col flex-1 p-3.5 gap-1.5">
        <h3 className="font-display font-bold text-base">{product.name}</h3>
        <p className="font-body text-xs text-sumi/70 flex-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="font-mono font-semibold text-hanko text-sm">
            {formatCOP(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className="bg-sumi text-washi text-xs font-medium px-3 py-1.5 rounded-sm2 hover:bg-hanko transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
