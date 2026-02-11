import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui" }}>
      <header style={{ maxWidth: 900 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Get your business found in AI answers.
        </h1>

        <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
          AI Growth Tech helps businesses improve their AEO Visibility Score —
          so their brand appears more often in ChatGPT, Google AI and Perplexity.
        </p>

        <p style={{ marginTop: "0.75rem", color: "#555", lineHeight: 1.6 }}>
          Built for growth-stage teams who care about pipeline, not vanity traffic.
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
            How AEO works
          </Link>
        </div>
      </header>

      <section style={{ marginTop: "3rem", maxWidth: 900 }}>
        <h2 style={{ fontSize: "1.75rem" }}>What is AEO?</h2>
        <p style={{ lineHeight: 1.7 }}>
          Answer Engine Optimisation (AEO) is the practice of structuring
          content so AI systems can understand it, extract clear answers,
          and confidently cite your site.
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
    </main>
  );
}
