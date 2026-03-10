import AddToCart from "@/app/components/AddToCart";
import { products } from "@/lib/products";
import { Props } from "@/lib/types";

export default async function ProductPage({ params }: Props) {
    const { id } = await params;

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return <p className="p-8 text-red-500">Product not found.</p>;
    }

    return (
        <main className="p-8 max-w-lg">
            <p className="text-sm text-gray-400">{product.category}</p>
            <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <p className="text-blue-600 text-2xl font-bold mt-4">${product.price}</p>
            <AddToCart productName={product.name} price={product.price} />
        </main>
    );
}