import { useState } from "react";
import Link from "next/link";

const initialForm = {
  nationality: "",
  currentLocation: "",
  field: "Digital Technology",
  routePreference: "Not sure",
  experience: "",
  role: "",
  achievements: "",
  awards: "",
  publications: "",
  leadership: "",
  innovation: "",
  commercialImpact: "",
  evidence: "",
  weaknesses: "",
  previousRefusals: "",
  draftType: "Full assessment + draft document suggestions",
  consent: false
};

export default function Assessment() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  async function submitAssessment(e) {
    e.preventDefault();
    setError("");
    setResult("");

    if (!form.consent) {
      setError("Please confirm the disclaimer before submitting.");
      return;
    }

    if (!form.experience || !form.achievements || !form.evidence) {
      setError("Please complete experience, achievements and evidence fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data.analysis);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <nav className="nav">
        <Link href="/">← LexVisa AI</Link>
      </nav>

      <section className="section">
        <h1 className="pageTitle">Global Talent Assessment</h1>
        <p className="intro">
          Complete the intake form to generate an AI-assisted route assessment, evidence map, risk flags and draft document structures.
        </p>

        <form className="form" onSubmit={submitAssessment}>
          <div className="formGrid">
            <label>
              Nationality
              <input name="nationality" value={form.nationality} onChange={updateField} placeholder="e.g. Moldovan" />
            </label>
            <label>
              Current location
              <input name="currentLocation" value={form.currentLocation} onChange={updateField} placeholder="e.g. United Kingdom" />
            </label>
            <label>
              Field
              <select name="field" value={form.field} onChange={updateField}>
                <option>Digital Technology</option>
                <option>Academia or Research</option>
                <option>Arts and Culture</option>
                <option>Not sure</option>
              </select>
            </label>
            <label>
              Route preference
              <select name="routePreference" value={form.routePreference} onChange={updateField}>
                <option>Exceptional Talent</option>
                <option>Exceptional Promise</option>
                <option>Not sure</option>
              </select>
            </label>
          </div>

          <label>
            Professional experience
            <textarea name="experience" value={form.experience} onChange={updateField} placeholder="Years of experience, sector, seniority, career background..." />
          </label>

          <label>
            Current role
            <textarea name="role" value={form.role} onChange={updateField} placeholder="Current position, responsibilities, employer or business activity..." />
          </label>

          <label>
            Key achievements
            <textarea name="achievements" value={form.achievements} onChange={updateField} placeholder="Major achievements, projects, sector recognition, product impact..." />
          </label>

          <label>
            Awards / media / recognition
            <textarea name="awards" value={form.awards} onChange={updateField} placeholder="Awards, press, speaking invitations, judging panels..." />
          </label>

          <label>
            Publications / thought leadership
            <textarea name="publications" value={form.publications} onChange={updateField} placeholder="Articles, research, conference talks, podcasts, public profile..." />
          </label>

          <label>
            Leadership evidence
            <textarea name="leadership" value={form.leadership} onChange={updateField} placeholder="Team leadership, mentoring, strategic roles, industry influence..." />
          </label>

          <label>
            Innovation evidence
            <textarea name="innovation" value={form.innovation} onChange={updateField} placeholder="Products, patents, new processes, innovative work..." />
          </label>

          <label>
            Commercial or sector impact
            <textarea name="commercialImpact" value={form.commercialImpact} onChange={updateField} placeholder="Revenue growth, users, clients, adoption, measurable outcomes..." />
          </label>

          <label>
            Evidence available
            <textarea name="evidence" value={form.evidence} onChange={updateField} placeholder="CV, recommendation letters, contracts, media links, awards, metrics, screenshots..." />
          </label>

          <label>
            Weaknesses or concerns
            <textarea name="weaknesses" value={form.weaknesses} onChange={updateField} placeholder="Limited media, no awards, weak letters, gaps, lack of independent recognition..." />
          </label>

          <label>
            Previous refusals or immigration concerns
            <textarea name="previousRefusals" value={form.previousRefusals} onChange={updateField} placeholder="Optional. Do not include highly sensitive details in this MVP." />
          </label>

          <label>
            Draft output needed
            <select name="draftType" value={form.draftType} onChange={updateField}>
              <option>Full assessment + draft document suggestions</option>
              <option>Recommendation letter structure</option>
              <option>Client follow-up email</option>
              <option>Evidence checklist</option>
              <option>Personal statement outline</option>
            </select>
          </label>

          <label className="checkbox">
            <input type="checkbox" name="consent" checked={form.consent} onChange={updateField} />
            <span>
              I understand that LexVisa AI does not provide legal advice or immigration representation. Outputs require review by a qualified immigration professional.
            </span>
          </label>

          {error && <div className="error">{error}</div>}

          <button className="primary button" disabled={loading}>
            {loading ? "Analysing..." : "Generate assessment"}
          </button>
        </form>

        {result && (
          <section className="result">
            <h2>AI-assisted output</h2>
            <div className="resultBox">
              {result.split("\n").map((line, index) => (
                <p key={index}>{line || "\u00A0"}</p>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
