import { testimonials } from "../data/gymData";
import "../styles/TestimonialsSection.css";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">SUCCESS STORIES</span>
          <h2 className="section-title">
            REAL <span className="title-accent">RESULTS</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="t-quote">"</div>
              <p className="t-text">{t.text}</p>
              <div className="t-footer">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-meta">{t.goal} · {t.duration}</div>
                </div>
                <div className="t-stars">{"★".repeat(t.stars)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
