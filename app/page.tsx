import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui" }}>
      <header style={{ maxWidth: 900 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Get found in AI answers.
        </h1>

        <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
          AI-GrowthTech improves your AEO Visibility Score so your brand shows up
          more often in ChatGPT, Google AI, Perplexity and answer engines.
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
            Get your Visibility Score
          </Link>

          <Link
            href="/services"
            style={{
              padding: "0.8rem 1.1rem",
              borderRadius: 10,
              border: "1px solid #ddd",
              textDecoration: "none",
              color: "#111",
              fontWeight: 600,
            }}
          >
            View services
          </Link>
        </div>
      </header>

      <section style={{ marginTop: "3rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>What is AEO?</h2>
        <p style={{ lineHeight: 1.7 }}>
          Answer Engine Optimization (AEO) is the practice of structuring content
          so AI systems can understand it, extract clear answers, and confidently
          cite your site.
        </p>
      </section>

      <section style={{ marginTop: "2.5rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>How it works</h2>
        <ol style={{ lineHeight: 1.9 }}>
          <li>
            <strong>Audit</strong> — baseline Visibility Score + issue map
          </li>
          <li>
            <strong>Fix</strong> — content structure, schema, internal linking,
            hubs
          </li>
          <li>
            <strong>Monitor</strong> — track lift and iterate
          </li>
        </ol>
      </section>

      <section style={{ marginTop: "2.5rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>FAQs</h2>

        <details style={{ marginTop: "0.75rem" }}>
          <summary style={{ fontWeight: 600 }}>
            What is an AEO Visibility Score?
          </summary>
          <p style={{ lineHeight: 1.7 }}>
            A 1–10 score showing how “cite-ready” your site is for AI answers,
            based on structure, clarity, schema, authority signals and topic
            coverage.
          </p>
        </details>

        <details style={{ marginTop: "0.75rem" }}>
          <summary style={{ fontWeight: 600 }}>
            How is AEO different from SEO?
          </summary>
          <p style={{ lineHeight: 1.7 }}>
            SEO targets rankings; AEO targets being selected as a source in AI
            generated answers and summaries.
          </p>
        </details>

        <details style={{ marginTop: "0.75rem" }}>
          <summary style={{ fontWeight: 600 }}>
            How quickly can we improve the score?
          </summary>
          <p style={{ lineHeight: 1.7 }}>
            Many sites see improvements after initial fixes (structure + schema +
            key pages), with compounding gains from topic hubs.
          </p>
        </details>
      </section>
    </main>
  );
}
