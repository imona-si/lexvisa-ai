import { useState } from "react";

export default function Assessment() {
  const [form, setForm] = useState({
    nationality: "",
    location: "",
    experience: "",
    achievements: "",
    awards: "",
    publications: "",
    speaking: "",
    leadership: "",
    innovation: "",
    commercialImpact: "",
    evidence: "",
    weaknesses: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  function updateField(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function generateAssessment() {
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      setResult(data.result || data.error || "No assessment generated.");
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="container">
      <h1>Global Talent Assessment</h1>
      <p className="subtitle">
        AI-powered UK Global Talent visa evaluation
      </p>

      <div className="grid">
        <div>
          <label>Nationality</label>
          <input
            name="nationality"
            value={form.nationality}
            onChange={updateField}
            placeholder="e.g. Romanian"
          />
        </div>

        <div>
          <label>Current location</label>
          <input
            name="location"
            value={form.location}
            onChange={updateField}
            placeholder="e.g. London"
          />
        </div>

        <div>
          <label>Professional experience</label>
          <textarea
            name="experience"
            value={form.experience}
            onChange={updateField}
            placeholder="Describe career background..."
          />
        </div>

        <div>
          <label>Key achievements</label>
          <textarea
            name="achievements"
            value={form.achievements}
            onChange={updateField}
            placeholder="Major achievements and impact..."
          />
        </div>

        <div>
          <label>Awards</label>
          <textarea
            name="awards"
            value={form.awards}
            onChange={updateField}
            placeholder="Industry awards and recognition..."
          />
        </div>

        <div>
          <label>Publications</label>
          <textarea
            name="publications"
            value={form.publications}
            onChange={updateField}
            placeholder="Articles, journals, media..."
          />
        </div>

        <div>
          <label>Speaking engagements</label>
          <textarea
            name="speaking"
            value={form.speaking}
            onChange={updateField}
            placeholder="Conferences, webinars..."
          />
        </div>

        <div>
          <label>Leadership evidence</label>
          <textarea
            name="leadership"
            value={form.leadership}
            onChange={updateField}
            placeholder="Leadership and mentoring..."
          />
        </div>

        <div>
          <label>Innovation evidence</label>
          <textarea
            name="innovation"
            value={form.innovation}
            onChange={updateField}
            placeholder="Products, patents, systems..."
          />
        </div>

        <div>
          <label>Commercial impact</label>
          <textarea
            name="commercialImpact"
            value={form.commercialImpact}
            onChange={updateField}
            placeholder="Revenue, growth, users..."
          />
        </div>

        <div>
          <label>Evidence available</label>
          <textarea
            name="evidence"
            value={form.evidence}
            onChange={updateField}
            placeholder="CV, media, contracts..."
          />
        </div>

        <div>
          <label>Weaknesses or concerns</label>
          <textarea
            name="weaknesses"
            value={form.weaknesses}
            onChange={updateField}
            placeholder="Potential weaknesses..."
          />
        </div>
      </div>

      <button type="button" onClick={generateAssessment}>
        {loading ? "Generating..." : "Generate assessment"}
      </button>

      {result && (
        <div className="resultBox">
          <h2>Assessment Result</h2>
          <pre>{result}</pre>
        </div>
      )}
    </main>
  );
}
