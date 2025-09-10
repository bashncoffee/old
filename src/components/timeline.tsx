import React from "react";
import { motion } from "framer-motion";
import { Card } from "@heroui/react";

interface TimelineItem {
  year: string;
  label: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [activeYear, setActiveYear] = React.useState<string | null>(null);
  
  // Find the corresponding job details based on the year
  const getJobDetails = (year: string) => {
    switch(year) {
      case "2018":
        return {
          title: "Internship",
          period: "2018 - 2020",
          description: "Various internships and learning experiences to build foundational skills."
        };
      case "2020":
        return {
          title: "Junior Analyst",
          period: "2020 - 2022",
          description: "First full-time role focusing on data analysis and reporting."
        };
      case "2022":
        return {
          title: "Mid Analyst",
          period: "2022 - 2024",
          description: "Worked on larger projects with increased responsibility and scope."
        };
      case "2024":
        return {
          title: "Senior Analyst",
          period: "2024 - Present",
          description: "Leading data analysis initiatives and mentoring junior team members."
        };
      case "2025":
        return {
          title: "Team Lead",
          period: "2025 (Planned)",
          description: "Future role with leadership responsibilities and strategic planning."
        };
      default:
        return null;
    }
  };

  return (
    <div className="relative py-8">
      {/* Timeline line */}
      <motion.div 
        className="absolute left-0 right-0 top-[40px] h-[2px] bg-gradient-to-r from-cyan-400/70 to-cyan-400/70 rounded-full"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Timeline points */}
      <div className="flex justify-between mt-12">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setActiveYear(item.year)}
            onMouseLeave={() => setActiveYear(null)}
          >
            <motion.div 
              className="w-5 h-5 rounded-full timeline-dot cursor-pointer"
              whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(36,243,255,0.7)" }}
              animate={{ 
                scale: activeYear === item.year ? 1.2 : 1,
                boxShadow: activeYear === item.year ? "0 0 15px rgba(36,243,255,0.7)" : "0 0 10px rgba(36,243,255,0.5)"
              }}
            />
            <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 text-sm text-cyan-300 font-medium">
              {item.year}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Job details card that appears on hover */}
      <motion.div
        className="mt-8 w-full"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: activeYear ? 1 : 0,
          height: activeYear ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {activeYear && (
          <Card className="glass-panel-dark neon-border overflow-hidden">
            <motion.div 
              className="p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-display font-semibold text-lg">{getJobDetails(activeYear)?.title}</h4>
                <span className="text-sm text-cyan-300">{getJobDetails(activeYear)?.period}</span>
              </div>
              <p className="text-cyan-100/80">
                {getJobDetails(activeYear)?.description}
              </p>
            </motion.div>
          </Card>
        )}
      </motion.div>
    </div>
  );
};