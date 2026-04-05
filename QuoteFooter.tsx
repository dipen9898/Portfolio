import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const quotes = [
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "Business opportunities are like buses, there's always another one coming.", author: "Richard Branson" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Work smart, not just hard. Efficiency is the key to premium results.", author: "Dipen Pandya" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Your brand is what other people say about you when you're not in the room.", author: "Jeff Bezos" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { text: "Don't find customers for your products, find products for your customers.", author: "Seth Godin" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The goal is to do business with people who believe what you believe.", author: "Simon Sinek" },
  { text: "Earnings are a byproduct of the value you create for others.", author: "Unknown" },
  { text: "Graphic design is the visual language of your brand's soul.", author: "Unknown" }
];

export default function QuoteFooter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 7000); // Change every 7 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-20 px-6 md:px-12 bg-secondary text-primary overflow-hidden border-t border-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-4xl font-black italic tracking-tight leading-tight">
              "{quotes[index].text}"
            </p>
            <p className="text-accent text-xs font-black uppercase tracking-[0.4em]">
              — {quotes[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <div className="mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">
            © {new Date().getFullYear()} Dipen Pandya. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold opacity-40">
            <span>Graphic Design</span>
            <span>AI Solutions</span>
            <span>Visual Storytelling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
