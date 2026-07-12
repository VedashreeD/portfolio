import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const BG_IMAGES = [
  { url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1920&h=1080&fit=crop&auto=format", alt: "Abstract neural network" },
  { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format", alt: "Circuit board macro" },
  { url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&h=1080&fit=crop&auto=format", alt: "Deep space nebula" },
];

const STATS = [
  { value: "11", suffix: "", label: "Enterprise AI Systems Shipped" },
  { value: "94.2", suffix: "%", label: "Production Model Accuracy" },
  { value: "30", suffix: "%", label: "Compute Cost Reduction" },
  { value: "1", suffix: "M+", label: "Daily Production Inferences" },
];



function useTypingEffect(strings: string[], speed = 55, pause = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [si, setSi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = strings[si];
    let t: ReturnType<typeof setTimeout>;
    if (!del && ci < cur.length) t = setTimeout(() => setCi(c => c + 1), speed);
    else if (!del) t = setTimeout(() => setDel(true), pause);
    else if (del && ci > 0) t = setTimeout(() => setCi(c => c - 1), speed / 2);
    else { setDel(false); setSi(s => (s + 1) % strings.length); }
    setDisplayed(cur.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, si, strings, speed, pause]);
  return displayed;
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let f = 0; const tot = Math.ceil(1400 / 16);
        const id = setInterval(() => { f++; setN(Math.round((f / tot) * to)); if (f >= tot) { setN(to); clearInterval(id); } }, 16);
      }
    }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Hero({ onNav }: { onNav: (s: string) => void }) {
  const [imgIndex, setImgIndex] = useState(0);
  const typed = useTypingEffect(["Large Language Models", "Autonomous AI Agents", "Computer Vision Systems", "Generative AI Products"]);

  useEffect(() => {
    const id = setInterval(() => setImgIndex(i => (i + 1) % BG_IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const mouseX = useMotionValue(0), mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 80, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { stiffness: 80, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="relative h-screen" style={{ position: "sticky", top: 0, zIndex: 0 }}>
      {/* Rotating backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {BG_IMAGES.map((img, i) => (
          <motion.div key={img.url} className="absolute inset-0"
            animate={{ opacity: i === imgIndex ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ zIndex: i === imgIndex ? 1 : 0 }}>
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover"
              style={{ filter: "saturate(0.6) brightness(0.5)" }} />
          </motion.div>
        ))}
        <div className="absolute inset-0 z-10"
          style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(6,6,8,0.75) 100%)" }} />
        <div className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to bottom, rgba(6,6,8,0.2) 0%, transparent 40%, rgba(6,6,8,0.85) 100%)" }} />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {BG_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setImgIndex(i)}
            className={`transition-all duration-300 rounded-full ${i === imgIndex ? "w-6 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"}`} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24 pb-20">
        <motion.div style={{ rotateX, rotateY, transformPerspective: 1000 }}>
          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,10vw,9.5rem)] font-black leading-[0.85] uppercase tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
            Veda<br /><span className="text-accent">Dasara</span>
          </motion.h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="mt-8 mb-10">
          <p className="text-[clamp(0.9rem,2.2vw,1.3rem)] text-muted-foreground"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {">"} Building{" "}
            <span className="text-foreground">
              {typed}
              <span className="inline-block w-0.5 h-[1em] bg-accent ml-0.5 animate-pulse align-middle" />
            </span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            AI/ML engineer with 6+ years shipping production intelligence, from designing and building fine-tuned language models to design architectures.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap gap-4 mb-14">
          <motion.a
            href="https://drive.google.com/file/d/1Rsu28jxQgMROv9QaLmDC4ZdyVLkj-bT8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-wider overflow-hidden relative"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <span className="relative z-10 flex items-center gap-2">
              View Resume <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            <motion.span className="absolute inset-0 bg-white/10" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.4 }} />
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {STATS.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 + i * 0.08 }}>
              <div className="text-[2.6rem] font-black text-accent leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[0.65rem] text-muted-foreground mt-1.5 uppercase tracking-widest"
                style={{ fontFamily: "'Geist Mono', monospace" }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
