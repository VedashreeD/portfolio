import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Github, Trophy, BookOpen, Code2, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "../components/Shared";

const LINK_CARDS = [
  { id: "hackathons", title: "Hackathons", sub: "Devpost", description: "Demo days, and project showcases from hackathons.", url: "https://devpost.com/v-d", Icon: Trophy, glow: "#ff6b35", tag: "Compete" },
  { id: "repos", title: "Open Source", sub: "GitHub", description: "Public repositories, side projects, and open-source contributions, all forks welcome.", url: "https://github.com/VedashreeD?tab=repositories", Icon: Github, glow: "#00e5a0", tag: "Build" },
  { id: "medium", title: "The Build Log", sub: "Medium", description: "Tutorials for practitioners.", url: "https://medium.com/@theBuildLog", Icon: BookOpen, glow: "#a78bfa", tag: "Write" },
  { id: "opengenus", title: "OpenGenus IQ", sub: "opengenus.org", description: "Technical deep-dives.", url: "https://iq.opengenus.org/author/vedashree/", Icon: Code2, glow: "#fbbf24", tag: "Teach" },
];

const CARD_H = 136, CARD_GAP = 16;

function DeckCard({ card, index, isVisible }: { card: typeof LINK_CARDS[number]; index: number; isVisible: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const stackY = -(index * (CARD_H + CARD_GAP));

  return (
    <motion.a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ zIndex: LINK_CARDS.length - index, perspective: 1200, display: "block" }}
      initial={{ y: stackY, x: index * 7, rotate: index * -2.2, scale: 1 - index * 0.03 }}
      animate={isVisible ? { y: 0, x: 0, rotate: 0, scale: 1 } : { y: stackY, x: index * 7, rotate: index * -2.2, scale: 1 - index * 0.03 }}
      transition={{ duration: 0.7, delay: isVisible ? index * 0.13 : 0, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsFlipped(true)}
      onFocus={() => setIsFlipped(true)}
      data-cursor
    >
      <motion.div animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d", height: CARD_H }} className="relative w-full">

        {/* Front */}
        <div className="absolute inset-0 border border-border bg-card flex items-center gap-5 px-6 overflow-hidden cursor-pointer"
          style={{ backfaceVisibility: "hidden" }}>
          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full blur-2xl opacity-25 pointer-events-none"
            style={{ background: card.glow }} />
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border"
            style={{ borderColor: `${card.glow}44`, background: `${card.glow}12` }}>
            <card.Icon size={22} style={{ color: card.glow }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-black uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>{card.title}</h3>
              <span className="text-[0.6rem] uppercase tracking-widest border px-2 py-0.5 flex-shrink-0"
                style={{ fontFamily: "'Geist Mono', monospace", color: card.glow, borderColor: `${card.glow}44` }}>{card.tag}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed truncate"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.description}</p>
          </div>
          <ArrowUpRight size={16} className="flex-shrink-0 text-muted-foreground" />
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 border overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: `linear-gradient(120deg, ${card.glow}20, ${card.glow}08)`, borderColor: `${card.glow}55` }}>
          <motion.div className="absolute w-36 h-36 rounded-full border opacity-15" style={{ borderColor: card.glow }}
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute w-20 h-20 rounded-full border opacity-25" style={{ borderColor: card.glow }}
            animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
          <card.Icon size={26} style={{ color: card.glow }} className="relative z-10" />
          <div className="relative z-10">
            <p className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: "'Geist Mono', monospace" }}>{card.sub}</p>
            <div className="font-black uppercase tracking-wider text-base flex items-center gap-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: card.glow, fontWeight: 900 }}>
              Visit Profile <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}

export default function Projects() {
  const deckRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(deckRef, { once: true, margin: "-80px" });

  return (
    <section id="Projects" className="py-28 px-6 max-w-6xl mx-auto">
      <Reveal><SectionLabel>Work & Writing</SectionLabel></Reveal>
      <Reveal delay={0.1} y={50}>
        <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase leading-none mb-3"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>Projects</h2>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="text-xs text-muted-foreground mb-14" style={{ fontFamily: "'Geist Mono', monospace" }}>
          - hover a card to flip it &amp; click to visit
        </p>
      </Reveal>

      <div ref={deckRef} style={{ height: LINK_CARDS.length * CARD_H + (LINK_CARDS.length - 1) * CARD_GAP }} className="relative">
        <motion.div className="absolute left-0 right-0 flex items-center justify-center border border-accent/20 bg-accent/5 pointer-events-none"
          style={{ height: CARD_H, top: 0 }}
          initial={{ opacity: 1 }} animate={isVisible ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 0.05 }}>
          <div className="flex gap-3 items-center">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-xs text-accent/60 uppercase tracking-widest" style={{ fontFamily: "'Geist Mono', monospace" }}>
              {LINK_CARDS.length} items
            </span>
          </div>
        </motion.div>

        {LINK_CARDS.map((card, i) => (
          <div key={card.id} className="absolute left-0 right-0" style={{ top: i * (CARD_H + CARD_GAP) }}>
            <DeckCard card={card} index={i} isVisible={isVisible} />
          </div>
        ))}
      </div>
    </section>
  );
}
