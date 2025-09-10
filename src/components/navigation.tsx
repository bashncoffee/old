import React from "react";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@heroui/react";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "../hooks/use-language";

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  language: string;
  onLanguageChange: (lang: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onNavigate,
  language,
  onLanguageChange
}) => {
  const { t } = useLanguage();
  
  const navItems = [
    { id: "sek-omnie", label: t("nav.about"), icon: "lucide:user" },
    { id: "sek-dosw", label: t("nav.exp"), icon: "lucide:briefcase" },
    { id: "sek-projekty", label: t("nav.projects"), icon: "lucide:folder" },
    { id: "sek-skille", label: t("nav.skills"), icon: "lucide:award" },
    { id: "sek-edukacja", label: t("nav.edu"), icon: "lucide:graduation-cap" },
    { id: "sek-placeholder", label: t("nav.placeholder"), icon: "lucide:star" },
    { id: "sek-kontakt", label: t("cta.contact"), icon: "lucide:mail", isAction: true }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 flex flex-row md:flex-col gap-1 flex-wrap md:flex-nowrap h-fit md:h-[calc(100vh-32px)] p-1 glass-panel rounded-lg neon-border"
    >
      <div className="flex flex-row md:flex-col gap-1 flex-wrap md:flex-nowrap">
        {navItems.map((item) => (
          <Tooltip 
            key={item.id}
            content={item.label}
            placement="right"
            showArrow
          >
            <Button
              isIconOnly
              variant={activeSection === item.id ? "solid" : "flat"}
              color={activeSection === item.id ? "primary" : "default"}
              onPress={() => onNavigate(item.id)}
              className={`w-8 h-8 transition-all duration-300 ${activeSection === item.id ? "neon-glow" : "neon-border"}`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <Icon icon={item.icon} className="text-base" />
              <span className="sr-only">{item.label}</span>
            </Button>
          </Tooltip>
        ))}
      </div>
      
      <div className="md:mt-auto">
        <Tooltip content={t("cta.download")} placement="right" showArrow>
          <Button
            as="a"
            href="cv.pdf"
            download
            isIconOnly
            variant="flat"
            color="primary"
            className="w-8 h-8 neon-border"
            aria-label={t("cta.download")}
          >
            <Icon icon="lucide:download" className="text-base" />
          </Button>
        </Tooltip>
      </div>
      
      <div className="md:mt-2">
        <Tooltip content={language === "pl" ? "Zmień na EN" : "Change to PL"} placement="right" showArrow>
          <Button
            isIconOnly
            variant="flat"
            color="default"
            onPress={() => onLanguageChange(language === "pl" ? "en" : "pl")}
            className="w-8 h-8 neon-border"
            aria-label="Toggle language"
          >
            <Icon icon="lucide:globe" className="text-base" />
            <span className="absolute text-[8px] font-bold right-1 bottom-0.5">
              {language.toUpperCase()}
            </span>
          </Button>
        </Tooltip>
      </div>
    </motion.nav>
  );
};