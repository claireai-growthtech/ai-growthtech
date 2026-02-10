import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-GrowthTech | The Advantage Engine™",
  description:
    "Become the default authoritative answer in AI. AEO strategy, authority and optimisation delivered by AI Growth Tech × Advantage Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ margin: 0 }}
      >
        <header
          style={{
            padding: "1.25rem 4rem",
            borderBottom: "1px solid #eee",
            fontFamily: "system-ui",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#111",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            AI-GrowthTech
          </Link>

          <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services"
              style={{ textDecoration: "none", color: "#111" }}
            >
              Services
            </Link>
            <Link
              href="/aeo-visibility-score"
              style={{ textDecoration: "none", color: "#111" }}
            >
              Visibility Score
            </Link>
            <Link
              href="/contact"
              style={{ textDecoration: "none", color: "#111" }}
            >
              Contact
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          style={{
            padding: "2rem 4rem",
            borderTop: "1px solid #eee",
            fontFamily: "system-ui",
          }}
        >
          <small>© {new Date().getFullYear()} AI-GrowthTech</small>
        </footer>
      </body>
    </html>
  );
}
