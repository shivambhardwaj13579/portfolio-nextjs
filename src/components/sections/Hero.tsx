"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-16 max-md:px-8"
    >
      {/* Grid background */}
      <motion.div
        style={{
          y: gridY,
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(108,140,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,140,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Orbs */}
      <motion.div
        style={{
          y: orb1Y,
          position: "absolute", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(108,140,255,0.12) 0%, transparent 70%)",
          top: -100, right: -100, zIndex: 0,
        }}
        animate={{ x: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          y: orb2Y,
          position: "absolute", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
          bottom: 0, left: "20%", zIndex: 0,
        }}
        animate={{ x: [0, 20, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.div
          {...fadeUp(0.2)}
          className="flex items-center gap-3 mb-6"
          style={{
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)",
          }}
        >
          <span style={{ width: 32, height: 1, background: "var(--accent)", display: "block" }} />
          Available for new opportunities
        </motion.div>

        <motion.h1
          {...fadeUp(0.35)}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 8vw, 8rem)",
            fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.04em",
            color: "var(--text)", marginBottom: "0.5rem",
          }}
        >
          Shivam
          <br />
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(240,242,248,0.3)" }}>
            Bhardwaj
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
            color: "var(--text2)", marginBottom: "2rem",
          }}
        >
          Full Stack Engineer
        </motion.p>

        <motion.p
          {...fadeUp(0.65)}
          style={{
            fontFamily: "var(--font-mono)", fontWeight: 300,
            fontSize: "1.1rem", lineHeight: 1.7, color: "var(--text2)", maxWidth: 520,
          }}
        >
          I build systems that scale —<br />
          from microservices to integrations<br />
          that actually work in production.
        </motion.p>

        <motion.div {...fadeUp(0.8)} className="flex gap-4 mt-12">
          <a
            href="#projects"
            className="px-8 py-3 font-semibold text-sm rounded-[6px] no-underline transition-all duration-200"
            style={{ background: "var(--accent)", color: "#fff", letterSpacing: "0.02em" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(108,140,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 font-medium text-sm rounded-[6px] no-underline transition-all duration-200"
            style={{ border: "1px solid var(--border2)", color: "var(--text2)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--text2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.borderColor = "var(--border2)"; }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-16 hidden md:flex items-center gap-2"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text3)", letterSpacing: "0.1em" }}
      >
        <motion.div
          animate={{ scaleY: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          style={{ width: 1, height: 40, background: "var(--text3)" }}
        />
        Scroll
      </motion.div>
    </section>
  );
}
