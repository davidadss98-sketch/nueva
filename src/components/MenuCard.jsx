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
    <div className="flex flex-col bg-white/60 border border-sumi/10 rounded-sm2 overflow-hidden hover:border-hanko/40 transition-colors">
      <div className="h-36 flex items-center justify-center text-6xl bg-washi">
        {product.emoji}
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="font-display font-bold text-lg">{product.name}</h3>
        <p className="font-body text-sm text-sumi/70 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-mono font-semibold text-hanko">
            {formatCOP(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className="bg-sumi text-washi text-sm font-medium px-3 py-1.5 rounded-sm2 hover:bg-hanko transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
