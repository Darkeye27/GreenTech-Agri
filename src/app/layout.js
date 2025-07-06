import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import RouteLoader from "./components/RouteLoader";

export const metadata = {
  title: {
    default: 'GreenTech Agri',
    template: '%s | GreenTech Agri',
  },
  description: 'Empowering sustainable agriculture through technology and innovation in India.',
  keywords: ['AgriTech', 'Sustainable Farming', 'GreenTech India', 'Agriculture Products'],
  authors: [{ name: 'GreenTech Agri'}],
  openGraph: {
    title: 'GreenTech Agri',
    description: 'Empowering Indian farmers through affordable and smart agricultural solutions.',
    siteName: 'GreenTech Agri',
    type: 'website',
    locale: 'en_IN',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <RouteLoader /> */}
        <Navbar />
        <div className="pt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
