import { useState } from "react";
import "../styles/LoginPage.css";

export default function LoginPage({ onLogin, onBack }) {
  const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const DEMO = { email: "demo@foreverfit.com", password: "forever123" };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (mode === "login") {
        if (form.email === DEMO.email && form.password === DEMO.password) {
          onLogin({ name: "Demo Athlete", email: form.email });
        } else {
          setError("Invalid credentials. Try demo@foreverfit.com / forever123");
        }
      } else {
        if (!form.name || !form.email || !form.password) {
          setError("Please fill in all fields.");
        } else if (form.password.length < 6) {
          setError("Password must be at least 6 characters.");
        } else {
          onLogin({ name: form.name, email: form.email });
        }
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="login-root">
      <div className="login-bg">
        <div className="login-noise" />
        <div className="login-gradient" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`login-line line-${i}`} />
        ))}
      </div>

      <button className="login-back" onClick={onBack}>
        <span className="back-arrow">←</span> BACK TO SITE
      </button>

      <div className="login-container">
        <div className="login-brand">
          <div className="login-logo">
            <span className="logo-ff">FF</span>
          </div>
          <h1 className="login-brand-name">FOREVER FIT</h1>
          <p className="login-tagline">FORGE YOUR LEGACY</p>
        </div>

        <div className="login-card">
          <div className="login-tabs">
            <button
              className={`login-tab ${mode === "login" ? "active" : ""}`}
              onClick={() => { setMode("login"); setError(""); }}
            >
              LOGIN
            </button>
            <button
              className={`login-tab ${mode === "signup" ? "active" : ""}`}
              onClick={() => { setMode("signup"); setError(""); }}
            >
              SIGN UP
            </button>
            <div className={`tab-indicator ${mode === "signup" ? "right" : ""}`} />
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="field-group">
                <label className="field-label">FULL NAME</label>
                <input
                  className="field-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="field-group">
              <label className="field-label">EMAIL</label>
              <input
                className="field-input"
                type="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label className="field-label">PASSWORD</label>
              <input
                className="field-input"
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            {error && <div className="login-error">{error}</div>}

            {mode === "login" && (
              <div className="login-hint">
                Demo: <span>demo@foreverfit.com</span> / <span>forever123</span>
              </div>
            )}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? (
                <span className="btn-loader" />
              ) : (
                mode === "login" ? "START TRAINING →" : "JOIN THE SQUAD →"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
