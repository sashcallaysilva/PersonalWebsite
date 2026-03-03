import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx'; // Language context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation labels in English and Spanish
  const navLabels = {
    en: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      blog: "Blog"
    },
    es: {
      about: "Acerca de",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      blog: "Blog"
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <Link to="/" className="logo">Sebastian Ashcallay</Link> 
        <div>
          <ul className="nav-links">
            <li><Link to='/about'>{navLabels[language].about}</Link></li>
            <li><Link to='/experience'>{navLabels[language].experience}</Link></li>
            <li><Link to='/projects'>{navLabels[language].projects}</Link></li>
            <li><Link to='/contact'>{navLabels[language].contact}</Link></li>
            <li><Link to="/blog">{navLabels[language].blog}</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav">
        <Link to="/" className="logo">Sebastian Ashcallay</Link> 
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li><Link to='/about' onClick={toggleMenu}>{navLabels[language].about}</Link></li>
            <li><Link to='/experience' onClick={toggleMenu}>{navLabels[language].experience}</Link></li>
            <li><Link to='/projects' onClick={toggleMenu}>{navLabels[language].projects}</Link></li>
            <li><Link to='/contact' onClick={toggleMenu}>{navLabels[language].contact}</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>{navLabels[language].blog}</Link></li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;