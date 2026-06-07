import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import ProgramsSection from "../components/ProgramsSection";
import TrainersSection from "../components/TrainersSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

export default function HomePage({ isLoggedIn, user, onLoginClick, onLogout }) {
  return (
    <div className="homepage">
      <Navbar
        isLoggedIn={isLoggedIn}
        user={user}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
      />
      <HeroSection onLoginClick={onLoginClick} isLoggedIn={isLoggedIn} />
      <StatsBar />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection onLoginClick={onLoginClick} isLoggedIn={isLoggedIn} />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
