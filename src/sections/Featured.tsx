import { motion } from "motion/react";
import { Trophy, Award, Bot } from "lucide-react";
import { Reveal, SectionLabel } from "../components/Shared";

const ACHIEVEMENTS = [
  {
    Icon: Trophy,
    glow: "#fbbf24",
    title: "Vision Team Award",
    sub: "SmartSelect AI",
    body: "Recognized for building SmartSelect AI, an intelligent product used by teams to help minimize workloads.",
  },
  {
    Icon: Award,
    glow: "#a78bfa",
    title: "William J. Williams Nominee",
    sub: "Academic Excellence",
    body: "Nominated for the William J. Williams award in recognition of building RAG systems.",
  },
  {
    Icon: Bot,
    glow: "#00e5a0",
    title: "Agentic AI at Scale",
    sub: "Thousands of Daily Users",
    body: "Architected and deployed agentic websites, now serving thousands of customers every day, autonomously handling complex, multi-step workflows.",
  },
];

function AchievementCard({ item, index }: { item: typeof ACHIEVEMENTS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 6, borderColor: `${item.glow}55` }}
      className="relative border border-border bg-card p-6 overflow-hidden group transition-colors duration-300"
    >
      {/* corner glow */}
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ background: item.glow }} />
      {/* left accent bar */}
      <motion.div className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ background: item.glow }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }} />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border mt-0.5"
          style={{ borderColor: `${item.glow}44`, background: `${item.glow}12` }}>
          <item.Icon size={18} style={{ color: item.glow }} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-lg font-black uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>{item.title}</h3>
            <span className="text-[0.6rem] uppercase tracking-widest border px-2 py-0.5"
              style={{ fontFamily: "'Geist Mono', monospace", color: item.glow, borderColor: `${item.glow}44` }}>{item.sub}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.body}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Featured() {
  return (
    <section id="Featured" className="py-28 px-6 max-w-6xl mx-auto">
      <Reveal><SectionLabel>Featured</SectionLabel></Reveal>
      <Reveal delay={0.1} y={50}>
        <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase leading-none mb-14"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
          Recognition &<br /><span className="text-accent">Impact</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LinkedIn post */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* decorative frame */}
          <div className="absolute -inset-2 border border-accent/10 pointer-events-none" />
          <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-accent" />
          <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-accent" />

          <div className="overflow-hidden bg-card border border-border relative z-10">
            <div className="px-4 pt-4 pb-1 flex items-center gap-2 border-b border-border">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground"
                style={{ fontFamily: "'Geist Mono', monospace" }}>LinkedIn · Featured Post</span>
            </div>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7438192443713519616"
              height="824"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Featured LinkedIn post"
              className="w-full block"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-muted-foreground leading-relaxed mb-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Award wins, nominations, and the systems built.
          </motion.p>

          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
