"use client";

import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  isOpen: false,

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === id);
      if (existing && existing.quantity > 1) {
        return {
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      }
      return { cart: state.cart.filter((item) => item.id !== id) };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  clearCart: () => set({ cart: [] }),

  getTotal: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

  getItemCount: () =>
    get().cart.reduce((sum, item) => sum + item.quantity, 0),
}));
