'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    description: '',
  });

  const [editingProduct, setEditingProduct] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  // Check auth + Fetch products and blogs
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts);

    fetch('/api/blog')
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Unauthorized');
      return;
    }

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Error adding product');
    } else {
      alert('Product added!');
      setForm({
        name: '',
        category: '',
        price: '',
        image: '',
        description: '',
      });
      window.location.reload();
    }
  };

  return (
    <>
      <div className="flex justify-between max-w-2xl items-center mx-auto py-10 px-4 rounded shadow">
        <h1 className="text-3xl font-bold text-[#2f855a]">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-[#e53e3e] text-white px-4 py-1 rounded hover:bg-[#d62828]"
        >
          Logout
        </button>
      </div>

      <div className="max-w-2xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-bold mb-4 text-[#2f855a]">Add Product</h2>
        {error && <p className="text-[#e53e3e] mb-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded shadow"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-[#2f855a] text-white px-4 py-2 rounded hover:bg-[#276749]"
          >
            Add Product
          </button>
        </form>
      </div>

      <hr className="my-10" />

      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-[#2f855a]">Add Blog Post</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token');
            const res = await fetch('/api/blog', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                title: e.target.title.value,
                content: e.target.content.value,
                image: e.target.image.value,
              }),
            });
            if (res.ok) {
              alert('Blog added!');
              e.target.reset();
              window.location.reload();
            } else {
              alert('Failed to add blog');
            }
          }}
          className="space-y-4 bg-white p-6 rounded shadow"
        >
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            className="w-full border px-3 py-2 rounded"
            rows={6}
            required
          />
          <button
            type="submit"
            className="bg-[#2f855a] text-white px-4 py-2 rounded hover:bg-[#276749]"
          >
            Add Blog
          </button>
        </form>
      </div>

      <hr className="my-10" />

      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-[#2f855a]">All Products</h2>
        <div className="space-y-4">
        {products.map((product) => (
  <div key={product.id} className="p-4 bg-white rounded shadow space-y-2">
    {editingProduct === product.id ? (
      <>
        <input
          value={editForm.name}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          className="w-full border p-1 rounded"
        />
        <input
          value={editForm.description}
          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
          className="w-full border p-1 rounded"
        />
        <input
          value={editForm.price}
          onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
          className="w-full border p-1 rounded"
        />
        <input
          value={editForm.image}
          onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
          className="w-full border p-1 rounded"
        />
        <button
          onClick={async () => {
            await fetch('/api/products', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...editForm, id: product.id }),
            });
            setEditingProduct(null);
            window.location.reload();
          }}
          className="bg-[#3182ce] text-white text-sm px-3 py-1 rounded"
        >
          Save
        </button>
        <button
          onClick={() => setEditingProduct(null)}
          className="bg-[#718096] text-white text-sm px-3 py-1 rounded"
        >
          Cancel
        </button>
      </>
    ) : (
      <>
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm">{product.description}</p>
        <p className="text-sm text-[#D3D3D3]">₹{product.price}</p>
        <div className="space-x-2">
          <button
            onClick={() => {
              setEditingProduct(product.id);
              setEditForm(product);
            }}
            className="bg-[#EAB308] text-white text-sm px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={async () => {
              const confirmed = confirm('Delete this product?');
              if (!confirmed) return;
              await fetch('/api/products', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: product.id }),
              });
              window.location.reload();
            }}
            className="bg-[#e53e3e] text-white text-sm px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </>
    )}
  </div>
))}
        </div>
      </div>

      <hr className="my-10" />

      <div className="max-w-2xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold mb-4 text-[#2f855a]">All Blogs</h2>
        <div className="space-y-4">
        {blogs.map((blog) => (
  <div key={blog.id} className="p-4 bg-white rounded shadow space-y-2">
    {editingBlog === blog.id ? (
      <>
        <input
          value={editForm.title}
          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
          className="w-full border p-1 rounded"
        />
        <input
          value={editForm.image}
          onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
          className="w-full border p-1 rounded"
        />
        <textarea
          value={editForm.content}
          onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
          className="w-full border p-1 rounded"
        />
        <button
          onClick={async () => {
            await fetch('/api/blogs', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...editForm, id: blog.id }),
            });
            setEditingBlog(null);
            window.location.reload();
          }}
          className="bg-[#3182ce] text-white text-sm px-3 py-1 rounded"
        >
          Save
        </button>
        <button
          onClick={() => setEditingBlog(null)}
          className="bg-[#718096] text-white text-sm px-3 py-1 rounded"
        >
          Cancel
        </button>
      </>
    ) : (
      <>
        <h3 className="font-semibold text-lg">{blog.title}</h3>
        <p className="text-sm text-[#718096]">
          {blog.content?.slice(0, 100)}...
        </p>
        <div className="space-x-2">
          <button
            onClick={() => {
              setEditingBlog(blog.id);
              setEditForm(blog);
            }}
            className="bg-[#EAB308] text-white text-sm px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={async () => {
              const confirmed = confirm('Delete this blog?');
              if (!confirmed) return;
              await fetch('/api/blogs', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: blog.id }),
              });
              window.location.reload();
            }}
            className="bg-[#e53e3e] text-white text-sm px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </>
    )}
  </div>
))}

        </div>
      </div>
    </>
  );
}
