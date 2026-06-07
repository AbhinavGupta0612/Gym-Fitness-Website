import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./styles/globals.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  if (currentPage === "login") {
    return <LoginPage onLogin={handleLogin} onBack={() => setCurrentPage("home")} />;
  }

  return (
    <HomePage
      isLoggedIn={isLoggedIn}
      user={user}
      onLoginClick={() => setCurrentPage("login")}
      onLogout={handleLogout}
    />
  );
}
