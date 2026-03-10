import { Product } from "@/lib/types";
import Link from "next/link";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=8", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="border rounded-lg p-4 hover:shadow-md transition h-full">
              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-blue-600 mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}