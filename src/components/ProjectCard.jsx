import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-img-container">
        {/* Load images from public/assets */}
        <img src={`/PersonalWebsite/assets/${project.image}`} alt={project.title} />
      </div>

      <h2 className="project-title">{project.title}</h2>
      <p className="project-meta">
        {project.role} | {project.date}
      </p>

      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span className="tech-badge" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-btn-container">
        {project.github && (
          <button
            className="btn btn-color-2"
            onClick={() => window.open(project.github)}
          >
            GitHub
          </button>
        )}
        {project.website && (
          <button
            className="btn btn-color-2"
            onClick={() => window.open(project.website)}
          >
            Website
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
