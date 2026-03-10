export default function Loading() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4 h-24 animate-pulse bg-gray-100" />
        ))}
      </div>
    </main>
  );
}