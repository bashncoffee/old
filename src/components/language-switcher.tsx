import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/use-language";

interface LanguageSwitcherProps {
  language: string;
  onChange: (lang: string) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, onChange }) => {
  const { t } = useLanguage();
  
  const handleToggle = () => {
    onChange(language === "pl" ? "en" : "pl");
  };
  
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] text-cyan-100/80">Język</span>
      <div 
        className="relative w-[60px] h-[22px] bg-cyan-900/20 border border-cyan-400/30 rounded-full cursor-pointer flex items-center justify-between px-2"
        onClick={handleToggle}
        role="switch"
        aria-checked={language === "en"}
        aria-label="Toggle language"
      >
        <span className={`text-[10px] ${language === "pl" ? "text-white" : "text-cyan-100/60"}`}>PL</span>
        <span className={`text-[10px] ${language === "en" ? "text-white" : "text-cyan-100/60"}`}>EN</span>
        <motion.div 
          className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg"
          initial={false}
          animate={{ 
            x: language === "pl" ? 2 : 38
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </div>
  );
};