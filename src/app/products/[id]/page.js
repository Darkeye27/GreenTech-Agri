import { headers } from 'next/headers';

export default async function ProductDetail({ params }) {
  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = host && host.includes("vercel.app")?"https":"http";

  const res = await fetch(`${protocol}://${host}/api/products/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-10 text-red-600">Product not found</div>;
  }

  const product = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-[#388E3c]">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-contain rounded-xl bg-[#f7fafc] mb-6"
      />
      <p className="text-sm text-[#718096] mb-2">{product.category}</p>
      <p className="text-2xl text-[#2E7D32] font-semibold mb-4">₹{product.price}</p>
      <p className="text-gray-800 leading-relaxed">{product.description}</p>
    </div>
  );
}
