export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">
          AI-assisted immigration workflow platform
        </div>

        <h1>LexVisa AI</h1>

        <p className="subtitle">
          Global Talent visa route assessment, evidence structuring,
          risk flagging and AI-powered workflow support.
        </p>

        <div className="buttons">
          <a className="primary" href="/assessment">
            Start Assessment
          </a>

          <a className="secondary" href="#">
            Explore Features
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Platform Features</h2>

        <div className="grid">
          <div className="card">
            <h3>Route Assessment</h3>
            <p>
              Analyse potential eligibility for Global Talent and related routes.
            </p>
          </div>

          <div className="card">
            <h3>Evidence Structuring</h3>
            <p>
              Organise awards, media, recommendation letters and achievements.
            </p>
          </div>

          <div className="card">
            <h3>Risk Detection</h3>
            <p>
              Identify weak evidence and missing documentation early.
            </p>
          </div>

          <div className="card">
            <h3>AI Draft Support</h3>
            <p>
              Generate structured drafts and workflow recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
