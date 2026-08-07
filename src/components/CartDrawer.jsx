"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { formatCOP } from "@/utils/whatsapp";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, addToCart, decreaseQuantity, getTotal } =
    useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-sumi/50"
        onClick={closeCart}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-sm bg-washi h-full flex flex-col shadow-2xl">
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

        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
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
          <div className="px-5 py-4 border-t border-sumi/10 flex flex-col gap-3">
            <div className="flex items-center justify-between font-body font-semibold">
              <span>Total</span>
              <span className="font-mono text-hanko">
                {formatCOP(getTotal())}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="text-center bg-hanko text-washi font-semibold py-3 rounded-sm2 hover:bg-hanko/90 transition-colors"
            >
              Ir a pagar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
