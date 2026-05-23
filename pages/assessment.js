export default function Assessment() {
  return (
    <main className="container">
      <h1>Global Talent Assessment</h1>
      <p className="subtitle">
        AI-powered UK Global Talent visa evaluation
      </p>

      <div className="grid">

        <div>
          <label>Nationality</label>
          <input placeholder="e.g. Romanian" />
        </div>

        <div>
          <label>Current location</label>
          <input placeholder="e.g. London" />
        </div>

        <div>
          <label>Professional experience</label>
          <textarea placeholder="Describe career background..." />
        </div>

        <div>
          <label>Key achievements</label>
          <textarea placeholder="Major achievements and impact..." />
        </div>

        <div>
          <label>Awards</label>
          <textarea placeholder="Industry awards and recognition..." />
        </div>

        <div>
          <label>Publications</label>
          <textarea placeholder="Articles, journals, media..." />
        </div>

        <div>
          <label>Speaking engagements</label>
          <textarea placeholder="Conferences, webinars..." />
        </div>

        <div>
          <label>Leadership evidence</label>
          <textarea placeholder="Leadership and mentoring..." />
        </div>

        <div>
          <label>Innovation evidence</label>
          <textarea placeholder="Products, patents, systems..." />
        </div>

        <div>
          <label>Commercial impact</label>
          <textarea placeholder="Revenue, growth, users..." />
        </div>

        <div>
          <label>Evidence available</label>
          <textarea placeholder="CV, media, contracts..." />
        </div>

        <div>
          <label>Weaknesses or concerns</label>
          <textarea placeholder="Potential weaknesses..." />
        </div>

      </div>

      <button>Generate assessment</button>
    </main>
  );
}
