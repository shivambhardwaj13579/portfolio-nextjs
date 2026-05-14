export default function Footer() {
  return (
    <footer
      className="relative z-10 flex justify-between items-center flex-wrap gap-4 px-16 py-12 max-md:px-8 max-md:py-6 border-t border-[var(--border)] font-mono text-xs text-[var(--text3)]"
    >
      <span>© 2026 Shivam Bhardwaj</span>
      <span>Designed &amp; developed with craft</span>
      <span>
        Gurugram, India{" "}
        <span style={{ color: "var(--accent)" }}>●</span>{" "}
        Open to Remote(in you ❤️)
      </span>
    </footer>
  );
}
