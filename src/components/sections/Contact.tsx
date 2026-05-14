"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/shivambhardwaj13579",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77A5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shivambhardwaj13579",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+918076466382",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.67 19.79 19.79 0 01.36 1.06 2 2 0 012.34 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0121 14.92z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:shivambhardwaj13579@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative z-10 px-16 py-32 max-md:px-8 max-md:py-16 max-w-6xl mx-auto text-center">
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
        <span style={{ width: 24, height: 1, background: "var(--accent)", display: "block" }} />
        Contact
      </div>

      <motion.h2
        ref={headRef}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}
      >
        Let&apos;s build<br />
        <span style={{ color: "var(--text2)" }}>something.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--text2)", maxWidth: 480, margin: "1.5rem auto 0", lineHeight: 1.7, fontWeight: 300 }}
      >
        Open to full-time roles, contracts, and interesting problems. If you&apos;ve got a system that needs thinking through — I&apos;m listening.
      </motion.p>

      <motion.a
        href="mailto:shivambhardwaj13579@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
        style={{
          fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em",
          color: "var(--text)", textDecoration: "none", display: "inline-block",
          margin: "3rem 0", borderBottom: "2px solid var(--border)", paddingBottom: "0.5rem",
          transition: "color 0.3s, border-color 0.3s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--border)"; }}
      >
        Shivam Bhardwaj
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.35 }}
        style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener" : undefined}
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.05em",
              color: "var(--text2)", textDecoration: "none", padding: "0.75rem 1.5rem",
              border: "1px solid var(--border)", borderRadius: 8,
              transition: "color 0.3s, border-color 0.3s, background 0.3s, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "var(--glow)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text2)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "none";
            }}
          >
            {l.icon}
            {l.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
