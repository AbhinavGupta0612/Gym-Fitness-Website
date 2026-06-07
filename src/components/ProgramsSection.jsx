import { programs } from "../data/gymData";
import "../styles/ProgramsSection.css";

export default function ProgramsSection() {
  return (
    <section id="programs" className="programs-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">WHAT WE OFFER</span>
          <h2 className="section-title">
            ELITE <span className="title-accent">PROGRAMS</span>
          </h2>
          <p className="section-desc">
            Science-backed training protocols designed to push your limits and deliver visible results.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <div key={p.id} className="program-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="program-icon">{p.icon}</div>
              <div className="program-badge">{p.level}</div>
              <h3 className="program-name">{p.name}</h3>
              <p className="program-desc">{p.description}</p>
              <div className="program-meta">
                <span>⏱ {p.duration}</span>
                <span>🔥 {p.calories} kcal</span>
              </div>
              <div className="program-hover-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
