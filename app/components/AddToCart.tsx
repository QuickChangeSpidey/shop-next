"use client";

import { ProductProp } from "@/lib/types";
import { useState } from "react";

export default function AddToCart({ productName, price }: ProductProp) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-6 px-6 py-2 rounded-lg text-white transition ${
        added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {added ? `✓ Added to cart!` : `Add to Cart — $${price}`}
    </button>
  );
}