import React, { useState } from "react";
import blogPosts from "../data/blogPosts.json";
import "./Blog.css";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const { language } = useLanguage(); // use global language
  const navigate = useNavigate();

  const toggleExpand = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  const copyCitation = (citation) => {
    navigator.clipboard.writeText(citation);
    alert(language === "es" ? "¡Cita copiada!" : "Citation copied!");
  };

  return (
    <section id="blog">
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
                {post.image && (
                    <img src={post.image} alt="" className="blog-image" />
                )}

                <div className="blog-card-content"> 
                    <h2 className="blog-title">
                        <Link to={`/blog/${post.id}`}>
                            {post.title[language] || post.title["en"]}
                        </Link>
                    </h2>
                    <p className="blog-date">{post.date}</p>

                    <p className="blog-preview">
                    {post.status === "in-progress"
                        ? language === "es"
                        ? "Próximamente…"
                        : "Coming soon…"
                        : expandedPost === post.id
                        ? post.preview[language] || post.preview["en"]
                        : (post.preview[language] || post.preview["en"]).slice(0, 100) +
                        "..."}
                    </p>

                    <div className="blog-buttons">
                    {post.status !== "in-progress" && (
                        <button onClick={() => toggleExpand(post.id)}>
                        {expandedPost === post.id
                            ? language === "es"
                            ? "Mostrar menos"
                            : "Show Less"
                            : language === "es"
                            ? "Leer más"
                            : "Read More"}
                            
                        </button>
                    )}

                    {post.pdf[language] && post.pdf[language] !== "" && (
                        <a href={post.pdf[language]} download className="btn-download">
                        {language === "es" ? "Descargar PDF" : "Download PDF"}
                        </a>
                    )}

                    {post.citation[language] && (
                        <button onClick={() => copyCitation(post.citation[language])}>
                        {language === "es" ? "Copiar cita" : "Copy Citation"}
                        </button>
                    )}

                    {post.status !== "in-progress" && (
                        <button onClick={() => navigate(`/blog/${post.id}`)}>
                            {language === "es" ? "Ir al artículo" : "Go to article"}
                        </button>
                    )}

                </div>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;