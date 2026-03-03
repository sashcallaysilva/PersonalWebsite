import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SkillLogoCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const { language } = useLanguage();

  return (
    <div
      className="skill-logo-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Skill icon */}
      <img
        src={`/assets/logos/${skill.icon}`}
        alt={skill.name}
        className="skill-logo"
      />

      {/* Skill level bar */}
      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
      </div>

      {/* Hover details */}
      {hovered && (
        <div className="skill-hover-info">
          <h3>{skill.name}</h3>
          <p>
            {language === "en" ? skill.years + " years experience" : skill.years + " años de experiencia"}
          </p>

          {(language === "en" ? skill.projects : skill.projects_es)?.length > 0 && (
            <ul>
              {(language === "en" ? skill.projects : skill.projects_es).map((proj, idx) => (
                <li key={idx}>{proj}</li>
              ))}
            </ul>
          )}

          {skill.github && (
            <p>
              <a href={skill.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillLogoCard;