"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, TranslationDictionary, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("PT");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("ir_fitness_lang") as Language | null;
      if (savedLang && (savedLang === "PT" || savedLang === "EN")) {
        setLanguageState(savedLang);
      }
    } catch {
      // Fallback to default PT
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("ir_fitness_lang", lang);
    } catch {
      // Ignore storage errors
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
