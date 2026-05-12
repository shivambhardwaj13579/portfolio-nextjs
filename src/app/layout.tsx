import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Bhardwaj — Full Stack Engineer",
  description: "Full Stack Engineer specializing in backend systems, scalable architecture, and real-world integrations.",
  openGraph: {
    title: "Shivam Bhardwaj — Full Stack Engineer",
    description: "Building systems that scale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
