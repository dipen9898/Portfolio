import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-secondary text-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Let's<br /><span className="text-accent">Connect</span>
            </h2>
            <p className="text-primary/60 text-lg max-w-md">
              Have a project in mind? Or just want to say hi? I'm always open to new creative opportunities and collaborations.
            </p>
          </div>

          <div className="space-y-6">
            <ContactInfo Icon={Mail} label="Email" value="hello@visualpoetry.com" />
            <ContactInfo Icon={Phone} label="Phone" value="+44 20 7946 0958" />
            <ContactInfo Icon={MapPin} label="Studio" value="Shoreditch, London, UK" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 p-8 md:p-12 rounded-[3rem] border border-primary/10 backdrop-blur-sm"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Name" placeholder="John Doe" />
              <InputField label="Email" placeholder="john@example.com" type="email" />
            </div>
            <InputField label="Subject" placeholder="Project Inquiry" />
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Message</label>
              <textarea
                placeholder="Tell me about your vision..."
                rows={4}
                className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-accent outline-none transition-colors resize-none"
              />
            </div>
            <button className="w-full py-6 rounded-full bg-accent text-secondary font-black uppercase tracking-widest hover:bg-accent-hover transition-all flex items-center justify-center gap-3">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfo({ Icon, label, value }: { Icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
        <Icon size={20} className="group-hover:text-secondary" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-50">{label}</p>
        <p className="text-lg font-medium">{value}</p>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-primary/20 py-4 focus:border-accent outline-none transition-colors"
      />
    </div>
  );
}
