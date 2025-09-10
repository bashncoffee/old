import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="section mb-24 last:mb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-panel-dark rounded-lg p-5 md:p-6 neon-border">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 neon-text">{title}</h2>
        {children}
      </div>
    </motion.section>
  );
};