import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-image-container">
                    <div className="image-glow"></div>
                    <div className="image-border">
                        <img
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-5597279-4674328.png"
                            className="about-img"
                            alt="Kapil Raj KC - Full Stack Developer"
                            loading="lazy"
                        />
                    </div>
                    <div className="experience-badge">
                        <span className="years">1+</span>
                        <span>Years Experience</span>
                    </div>
                </div>
                
                <div className="about-content">
                    <div className="section-tag">
                        <span className="pulse-dot"></span>
                        About Me
                    </div>
                    <h1 className="section-title">
                        Full Stack Developer & <span className="highlight">Problem Solver</span>
                    </h1>
                    
                    <p className="about-description">
                        I'm Kapil Raj KC, a passionate Full Stack Developer from Kathmandu, Nepal with 1+ year of experience building modern web applications. 
                        I specialize in the MERN stack and enjoy creating fast, responsive user interfaces.
                    </p>
                    
                    <div className="about-details">
                        <div className="detail-item">
                            <div className="tech-badge">Education</div>
                            <p>Enhancing skills through hands-on projects and continuous learning</p>
                        </div>
                        <div className="detail-item">
                            <div className="tech-badge">Focus</div>
                            <p>Building scalable applications with clean architecture and intuitive UX</p>
                        </div>
                        <div className="detail-item">
                            <div className="tech-badge">Technologies</div>
                            <p>JavaScript, React, Node.js, MongoDB, Firebase, Tailwind CSS</p>
                        </div>
                    </div>
                    
                    <div className="about-buttons">
                        <a href="#contact" className="btn-download">
                            Contact Me
                        </a>
                        <a 
                            href="https://github.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-contact"
                        >
                            GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;