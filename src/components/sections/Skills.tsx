"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Languages",
    pills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
    color: "var(--accent)", bg: "rgba(108,140,255,0.06)", border: "rgba(108,140,255,0.3)",
  },
  {
    label: "Frameworks & Libs",
    pills: ["React", "Next.js", "Node.js", "Express.js", "ElasticSearch"],
    color: "var(--accent2)", bg: "rgba(167,139,250,0.06)", border: "rgba(167,139,250,0.3)",
  },
  {
    label: "Tools & Infra",
    pills: ["RabbitMQ", "PostgreSQL", "Postman", "Docker", "GitHub", "Azure", "PowerBI"],
    color: "var(--accent3)", bg: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.3)",
  },
];

const marqueeItems = ["React.JS", "RabbitMQ", "PostgreSQL", "Next.js", "TypeScript", "Python", "Docker", "Redis", "Express.JS", "MongoDB", "Node.JS", "AWS", "PowerBI", "Tableau"];

function SkillCategory({ cat, i }: { cat: typeof categories[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "1rem" }}>
        {cat.label}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {cat.pills.map((pill) => (
          <span
            key={pill}
            style={{
              fontFamily: "var(--font-mono)", fontSize: "0.8rem",
              padding: "0.5rem 1rem", borderRadius: 6,
              background: cat.bg, border: `1px solid ${cat.border}`,
              color: cat.color,
              transition: "transform 0.2s, opacity 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
          >
            {pill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative z-10 bg-[var(--bg2)] px-16 py-32 max-md:px-8 max-md:py-16">
      <div className="max-w-6xl mx-auto">
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)", display: "block" }} />
          Skills
        </div>

        <motion.h2
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "3rem" }}
        >
          The<br /><span style={{ color: "var(--text2)" }}>stack.</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {categories.map((cat, i) => <SkillCategory key={cat.label} cat={cat} i={i} />)}
        </div>

        {/* Marquee */}
        <div style={{ marginTop: "4rem", overflow: "hidden" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "1rem" }}>
            Currently working with
          </div>
          <div
            style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap", animation: "marquee 20s linear infinite" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)", fontWeight: 700,
                  color: i % 2 === 0 ? "var(--border2)" : "var(--border2)",
                  letterSpacing: "-0.02em", whiteSpace: "nowrap",
                  transition: "color 0.2s", cursor: "default",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--border2)"; }}
              >
                {item}
                {i < [...marqueeItems, ...marqueeItems].length - 1 && (
                  <span style={{ color: "var(--accent)", fontWeight: 400, margin: "0 0.5rem" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
