import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Urban Echoes",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1449156001935-d2863fb22690?auto=format&fit=crop&q=80&w=1000",
    size: "large",
  },
  {
    id: 2,
    title: "Digital Bloom",
    category: "Visual Design",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 3,
    title: "Minimalist Structure",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 4,
    title: "Cinematic Motion",
    category: "AI Creative",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
    size: "large",
  },
  {
    id: 5,
    title: "Golden Hour",
    category: "Visual Story",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 6,
    title: "Abstract Flow",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 md:px-12 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Selected<br />Works
            </h2>
            <p className="text-text-muted max-w-sm">
              A curated collection of projects that define my creative philosophy and technical approach.
            </p>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-4">
              {["All", "Design", "Photo", "Motion"].map((filter) => (
                <button
                  key={filter}
                  className="px-6 py-2 rounded-full border border-border text-xs font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all"
                >
                  {filter}
                </button>
              ))}
            </div>
            <Link 
              to="/portfolio" 
              className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent hover:text-secondary transition-colors"
            >
              View All Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer ${
        project.size === "large" ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        referrerPolicy="no-referrer"
      />
      
      <div className={`absolute inset-0 bg-secondary/60 backdrop-blur-[2px] transition-opacity duration-500 flex flex-col justify-end p-8 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              {project.category}
            </p>
            <h3 className="text-primary text-3xl font-black uppercase tracking-tighter">
              {project.title}
            </h3>
          </div>
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
