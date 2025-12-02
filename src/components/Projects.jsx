import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import "./Projects.css";
import arrowIcon from "../assets/arrow.png"; // <-- import arrow

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>

      <div className="projects-container">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      {/* Use imported arrow */}
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
};

export default Projects;
