import React from 'react';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import resumePDF from '../assets/resume-cs.pdf';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profilePic}
          alt="Sebastian Ashcallay profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sebastian Ashcallay</h1>
        <p className="section__text__p2">CS @ University of Maryland</p>

        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resumePDF)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Info
          </button>
        </div>

        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn Profile"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/sebastian-ashcallay-353a1221a/', '_blank')}
          />
          <img
            src={githubIcon}
            alt="My Github Profile"
            className="icon"
            onClick={() => window.open('https://github.com/SebastianAshcallaySilva', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
