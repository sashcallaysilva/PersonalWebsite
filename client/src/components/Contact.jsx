import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Contact.css";
import EmailIcon from "../assets/email.png";
import LinkedInIcon from "../assets/linkedin.png";

const Contact = () => {
  const { language } = useLanguage();

  // Text translations
  const text = {
    en: {
      headerSmall: "Get In Touch",
      headerLarge: "Contact Me",
      emailAlt: "Email icon",
      linkedinAlt: "LinkedIn icon"
    },
    es: {
      headerSmall: "Ponte en Contacto",
      headerLarge: "Contáctame",
      emailAlt: "Icono de correo electrónico",
      linkedinAlt: "Icono de LinkedIn"
    }
  };

  const t = language === "en" ? text.en : text.es;

  return (
    <section id="contact" className="contact-section">
      <p className="section__text__p1">{t.headerSmall}</p>
      <h1 className="title">{t.headerLarge}</h1>

      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={EmailIcon}
            alt={t.emailAlt}
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:sashcallaysilva@gmail.com">
              sashcallaysilva@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={LinkedInIcon}
            alt={t.linkedinAlt}
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/sebastian-ashcallay-353a1221a/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;