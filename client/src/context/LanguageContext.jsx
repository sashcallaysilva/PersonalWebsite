import React, { createContext, useState, useContext } from "react";

// Create context
const LanguageContext = createContext();

// Provider component to wrap the app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default to English

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easier consumption
export const useLanguage = () => useContext(LanguageContext);