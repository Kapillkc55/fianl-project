import { useState, useEffect } from "react";
import axios from "axios";
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://kapilkk.onrender.com/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <div className="section-tag">
          <span className="pulse-dot"></span>
          My Portfolio
        </div>
        <h1 className="section-title">Featured <span className="highlight">Projects</span></h1>
        <p className="section-subtitle">
          Here are some of my latest projects showcasing my skills and expertise
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <div className="card-image-container">
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  className="card-image"
                  alt={project.title}
                  loading="lazy"
                />
              )}
              <div className="card-overlay">
                <div className="card-buttons">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.liveUrl}
                    className="card-btn"
                  >
                    Live Demo
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.githubUrl}
                    className="card-btn outline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies?.map((tech, idx) => (
                  <span className="tech-badge" key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;