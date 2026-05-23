import { useState } from "react";

export default function Assessment() {
  const [result, setResult] = useState("");

  function generateAssessment() {
    setResult(`
Global Talent Assessment Result

Recommended Route:
Exceptional Promise

Strengths:
• Strong legal and immigration background
• Experience in AI and LegalTech
• International client exposure
• Evidence of innovation and sector contribution

Risks:
• Limited major media recognition
• Need stronger public profile
• More external recommendation evidence needed

Recommended Next Steps:
• Publish thought leadership articles
• Speak at conferences
• Strengthen LinkedIn visibility
• Collect additional recommendation letters

Overall Potential:
High potential for UK Global Talent progression with structured evidence strategy.
    `);
  }

  return (
    <main className="assessmentPage">
      <a className="backLink" href="/">← LexVisa AI</a>

      <section className="assessmentHero">
        <span className="badgeDark">Global Talent Visa</span>
        <h1>Global Talent Assessment</h1>
        <p>
          Complete the intake form to generate an AI-assisted route assessment,
          evidence map, risk flags and draft document structures.
        </p>
      </section>

      <form className="assessmentCard">
        <div className="formGrid">
          <label>
            Nationality
            <input placeholder="e.g. Moldovan" />
          </label>

          <label>
            Current location
            <input placeholder="e.g. United Kingdom" />
          </label>

          <label>
            Field
            <select>
              <option>Digital Technology</option>
            </select>
          </label>

          <label>
            Route preference
            <select>
              <option>Not sure</option>
            </select>
          </label>
        </div>

        <label>
          Professional experience
          <textarea placeholder="Experience..." />
        </label>

        <label>
          Evidence available
          <textarea placeholder="CV, recommendations..." />
        </label>

        <div className="consentBox">
          <input type="checkbox" />
          <p>
            Outputs require review by a qualified immigration professional.
          </p>
        </div>

        <button
          type="button"
          className="submitButton"
          onClick={generateAssessment}
        >
          Generate assessment
        </button>

        {result && (
          <div className="resultBox">
            <h2>Assessment Result</h2>
            <pre>{result}</pre>
          </div>
        )}
      </form>
    </main>
  );
}
