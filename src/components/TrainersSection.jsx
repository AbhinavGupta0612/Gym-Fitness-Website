import { trainers } from "../data/gymData";
import "../styles/TrainersSection.css";

export default function TrainersSection() {
  return (
    <section id="trainers" className="trainers-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">THE TEAM</span>
          <h2 className="section-title">
            MEET THE <span className="title-accent">COACHES</span>
          </h2>
          <p className="section-desc">
            Certified professionals with decades of combined experience, dedicated to your transformation.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((t, i) => (
            <div key={t.id} className="trainer-card">
              <div className="trainer-avatar" style={{ background: t.gradient }}>
                <span className="trainer-initials">{t.initials}</span>
                <div className="trainer-shape" />
              </div>
              <div className="trainer-info">
                <div className="trainer-spec">{t.specialty}</div>
                <h3 className="trainer-name">{t.name}</h3>
                <p className="trainer-exp">{t.experience} Experience</p>
                <div className="trainer-tags">
                  {t.tags.map((tag) => (
                    <span key={tag} className="trainer-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
