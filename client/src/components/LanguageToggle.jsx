import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="btn-language-toggle" onClick={toggleLanguage}>
      {language === "en" ? "ES" : "EN"}
    </button>
  );
};

export default LanguageToggle;