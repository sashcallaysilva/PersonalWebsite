import React from 'react';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import resumePDF_EN from '../assets/resume-cs.pdf';
import resumePDF_ES from '../assets/resume-espanol.pdf';
import ReactIcon from '../assets/React.png';
import { useLanguage } from '../context/LanguageContext.jsx';

const Profile = () => {
  const { language } = useLanguage();

  // Choose the CV file based on language
  const resumePDF = language === 'en' ? resumePDF_EN : resumePDF_ES;

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profilePic}
          alt="Sebastian Ashcallay profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">{language === 'en' ? "Hello, I'm" : "Hola, soy"}</p>
        <h1 className="title">Sebastian Ashcallay</h1>
        <p className="section__text__p2">
          {language === 'en' ? "Software Developer | AI & ML" : "Desarrollador de Software | IA y ML"}
        </p>

        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(resumePDF)}
          >
            {language === 'en' ? "Download CV" : "Descargar CV"}
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href = '#contact'}
          >
            {language === 'en' ? "Contact Info" : "Contacto"}
          </button>
        </div>

        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt={language === 'en' ? "My LinkedIn Profile" : "Mi perfil de LinkedIn"}
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/sebastian-ashcallay-353a1221a/', '_blank')}
          />
          <img
            src={githubIcon}
            alt={language === 'en' ? "My Github Profile" : "Mi perfil de Github"}
            className="icon"
            onClick={() => window.open('https://github.com/sashcallaysilva/', '_blank')}
          />
        </div>

        <br />
        <br />

        <div className='credits'>
          {language === 'en' ? "Created using React" : "Creado usando React"} <img src={ReactIcon} alt="react-icon" className='small-icon'/>
        </div>

        <br />

        <div className='lang-options'>
          {language === 'en' ? "Use the blue button on the left to toggle between English & Spanish" : "Usa el botón azul de la izquierda para cambiar entre Inglés & Español"} 
        </div>
      </div>
    </section>
  );
};

export default Profile;