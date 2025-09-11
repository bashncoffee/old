import React from "react";
import { Icon } from "@iconify/react";
import { Button, Card, Tooltip } from "@heroui/react";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "./components/language-switcher";
import { Navigation } from "./components/navigation";
import { Section } from "./components/section";
import { Timeline } from "./components/timeline";
import { useLanguage } from "./hooks/use-language";
import { ResponsibilityCard } from "./components/responsibility-card";

export default function App() {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [activeSection, setActiveSection] = React.useState("sek-omnie");
  const mainRef = React.useRef<HTMLDivElement>(null);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element && mainRef.current) {
      const container = mainRef.current;
      const elementTop = element.offsetTop;
      
      // Improved smooth scrolling with animation
      container.scrollTo({
        top: elementTop - 16, // Add a small offset for better visibility
        behavior: "smooth"
      });
      
      // Add a visual highlight effect to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.classList.add("section-highlight");
        setTimeout(() => {
          section.classList.remove("section-highlight");
        }, 1000);
      }
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const topSection = visibleSections[0].target;
          setActiveSection(topSection.id);
        }
      },
      {
        root: mainRef.current,
        threshold: [0.35, 0.5, 0.65, 0.8]
      }
    );

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full py-4 px-2 md:px-4">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-[110px_1fr] lg:grid-cols-[120px_1fr] gap-4">
        {/* Navigation */}
        <Navigation 
          activeSection={activeSection} 
          onNavigate={handleNavigation}
          language={currentLanguage}
          onLanguageChange={setLanguage}
        />
        
        {/* Main Content */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="neon-glow rounded-lg glass-panel h-[72px] flex items-center justify-center neon-border"
          >
            <h1 className="text-2xl md:text-3xl font-display font-semibold neon-text">
              {t("title")}
            </h1>
          </motion.div>
          
          {/* Content Frame */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="neon-glow rounded-lg glass-panel neon-border overflow-hidden"
          >
            <div 
              ref={mainRef}
              className="h-[calc(100vh-120px)] overflow-y-auto p-4 md:p-6 scroll-smooth"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(36,243,255,0.55) rgba(0,20,30,0.25)'
              }}
            >
              {/* About Section */}
              <Section id="sek-omnie" title={t("about.h")}>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <motion.div 
                    className="w-[180px] h-[180px] rounded-full neon-border overflow-hidden flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/avatar.png" /* lokalny plik z /public/avatar.png */
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-lg">{t("about.p")}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button 
                        color="primary" 
                        variant="flat" 
                        startContent={<Icon icon="lucide:linkedin" />}
                        className="neon-border"
                      >
                        LinkedIn
                      </Button>
                      <Button 
                        color="primary" 
                        variant="flat" 
                        startContent={<Icon icon="lucide:github" />}
                        className="neon-border"
                      >
                        GitHub
                      </Button>
                      <Button 
                        color="primary" 
                        variant="flat" 
                        startContent={<Icon icon="lucide:twitter" />}
                        className="neon-border"
                      >
                        Twitter
                      </Button>
                    </div>
                  </div>
                </div>
              </Section>
              
              {/* Experience Section */}
              <Section id="sek-dosw" title={t("exp.h")}>
                <Timeline 
                  items={[
                    { year: "2018", label: t("exp.y2018") },
                    { year: "2020", label: t("exp.y2020") },
                    { year: "2022", label: t("exp.y2022") },
                    { year: "2024", label: t("exp.y2024") },
                    { year: "2025", label: t("exp.y2025") }
                  ]}
                />
                
                {/* Removed the grid of cards since they're now shown on hover in the Timeline component */}
              </Section>
              
              {/* Projects Section */}
              <Section id="sek-projekty" title={t("projects.h")}>
                <p className="text-cyan-100/80 mb-6">{t("projects.p")}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 0 20px rgba(36,243,255,0.4)" }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel-dark rounded-lg neon-border overflow-hidden"
                  >
                    <div className="h-40 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 flex items-center justify-center">
                      <Icon icon="lucide:bar-chart-2" className="text-6xl text-cyan-400" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-display font-semibold text-lg mb-2">Data Visualization Platform</h4>
                      <p className="text-sm text-cyan-100/80">
                        Lead developer for an interactive dashboard system that processes and visualizes complex datasets.
                      </p>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full neon-border">React</span>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full neon-border">D3.js</span>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full neon-border">Python</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 0 20px rgba(36,243,255,0.4)" }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel-dark rounded-lg neon-border overflow-hidden"
                  >
                    <div className="h-40 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 flex items-center justify-center">
                      <Icon icon="lucide:cpu" className="text-6xl text-cyan-400" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-display font-semibold text-lg mb-2">ML Prediction Model</h4>
                      <p className="text-sm text-cyan-100/80">
                        Developed a machine learning model that improved prediction accuracy by 35% for client forecasting needs.
                      </p>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full neon-border">TensorFlow</span>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full neon-border">Python</span>
                        <span className="px-2 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full neon-border">AWS</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Section>
              
              {/* Skills Section */}
              <Section id="sek-skille" title={t("skills.h")}>
                <p className="text-cyan-100/80 mb-6">{t("skills.p")}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="glass-panel-dark neon-border">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center neon-border">
                          <Icon icon="lucide:code" className="text-xl text-cyan-400" />
                        </div>
                        <h4 className="font-display font-semibold text-lg">Technical</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Python & Data Science</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>SQL & Database Design</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Machine Learning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Data Visualization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Cloud Services (AWS)</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                  
                  <Card className="glass-panel-dark neon-border">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center neon-border">
                          <Icon icon="lucide:briefcase" className="text-xl text-cyan-400" />
                        </div>
                        <h4 className="font-display font-semibold text-lg">Professional</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Project Management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Data Analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Technical Documentation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Business Intelligence</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Process Optimization</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                  
                  <Card className="glass-panel-dark neon-border">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center neon-border">
                          <Icon icon="lucide:users" className="text-xl text-cyan-400" />
                        </div>
                        <h4 className="font-display font-semibold text-lg">Soft Skills</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Team Leadership</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Communication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Problem Solving</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Critical Thinking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-cyan-400" />
                          <span>Adaptability</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </Section>
              
              {/* Education Section */}
              <Section id="sek-edukacja" title={t("edu.h")}>
                <p className="text-cyan-100/80 mb-6">{t("edu.p")}</p>
                
                <div className="space-y-6">
                  <Card className="glass-panel-dark neon-border">
                    <div className="p-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                        <h4 className="font-display font-semibold text-lg">Master of Science in Data Science</h4>
                        <span className="text-sm text-cyan-300">2018 - 2020</span>
                      </div>
                      <p className="text-cyan-100/90 font-medium mb-2">University of Technology</p>
                      <p className="text-sm text-cyan-100/80">
                        Specialized in machine learning and predictive analytics. Thesis on neural network applications in financial forecasting.
                      </p>
                    </div>
                  </Card>
                  
                  <Card className="glass-panel-dark neon-border">
                    <div className="p-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                        <h4 className="font-display font-semibold text-lg">Bachelor of Engineering in Computer Science</h4>
                        <span className="text-sm text-cyan-300">2014 - 2018</span>
                      </div>
                      <p className="text-cyan-100/90 font-medium mb-2">Technical University</p>
                      <p className="text-sm text-cyan-100/80">
                        Focus on algorithms, data structures, and software engineering principles. Minor in mathematics.
                      </p>
                    </div>
                  </Card>
                </div>
              </Section>
              
              {/* Placeholder Section */}
              <Section id="sek-placeholder" title={t("ph.h")}>
                <p className="text-cyan-100/80 mb-6">{t("ph.p")}</p>
                
                <div className="flex flex-col items-center justify-center py-8">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center mb-6 neon-border"
                  >
                    <Icon icon="lucide:sparkles" className="text-5xl text-cyan-400" />
                  </motion.div>
                  <h4 className="text-xl font-display font-semibold mb-3 neon-text">Coming Soon</h4>
                  <p className="text-center max-w-md text-cyan-100/80">
                    This section will be updated with additional information about certifications, awards, or other relevant achievements.
                  </p>
                </div>
              </Section>
              
              {/* Contact Section */}
              <Section id="sek-kontakt" title={t("contact.h")}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg mb-6">{t("contact.p")} <a href="mailto:twoj@mail.com" className="text-cyan-400 hover:underline">twoj@mail.com</a></p>
                    <p className="text-cyan-100/80 mb-8">{t("contact.more")}</p>
                    
                    <div className="flex gap-4">
                      <Tooltip content="LinkedIn">
                        <Button 
                          isIconOnly
                          color="primary" 
                          variant="flat" 
                          className="neon-border w-12 h-12"
                          aria-label="LinkedIn"
                        >
                          <Icon icon="lucide:linkedin" className="text-xl" />
                        </Button>
                      </Tooltip>
                      
                      <Tooltip content="GitHub">
                        <Button 
                          isIconOnly
                          color="primary" 
                          variant="flat" 
                          className="neon-border w-12 h-12"
                          aria-label="GitHub"
                        >
                          <Icon icon="lucide:github" className="text-xl" />
                        </Button>
                      </Tooltip>
                      
                      <Tooltip content="Twitter">
                        <Button 
                          isIconOnly
                          color="primary" 
                          variant="flat" 
                          className="neon-border w-12 h-12"
                          aria-label="Twitter"
                        >
                          <Icon icon="lucide:twitter" className="text-xl" />
                        </Button>
                      </Tooltip>
                      
                      <Tooltip content="Email">
                        <Button 
                          isIconOnly
                          color="primary" 
                          variant="flat" 
                          className="neon-border w-12 h-12"
                          aria-label="Email"
                        >
                          <Icon icon="lucide:mail" className="text-xl" />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                  
                  <Card className="glass-panel-dark neon-border p-4">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-cyan-900/20 border border-cyan-500/30 rounded-md p-2 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-cyan-900/20 border border-cyan-500/30 rounded-md p-2 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea 
                          id="message" 
                          rows={4}
                          className="w-full bg-cyan-900/20 border border-cyan-500/30 rounded-md p-2 text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                        ></textarea>
                      </div>
                      
                      <Button 
                        color="primary"
                        className="w-full neon-border"
                        endContent={<Icon icon="lucide:send" />}
                      >
                        Send Message
                      </Button>
                    </form>
                  </Card>
                </div>
              </Section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
