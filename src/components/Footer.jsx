import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2025 Sebastian Ashcallay. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
