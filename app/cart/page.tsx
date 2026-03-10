"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { state, dispatch } = useContext(CartContext)!;

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  if (state.items.length === 0) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {state.items.map(item => (
          <div key={item.id} className="flex items-center justify-between border rounded-lg p-4">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">${item.price} × {item.quantity}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button
          onClick={() => dispatch({ type: "CLEAR_CART" })}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>
    </main>
  );
}