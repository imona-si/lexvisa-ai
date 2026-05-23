export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f7fb", minHeight: "100vh" }}>
      <section style={{
        padding: "90px 70px",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white"
      }}>
        <div style={{
          display: "inline-block",
          padding: "10px 16px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.15)",
          marginBottom: "24px",
          fontSize: "14px"
        }}>
          AI-assisted immigration workflow platform
        </div>

        <h1 style={{ fontSize: "72px", margin: "0 0 24px" }}>
          LexVisa AI
        </h1>

        <p style={{ fontSize: "22px", lineHeight: "1.6", maxWidth: "750px", color: "#dbeafe" }}>
          Global Talent visa route assessment, evidence structuring, risk flagging and AI-powered workflow support.
        </p>

        <div style={{ marginTop: "36px", display: "flex", gap: "16px" }}>
          <a href="/assessment" style={{
            background: "white",
            color: "#0f172a",
            padding: "16px 26px",
            borderRadius: "14px",
            fontWeight: "bold",
            textDecoration: "none"
          }}>
            Start Assessment
          </a>

          <a href="#features" style={{
            color: "white",
            padding: "16px 26px",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.4)",
            textDecoration: "none"
          }}>
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" style={{ padding: "70px" }}>
        <h2 style={{ fontSize: "42px", marginBottom: "32px" }}>
          Platform Features
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px"
        }}>
          {[
            ["Route Assessment", "Analyse potential suitability for Global Talent and related UK immigration routes."],
            ["Evidence Structuring", "Organise recommendation letters, awards, media, achievements and commercial impact."],
            ["Risk Detection", "Identify weak evidence, missing documents and follow-up questions for review."],
            ["Draft Support", "Generate structured drafts, evidence checklists and workflow recommendations."]
          ].map(([title, text]) => (
            <div key={title} style={{
              background: "white",
              padding: "30px",
              borderRadius: "22px",
              boxShadow: "0 12px 35px rgba(15,23,42,0.08)"
            }}>
              <h3>{title}</h3>
              <p style={{ color: "#4b5563", lineHeight: "1.6" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        margin: "0 70px 60px",
        background: "white",
        padding: "36px",
        borderRadius: "22px",
        borderLeft: "6px solid #2563eb"
      }}>
        <h2>Important disclaimer</h2>
        <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
          LexVisa AI does not provide legal advice, immigration advice, legal representation or final eligibility decisions.
          All outputs are for workflow support only and must be reviewed by a qualified immigration professional.
        </p>
      </section>

      <footer style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
        © 2026 LexVisa AI
      </footer>
    </main>
  );
}
