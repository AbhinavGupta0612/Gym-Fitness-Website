import { useState } from "react";
import "../styles/ContactSection.css";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-layout">
          <div className="contact-info">
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              START YOUR<br />
              <span className="title-accent">JOURNEY</span>
            </h2>
            <p className="section-desc" style={{ textAlign: "left" }}>
              Ready to transform? Our team is here to guide you every step of the way.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="cd-icon">📍</span>
                <div>
                  <div className="cd-title">LOCATION</div>
                  <div className="cd-value">Rajpur Road, Dehradun, Uttarakhand 248001</div>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">📞</span>
                <div>
                  <div className="cd-title">PHONE</div>
                  <div className="cd-value">+91 98765 43210</div>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">🕐</span>
                <div>
                  <div className="cd-title">HOURS</div>
                  <div className="cd-value">Mon–Sat: 5:00 AM – 10:00 PM<br />Sun: 6:00 AM – 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>MESSAGE SENT!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-group">
                  <label className="field-label">YOUR NAME</label>
                  <input className="field-input" type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="field-group">
                  <label className="field-label">EMAIL ADDRESS</label>
                  <input className="field-input" type="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="field-group">
                  <label className="field-label">YOUR MESSAGE</label>
                  <textarea className="field-input field-textarea" name="message" placeholder="Tell us about your fitness goals..." value={form.message} onChange={handleChange} required rows={5} />
                </div>
                <button className="contact-btn" type="submit">
                  SEND MESSAGE →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
