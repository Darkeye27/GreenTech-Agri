import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2E7D32] text-white pt-12 pb-6 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
    {/* Company Info */}
    <div className="transition duration-300 hover:scale-105">
      <h3 className="text-xl font-bold mb-4">GreenTech Agri</h3>
      <p className="text-sm text-[#edf2f7]">
        Empowering agriculture with sustainable technology and smart farming solutions for a greener future.
      </p>
    </div>

    {/* Quick Links */}
    <div className="transition duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm text-[#f7fafc]">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/products" className="hover:underline">Products</a></li>
        <li><a href="/blog" className="hover:underline">Blog</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="transition duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2 text-sm text-[#f7fafc]">
        <li className="flex items-center gap-2">
          <FaPhoneAlt className="text-sm" /> +91-98765-43210
        </li>
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-sm" /> support@greentechagri.com
        </li>
      </ul>
    </div>

    {/* Social Media */}
    <div className="transition duration-300 hover:scale-105">
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-4 text-white">
        {[
          { icon: <FaFacebookF />, href: "#" },
          { icon: <FaInstagram />, href: "#" },
          { icon: <FaLinkedinIn />, href: "#" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            className="p-2 rounded-full bg-white text-[#2E7D32] bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 transform hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>

  <div className="text-center text-sm text-[#E0E0E0] mt-10 opacity-90 animate-fade-in">
    &copy; {new Date().getFullYear()} GreenTech Agri. All rights reserved.
  </div>
</footer>

  );
}
