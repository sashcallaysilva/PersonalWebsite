import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";
import "./Projects.css";

const Projects = () => {
  const { language } = useLanguage();

  const sectionText = {
    en: { subtitle: "Browse My Recent", title: "Projects" },
    es: { subtitle: "Explora Mis", title: "Proyectos" }
  };

  const content = language === "en" ? sectionText.en : sectionText.es;

  return (
    <section id="projects">
      <p className="section__text__p1">{content.subtitle}</p>
      <h1 className="title">{content.title}</h1>

      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;