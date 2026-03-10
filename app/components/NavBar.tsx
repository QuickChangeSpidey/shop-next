import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-blue-600">
        ShopNext
      </Link>
      <div className="flex gap-6">
        <Link href="/products" className="text-gray-600 hover:text-blue-600 transition">
          Products
        </Link>
        <Link href="/cart" className="text-gray-600 hover:text-blue-600 transition">
          Cart
        </Link>
      </div>
    </nav>
  );
}