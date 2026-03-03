import React from 'react';
import AboutPic from '../assets/about-pic.png';
import WorkIcon from '../assets/work.png';
import EducationIcon from '../assets/education.png';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  // Define English and Spanish text
  const textContent = {
    en: {
      sectionSubtitle: "Get To Know More",
      sectionTitle: "About Me",
      educationTitle: "Education",
      educationDetails: "B.S. Computer Science (Dec 2025)\nMinor in Mathematics",
      internshipTitle: "Internship",
      internshipDetails: "Software Developer Intern @ Apollonian",
      internshipPeriod: "(Jan 2025 - Present)",
      paragraphs: [
        "I'm a computer science student passionate about building both frontend and backend solutions, with a particular interest in artificial intelligence, machine learning, and data-driven applications. Over the past few years, I've gained hands-on experience developing scalable systems, managing databases, and creating tools that turn complex problems into simple, reliable solutions.",
        "My goal is to leverage these technical skills to build applications that not only perform efficiently but also enhance learning, simplify tasks, and make technology accessible to a wider audience. I enjoy designing end-to-end systems and pipelines, optimizing performance, and translating user needs into real, practical solutions.",
        "Outside of coding, I love tutoring students in math and computer science, playing soccer, and exploring creative ways to apply machine learning in real-world problems. I've also been writing papers on current issues and uses of AI in education, and I've started a biweekly blog where I share a series of proposed solutions to ongoing challenges in learning and technology. I'm always excited by opportunities to combine technology, education, and innovation to make a meaningful impact."
      ]
    },
    es: {
      sectionSubtitle: "Conóceme Mejor",
      sectionTitle: "Sobre Mí",
      educationTitle: "Educación",
      educationDetails: "Licenciatura en Ciencias de la Computación (Dic 2025)\nEspecialización en Matemáticas",
      internshipTitle: "Pasantía",
      internshipDetails: "Practicante de Desarollo de Software @ Apollonian",
      internshipPeriod: "(Ene 2025 - Presente)",
      paragraphs: [
        "Soy un estudiante de ciencias de la computación apasionado por crear soluciones tanto en frontend como en backend, con un interés particular en inteligencia artificial, machine learning (aprendizaje automático) y aplicaciones basadas en datos. En los últimos años, he adquirido experiencia práctica desarrollando sistemas escalables, gestionando bases de datos y creando herramientas que convierten problemas complejos en soluciones simples y confiables.",
        "Mi objetivo es aprovechar estas habilidades técnicas para construir aplicaciones que no solo funcionen de manera eficiente, sino que también mejoren el aprendizaje, simplifiquen tareas y hagan la tecnología accesible a un público más amplio. Disfruto diseñando sistemas y pipelines de inicio a fin, optimizando el rendimiento y traduciendo las necesidades de los usuarios en soluciones reales y prácticas.",
        "Más allá de la programación, me encanta dar tutorías a estudiantes en matemáticas y ciencias de la computación, jugar al fútbol y explorar formas creativas de aplicar machine learning a problemas del mundo real. También he estado escribiendo artículos sobre los usos actuales de la IA en educación, y he comenzado un blog quincenal donde comparto una serie de soluciones propuestas a desafíos continuos en aprendizaje y tecnología. Siempre me entusiasman las oportunidades de combinar tecnología, educación e innovación para generar un impacto significativo."
      ]
    }
  };

  const content = language === 'en' ? textContent.en : textContent.es;

  return (
    <section id="about">
      <p className="section__text__p1">{content.sectionSubtitle}</p>
      <h1 className="title">{content.sectionTitle}</h1>

      <div className="section-container">
        <div className="section__pic-container">
          <img src={AboutPic} alt="Profile Picture" className="about-pic" />
        </div>

        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={EducationIcon} alt="Education icon" className="icon" />
              <h3>{content.educationTitle}</h3>
              <p>{content.educationDetails.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br/></React.Fragment>
              ))}</p>
            </div>
            <div className='details-container'>
              <img src={WorkIcon} alt="Work icon" className='icon' />
              <h3>{content.internshipTitle}</h3>
              <p>{content.internshipDetails}</p>
              <p>{content.internshipPeriod}</p>
            </div>
          </div>

          <div className="text-container">
            {content.paragraphs.map((para, idx) => (
              <p key={idx}>{para}<br/><br/></p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;