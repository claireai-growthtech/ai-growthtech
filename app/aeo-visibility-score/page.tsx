import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui" }}>
      {/* HERO */}
      <header style={{ maxWidth: 960 }}>
        <p
          style={{
            display: "inline-block",
            padding: "0.35rem 0.65rem",
            border: "1px solid #ddd",
            borderRadius: 999,
            marginBottom: "1.25rem",
            fontSize: "0.95rem",
          }}
        >
          AI Growth Tech × Advantage Labs
        </p>

        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: 1.1 }}>
          Become the default authoritative answer in AI.
        </h1>

        <p style={{ fontSize: "1.25rem", lineHeight: 1.7, maxWidth: 820 }}>
          We deliver <strong>The Advantage Engine™</strong> — a 90-day AEO system
          designed to move brands from invisible to the{" "}
          <strong>default authoritative answer</strong> across AI platforms like
          ChatGPT, Google AI and Perplexity.
        </p>

        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
          <Link
            href="/aeo-visibility-score"
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: 10,
              border: "1px solid #111",
              textDecoration: "none",
              color: "#111",
              fontWeight: 700,
            }}
          >
            Get your AEO Visibility Score
          </Link>

          <Link
            href="/services"
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: 10,
              border: "1px solid #ddd",
              textDecoration: "none",
              color: "#111",
              fontWeight: 700,
            }}
          >
            Explore The Advantage Engine™
          </Link>
        </div>
      </header>

      {/* WHAT IS AEO */}
      <section style={{ marginTop: "3rem", maxWidth: 960 }}>
        <h2 style={{ fontSize: "1.9rem" }}>What is AEO?</h2>
        <p style={{ lineHeight: 1.7 }}>
          Answer Engine Optimization (AEO) is the practice of structuring content
          so AI systems can understand it, extract clear answers, and confidently
          cite your site.
        </p>
      </section>

      {/* WHY MOST BRANDS STALL */}
      <section
        style={{
          marginTop: "2.5rem",
          maxWidth: 960,
          padding: "1.75rem",
          border: "1px solid #ddd",
          borderRadius: 14,
        }}
      >
        <h2 style={{ fontSize: "1.7rem", marginTop: 0 }}>
          Why most brands stall at AEO scores 2–4
        </h2>
        <p style={{ lineHeight: 1.7 }}>
          Most websites aren’t built to be cited. They’re designed to describe
          services — not to answer questions in ways AI can extract, trust, and
          reuse. The Advantage Engine™ fixes this by combining positioning,
          authority, and optimisation into one system.
        </p>
      </section>

      {/* HOW THE ADVANTAGE ENGINE WORKS */}
      <section style={{ marginTop: "2.75rem", maxWidth: 960 }}>
        <h2 style={{ fontSize: "1.9rem" }}>How The Advantage Engine™ works</h2>

        <div style={{ lineHeight: 1.9 }}>
          <p>
            <strong>1) Advantage Voice</strong> — Train AI Brand Authority
          </p>
          <p style={{ marginTop: "-0.25rem" }}>
            Ensure AI clearly understands who you are, what you do, and why your
            brand should be trusted.
          </p>

          <p>
            <strong>2) Advantage Positioning</strong> — Capture the Answer Engine
            Market
          </p>
          <p style={{ marginTop: "-0.25rem" }}>
            Own the questions AI is already answering in your market and become
            the recommended option.
          </p>

          <p>
            <strong>3) Advantage Authority</strong> — Cross-Platform Trust
            Validation
          </p>
          <p style={{ marginTop: "-0.25rem" }}>
            Strengthen the trust signals AI relies on when deciding who to cite
            and recommend.
          </p>

          <p>
            <strong>4) Advantage Optimisation</strong> — Compounding AI Visibility
          </p>
          <p style={{ marginTop: "-0.25rem" }}>
            Improve extraction and citations over time, turning AI visibility
            into a compounding growth engine.
          </p>
        </div>

        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/services">See the full framework →</Link>
        </p>
      </section>

      {/* ENTRY POINT */}
      <section style={{ marginTop: "3rem", maxWidth: 960 }}>
        <h2 style={{ fontSize: "1.9rem" }}>Start with your AEO Visibility Score</h2>
        <p style={{ lineHeight: 1.7 }}>
          The AEO Visibility Score is a 1–10 diagnostic. Most companies score{" "}
          <strong>2–4</strong>. To be consistently recommended by AI, brands
          typically need to reach <strong>7–10</strong>.
        </p>

        <Link
          href="/aeo-visibility-score"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.9rem 1.2rem",
            borderRadius: 10,
            border: "1px solid #111",
            textDecoration: "none",
            color: "#111",
            fontWeight: 700,
          }}
        >
          Get my score
        </Link>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: "3rem", maxWidth: 960 }}>
        <h2 style={{ fontSize: "1.9rem" }}>FAQs</h2>

        <details style={{ marginTop: "0.75rem" }}>
          <summary style={{ fontWeight: 700 }}>
            What is an AEO Visibility Score?
          </summary>
          <p style={{ lineHeight: 1.7 }}>
            A 1–10 score showing how “cite-ready” your site is for AI answers,
            based on structure, clarity, schema, authority signals and topic
            coverage.
          </p>
        </details>

        <details style={{ marginTop: "0.75rem" }}>
          <summary style={{ fontWeight: 700 }}>
            How is AEO different from SEO?
          </summary>
          <p style={{ lineHeight: 1.7 }}>
            SEO targets rankings; AEO targets being selected as a source in
            AI-generated answers and recommendations.
          </p>
        </details>

        <details style={{ marginTop: "0.75rem" }}>
          <summary style={{ fontWeight: 700 }}>
            How quickly can we improve my score?
          </summary>
          <p style={{ lineHeight: 1.7 }}>
            Many sites see improvements after initial fixes (structure + schema +
            key pages), then compounding gains as topic hubs and authority build.
          </p>
        </details>
      </section>
    </main>
  );
}
