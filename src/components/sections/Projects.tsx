"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    num: "01",
    icon: "📧",
    title: "MailMind",
    desc: "An email intelligence system that goes beyond filtering. Classifies, summarises, and surfaces what actually matters — built to handle high-volume inboxes without the noise.",
    impact: "Reduced email triage time by processing and categorizing 1000s of messages automatically.",
    stack: ["Python", "Gmail APIs", "OpenAI API", "Calander APIs", "Slack Bot APIs", "MYSQL"],
    link: "https://github.com/shivambhardwaj13579/Email-Automation-With-Python",
  },
  {
    num: "02",
    icon: "📊",
    title: "Data Analyst Jobs",
    desc: "A market analysis tool that scrapes, normalises, and visualises the data analyst job landscape — skills in demand, salary bands, location clusters.",
    impact: "Aggregated 10,000+ job listings to surface actionable market insights for job seekers.",
    stack: ["Tableau", "Data Analysis", "Excel"],
    link: "https://github.com/shivambhardwaj13579/Data-Analyst-Jobs-Tableau-Project",
  },
];

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [mouse, setMouse] = useState({ x: "50%", y: "50%" });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%",
      y: ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%",
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: `1px solid ${hovered ? "var(--border2)" : "var(--border)"}`,
        borderRadius: 16, padding: "2.5rem",
        position: "relative", overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s",
        transform: hovered ? "translateY(-6px)" : "none",
        cursor: "default",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        background: `radial-gradient(600px circle at ${mouse.x} ${mouse.y}, rgba(108,140,255,0.06), transparent 50%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Arrow */}
        <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
          position: "absolute", top: 0, right: 0,
          width: 32, height: 32, borderRadius: "50%",
          background: hovered ? "var(--accent)" : "var(--surface2)",
          border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hovered ? "#fff" : "var(--text3)", fontSize: "0.9rem",
          transition: "all 0.3s",
          transform: hovered ? "rotate(45deg)" : "none",
          textDecoration: "none",
        }}>↗</a>

        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text3)", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>
          {p.num}
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--surface2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: "1.5rem" }}>
          {p.icon}
        </div>
        <div style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: "0.75rem" }}>
          {p.title}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text2)", marginBottom: "1.5rem" }}>
          {p.desc}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent3)", marginBottom: "1.5rem", padding: "0.75rem 1rem", background: "rgba(52,211,153,0.06)", borderLeft: "2px solid var(--accent3)", borderRadius: "0 6px 6px 0" }}>
          {p.impact}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {p.stack.map((s) => (
            <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", padding: "0.25rem 0.6rem", borderRadius: 4, background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text2)" }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative z-10 px-16 py-32 max-md:px-8 max-md:py-16 max-w-6xl mx-auto">
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{ width: 24, height: 1, background: "var(--accent)", display: "block" }} />
        Projects
      </div>

      <motion.h2
        ref={headRef}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}
      >
        Things I<br />
        <span style={{ color: "var(--text2)" }}>built.</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 mt-12 max-md:grid-cols-1">
        {projects.map((p, i) => <ProjectCard key={p.num} p={p} i={i} />)}
      </div>
    </section>
  );
}
