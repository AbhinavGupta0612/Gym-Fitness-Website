import { pricingPlans } from "../data/gymData";
import "../styles/PricingSection.css";

export default function PricingSection({ onLoginClick, isLoggedIn }) {
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">MEMBERSHIP</span>
          <h2 className="section-title">
            CHOOSE YOUR <span className="title-accent">PLAN</span>
          </h2>
          <p className="section-desc">
            Flexible plans crafted for every fitness level and goal.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
              {plan.featured && <div className="featured-badge">MOST POPULAR</div>}
              <div className="plan-header">
                <span className="plan-name">{plan.name}</span>
                <div className="plan-price">
                  <span className="price-currency">₹</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">/mo</span>
                </div>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i} className="plan-feature">
                    <span className={`feature-check ${f.included ? "on" : "off"}`}>
                      {f.included ? "✓" : "✗"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <button
                className={`plan-btn ${plan.featured ? "btn-primary" : "btn-outline"}`}
                onClick={isLoggedIn ? undefined : onLoginClick}
              >
                {isLoggedIn ? "CURRENT PLAN" : "GET STARTED →"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
