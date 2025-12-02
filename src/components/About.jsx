import React from 'react';
import AboutPic from '../assets/about-pic.png';
import EducationIcon from '../assets/education.png';
import ArrowIcon from '../assets/arrow.png';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={AboutPic}
            alt="Profile Picture"
            className="about-pic"
          />
        </div>

        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={EducationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                A.A. Computer Science, Honors (May 2024)
                <br />
                B.S. Computer Science (ML Concentration), Minor in Mathematics (Exp. Dec 2025)
              </p>
            </div>
          </div>

          <div className="text-container">
            <p>
                I am a passionate computer science student with a strong interest in
                artificial intelligence, machine learning, and data-driven solutions.
                Over the past few years, I have gained experience in frontend and backend
                development, database management, etc.
            </p>
            <br />
            <br />
            <p>
                My goal is to leverage my technical skills to develop applications that
                simplify complex tasks, enhance learning experiences, and make technology
                accessible and useful for a broader audience. Outside of coding, I enjoy 
                tutoring students in mathematics and computer science, playing soccer, 
                and exploring innovative ways to apply data science in real-world problems.
            </p>
          </div>
        </div>
      </div>

      <img
        src={ArrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = '#experience')}
      />
    </section>
  );
};

export default About;
