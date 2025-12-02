import React, { useState } from "react";

const SkillLogoCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="skill-logo-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Load images from public/assets/logos */}
      <img
        src={`/PersonalWebsite/assets/logos/${skill.icon}`}
        alt={skill.name}
        className="skill-logo"
      />

      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
      </div>

      {hovered && (
        <div className="skill-hover-info">
          <h3>{skill.name}</h3>
          <p>{skill.years} years experience</p>
          {skill.projects && (
            <ul>
              {skill.projects.map((proj, idx) => (
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
