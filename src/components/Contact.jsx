import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <p className="section__text__p1">Get In Touch</p>
      <h1 className="title">Contact Me</h1>

      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./src/assets/email.png"
            alt="Email icon"
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
            src="./src/assets/linkedin.png"
            alt="LinkedIn icon"
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
