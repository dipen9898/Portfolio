import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const exhibitions = [
  {
    id: "01",
    title: "Cinematic Visions Unveiled",
    location: "Madrid Gallery, Spain",
    date: "21 Nov 2023",
  },
  {
    id: "02",
    title: "Frames in Motion",
    location: "Manchester Museum, UK",
    date: "20 Nov 2023",
  },
  {
    id: "03",
    title: "Journey Through Time",
    location: "Milan Gallery, Italy",
    date: "19 Nov 2023",
  },
  {
    id: "04",
    title: "Experimental Narratives",
    location: "Paris Museum, France",
    date: "18 Nov 2023",
  },
];

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-32 px-6 md:px-12 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4">
            Exhibitions
          </h2>
          <div className="w-20 h-1 bg-accent" />
        </div>

        <div className="space-y-0">
          {exhibitions.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-b border-border py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:px-8 transition-all duration-500 hover:bg-secondary hover:text-primary"
            >
              <div className="flex items-center gap-8">
                <span className="text-sm font-bold text-text-muted group-hover:text-accent transition-colors">
                  {item.id}
                </span>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter max-w-md leading-tight">
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                <div className="text-right md:text-left">
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">Location & Date</p>
                  <p className="text-sm font-medium">{item.location}, {item.date}</p>
                </div>
                <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-current text-xs font-bold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-primary transition-all">
                  Buy Ticket <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
