import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Exhibitions from "../components/Exhibitions";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import QuoteFooter from "../components/QuoteFooter";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
      <QuoteFooter />
    </div>
  );
}
