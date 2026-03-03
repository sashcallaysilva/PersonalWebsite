import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();

  // Multilingual text
  const textContent = {
    en: {
      nav: ["About", "Experience", "Projects", "Contact", "Blog"],
      copyright: "Copyright © 2026 Sebastian Ashcallay. All Rights Reserved."
    },
    es: {
      nav: ["Sobre Mí", "Experiencia", "Proyectos", "Contacto", "Blog"],
      copyright: "Derechos reservados © 2026 Sebastian Ashcallay."
    }
  };

  const content = language === "en" ? textContent.en : textContent.es;

  return (
    <footer className="footer-section">
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><Link to='/about'>{content.nav[0]}</Link></li>
            <li><Link to='/experience'>{content.nav[1]}</Link></li>
            <li><Link to='/projects'>{content.nav[2]}</Link></li>
            <li><Link to='/contact'>{content.nav[3]}</Link></li>
            <li><Link to="/blog">{content.nav[4]}</Link></li>
          </ul>
        </div>
      </nav>
      <p>{content.copyright}</p>
    </footer>
  );
};

export default Footer;