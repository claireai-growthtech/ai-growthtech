import Link from "next/link";

export default function ContactPage() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui", maxWidth: 900 }}>
      <h1 style={{ fontSize: "2.75rem", marginBottom: "1rem" }}>Contact</h1>

      <p style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
        Want your AEO Visibility Score or to discuss The Advantage Engine™?
        Send your website URL and we’ll come back with next steps.
      </p>

      <section
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          border: "1px solid #ddd",
          borderRadius: 14,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Request your Visibility Score</h2>

        <p style={{ lineHeight: 1.7 }}>
          For now, this is a simple placeholder. Next we can connect this form
          to email (or a CRM) so requests land straight in your inbox.
        </p>

        <form style={{ marginTop: "1.25rem", display: "grid", gap: "0.9rem" }}>
          <label>
            <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>Name</div>
            <input
              type="text"
              placeholder="Your name"
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: 10,
                border: "1px solid #ddd",
              }}
            />
          </label>

          <label>
            <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>Email</div>
            <input
              type="email"
              placeholder="you@company.com"
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: 10,
                border: "1px solid #ddd",
              }}
            />
          </label>

          <label>
            <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>
              Website URL
            </div>
            <input
              type="url"
              placeholder="https://example.com"
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: 10,
                border: "1px solid #ddd",
              }}
            />
          </label>

          <label>
            <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>
              What are you trying to achieve?
            </div>
            <textarea
              placeholder="AEO visibility, citations, being recommended by AI, etc."
              rows={4}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: 10,
                border: "1px solid #ddd",
              }}
            />
          </label>

          <button
            type="button"
            style={{
              padding: "0.9rem 1.2rem",
              borderRadius: 10,
              border: "1px solid #111",
              background: "white",
              fontWeight: 700,
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            Send request
          </button>
        </form>
      </section>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
