"use client";

import { Product } from "@/lib/types";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

export default function AddToCart({ product }: Props) {
  const { state, dispatch } = useCart();
  const itemInCart = state.items.find(i => i.id === product.id);

  return (
    <button
      onClick={() => dispatch({ type: "ADD_ITEM", product })}
      className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      {itemInCart ? `In Cart (${itemInCart.quantity})` : `Add to Cart — $${product.price}`}
    </button>
  );
}