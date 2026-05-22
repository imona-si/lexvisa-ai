import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="badge">AI-assisted immigration workflow platform</div>
        <h1>LexVisa AI</h1>
        <p className="subtitle">
          Global Talent visa route assessment, evidence structuring, risk flagging and draft document support.
        </p>
        <div className="buttons">
          <Link className="primary" href="/assessment">Start assessment</Link>
          <a className="secondary" href="#features">Explore features</a>
        </div>
      </section>

      <section id="features" className="section">
        <h2>Built for Global Talent case preparation</h2>
        <div className="grid">
          <div className="card">
            <h3>Route Assessment</h3>
            <p>Analyse whether a client may be aligned with Global Talent or alternative UK immigration routes.</p>
          </div>
          <div className="card">
            <h3>Evidence Mapping</h3>
            <p>Structure achievements, letters, media, awards and commercial impact against route criteria.</p>
          </div>
          <div className="card">
            <h3>Risk Flags</h3>
            <p>Identify weak evidence, missing documents and follow-up questions for professional review.</p>
          </div>
          <div className="card">
            <h3>Draft Support</h3>
            <p>Generate draft structures for recommendation letters, client emails and evidence checklists.</p>
          </div>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>How it works</h2>
          <ol>
            <li>Complete the client intake form.</li>
            <li>Describe achievements, evidence and weaknesses.</li>
            <li>Receive AI-assisted assessment and draft preparation outputs.</li>
          </ol>
          <Link className="primary inline" href="/assessment">Try assessment</Link>
        </div>
        <div className="panel">
          <h3>Important positioning</h3>
          <p>
            LexVisa AI is not a law firm and does not provide legal advice.
            It is a workflow-support tool for immigration case preparation.
          </p>
        </div>
      </section>

      <section className="disclaimer">
        <h2>Important disclaimer</h2>
        <p>
          LexVisa AI does not provide legal advice, immigration advice, legal representation or final eligibility decisions.
          All outputs are for workflow support only and must be reviewed by a qualified immigration professional.
        </p>
      </section>

      <footer>© 2026 LexVisa AI</footer>
    </main>
  );
}
