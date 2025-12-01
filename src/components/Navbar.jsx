import React, { useState } from 'react';

const Navbar = () => {
  // State to handle hamburger menu open/close
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav id="desktop-nav">
        <div className="logo">Sebastian Ashcallay</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav">
        <div className="logo">Sebastian Ashcallay</div>
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
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
