import { useState } from "react";

export default function Assessment() {
  const [nationality, setNationality] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [evidence, setEvidence] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generateAssessment() {
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nationality,
          location,
          experience,
          evidence,
        }),
      });

      const data = await response.json();

      setResult(data.result);
    } catch (error) {
      setResult("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <main className="assessmentPage">
      <a className="backLink" href="/">
        ← LexVisa AI
      </a>

      <section className="assessmentHero">
        <span className="badgeDark">Global Talent Visa</span>

        <h1>Global Talent Assessment</h1>

        <p>
          Complete the intake form to generate an AI-assisted route
          assessment, evidence map, risk flags and draft document structures.
        </p>
      </section>

      <div className="assessmentCard">
        <div className="formGrid">
          <label>
            Nationality
            <input
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder="e.g. Romanian"
            />
          </label>

          <label>
            Current location
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. London"
            />
          </label>
        </div>

        <label>
          Professional experience
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Describe professional experience..."
          />
        </label>

        <label>
          Evidence available
          <textarea
            value={evidence}
            onChange={(e) => setEvidence(e.target.value)}
            placeholder="CV, media, recommendation letters..."
          />
        </label>

        <button
          className="submitButton"
          onClick={generateAssessment}
        >
          {loading ? "Generating..." : "Generate assessment"}
        </button>

        {result && (
          <div className="resultBox">
            <h2>Assessment Result</h2>

            <pre>{result}</pre>
          </div>
        )}
      </div>
    </main>
  );
}
