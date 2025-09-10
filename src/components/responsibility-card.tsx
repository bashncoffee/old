import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ResponsibilityCardProps {
  title: string;
  icon: string;
  responsibilities: string[];
}

export const ResponsibilityCard: React.FC<ResponsibilityCardProps> = ({ 
  title, 
  icon, 
  responsibilities 
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <motion.div 
      className="glass-panel-dark rounded-lg neon-border overflow-hidden cursor-pointer"
      whileHover={{ 
        boxShadow: "0 0 20px rgba(36,243,255,0.4)",
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center neon-border">
            <Icon icon={icon} className="text-lg text-cyan-400" />
          </div>
          <h4 className="font-display font-semibold text-lg">{title}</h4>
        </div>
        
        <motion.div
          initial={{ height: "40px", overflow: "hidden" }}
          animate={{ 
            height: isExpanded ? "auto" : "40px",
            overflow: isExpanded ? "visible" : "hidden"
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-cyan-100/70 mb-2 line-clamp-2">
            {responsibilities[0]}
            {!isExpanded && "..."}
          </p>
          
          {isExpanded && (
            <motion.ul 
              className="space-y-1 mt-3 pl-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Icon icon="lucide:check" className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
        
        <div className="flex justify-center mt-2">
          <Icon 
            icon={isExpanded ? "lucide:chevron-up" : "lucide:chevron-down"} 
            className="text-cyan-400/70"
          />
        </div>
      </div>
    </motion.div>
  );
};