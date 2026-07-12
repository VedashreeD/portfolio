import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Featured from "../sections/Featured";
import Contact from "../sections/Contact";

const NAV_ITEMS = ["About", "Projects", "Featured", "Contact"];

function NavBar({ active, onNav }: { active: string; onNav: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest text-accent uppercase cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Geist Mono', monospace" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>HOME</span>
        <div className="flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => onNav(item)}
              className={`text-xs tracking-widest uppercase transition-colors duration-200 relative group ${active === item ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              {item}
              <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${active === item ? "w-full" : "w-0 group-hover:w-full"}`} />
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default function App() {
  const [active, setActive] = useState("");

  const onNav = (name: string) => {
    if (name === "About") window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    else document.getElementById(name)?.scrollIntoView({ behavior: "smooth" });
    setActive(name);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    NAV_ITEMS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground" style={{ scrollbarWidth: "none" }}>
      <style>{`::-webkit-scrollbar{display:none}`}</style>
      <NavBar active={active} onNav={onNav} />
      <Hero onNav={onNav} />
      <div className="relative bg-background" style={{ zIndex: 10 }}>
        <About />
        <Projects />
        <Featured />
        <Contact />
      </div>
    </div>
  );
}
