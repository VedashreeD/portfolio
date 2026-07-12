import { useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight, Calendar } from "lucide-react";
import { Reveal, SectionLabel } from "../components/Shared";

const LINKS = [
  { href: "mailto:vedadasara@gmail.com", Icon: Mail, label: "Gmail", primary: false },
  { href: "https://www.linkedin.com/in/veda-dasara-97a137121/", Icon: Linkedin, label: "LinkedIn", primary: false },
];

export default function Contact() {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="Contact" className="py-28 px-6 max-w-6xl mx-auto">
      <Reveal><SectionLabel>Let's Work</SectionLabel></Reveal>
      <Reveal delay={0.1} y={60}>
        <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase leading-none mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
          Ready to Build<br /><span className="text-accent">Something Smart?</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-base text-muted-foreground max-w-lg mb-10 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          I’m always up for a good technical breakdown or collaboration. Let's connect or jump on a call!
        </p>
      </Reveal>

      {/* Contact links */}
      <Reveal delay={0.3}>
        <div className="flex flex-wrap gap-4 mb-16">
          {LINKS.map(({ href, Icon, label, primary }) => (
            <motion.a key={label} href={href} target={primary ? undefined : "_blank"} rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-wider relative overflow-hidden ${primary ? "bg-accent text-accent-foreground" : "border border-border text-foreground hover:border-accent hover:text-accent"}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              {primary && <motion.span className="absolute inset-0 bg-white/10" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.4 }} />}
              <Icon size={15} className="relative z-10" />
              <span className="relative z-10 flex items-center gap-1.5">
                {label}
                {primary && <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
              </span>
            </motion.a>
          ))}
        </div>
      </Reveal>

      {/* Calendly */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* decorative frame corners */}
        <div className="absolute -inset-2 border border-accent/10 pointer-events-none" />
        <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-accent" />
        <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-accent" />

        <div className="border border-border bg-card relative z-10 overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground flex items-center gap-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              <Calendar size={12} /> Schedule a meeting
            </span>
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/dasaraveda/new-meeting?hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </motion.div>

      {/* Footer */}
      <Reveal delay={0.4}>
        <div className="border-t border-border pt-8 mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>© 2025 Veda Dasara - AI Engineer</span>
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>Built with React + TypeScript</span>
        </div>
      </Reveal>
    </section>
  );
}
