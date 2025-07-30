import { headers } from "next/headers";
export const dynamic = 'force-dynamic';


export default async function BlogPage() {
  let blogs = [];

  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = host && host.includes("vercel.app")?"https":"http";

    const res = await fetch(`${protocol}://${host}/api/blog`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
    } else {
      blogs = await res.json();
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#388E3C] mb-10">Latest Blogs</h1>

      {blogs.length === 0 ? (
        <p className="text-red-500">No blogs available or fetch failed.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow p-6">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
