import React from "react";
import { skillCategories } from "../data/skills";
import SkillLogoCard from "./SkillLogoCard";
import ArrowIcon from "../assets/arrow.png";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>

      {skillCategories.map((category) => (
        <div className="details-container" key={category.category}>
          <h2 className="experience-sub-title">{category.category}</h2>
          <div className="experience-logos-container">
            {category.items.map((skill) => (
              <SkillLogoCard skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      ))}

      <img
        src={ArrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
};

export default Experience;
