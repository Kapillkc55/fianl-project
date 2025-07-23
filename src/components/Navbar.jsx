// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu when route changes
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <span className="logo-left">&lt;</span>
            <span className="logo-center">DevFolio</span>
            <span className="logo-right">/&gt;</span>
          </Link>
        </div>

        <div className="navbar-desktop-menu">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="nav-link"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "bar-top" : ""}`}></div>
          <div className={`bar ${isOpen ? "bar-middle" : ""}`}></div>
          <div className={`bar ${isOpen ? "bar-bottom" : ""}`}></div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <Link to="/" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
            <span className="logo-left">&lt;</span>
            <span className="logo-center">DevFolio</span>
            <span className="logo-right">/&gt;</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="close-btn">✕</button>
        </div>

        <div className="mobile-links">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
