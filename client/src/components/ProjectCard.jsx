import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { language } = useLanguage();

  const btnText = {
    en: { github: "GitHub", website: "Website" },
    es: { github: "GitHub", website: "Sitio Web" }
  };

  const text = language === "en" ? btnText.en : btnText.es;

  // Select correct title and description
  const title = language === "en" ? project.title : project.title_es;
  const descriptions = language === "en" ? project.description : project.description_es;

  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={`/assets/${project.image}`} alt={title} />
      </div>

      <h2 className="project-title">{title}</h2>
      <p className="project-meta">
        {language === "en" ? project.role : project.role_es} | {project.date}
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
            {text.github}
          </button>
        )}
        {project.website && (
          <button
            className="btn btn-color-2"
            onClick={() => window.open(project.website)}
          >
            {text.website}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;