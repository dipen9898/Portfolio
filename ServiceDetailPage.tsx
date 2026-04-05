import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { services } from "./ChargesPage";
import Navbar from "../components/Navbar";
import QuoteFooter from "../components/QuoteFooter";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) return <Navigate to="/charges" />;

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/charges" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-accent transition-colors mb-12">
            <ArrowLeft size={14} /> Back to Charges
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-tight">
                {service.name}
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="bg-white border border-border p-10 md:p-16 rounded-[3rem] shadow-sm">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Pricing Breakdown</h2>
              <div className="space-y-6">
                {service.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-primary/5 rounded-2xl border border-border/50">
                    <CheckCircle2 className="text-accent shrink-0" size={24} />
                    <span className="text-lg font-bold">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link 
                to="/contact" 
                className="flex-1 py-6 bg-secondary text-primary text-center font-black uppercase tracking-widest rounded-full hover:bg-accent hover:text-secondary transition-all flex items-center justify-center gap-3"
              >
                Book This Service <ArrowRight size={18} />
              </Link>
              <Link 
                to="/portfolio" 
                className="flex-1 py-6 border border-secondary text-secondary text-center font-black uppercase tracking-widest rounded-full hover:bg-secondary hover:text-primary transition-all"
              >
                View Related Work
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <QuoteFooter />
    </div>
  );
}
