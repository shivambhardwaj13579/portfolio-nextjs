export default function Footer() {
  return (
    <footer
      className="relative z-10 flex justify-between items-center flex-wrap gap-4"
      style={{
        padding: "3rem 4rem",
        borderTop: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        color: "var(--text3)",
      }}
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
