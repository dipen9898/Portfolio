import { motion } from "motion/react";
import { ArrowLeft, Shield } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function BrandBookViewer() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const pdfUrl = searchParams.get("url");
  const title = searchParams.get("title") || "Brand Book";

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  if (!pdfUrl) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-secondary">PDF NOT FOUND</h1>
          <Link to="/portfolio" className="text-accent hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-8 px-6 md:px-12 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div className="space-y-2">
              <Link to="/portfolio" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-accent transition-colors mb-2">
                <ArrowLeft size={14} /> Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-secondary">
                {title}
              </h1>
              <div className="flex items-center gap-2 text-accent/60 text-[10px] font-bold uppercase tracking-widest">
                <Shield size={12} /> Secure Viewing Mode (Download Restricted)
              </div>
            </div>
          </div>

          <div className="flex-1 bg-secondary/5 rounded-[2rem] border border-white/5 overflow-hidden relative group">
            {/* Overlay to prevent right-click/interaction if needed, though iframe handles its own */}
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full border-none"
              title={title}
            />
            
            {/* Protective overlay for the top area where toolbars usually appear */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>

      <footer className="py-6 px-12 border-t border-white/5 text-center">
        <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest">
          © 2026 VJSHADES • BRANDING VISUALS • SECURE VIEWER
        </p>
      </footer>
    </div>
  );
}
