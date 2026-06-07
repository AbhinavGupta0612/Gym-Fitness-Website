import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const LINKS = ["Programs", "Trainers", "Pricing", "Contact"];

export default function Navbar({ isLoggedIn, user, onLoginClick, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="nav-logo-icon">FF</div>
          <span className="nav-brand">FOREVER FIT</span>
        </div>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l}>
              <button className="nav-link" onClick={() => scrollTo(l)}>
                {l}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {isLoggedIn ? (
            <div className="nav-user">
              <span className="nav-user-name">👋 {user?.name}</span>
              <button className="nav-logout" onClick={onLogout}>
                LOGOUT
              </button>
            </div>
          ) : (
            <button className="nav-cta" onClick={onLoginClick}>
              JOIN NOW
            </button>
          )}
          <button
            className={`nav-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        {LINKS.map((l) => (
          <button key={l} className="mobile-link" onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
        {isLoggedIn ? (
          <button className="mobile-link mobile-logout" onClick={onLogout}>LOGOUT</button>
        ) : (
          <button className="mobile-cta" onClick={() => { onLoginClick(); setMenuOpen(false); }}>
            JOIN NOW
          </button>
        )}
      </div>
    </nav>
  );
}
