import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">FF</div>
          <h3 className="footer-name">FOREVER FIT</h3>
          <p className="footer-slogan">FORGE YOUR LEGACY</p>
          <p className="footer-about">
            Dehradun's premier fitness destination, helping athletes and beginners alike unlock their true physical potential since 2018.
          </p>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-group-title">PROGRAMS</h4>
          <ul>
            {["Strength Training", "HIIT Classes", "Yoga & Mindfulness", "Boxing", "Cardio Blast", "Powerlifting"].map(l => (
              <li key={l}><a href="#programs">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-group-title">QUICK LINKS</h4>
          <ul>
            {["About Us", "Our Team", "Membership Plans", "Success Stories", "Blog", "Contact"].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-group-title">FOLLOW US</h4>
          <div className="footer-socials">
            {["Instagram", "YouTube", "Facebook", "Twitter"].map(s => (
              <a key={s} href="#" className="footer-social">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FOREVER FIT GYM · All Rights Reserved · Dehradun, India</p>
        <p>Designed with ❤️ for fitness </p>
      </div>
    </footer>
  );
}
