import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 bg-primary text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12 w-full max-w-4xl"
      >
        <h1 className="text-6xl sm:text-8xl md:text-[12vw] font-black tracking-tighter uppercase leading-[0.85] md:leading-none">
          Dipen<br />Pandya
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
          <HeroButton to="/about" label="About" />
          <HeroButton to="/portfolio" label="View Portfolio" />
          <HeroButton to="/charges" label="Charges" />
          <HeroButton to="/contact" label="Contact Us" />
        </div>
      </motion.div>
    </section>
  );
}

function HeroButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group relative px-8 py-5 bg-secondary text-primary font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-accent hover:text-secondary rounded-full flex items-center justify-center gap-2"
    >
      <span className="relative z-10">{label}</span>
      <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
