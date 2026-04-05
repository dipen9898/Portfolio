import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import QuoteFooter from "../components/QuoteFooter";
import { ArrowUpRight, ArrowLeft, Play, X, Maximize2, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export const categories = [
  {
    id: "creative-design",
    title: "CREATIVE DESIGN",
    image: "https://i.ibb.co/9Bxn92m/Chat-GPT-Image-Apr-5-2026-01-42-23-PM.png",
    description: "High-quality social media designs, branding visuals, and marketing creatives designed to capture attention and increase engagement."
  },
  {
    id: "presentation-data-design",
    title: "PRESENTATION & DATA DESIGN",
    image: "https://i.ibb.co/chvHZfWC/Chat-GPT-Image-Apr-5-2026-01-47-09-PM.png",
    description: "Turning complex data into compelling visual stories."
  },
  {
    id: "video-content-creation",
    title: "VIDEO & CONTENT CREATION",
    image: "https://i.ibb.co/35t19yYp/Chat-GPT-Image-Apr-5-2026-01-50-08-PM.png",
    description: "Cinematic video production and engaging content."
  },
  {
    id: "ai-automation-solutions",
    title: "AI & AUTOMATION SOLUTIONS",
    image: "https://i.ibb.co/4nKX3nkN/Chat-GPT-Image-Apr-5-2026-01-52-26-PM.png",
    description: "Leveraging AI to streamline workflows and creative processes."
  },
  {
    id: "branding-specialized-services",
    title: "BRANDING & SPECIALIZED SERVICES",
    image: "https://i.ibb.co/r22Y6QYk/Chat-GPT-Image-Apr-5-2026-01-55-11-PM.png",
    description: "Comprehensive branding and niche digital services."
  }
];

export const allProjects = [
  {
    id: 101,
    title: "Hydrating Face Serum",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/N6GpXrdn/Hydrating-Face-Serum.png",
    size: "small",
    description: "Premium product showcase for Hydrating Face Serum."
  },
  {
    id: 102,
    title: "Noor Lip Balm",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/tT92SXt8/Noor-Lip-Balm.png",
    size: "small",
    description: "Elegant branding for Noor Lip Balm."
  },
  {
    id: 103,
    title: "Pomace Olive Oil",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/WpR4QJRf/Pomace-Olive-Oil.png",
    size: "small",
    description: "Visual identity for Pomace Olive Oil."
  },
  {
    id: 104,
    title: "Product Showcase 15",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/Qxk5ypt/final-2-15.png",
    size: "small",
    description: "Creative product layout."
  },
  {
    id: 105,
    title: "Visual Story 13",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/svqBPYP3/final-3-13.png",
    size: "small",
    description: "Engaging visual storytelling."
  },
  {
    id: 106,
    title: "Creative Layout 14",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/kgdSMFTy/final-2-14.png",
    size: "small",
    description: "Modern creative design layout."
  },
  {
    id: 107,
    title: "Brand Concept A",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/N2sSFQyx/Chat-GPT-Image-Mar-21-2026-10-46-51-AM.png",
    size: "small",
    description: "Innovative brand concept design."
  },
  {
    id: 108,
    title: "Brand Concept B",
    category: "CREATIVE DESIGN",
    image: "https://i.ibb.co/jZQfj7Nw/Chat-GPT-Image-Mar-21-2026-10-47-57-AM.png",
    size: "small",
    description: "Strategic brand visual identity."
  },
  {
    id: 201,
    title: "Investor Pitch Deck",
    category: "PRESENTATION & DATA DESIGN",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "High-stakes presentation for a Series A startup seeking funding."
  },
  {
    id: 202,
    title: "Corporate Annual Report",
    category: "PRESENTATION & DATA DESIGN",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Transforming dry financial data into a compelling visual narrative."
  },
  {
    id: 203,
    title: "Interactive Dashboard",
    category: "PRESENTATION & DATA DESIGN",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    size: "large",
    description: "Real-time business intelligence and data monitoring dashboard."
  },
  {
    id: 204,
    title: "Infographic Series",
    category: "PRESENTATION & DATA DESIGN",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Complex data simplified into engaging and shareable visual stories."
  },
  {
    id: 205,
    title: "Sales Enablement Deck",
    category: "PRESENTATION & DATA DESIGN",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Strategic presentation designed to drive sales and conversions."
  },
  {
    id: 206,
    title: "Educational Courseware",
    category: "PRESENTATION & DATA DESIGN",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Visually rich materials for professional online learning platforms."
  },
  {
    id: 301,
    title: "Sweet Escape",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32184733/8dea551481f041a5b2ff7ccff9053142.mp4",
    size: "small",
    description: "Cinematic dessert showcase."
  },
  {
    id: 302,
    title: "Gourmet Burger",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32184913/burger_and_french_202603211113.mp4",
    size: "small",
    description: "Mouth-watering food commercial."
  },
  {
    id: 303,
    title: "CGI Advertisement I",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32185059/cgi_advertisement_image_202603211116.mp4",
    size: "small",
    description: "High-end CGI product advertisement."
  },
  {
    id: 304,
    title: "CGI Advertisement II",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32185237/cgi_advertisement_image_202603211314.mp4",
    size: "small",
    description: "Dynamic CGI visual content."
  },
  {
    id: 305,
    title: "Creative Ad Concept",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32185543/d7c3eebd-f8e4-4edb-8488-b6c87f5d9231.mp4",
    size: "small",
    description: "Innovative creative advertising."
  },
  {
    id: 306,
    title: "Design Arena",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32185852/designarena_video_a8b2tttx.mp4",
    size: "large",
    description: "Atmospheric design showcase."
  },
  {
    id: 307,
    title: "Flow Motion",
    category: "VIDEO & CONTENT CREATION",
    video: "http://tmpfiles.org/dl/32186007/flow1720p-25fps2-ezgif.com-gif-to-mp4-converter.mp4",
    size: "small",
    description: "Fluid motion graphics showcase."
  },
  {
    id: 308,
    title: "Hungry Experience I",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32186153/hungry1.mp4",
    size: "small",
    description: "Engaging culinary visual story."
  },
  {
    id: 309,
    title: "Hungry Experience II",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32186313/hungry.mp4",
    size: "small",
    description: "Premium food and dining content."
  },
  {
    id: 310,
    title: "Engagement Invitation",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32186403/ishaengagementceremonyinvitation1.mp4",
    size: "small",
    description: "Elegant digital invitation design."
  },
  {
    id: 311,
    title: "Untitled Design",
    category: "VIDEO & CONTENT CREATION",
    video: "https://tmpfiles.org/dl/32186634/untitleddesign4.mp4",
    size: "small",
    description: "Creative visual experimentation."
  },
  {
    id: 401,
    title: "AI Customer Support",
    category: "AI & AUTOMATION SOLUTIONS",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Intelligent chatbot system reducing support response times by 80%."
  },
  {
    id: 402,
    title: "Content Pipeline",
    category: "AI & AUTOMATION SOLUTIONS",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Automated multi-channel content generation and scheduling system."
  },
  {
    id: 403,
    title: "Document Intelligence",
    category: "AI & AUTOMATION SOLUTIONS",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    size: "large",
    description: "AI-powered data extraction and processing for complex legal documents."
  },
  {
    id: 404,
    title: "Predictive Analytics",
    category: "AI & AUTOMATION SOLUTIONS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Machine learning models for sales forecasting and market trends."
  },
  {
    id: 405,
    title: "Marketing Automation",
    category: "AI & AUTOMATION SOLUTIONS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Smart lead scoring and personalized email campaign automation."
  },
  {
    id: 406,
    title: "Custom LLM Solutions",
    category: "AI & AUTOMATION SOLUTIONS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    size: "small",
    description: "Fine-tuned language models for specialized industry knowledge bases."
  },
  {
    id: 501,
    title: "Prokhana Brand Guidelines",
    category: "BRANDING & SPECIALIZED SERVICES",
    image: "https://i.ibb.co/mLJrQ12/Chat-GPT-Image-Apr-1-2026-07-01-01-PM.png",
    size: "small",
    description: "Comprehensive brand identity and visual system for Prokhana.",
    isBrandBook: true,
    pdfUrl: "https://tmpfiles.org/dl/32190038/prokhanabrandguidelines.pdf"
  },
  {
    id: 502,
    title: "Samosa Craft Branding",
    category: "BRANDING & SPECIALIZED SERVICES",
    image: "https://i.ibb.co/27zt7zT8/name-surname.png",
    size: "small",
    description: "Visual identity and branding strategy for Samosa Craft.",
    isBrandBook: true,
    pdfUrl: "https://tmpfiles.org/dl/32190320/brand.pdf"
  }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  const filteredProjects = filter === "All" 
    ? [] 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-accent transition-colors mb-4">
                <ArrowLeft size={14} /> Back to Home
              </Link>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                {filter === "All" ? "Let’s Build Something Powerful" : filter}
              </h1>
              <p className="text-text-muted max-w-lg">
                {filter === "All" 
                  ? "Ready to elevate your brand with premium design & AI solutions?"
                  : filter === "CREATIVE DESIGN"
                  ? "High-quality social media designs, branding visuals, and marketing creatives designed to capture attention and increase engagement."
                  : filter === "VIDEO & CONTENT CREATION"
                  ? "Cinematic video production and engaging content designed to tell your brand's story with power and precision."
                  : `Explore our specialized work in ${filter.toLowerCase()}.`}
              </p>
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto gap-4 pb-2 no-scrollbar">
              {["All", ...categories.map(c => c.title)].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full border border-border text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === f ? "bg-secondary text-primary" : "hover:bg-secondary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

          {filter === "All" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <CategoryCard 
                  key={cat.id} 
                  category={cat} 
                  onClick={() => setFilter(cat.title)}
                />
              ))}
            </div>
          ) : (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${hoveredVideoId !== null ? "brightness-[0.3] grayscale-[0.5]" : ""}`}>
              {filteredProjects.map((project) => (
                project.category === "VIDEO & CONTENT CREATION" ? (
                  <VideoProjectCard 
                    key={project.id} 
                    project={project} 
                    onHover={setHoveredVideoId}
                    isDimmed={hoveredVideoId !== null && hoveredVideoId !== project.id}
                    onClick={() => setSelectedVideo(project)}
                  />
                ) : (
                  <ProjectCard key={project.id} project={project} />
                )
              ))}
            </div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 text-secondary hover:text-accent transition-colors z-10"
            >
              <X size={40} />
            </button>
            
            <div className="w-full max-w-6xl aspect-video relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <video 
                src={selectedVideo.video} 
                controls 
                autoPlay 
                className="w-full h-full object-contain bg-black"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="space-y-2">
                <p className="text-accent text-xs font-bold uppercase tracking-[0.4em]">
                  {selectedVideo.category}
                </p>
                <h2 className="text-secondary text-5xl font-black uppercase tracking-tighter">
                  {selectedVideo.title}
                </h2>
                <p className="text-text-muted max-w-xl">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteFooter />
    </div>
  );
}

function CategoryCard({ category, onClick }: { category: any; onClick: () => void; key?: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer aspect-square"
    >
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      <div className={`absolute inset-0 bg-secondary/40 transition-opacity duration-500 flex flex-col justify-end p-8 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              Section
            </p>
            <h3 className="text-primary text-2xl font-black uppercase tracking-tighter leading-tight">
              {category.title}
            </h3>
          </div>
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoProjectCard({ project, onHover, isDimmed, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play().catch(() => {});
      onHover(project.id);
    } else {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      onHover(null);
    }
  }, [isHovered, project.id, onHover]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer transition-all duration-700 ${
        isDimmed ? "scale-[0.98]" : "scale-100"
      } ${
        isHovered ? "!brightness-100 !grayscale-0 scale-105 z-20 shadow-2xl ring-1 ring-white/20" : "z-10"
      } ${
        project.size === "large" ? "md:col-span-2 aspect-[16/9]" : "aspect-[9/16]"
      }`}
    >
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
            <Play size={32} fill="white" />
          </div>
        </div>
      )}

      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 flex flex-col justify-end p-8 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
              {project.category}
            </p>
            <h3 className="text-secondary text-3xl font-black uppercase tracking-tighter">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary">
              <Maximize2 size={24} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const linkPath = project.isBrandBook 
    ? `/portfolio/brand-book/${project.id}?url=${encodeURIComponent(project.pdfUrl)}&title=${encodeURIComponent(project.title)}`
    : `/portfolio/${project.id}`;

  return (
    <Link to={linkPath} target={project.isBrandBook ? "_blank" : "_self"}>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative rounded-[2.5rem] overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.03] z-0 hover:z-10 ${
          project.size === "large" ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        
        <div className={`absolute inset-0 bg-secondary/40 transition-opacity duration-500 flex flex-col justify-end p-8 ${isHovered ? "opacity-100" : "opacity-0"}`}>
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
              {project.isBrandBook ? <BookOpen size={24} /> : <ArrowUpRight size={24} />}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
