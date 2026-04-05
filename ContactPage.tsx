import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Copy, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import QuoteFooter from "../components/QuoteFooter";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("dipenpandya8185@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-40 pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-8">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-text-muted text-xl max-w-2xl">
              Ready to elevate your brand? Let's discuss how my design and AI solutions can drive results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Email */}
            <ContactCard
              icon={<Copy size={24} />}
              label="Email"
              value="dipenpandya8185@gmail.com"
              action={copyEmail}
              actionLabel={copied ? "Copied!" : "Click to Copy"}
            />

            {/* Mobile */}
            <ContactCard
              icon={<Phone size={24} />}
              label="Mobile"
              value="+91 8320841024"
              secondaryAction={
                <a 
                  href="https://wa.me/918320841024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-secondary transition-colors"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              }
              action={<a href="tel:+918320841024">Call Now</a>}
            />

            {/* Address */}
            <ContactCard
              icon={<MapPin size={24} />}
              label="Address"
              value="D 24 Revadiyadham duplex, Opp. Janodvadi, new VIP road, Vadodara, Gujarat, India - 390022"
              action={
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=D+24+Revadiyadham+duplex,+Opp.+Janodvadi,+new+VIP+road,+Vadodara,+Gujarat,+India+-+390022" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Open Map <ExternalLink size={14} />
                </a>
              }
            />
          </div>
        </div>
      </main>
      <QuoteFooter />
    </div>
  );
}

function ContactCard({ icon, label, value, action, actionLabel, secondaryAction }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white border border-border p-10 rounded-[3rem] space-y-8 transition-all hover:shadow-2xl hover:border-accent"
    >
      <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-secondary transition-all">
        {icon}
      </div>
      
      <div className="space-y-4">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-text-muted group-hover:text-accent transition-colors">
          {label}
        </p>
        <h3 className="text-2xl font-bold leading-tight group-hover:text-secondary transition-colors">
          {value}
        </h3>
      </div>

      <div className="pt-4 flex flex-col gap-4">
        {action && (
          <div 
            onClick={typeof action === 'function' ? action : undefined}
            className="text-xs font-black uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:text-accent transition-colors"
          >
            {actionLabel || action}
          </div>
        )}
        {secondaryAction && (
          <div className="text-xs font-black uppercase tracking-widest">
            {secondaryAction}
          </div>
        )}
      </div>
    </motion.div>
  );
}
