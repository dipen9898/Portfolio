import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { allProjects } from "./PortfolioPage";
import Navbar from "../components/Navbar";
import QuoteFooter from "../components/QuoteFooter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === Number(id));

  if (!project) return <Navigate to="/portfolio" />;

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-accent transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-white border border-border rounded-[2rem] space-y-4">
                  <p className="text-[10px] uppercase tracking-widest font-black text-text-muted">Category</p>
                  <p className="text-xl font-bold text-accent">{project.category}</p>
                </div>
                <Link 
                  to="/contact" 
                  className="w-full py-6 bg-secondary text-primary text-center font-black uppercase tracking-widest rounded-full hover:bg-accent hover:text-secondary transition-all flex items-center justify-center gap-3"
                >
                  Start Project <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <QuoteFooter />
    </div>
  );
}
