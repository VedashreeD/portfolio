import { motion } from "motion/react";
import { Brain, Database, Cpu, Globe, Terminal } from "lucide-react";
import { Reveal, SectionLabel } from "../components/Shared";

const STACK = [
  { icon: <Brain size={16} />, label: "Fine-Tuning & Alignment", detail: "QLoRA, LoRA, DPO, SFT, Reinforcement Learning (RLHF)" },
  { icon: <Database size={16} />, label: "Data Pipelines & Vector", detail: "Custom Datasets, Neo4j, pgvector, Pinecone, Azure Search Service" },
  { icon: <Cpu size={16} />, label: "Training & Serving", detail: "PyTorch, vLLM, Transformers" },
  { icon: <Globe size={16} />, label: "MLOps & GPU Cloud", detail: "Azure, AWS, Kubernetes, Weights & Biases (W&B) / MLflow" },
  { icon: <Terminal size={16} />, label: "Languages & Frameworks", detail: "Python, C/C++, CUDA, TypeScript, SQL" },
];


export default function About() {
  return (
    <section id="About" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <Reveal><SectionLabel>About</SectionLabel></Reveal>
          <Reveal delay={0.1} y={50}>
            <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase leading-none mb-8"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>
              From Research<br /><span className="text-accent">To Production</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p>"I specialize in AI research and enterprise-systems deployment, taking novel model architectures and making them fast, reliable, and cost-efficient at scale.</p>
              <p>Previously led AI developement at an early-stage startup, built agentic systems for autonomous retail, and contributed to open-source tooling aactively used bypractitioners on GitHub.</p>
              <p>My focus is always on on building reliable systems that prioritize interpretability, strict safety guardrails, and stable production uptime."</p>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          <Reveal><SectionLabel>Stack Snapshot</SectionLabel></Reveal>
          {STACK.map((item, i) => (
            <Reveal key={item.label} delay={0.05 * i}>
              <motion.div className="flex items-center gap-4 border border-border px-5 py-4 bg-card cursor-default"
                whileHover={{ x: 8, borderColor: "rgba(0,229,160,0.35)", backgroundColor: "rgba(0,229,160,0.04)" }}
                transition={{ duration: 0.22 }}>
                <span className="text-accent flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>{item.label}</div>
                  <div className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.detail}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
