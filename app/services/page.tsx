import Link from "next/link";

export default function ServicesPage() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui" }}>
      <header style={{ maxWidth: 900 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          How AEO works
        </h1>

        <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
          Answer Engine Optimisation (AEO) is how your brand becomes “cite-ready”
          for AI-generated answers. We focus on the structural and authority
          signals AI systems rely on — so you appear more often in ChatGPT, Gemini and Perplexity.
        </p>

        <p style={{ marginTop: "0.75rem", color: "#555", lineHeight: 1.6 }}>
          Our goal is simple: move your AEO Visibility Score into the{" "}
          <strong>7–10</strong> range, where brands are far more likely to be
          recommended and cited.
        </p>

        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
          <Link
            href="/aeo-visibility-score"
            style={{
              padding: "0.8rem 1.1rem",
              borderRadius: 10,
              border: "1px solid #111",
              textDecoration: "none",
              color: "#111",
              fontWeight: 600,
            }}
          >
            Check your AEO Visibility Score
          </Link>

          <Link
            href="/contact"
            style={{
              padding: "0.8rem 1.1rem",
              borderRadius: 10,
              border: "1px solid #ddd",
              textDecoration: "none",
              color: "#111",
              fontWeight: 600,
            }}
          >
            Talk to us
          </Link>
        </div>
      </header>

      <section style={{ marginTop: "3rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>The 90-day approach</h2>

        <ol style={{ lineHeight: 1.9, marginTop: "0.75rem" }}>
          <li>
            <strong>Days 1–14: Audit & baseline</strong> — Visibility Score,
            “cite-readiness” gaps, content map, schema and technical checks.
          </li>
          <li>
            <strong>Days 15–45: Fix the foundations</strong> — page structure,
            internal linking, schema, topic clarity, and high-impact pages.
          </li>
          <li>
            <strong>Days 46–90: Build authority signals</strong> — topic hubs,
            supporting pages, FAQs, evidence/proof signals, and iteration based
            on lift.
          </li>
        </ol>

        <p style={{ marginTop: "0.75rem", color: "#555", lineHeight: 1.6 }}>
          <strong>Guarantee:</strong> we guarantee score improvement within 90
          days when our recommendations are fully implemented.
        </p>
      </section>

      <section style={{ marginTop: "2.5rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>What we optimise</h2>

        <ul style={{ lineHeight: 1.9, marginTop: "0.75rem" }}>
          <li>
            <strong>Answer-first structure</strong> — clear headings, direct
            answers, scannable sections, and “AI-friendly” page layouts.
          </li>
          <li>
            <strong>Schema & entity clarity</strong> — structured data that helps
            AI systems understand who you are, what you do, and what you offer.
          </li>
          <li>
            <strong>Topic coverage & hubs</strong> — content clusters that signal
            authority on the questions your buyers ask.
          </li>
          <li>
            <strong>Proof & trust signals</strong> — case studies, credentials,
            comparisons, FAQs, and evidence AI systems can cite confidently.
          </li>
          <li>
            <strong>Internal linking strategy</strong> — a clear “source of truth”
            path for key topics and services.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "2.5rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>Typical outcomes</h2>

        <ul style={{ lineHeight: 1.9, marginTop: "0.75rem" }}>
          <li>Improved Visibility Score and cite-readiness</li>
          <li>Better brand presence in AI answers for your priority topics</li>
          <li>Higher-quality inbound intent (because AI answers reflect buying questions)</li>
          <li>Clear roadmap of what to fix next</li>
        </ul>
      </section>

      <section style={{ marginTop: "2.5rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>Next step</h2>
        <p style={{ lineHeight: 1.7 }}>
          Start with your Visibility Score. You’ll get a baseline, a clear
          improvement plan, and a recommended path to reach the 7–10 range.
        </p>

        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          <Link
            href="/aeo-visibility-score"
            style={{
              padding: "0.8rem 1.1rem",
              borderRadius: 10,
              border: "1px solid #111",
              textDecoration: "none",
              color: "#111",
              fontWeight: 600,
            }}
          >
            Get your Visibility Score
          </Link>

          <Link
            href="/contact"
            style={{
              padding: "0.8rem 1.1rem",
              borderRadius: 10,
              border: "1px solid #ddd",
              textDecoration: "none",
              color: "#111",
              fontWeight: 600,
            }}
          >
            Book a call
          </Link>
        </div>
      </section>
    </main>
  );
}
