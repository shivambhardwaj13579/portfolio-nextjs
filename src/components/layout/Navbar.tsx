"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-16 py-6 transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(8,10,15,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }
          : {}
      }
    >
      <Link
        href="#"
        className="text-[1.1rem] font-bold tracking-tight no-underline"
        style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}
      >
        S<span style={{ color: "var(--accent)" }}>.</span>B
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[0.8rem] font-medium uppercase tracking-widest no-underline transition-colors duration-200"
              style={{ color: "var(--text2)", fontFamily: "var(--font-mono)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text2)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="text-[0.8rem] font-medium px-5 py-2 rounded-[4px] no-underline transition-all duration-200"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text)",
          border: "1px solid var(--border2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.background = "var(--glow)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border2)";
          e.currentTarget.style.background = "transparent";
        }}
      >
        Let&apos;s talk →
      </a>
    </nav>
  );
}
