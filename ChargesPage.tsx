import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar";
import QuoteFooter from "../components/QuoteFooter";
import { Link } from "react-router-dom";

export const services = [
  {
    id: "social-media",
    name: "Social Media Design",
    charges: "₹800 – ₹2,000 ($10 – $25) per post",
    description: "High-quality posts, carousels, and ad creatives designed to boost engagement and brand presence.",
    details: [
      "₹800 – ₹2,000 ($10 – $25) per post",
      "₹3,000 – ₹8,000 ($35 – $95) carousel",
      "₹20,000 – ₹50,000 ($250 – $600) monthly"
    ]
  },
  {
    id: "presentation",
    name: "Report / Presentation Design",
    charges: "₹800 – ₹2,000 ($10 – $25) per slide",
    description: "Premium business presentations, pitch decks, and data reports with clean, modern visuals.",
    details: [
      "₹800 – ₹2,000 ($10 – $25) per slide",
      "₹8,000 – ₹25,000 ($100 – $300) full deck"
    ]
  },
  {
    id: "ai-design",
    name: "AI-Based Design & Image Creation",
    charges: "₹500 – ₹1,200 ($6 – $15) per image",
    description: "AI-generated creative visuals, posters, and concept designs for modern branding.",
    details: [
      "₹500 – ₹1,200 ($6 – $15) per image",
      "₹4,000 – ₹10,000 ($50 – $120) set"
    ]
  },
  {
    id: "video-editing",
    name: "Video Editing (Reels / Shorts)",
    charges: "₹1,500 – ₹4,000 ($20 – $50) per reel",
    description: "Engaging short-form video editing with transitions, captions, and hooks for social media growth.",
    details: [
      "₹1,500 – ₹4,000 ($20 – $50) per reel",
      "₹25,000 – ₹80,000 ($300 – $1,000) monthly"
    ]
  },
  {
    id: "data-analysis",
    name: "Data Analysis using AI Tools",
    charges: "₹3,000 – ₹8,000 ($40 – $100) basic",
    description: "Data insights, Excel dashboards, and AI-powered analysis for smarter business decisions.",
    details: [
      "₹3,000 – ₹8,000 ($40 – $100) basic",
      "₹10,000 – ₹30,000 ($120 – $350) dashboard"
    ]
  },
  {
    id: "brand-identity",
    name: "Brand Identity / Brand Book Design",
    charges: "₹12,000 – ₹30,000 ($150 – $350) basic",
    description: "Complete brand identity systems including logo usage, colors, typography, and guidelines.",
    details: [
      "₹12,000 – ₹30,000 ($150 – $350) basic",
      "₹40,000 – ₹1,00,000 ($500 – $1,200) full brand book"
    ]
  },
  {
    id: "product-showcase",
    name: "Product Showcase & Mockups",
    charges: "₹2,000 – ₹6,000 ($25 – $75) single",
    description: "Premium product visuals, mockups, and promotional designs for marketing and ads.",
    details: [
      "₹2,000 – ₹6,000 ($25 – $75) single",
      "₹8,000 – ₹25,000 ($100 – $300) set"
    ]
  },
  {
    id: "calligraphy",
    name: "Calligraphy (On-site / Digital)",
    charges: "₹2,000 – ₹6,000 ($25 – $75) artwork",
    description: "Custom calligraphy artwork and live event writing for unique brand or personal experiences.",
    details: [
      "₹2,000 – ₹6,000 ($25 – $75) artwork",
      "₹15,000 – ₹40,000 ($180 – $500) event/day"
    ]
  },
  {
    id: "ai-automation",
    name: "Prompt Engineering / AI Automation",
    charges: "₹3,000 – ₹10,000 ($40 – $120) prompt pack",
    description: "Custom AI prompts and workflow automation to improve productivity and business efficiency.",
    details: [
      "₹3,000 – ₹10,000 ($40 – $120) prompt pack",
      "₹15,000 – ₹50,000 ($180 – $600) automation"
    ]
  }
];

export default function ChargesPage() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-8">
              Service <span className="text-accent">Charges</span>
            </h1>
            <p className="text-text-muted text-xl max-w-3xl mx-auto">
              Premium design & AI solutions tailored for global brands. Pricing reflects quality, creativity, and results-driven execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-20 bg-secondary text-primary p-12 rounded-[3rem] text-center space-y-8"
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter">Ready to start your project?</h2>
            <p className="text-primary/60 max-w-xl mx-auto">Get in touch today for a custom quote tailored to your specific needs.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-12 py-6 bg-accent text-secondary font-black uppercase tracking-widest rounded-full hover:bg-accent-hover transition-all"
            >
              Contact Me Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </main>
      <QuoteFooter />
    </div>
  );
}

function ServiceCard({ service }: any) {
  return (
    <Link to={`/services/${service.id}`}>
      <motion.div
        whileHover={{ y: -10 }}
        className="h-full bg-white border border-border p-8 rounded-[2.5rem] flex flex-col justify-between hover:border-accent hover:shadow-xl transition-all"
      >
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight max-w-[70%]">
              {service.name}
            </h3>
            <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-[10px] uppercase tracking-widest font-black text-text-muted mb-2">Starting from</p>
          <p className="text-xl font-bold text-accent">{service.charges.split('per')[0]}</p>
        </div>
      </motion.div>
    </Link>
  );
}
