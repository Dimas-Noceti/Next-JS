import Image from "next/image";
import Footer from "./components/layouts/footer/footer";
import Navbar from "./components/layouts/navbar/navbar";

export const metadata = {
  title: "Ecommerce",
  description: "Ecommerce para amantes de la tecnologia",
  keywords: "Ecommerce, tienda, tecnologia, tech, pc",
  opengraph: {
    title: "Ecommerce",
    description: "Ecommerce para amantes de la tecnologia",
    url: "https://www.TechLife.com",
    siteName: "TechLife",
    images: [
      {
        url: "https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ],
  },
};

export default function Home() {
  return (
     <>
      <Navbar />
      <Footer />
     </>
  );
}
