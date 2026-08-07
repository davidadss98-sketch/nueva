"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
  const toggleCart = useCartStore((s) => s.toggleCart);
  const itemCount = useCartStore((s) =>
    s.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-40 bg-washi/95 backdrop-blur border-b border-sumi/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo sin sombra ni bordes */}
        <Link href="/" className="flex items-center gap-3.5">
          <img 
            src="/logo.jpeg" 
            alt="Logo Daruma Burger" 
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover" 
          />
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight">
            Daruma Burger
          </span>
        </Link>

        {/* Botón del carrito en fondo blanco */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleCart}
            aria-label="Abrir carrito"
            className="relative flex items-center justify-center bg-white text-sumi w-11 h-11 rounded-sm2 border border-sumi/15 hover:bg-sumi/5 transition-colors text-lg shadow-sm"
          >
            🛒
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-hanko text-washi text-xs font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
