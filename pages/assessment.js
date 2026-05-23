export default function Assessment() {
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
              <option>Academia or Research</option>
              <option>Arts and Culture</option>
              <option>Not sure</option>
            </select>
          </label>

          <label>
            Route preference
            <select>
              <option>Not sure</option>
              <option>Exceptional Talent</option>
              <option>Exceptional Promise</option>
            </select>
          </label>
        </div>

        <label>
          Professional experience
          <textarea placeholder="Years of experience, sector, seniority, achievements..." />
        </label>

        <label>
          Current role
          <textarea placeholder="Current responsibilities, employer, role level..." />
        </label>

        <label>
          Key achievements
          <textarea placeholder="Major achievements, projects, sector impact..." />
        </label>

        <label>
          Evidence available
          <textarea placeholder="CV, recommendation letters, awards, media, contracts..." />
        </label>

        <label>
          Weaknesses or concerns
          <textarea placeholder="Limited media, no awards, previous refusal, weak evidence..." />
        </label>

        <div className="consentBox">
          <input type="checkbox" />
          <p>
            I understand that LexVisa AI does not provide legal advice or
            immigration representation. Outputs require review by a qualified
            immigration professional.
          </p>
        </div>

        <button type="button" className="submitButton">
          Generate assessment
        </button>
      </form>
    </main>
  );
}
