import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#2e1065] opacity-95"></div>
      
      {/* Forest elements on sides */}
      <div className="absolute inset-y-0 left-0 w-1/6">
        <div className="h-full w-full bg-[url('https://img.heroui.chat/image/landscape?w=300&h=1000&u=forest')] bg-cover opacity-50"></div>
      </div>
      
      <div className="absolute inset-y-0 right-0 w-1/6">
        <div className="h-full w-full bg-[url('https://img.heroui.chat/image/landscape?w=300&h=1000&u=forest2')] bg-cover opacity-50"></div>
      </div>
      
      {/* Mushrooms at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div className="absolute bottom-0 left-[10%]">
          <div className="w-16 h-16 bg-[#ff6b6b] rounded-full opacity-40 animate-pulse-slow"></div>
          <div className="w-4 h-8 bg-[#845ec2] ml-6"></div>
        </div>
        
        <div className="absolute bottom-0 right-[15%]">
          <div className="w-20 h-20 bg-[#ff9671] rounded-full opacity-40 animate-pulse-slow"></div>
          <div className="w-6 h-10 bg-[#845ec2] ml-7"></div>
        </div>
        
        <div className="absolute bottom-0 left-[30%]">
          <div className="w-12 h-12 bg-[#ff9671] rounded-full opacity-40 animate-pulse-slow"></div>
          <div className="w-3 h-6 bg-[#845ec2] ml-4"></div>
        </div>
        
        <div className="absolute bottom-0 right-[35%]">
          <div className="w-14 h-14 bg-[#ff6b6b] rounded-full opacity-40 animate-pulse-slow"></div>
          <div className="w-4 h-7 bg-[#845ec2] ml-5"></div>
        </div>
      </div>
      
      {/* Floating icons */}
      <FloatingIcon 
        icon="lucide:database" 
        color="text-primary" 
        size="w-8 h-8" 
        position="top-[15%] left-[10%]" 
        duration={15}
      />
      <FloatingIcon 
        icon="lucide:bar-chart-2" 
        color="text-secondary" 
        size="w-10 h-10" 
        position="top-[25%] left-[85%]" 
        duration={18}
      />
      <FloatingIcon 
        icon="lucide:pie-chart" 
        color="text-warning" 
        size="w-6 h-6" 
        position="top-[40%] left-[5%]" 
        duration={12}
      />
      <FloatingIcon 
        icon="lucide:line-chart" 
        color="text-success" 
        size="w-7 h-7" 
        position="top-[10%] left-[70%]" 
        duration={20}
      />
      <FloatingIcon 
        icon="lucide:cpu" 
        color="text-primary" 
        size="w-9 h-9" 
        position="top-[50%] left-[90%]" 
        duration={16}
      />
      <FloatingIcon 
        icon="lucide:brain" 
        color="text-secondary" 
        size="w-8 h-8" 
        position="top-[60%] left-[15%]" 
        duration={14}
      />
      <FloatingIcon 
        icon="lucide:sparkles" 
        color="text-warning" 
        size="w-6 h-6" 
        position="top-[30%] left-[40%]" 
        duration={10}
      />
      <FloatingIcon 
        icon="lucide:star" 
        color="text-yellow-400" 
        size="w-5 h-5" 
        position="top-[20%] left-[25%]" 
        duration={13}
      />
      <FloatingIcon 
        icon="lucide:zap" 
        color="text-yellow-400" 
        size="w-7 h-7" 
        position="top-[45%] left-[75%]" 
        duration={17}
      />
      
      {/* Glowing particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? "bg-teal-400" : i % 3 === 1 ? "bg-purple-400" : "bg-yellow-400"
            }`}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const FloatingIcon = ({ icon, color, size, position, duration }) => {
  return (
    <motion.div
      className={`absolute ${position} opacity-30`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <Icon icon={icon} className={`${size} ${color}`} />
    </motion.div>
  );
};