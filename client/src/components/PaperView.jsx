import { useParams } from "react-router-dom";
import papers from "../data/papers";
import { useLanguage } from "../context/LanguageContext";
import React from "react";
import "./PaperView.css";

const PaperView = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  const paper = papers.find((p) => p.id === id);

  if (!paper) {
    return <p>Paper not found.</p>;
  }

  const content = paper.sections[language] || paper.sections["en"];
  const generateId = (text) => text.toLowerCase().replace(/[^\w]+/g, "-"); // for table of contents

  const renderSection = (section, i) => {
    switch (section.type) {
      case "heading":
        return (
          <h2 key={i} id={generateId(section.content)} className="paper-section-heading">
            {section.content}
          </h2>
        );

      case "subheading":
        return (
          <h3 key={i} id={generateId(section.content)} className="paper-section-subheading">
            {section.content}
          </h3>
        );

      case "paragraph":
        return (
          <p key={i} className="paper-paragraph">
            {section.content}
          </p>
        );

      case "list":
        return (
          <ul key={i} className="paper-list">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );

      case "pullquote":
        return (
          <div key={i} className="paper-quote">
            <p>{section.content}</p>
          </div>
        );

      case "blockquote":
        return (
          <blockquote key={i} className="blockquote">
            <p>{section.content}</p>
            {section.attribution && (
              <div className="blockquote-attribution">
                — {section.attribution}
              </div>
            )}
          </blockquote>
        );

      // Long quote (for bigger emphasis sections)
      case "longquote":
        return (
          <div key={i} className="paper-longquote">
            <p>{section.content}</p>
            {section.attribution && (
              <span className="paper-longquote-attribution">
                — {section.attribution}
              </span>
            )}
          </div>
        );

      case "divider":
        return <hr key={i} className="paper-divider" />;

      default:
        return null;
    }
  };

  const toc = content
    .filter(
        (section) =>
        section.type === "heading" || section.type === "subheading"
    )
    .map((section) => ({
        id: generateId(section.content),
        text: section.content,
        type: section.type,
    }));

  return (
    <section className="paper-section">
      {/* Banner Image */}
      {paper.banner && (
        <div className="paper-banner">
          <img src={paper.banner} alt="Paper banner" />
        </div>
      )}

      {/* Header */}
      <div className="paper-header">
        <h1 className="paper-title">
          {paper.title[language] || paper.title["en"]}
        </h1>

        <p className="paper-author">{paper.author}</p>

        <p className="paper-date">
          {paper.date[language] || paper.date["en"]}
        </p>

        {/* Reading Time */}
        {paper.readingTime && (
          <p className="paper-reading-time">
            {paper.readingTime[language] || paper.readingTime["en"]}
          </p>
        )}

        {/* Download PDF */}
        {paper.pdf && paper.pdf[language] && (
          <a
            href={paper.pdf[language]}
            download
            className="btn-download"
          >
            {language === "es" ? "Descargar PDF" : "Download PDF"}
          </a>
        )}
      </div>

      {/* Content */}
      <div className="paper-layout">
  
        {/* ✅ Sidebar TOC */}
        <aside className="paper-toc">
            <h4>
            {language === "es" ? "Contenido" : "Contents"}
            </h4>

            <ul>
            {toc.map((item, i) => (
                <li
                key={i}
                className={
                    item.type === "subheading"
                    ? "toc-sub"
                    : "toc-main"
                }
                >
                <a href={`#${item.id}`}>{item.text}</a>
                </li>
            ))}
            </ul>
        </aside>

        {/* ✅ Main Content */}
        <div className="paper-main">
            <div className="paper-content">
            {content.map((section, i) =>
                renderSection(section, i)
            )}
            </div>
        </div>
        </div>
    </section>
  );
};

export default PaperView;