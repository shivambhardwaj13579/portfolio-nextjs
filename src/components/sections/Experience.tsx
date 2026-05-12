"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    date: "2023 — Present",
    company: "Uolo EdTech",
    role: "Associate Software Development Engineer",
    accentColor: "var(--accent)",
    achievements: [
      "Architected a role-based POD approval system — principals, coordinators, teachers. Built from schema design to UI, zero ambiguity in permissions.",
      "Designed and implemented a RabbitMQ message queue for async background jobs — decoupled heavy processing from request cycles.",
      "Integrated Zoho CRM for lead management workflows and CEVA logistics for order tracking pipelines.",
      "Worked across the full stack — Spring Boot APIs, React frontends, PostgreSQL schemas, deployment configs.",
    ],
    tags: ["React.JS", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "RabbitMQ", "Zoho API", "ElasticSearch", "Docker"],
    tagAccent: "var(--accent)",
    tagBg: "rgba(108,140,255,0.06)",
    tagBorder: "rgba(108,140,255,0.2)",
  },
  {
    date: "2022 — 2023",
    company: "Student Trainee",
    role: "Azure AI & Cloud Engineering",
    accentColor: "var(--accent2)",
    achievements: [
      "Trained on Microsoft Azure AI services — Cognitive Services, Azure ML pipelines, and cloud deployment patterns.",
      "Built hands-on ML prototypes with Azure tooling; understood cloud-first architecture from the ground up.",
      "Worked with REST APIs, containerization basics, and CI/CD concepts in Azure DevOps.",
    ],
    tags: ["Azure", "Azure AI", "Python", "ML"],
    tagAccent: "var(--accent2)",
    tagBg: "rgba(167,139,250,0.06)",
    tagBorder: "rgba(167,139,250,0.3)",
  },
];

function TimelineItem({ exp, i }: { exp: typeof experiences[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", paddingLeft: "3rem", paddingBottom: "4rem" }}
    >
      <div style={{
        position: "absolute", left: -5, top: 8,
        width: 10, height: 10, borderRadius: "50%",
        background: exp.accentColor, boxShadow: `0 0 16px ${exp.accentColor}`,
      }} />

      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: exp.accentColor, marginBottom: "0.75rem" }}>
        {exp.date}
      </div>
      <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>
        {exp.company}
      </div>
      <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--text2)", marginBottom: "1.25rem" }}>
        {exp.role}
      </div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {exp.achievements.map((a, j) => (
          <li key={j} style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text2)", paddingLeft: "1.25rem", position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent3)", fontSize: "0.8rem" }}>→</span>
            {a}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem" }}>
        {exp.tags.map((tag) => (
          <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", padding: "0.3rem 0.75rem", borderRadius: 100, background: exp.tagBg, border: `1px solid ${exp.tagBorder}`, color: exp.tagAccent, letterSpacing: "0.05em" }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative z-10" style={{ background: "var(--bg2)", padding: "8rem 4rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ width: 24, height: 1, background: "var(--accent)", display: "block" }} />
          Experience
        </div>

        <motion.h2
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "4rem" }}
        >
          Where I&apos;ve<br />
          <span style={{ color: "var(--text2)" }}>shipped.</span>
        </motion.h2>

        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
            background: "linear-gradient(to bottom, transparent, var(--border2) 20%, var(--border2) 80%, transparent)",
          }} />
          {experiences.map((exp, i) => <TimelineItem key={exp.company} exp={exp} i={i} />)}
        </div>
      </div>
    </section>
  );
}
