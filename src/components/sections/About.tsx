"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "1+", label: "years professional exp" },
  { num: "5+", label: "production systems shipped" },
  { num: "3rd", label: "party integrations built" },
  { num: "∞", label: "async queues debugged" },
];

function AnimatedStat({ num, label, i }: { num: string; label: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-7 rounded-xl transition-all duration-300"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border2)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--accent)", lineHeight: 1, marginBottom: "0.5rem" }}>
        {num}
      </div>
      <div style={{ fontSize: "0.85rem", color: "var(--text2)", fontFamily: "var(--font-mono)" }}>{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative z-10 px-16 py-32 max-md:px-8 max-md:py-16 max-w-6xl mx-auto">
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{ width: 24, height: 1, background: "var(--accent)", display: "block" }} />
        About
      </div>

      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "1rem" }}
      >
        Not just code.<br />
        <span style={{ color: "var(--text2)" }}>Craft.</span>
      </motion.h2>

        <div className="grid grid-cols-2 gap-24 items-center mt-16 max-md:grid-cols-1 max-md:gap-12">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -40 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            <p key="1" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text2)", marginBottom: "1.25rem", fontFamily: "var(--font-mono)", fontWeight: 300 }}>
              I&apos;m a <strong style={{ color: "var(--text)", fontWeight: 500 }}>Full Stack Engineer</strong> who leans heavily on the backend. I think in systems — queues, services, data flows, failure modes.
            </p>,
            <p key="3" style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text2)", fontFamily: "var(--font-mono)", fontWeight: 300 }}>
              I&apos;m interested in <strong style={{ color: "var(--text)", fontWeight: 500 }}>building things that last</strong> — clean architecture, sensible abstractions, and code the next developer won&apos;t curse.
            </p>,
          ]}
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {stats.map((s, i) => <AnimatedStat key={s.num} {...s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
