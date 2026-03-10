"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { state } = useContext(CartContext)!;
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white border-b px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-blue-600">
        ShopNext
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">
          Products
        </Link>
        <Link href="/cart" className="relative text-gray-600 hover:text-blue-600 transition">
          Cart
          {totalItems > 0 ? (
            <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          ) : null}
        </Link>
      </div>
    </nav>
  );
}