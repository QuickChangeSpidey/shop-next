import { products } from "@/lib/products";
import { Product } from "@/lib/types";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <p className="text-sm text-gray-400">{product.category}</p>
              <h2 className="font-semibold mt-1">{product.name}</h2>
              <p className="text-blue-600 mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}