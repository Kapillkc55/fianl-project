// src/components/HeroSection.jsx
import { useState } from "react";
import { Download, Mail, ChevronDown } from "lucide-react";
import "./Hero.css";
import profileImg from "../image/download.jpeg";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(null);

  const techStack = [
    "MongoDB", "Express.js", "React", "Node.js",
    "JavaScript", "Tailwind CSS", "GitHub", "Firebase"
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-decor" />
      <div className="hero-grid-pattern" />

      <div className="hero-content">
        <div className="hero-flex">
          {/* Text Section */}
          <div className="hero-text">
            <div className="hero-status">
              <div className="pulse-dot" />
              Available for new projects
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Kapil Raj KC</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack  Developer</h2>

            <p className="hero-description">
              I'm a passionate developer from Kathmandu, Nepal with 1+ year experience.
              I love building fast, responsive, and modern full-stack web apps.
            </p>

            <div className="hero-buttons">
              <a
                href="https://docs.google.com/document/d/1we-hXRuP4Fw6cRw-len-47BZ7sVjLifMrwD-XEB_EGU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered("hire")}
                onMouseLeave={() => setIsHovered(null)}
                className={`btn-hire ${isHovered === "hire" ? "btn-hover" : ""}`}
              >
                <Download className="icon" />
                Download Resume
              </a>

              <button
                onMouseEnter={() => setIsHovered("contact")}
                onMouseLeave={() => setIsHovered(null)}
                className={`btn-contact ${isHovered === "contact" ? "btn-hover-contact" : ""}`}
              >
                <Mail className="icon" />
                Contact Me
              </button>
            </div>

            <div className="tech-stack">
              {techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="hero-image-wrapper">
            <div className="hero-glow-circle1" />
            <div className="hero-glow-circle2" />
            <div className="hero-image-border">
              <img
                src={profileImg}
                alt="Kapil Raj KC"
                className="hero-image"
              />
            </div>
            <div className="experience-badge">
              <span className="years">1+</span>
              <span className="label">Year Exp</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <ChevronDown className="chevron-icon" />
      </div>
    </section>
  );
}
