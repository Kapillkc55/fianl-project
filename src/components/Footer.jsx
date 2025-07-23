import { 
  Facebook,
  Instagram,
  Twitter,
  Github,
  Linkedin
} from "lucide-react";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-container">
            <div className="logo-circle">
              <span className="logo-text">K</span>
            </div>
            <span className="brand-name">Kapil Raj KC</span>
          </div>
          <p className="tagline">
            Full Stack Developer & Creative Problem Solver
          </p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/kapilraj.kc.1" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://x.com/kapiraj_kc" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://github.com/kapilraj10" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kapilraj-kc/" 
              target="_blank" 
              rel="noreferrer"
              className="social-link"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h3 className="link-title">Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="link-group">
            <h3 className="link-title">Resources</h3>
            <ul>
              <li><a href="https://docs.google.com/document/d/1we-hXRuP4Fw6cRw-len-47BZ7sVjLifMrwD-XEB_EGU/edit?usp=sharing">Resume</a></li>
              <li><a href="https://github.com/kapilraj10">GitHub</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#tools">Dev Tools</a></li>
            </ul>
          </div>
          
          
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          © {currentYear} Kapil Raj KC. All rights reserved.
        </div>
        <div className="made-with">
          Made with ❤️ using React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;