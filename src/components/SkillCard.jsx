import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <article className="details-article">
      <img src={`./src/assets/logos/${skill.icon}.png`} alt={skill.name} className="icon" />
      <div>
        <h3>
          {skill.link ? (
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              {skill.name}
            </a>
          ) : (
            skill.name
          )}
        </h3>
        {skill.description && <p className="small-text">{skill.description}</p>}
        <div className="skill-bar-container">
          <div
            className="skill-bar"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
