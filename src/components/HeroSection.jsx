import "../styles/HeroSection.css";

export default function HeroSection({ onLoginClick, isLoggedIn }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="hero-noise" />
        <div className="hero-stripes">
          {[...Array(8)].map((_, i) => <div key={i} className="stripe" />)}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          EST. 2018 · DEHRADUN, INDIA
          <span className="eyebrow-dot" />
        </div>

        <h1 className="hero-title">
          <span className="title-line t1">FORGE</span>
          <span className="title-line t2">YOUR</span>
          <span className="title-line t3 red-outline">LIMITS</span>
        </h1>

        <p className="hero-sub">
          Elite training. Proven methods. Unstoppable results.<br />
          Your transformation starts the moment you walk through our doors.
        </p>

        <div className="hero-actions">
          {isLoggedIn ? (
            <button
              className="hero-btn primary"
              onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
            >
              EXPLORE PROGRAMS →
            </button>
          ) : (
            <button className="hero-btn primary" onClick={onLoginClick}>
              START YOUR JOURNEY →
            </button>
          )}
          <button
            className="hero-btn secondary"
            onClick={() => document.getElementById("trainers")?.scrollIntoView({ behavior: "smooth" })}
          >
            MEET THE COACHES
          </button>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </div>

      <div className="hero-counter-strip">
        <div className="hc-item"><span className="hc-num">2,400+</span><span className="hc-label">Members</span></div>
        <div className="hc-divider" />
        <div className="hc-item"><span className="hc-num">15+</span><span className="hc-label">Expert Trainers</span></div>
        <div className="hc-divider" />
        <div className="hc-item"><span className="hc-num">8</span><span className="hc-label">Years Strong</span></div>
        <div className="hc-divider" />
        <div className="hc-item"><span className="hc-num">98%</span><span className="hc-label">Satisfaction</span></div>
      </div>
    </section>
  );
}
