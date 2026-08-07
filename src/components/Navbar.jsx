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
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
          <span className="font-display font-bold text-lg tracking-tight">
            Daruma Burger
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/menu"
            className="bg-hanko text-washi px-4 py-2 rounded-sm2 text-sm font-semibold hover:bg-hanko/90 transition-colors"
          >
            Pedir
          </Link>
          <button
            onClick={toggleCart}
            aria-label="Abrir carrito"
            className="relative flex items-center gap-2 bg-sumi text-washi px-4 py-2 rounded-sm2 text-sm font-medium hover:bg-sumi/85 transition-colors"
          >
            Carrito
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
