'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const router = useRouter(); 
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setAllProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const matches = allProducts.filter((product) => {
      const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  
    setVisibleProducts(matches.slice(0, visibleCount));
  }, [allProducts, searchTerm, categoryFilter, visibleCount]);
  

  const categories = ['All', ...new Set(allProducts.map((p) => p.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-[#388E3c]">Our Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-md w-full sm:w-64"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border px-4 py-2 rounded-md w-full sm:w-48"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {visibleProducts.map((product) => (
    <div
      key={product.id}
      className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg cursor-pointer transition h-full flex flex-col"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      {/* Image container with fixed height */}
      <div className="h-40 w-full overflow-hidden rounded-md mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-contain rounded-md bg-[#f7fafc] mb-4"
        />
      </div>

      {/* Product Info */}
      <h2 className="text-xl font-semibold text-[#22c55e]">{product.name}</h2>
      <p className="text-sm text-[#718096]">{product.category}</p>
      <p className="text-[#388E3c] font-bold mt-1">₹{product.price}</p>
      <p className="text-sm mt-2 text-[#495057] line-clamp-2">
        {product.description}
      </p>
    </div>
  ))}
</div>


      {/* Load More */}
      {visibleProducts.length < filteredProducts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-[#388E3c] text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Load More
          </button>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
}
