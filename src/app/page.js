  import { FaLeaf, FaUserFriends, FaRecycle, FaRupeeSign, FaUsers, FaTasks, FaTruck } from "react-icons/fa";
  import { headers } from "next/headers";
  import Link from "next/link";
  import './globals.css';

  async function getHomeData() {
      const headersList = await headers();
      const host = headersList.get("host");
      const protocol = host && host.includes("vercel.app")?"https":"http";
      const [productsRes, blogsRes] = await Promise.all([
        fetch(`${protocol}://${host}/api/products`,{cache:"no-store",}),
        fetch(`${protocol}://${host}/api/blog`,{cache:"no-store",})
      ]);

    const products = await productsRes.json();
    const blogs = await blogsRes.json();

    return { products: products.slice(0, 3), blogs: blogs.slice(0, 2) };
  }

  export default async function HomePage() {
    const { products, blogs } = await getHomeData();

    return (
    <main className="bg-white text-[#1B5E20]">
        {/* Hero Section */}
      
    {/* Top Section */}
    <div className="relative overflow-hidden">
    <section className="bg-[#F1F8E9] py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4 text-[#2E7D32]">
            Welcome to GreenTech Agri
          </h1>
          <p className="mb-6 text-[#4E4E4E]">
            Empowering farmers with sustainable agri-tech solutions.
          </p>
          <a href="/products">
            <button className="bg-[#388E3C] text-white px-6 py-3 rounded hover:bg-[#2E7D32] transition">
              Explore Products
            </button>
          </a>
        </div>
        <div className="flex-1">
          <img
            src="/hero.jpg"
            alt="GreenTech Agri"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* ✅ Animated Wave at bottom */}
    <div className="absolute bottom-0 left-0 w-[200%] h-20 md:h-24 lg:h-32 overflow-hidden z-0">
      <svg
        className="animate-wave w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#2E7D32"
          fillOpacity="1"
          d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,74.7C672,75,768,117,864,144C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
        ></path>
      </svg>
    </div>
  </div>






        {/* About Section */}
        <section className="py-20 bg-[#F9FFF6]">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-[#2E7D32] mb-6">About GreenTech Agri</h2>
      <p className="text-[#4E4E4E] max-w-2xl mx-auto mb-4 leading-relaxed">
        We bring innovation and eco-consciousness to agriculture with products designed for smart farming. GreenTech Agri is dedicated to supporting India's green revolution by delivering sustainable, affordable, and reliable agri-tech solutions.
      </p>
      <p className="text-[#4E4E4E] max-w-2xl mx-auto leading-relaxed">
        Our mission is to empower farmers through modern techniques, reduce environmental impact, and ensure food security. Join us as we reshape the future of farming—greener, smarter, and more productive.
      </p>

      <div className="mt-8">
        <a
          href="/about"
          className="inline-block bg-[#2E7D32] text-white px-6 py-2 rounded-xl hover:bg-[#27672A] transition"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>


        {/* Products Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-10">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-[#F1F8E9] p-6 rounded-lg shadow text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 className="font-semibold text-xl">{product.name}</h3>
                  <p className="text-sm text-[#718096] mt-2">{product.category}</p>
                  <p className="text-[#2E7D32] mt-2 font-bold">₹{product.price}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/products">
                <button className="bg-[#388E3C] text-white px-5 py-2 rounded hover:bg-[#2E7D32]">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-[#F1F8E9]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-10">Latest Blogs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-xl shadow p-6">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#1B5E20]">{blog.title}</h3>
                  <p className="text-sm text-[#718096] mt-2">
                    {blog.content.slice(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog">
                <button className="bg-[#388E3C] text-white px-5 py-2 rounded hover:bg-[#2E7D32]">
                  Read All Blogs
                </button>
              </Link>
            </div>
          </div>
        </section>

              {/*mission & values*/}
        <section className="bg-[#F1F8E9] py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Our Mission & Values</h2>
      <p className="text-[#4E4E4E] max-w-3xl mx-auto mb-12">
        At GreenTech Agri, we are committed to transforming Indian agriculture through innovation,
        affordability, and eco-conscious solutions tailored for every farmer.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <FaLeaf className="text-[#2E7D32] text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Innovation First</h3>
          <p className="text-sm text-[#495057]">
            We invest in sustainable agri-tech solutions that reshape modern farming.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <FaUserFriends className="text-[#2E7D32] text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Farmer-Centric</h3>
          <p className="text-sm text-[#495057]">
            Built with deep collaboration and feedback from real Indian farmers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <FaRecycle className="text-[#2E7D32] text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Eco-Responsibility</h3>
          <p className="text-sm text-[#495057]">
            We ensure every product is sustainable and kind to the planet.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <FaRupeeSign className="text-[#2E7D32] text-4xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg text-[#2E7D32] mb-2">Affordability</h3>
          <p className="text-sm text-[#495057]">
            We believe every farmer deserves access to high-quality tools—without the high cost.
          </p>
        </div>
      </div>
    </div>
  </section>

        {/* Counters Section */}
        <section className="py-16 bg-white text-center">
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-[#2E7D32] font-bold text-xl">
      
      {/* Clients */}
      <div className="flex flex-col items-center">
        <FaUsers className="text-4xl mb-2 text-[#2E7D32]" />
        <p className="text-3xl">120+</p>
        <p className="text-sm text-[#718096] font-medium">Clients</p>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center">
        <FaTasks className="text-4xl mb-2 text-[#2E7D32]" />
        <p className="text-3xl">85+</p>
        <p className="text-sm text-[#718096] font-medium">Projects</p>
      </div>

      {/* Shipments */}
      <div className="flex flex-col items-center">
        <FaTruck className="text-4xl mb-2 text-[#2E7D32]" />
        <p className="text-3xl">200+</p>
        <p className="text-sm text-[#718096] font-medium">Shipments</p>
      </div>
      
    </div>
  </section>

        {/*Team section*/}
        <section className="py-16 px-4 bg-[#F1F8E9]">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#388E3C] mb-12">Our Team</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Team Member 1 */}
        <div className="bg-[#F9F9F9] rounded-xl shadow p-6">
          <img
            src="https://images.generated.photos/1zt-Lw23Phdy1H2m9ZGPbhRsDdKGpQj-rpPyMnBU_-U/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDE1NzMzLmpwZw.jpg" // Use real image path or URL
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#2E7D32]">Manish Panchal</h3>
          <p className="text-[#718096]">Founder & CEO</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-[#F9F9F9] rounded-xl shadow p-6">
          <img
            src="https://images.generated.photos/ZYtOC5xwOtU17-GvKrEJWZpRunetrjzilvoc0rO-GLQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjAxOTY3LmpwZw.jpg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#2E7D32]">Nisha Verma</h3>
          <p className="text-[#718096]">Operations Head</p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-[#F9F9F9] rounded-xl shadow p-6">
          <img
            src="https://images.generated.photos/rlex4m8aqoh8PBIMW69rQ3M9MhDiN9FBGtB6kA7YWag/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzEwODE5LmpwZw.jpg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-[#2E7D32]">Ravi Patel</h3>
          <p className="text-[#718096]">Lead Developer</p>
        </div>
      </div>
    </div>
  </section>


      </main>
    );
  }
