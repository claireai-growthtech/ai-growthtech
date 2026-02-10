import Link from "next/link";

export default function ServicesPage() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui", maxWidth: 960 }}>
      {/* PAGE HEADER */}
      <header>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "1rem" }}>
          The Advantage Engine™
        </h1>

        <p style={{ fontSize: "1.35rem", lineHeight: 1.7 }}>
          A 90-day system designed to move brands from invisible to the{" "}
          <strong>default authoritative answer</strong> across AI platforms.
        </p>

        <p style={{ lineHeight: 1.7, marginTop: "1.25rem" }}>
          Delivered by <strong>AI Growth Tech</strong> in partnership with{" "}
          <strong>Advantage Labs</strong>, The Advantage Engine™ is an end-to-end
          Answer Engine Optimisation (AEO) framework that combines{" "}
          <strong>Voice, Positioning, Authority, and Optimisation</strong> into a
          single, compounding engine.
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
            href="/contact"
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: 10,
              border: "1px solid #ddd",
              textDecoration: "none",
              color: "#111",
              fontWeight: 700,
            }}
          >
            Book a call
          </Link>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: "3.5rem" }}>
        <h2 style={{ fontSize: "2rem" }}>How the Advantage Engine™ works</h2>

        {/* PHASE 1 */}
        <section style={{ marginTop: "2rem" }}>
          <h3>🧠 Phase 1: Advantage Voice</h3>
          <p>
            <strong>Train AI Brand Authority</strong>
          </p>
          <p style={{ lineHeight: 1.7 }}>
            We ensure AI systems clearly understand who you are, what you do,
            and why your brand should be trusted. This phase removes ambiguity
            and establishes your canonical AI-readable voice.
          </p>
          <ul style={{ lineHeight: 1.9 }}>
            <li>AI brand and entity clarity audit</li>
            <li>Core answer narratives and messaging</li>
            <li>Foundational content refinement</li>
          </ul>
        </section>

        {/* PHASE 2 */}
        <section style={{ marginTop: "2rem" }}>
          <h3>🎯 Phase 2: Advantage Positioning</h3>
          <p>
            <strong>Capture the Answer Engine Market</strong>
          </p>
          <p style={{ lineHeight: 1.7 }}>
            We identify the real questions AI systems are already answering in
            your market and position your brand to own those answers.
          </p>
          <ul style={{ lineHeight: 1.9 }}>
            <li>AI question and intent mapping</li>
            <li>Competitive answer gap analysis</li>
            <li>Answer ownership and topic strategy</li>
          </ul>
        </section>

        {/* PHASE 3 */}
        <section style={{ marginTop: "2rem" }}>
          <h3>🛡️ Phase 3: Advantage Authority</h3>
          <p>
            <strong>Cross-Platform Trust Validation</strong>
          </p>
          <p style={{ lineHeight: 1.7 }}>
            This phase reinforces the trust signals AI systems rely on when
            deciding who to recommend. Most brands stall here — which is why
            they remain stuck at low AEO visibility scores.
          </p>
          <ul style={{ lineHeight: 1.9 }}>
            <li>Authority signal alignment (on-site & off-site)</li>
            <li>Schema deployment (FAQ, Article, Organization)</li>
            <li>Cross-platform consistency checks</li>
          </ul>
        </section>

        {/* PHASE 4 */}
        <section style={{ marginTop: "2rem" }}>
          <h3>📈 Phase 4: Advantage Optimisation</h3>
          <p>
            <strong>Compounding AI Visibility</strong>
          </p>
          <p style={{ lineHeight: 1.7 }}>
            We continuously optimise how your content is extracted, reused, and
            cited by AI systems, turning visibility into a compounding growth
            engine.
          </p>
          <ul style={{ lineHeight: 1.9 }}>
            <li>AEO Visibility Score tracking (1–10)</li>
            <li>Content optimisation for AI extraction</li>
            <li>Ongoing visibility and authority improvements</li>
          </ul>
        </section>
      </section>

      {/* OUTCOME */}
      <section
        style={{
          marginTop: "3.5rem",
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: 14,
          maxWidth: 960,
        }}
      >
        <h2>The outcome: Default Authoritative Answer</h2>
        <p style={{ lineHeight: 1.7 }}>
          When all four phases of The Advantage Engine™ are implemented together,
          AI systems don’t just mention your brand — they{" "}
          <strong>recommend it</strong>.
        </p>

        <ul style={{ lineHeight: 1.9 }}>
          <li>Cited first in AI-generated answers</li>
          <li>Recommended confidently and repeatedly</li>
          <li>Visibility compounds without paid media</li>
          <li>Trust is pre-built before a buyer arrives</li>
        </ul>
      </section>

      {/* ENTRY POINT */}
      <section style={{ marginTop: "3rem", maxWidth: 960 }}>
        <h2>Your entry point: AEO Visibility Score</h2>
        <p style={{ lineHeight: 1.7 }}>
          Every engagement starts with an <strong>AEO Visibility Score</strong> —
          a simple 1–10 diagnostic that shows how ready your site is to be
          selected as an authoritative AI answer.
        </p>

        <p style={{ lineHeight: 1.7 }}>
          Most companies score between <strong>2–4</strong>. To be consistently
          recommended by AI, brands typically need to reach{" "}
          <strong>7–10</strong>.
        </p>

        <Link
          href="/aeo-visibility-score"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
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
      </section>

      <p style={{ marginTop: "2.5rem" }}>
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
