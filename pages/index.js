export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">AI-assisted immigration workflow platform</div>

        <h1>LexVisa AI</h1>

        <p className="subtitle">
          Global Talent visa route assessment, evidence structuring,
          risk flagging and AI-powered workflow support.
        </p>

        <div className="buttons">
          <a className="primary" href="/assessment">
            Start Assessment
          </a>

          <a className="secondary" href="#features">
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" className="section">
        <h2>Platform Features</h2>

        <div className="grid">
          <div className="card">
            <h3>Route Assessment</h3>
            <p>
              Analyse potential suitability for Global Talent and related UK immigration routes.
            </p>
          </div>

          <div className="card">
            <h3>Evidence Structuring</h3>
            <p>
              Organise recommendation letters, awards, media, achievements and commercial impact.
            </p>
          </div>

          <div className="card">
            <h3>Risk Detection</h3>
            <p>
              Identify weak evidence, missing documents and follow-up questions for review.
            </p>
          </div>

          <div className="card">
            <h3>Draft Support</h3>
            <p>
              Generate structured drafts, evidence checklists and workflow recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="disclaimer">
        <h2>Important disclaimer</h2>
        <p>
          LexVisa AI does not provide legal advice, immigration advice, legal representation
          or final eligibility decisions. All outputs are for workflow support only and must
          be reviewed by a qualified immigration professional.
        </p>
      </section>

      <footer>© 2026 LexVisa AI</footer>
    </main>
  );
}
