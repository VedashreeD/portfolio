import { useEffect, useState } from "react";

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest("a,button,input,textarea,select,[data-cursor]");
      setIsHovering(interactive);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ left: position.x, top: position.y }}
    >
      <div className={`relative transition-transform duration-200 ${isHovering ? "scale-150" : "scale-100"}`}>
        <div className="h-4 w-4 rounded-full border border-white/80 bg-accent/90 shadow-[0_0_0_4px_rgba(255,255,255,0.16)]" />
        <div
          className={`absolute inset-0 rounded-full border border-accent/60 transition-all duration-200 ${
            isHovering ? "h-8 w-8 -m-2 border-[2px]" : "h-5 w-5 -m-0.5"
          }`}
        />
      </div>
    </div>
  );
}

export function Reveal({ children, delay = 0, y = 40, x = 0, className = "" }: {
  children: React.ReactNode; delay?: number; y?: number; x?: number; className?: string;
}) {
  return (
    <div className={className} style={{ transform: `translate(${x}px, ${y}px)` }}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-accent" />
      <span className="text-[0.65rem] uppercase tracking-widest text-accent"
        style={{ fontFamily: "'Geist Mono', monospace" }}>{children}</span>
    </div>
  );
}
