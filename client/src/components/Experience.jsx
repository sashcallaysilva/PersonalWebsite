import React from "react";
import { skillCategories } from "../data/skills";
import SkillLogoCard from "./SkillLogoCard";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();

  return (
    <section id="experience">
      <p className="section__text__p1">
        {language === "en" ? "Explore My" : "Explora Mi"}
      </p>
      <h1 className="title">{language === "en" ? "Experience" : "Experiencia"}</h1>

      {skillCategories.map((category) => (
        <div className="details-container" key={category.category}>
          <h2 className="experience-sub-title">
            {language === "en" ? category.category : category.category_es}
          </h2>
          <div className="experience-logos-container">
            {category.items.map((skill) => (
              <SkillLogoCard skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;