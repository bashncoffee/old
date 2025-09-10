import React from "react";

interface Dictionary {
  [key: string]: {
    [key: string]: string;
  };
}

const dictionary: Dictionary = {
  pl: {
    title: "Moje CV Online",
    "nav.about": "O mnie",
    "nav.exp": "Doświadczenie",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.edu": "Wykształcenie",
    "nav.placeholder": "Placeholder",
    "about.h": "O mnie",
    "about.p": "Krótki opis – kim jesteś, w czym się specjalizujesz.",
    "exp.h": "Doświadczenie",
    "exp.y2018": "Staże i początek kariery",
    "exp.y2020": "Pierwsza praca – Analyst",
    "exp.y2022": "Mid Analyst – większe projekty",
    "exp.y2024": "Senior Analyst",
    "exp.y2025": "Team Lead",
    "projects.h": "Projekty",
    "projects.p": "Lista kluczowych projektów – nazwa, rola, rezultat.",
    "skills.h": "Umiejętności",
    "skills.p": "Stack techniczny, narzędzia, miękkie kompetencje.",
    "edu.h": "Wykształcenie",
    "edu.p": "Szkoły/uczelnia, kierunek, lata.",
    "ph.h": "Placeholder",
    "ph.p": "Dowolna dodatkowa sekcja.",
    "contact.h": "Kontakt",
    "contact.p": "Napisz do mnie:",
    "contact.more": "Możesz też dodać formularz lub linki do sociali.",
    "cta.contact": "Kontakt",
    "cta.download": "Pobierz CV"
  },
  en: {
    title: "My Online CV",
    "nav.about": "About",
    "nav.exp": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.edu": "Education",
    "nav.placeholder": "Placeholder",
    "about.h": "About",
    "about.p": "Short bio – who you are and what you do.",
    "exp.h": "Experience",
    "exp.y2018": "Internships and career start",
    "exp.y2020": "First job – Analyst",
    "exp.y2022": "Mid Analyst – larger projects",
    "exp.y2024": "Senior Analyst",
    "exp.y2025": "Team Lead",
    "projects.h": "Projects",
    "projects.p": "Key projects – title, role, outcome.",
    "skills.h": "Skills",
    "skills.p": "Tech stack, tools, soft skills.",
    "edu.h": "Education",
    "edu.p": "Schools/university, major, years.",
    "ph.h": "Placeholder",
    "ph.p": "Any additional section.",
    "contact.h": "Contact",
    "contact.p": "Write to me:",
    "contact.more": "You can also add a form or social links.",
    "cta.contact": "Contact",
    "cta.download": "Download CV"
  }
};

export const useLanguage = () => {
  // Detect user's browser language
  const detectLanguage = (): string => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang.startsWith("en") ? "en" : "pl";
  };

  const [currentLanguage, setCurrentLanguage] = React.useState<string>(detectLanguage());

  const t = (key: string): string => {
    return dictionary[currentLanguage]?.[key] || key;
  };

  return {
    t,
    currentLanguage,
    setLanguage: setCurrentLanguage,
    dictionary
  };
};
