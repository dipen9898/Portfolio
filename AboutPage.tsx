import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import QuoteFooter from "../components/QuoteFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10 group-hover:bg-accent/40 transition-colors duration-700" />
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-secondary/10 shadow-2xl">
              <img
                src="https://i.ibb.co/b5jJDnL4/Chat-GPT-Image-Apr-5-2026-11-29-13-AM.png"
                alt="Dipen Pandya"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-text-muted leading-relaxed font-medium">
              <p>
                I am a multidisciplinary creator blending graphic design, AI-powered solutions, and visual storytelling to build impactful digital experiences. With hands-on expertise in brand identity, social media content, video editing, and data-driven design, I help businesses transform ideas into high-performing visuals.
              </p>
              <p>
                My approach focuses on premium aesthetics, strategic thinking, and results-driven execution. Whether it's building a brand from scratch or enhancing digital presence, I deliver work that is not just visually appealing—but also meaningful and effective.
              </p>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-secondary text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                Graphic Design
              </div>
              <div className="px-6 py-3 bg-secondary text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                AI Solutions
              </div>
              <div className="px-6 py-3 bg-secondary text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                Visual Storytelling
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <QuoteFooter />
    </div>
  );
}
