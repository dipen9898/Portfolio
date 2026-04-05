import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Crosshair, Grid3X3 } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section id="about" ref={containerRef} className="bg-secondary text-primary py-32 px-6 md:px-12 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10"><Crosshair size={40} /></div>
        <div className="absolute top-10 right-10"><Crosshair size={40} /></div>
        <div className="absolute bottom-10 left-10"><Crosshair size={40} /></div>
        <div className="absolute bottom-10 right-10"><Crosshair size={40} /></div>
        <div className="w-full h-full border-x border-primary/10 mx-auto max-w-7xl" />
      </div>

      {/* Scrolling Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-12 opacity-20 select-none pointer-events-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap text-[15vw] font-black uppercase leading-none">
          about • about • about • about • about • about • about • about
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-16">
          <div className="relative group">
            {/* Radial Abstract Shapes */}
            <div className="absolute inset-0 -z-10 scale-150 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <div className="absolute inset-0 bg-accent rounded-full blur-[100px]" />
              <div className="absolute inset-0 border-[40px] border-accent/30 rounded-full animate-ping" />
            </div>
            
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-[4rem] overflow-hidden border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                alt="Portrait"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="max-w-3xl space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
              Crafting visual narratives that <span className="text-accent">breathe life</span> into digital spaces.
            </h2>
            <p className="text-primary/60 text-lg md:text-xl leading-relaxed">
              Based in London, working globally. I combine technical precision with artistic intuition to create high-end visual experiences for brands that dare to be different.
            </p>
            <div className="flex justify-center gap-8 pt-8">
               <div className="text-left">
                  <p className="text-accent font-bold text-2xl">08+</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Years Exp</p>
               </div>
               <div className="text-left">
                  <p className="text-accent font-bold text-2xl">120+</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Projects</p>
               </div>
               <div className="text-left">
                  <p className="text-accent font-bold text-2xl">15+</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Awards</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scrolling Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-12 opacity-20 select-none pointer-events-none">
        <motion.div style={{ x: x2 }} className="whitespace-nowrap text-[15vw] font-black uppercase leading-none text-stroke">
          storyteller • storyteller • storyteller • storyteller
        </motion.div>
      </div>
    </section>
  );
}
