import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";

const robotData = [
  {
    id: "predict-bot",
    name: "PREDICTO-BOT",
    subtitle: "(Regression)",
    icon: "lucide:brain",
    color: "primary",
    description: "Predicts future values based on historical data patterns"
  },
  {
    id: "classify-cron",
    name: "CLASSIFY-CRON",
    subtitle: "(Classification)",
    icon: "lucide:filter",
    color: "secondary",
    description: "Categorizes data into predefined classes with high accuracy"
  },
  {
    id: "cluster-king",
    name: "CLUSTER-KING",
    subtitle: "(Deep Learning)",
    icon: "lucide:network",
    color: "warning",
    description: "Groups similar data points into meaningful clusters"
  },
  {
    id: "neural-knight",
    name: "NEURAL-KNIGHT",
    subtitle: "(Deep Learning)",
    icon: "lucide:layers",
    color: "success",
    description: "Processes complex patterns using neural network architecture"
  }
];

export const AiModelSection = () => {
  return (
    <div className="bg-[#1e293b] rounded-lg border-2 border-teal-500 p-4">
      <h2 className="text-xl font-pixel text-center text-yellow-200 mb-6 neon-glow-yellow">
        AI MODEL AGGREGATION FABRIC
      </h2>

      <div className="relative">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1200 300">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          
          <path 
            d="M300,150 C400,50 500,50 600,150" 
            stroke="url(#lineGradient1)" 
            strokeWidth="4" 
            fill="none" 
            strokeDasharray="10,5"
            className="animate-pulse"
          />
          <path 
            d="M600,150 C700,250 800,250 900,150" 
            stroke="url(#lineGradient2)" 
            strokeWidth="4" 
            fill="none"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
          <path 
            d="M900,150 C1000,50 1100,50 1200,150" 
            stroke="url(#lineGradient3)" 
            strokeWidth="4" 
            fill="none"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
          
          {/* Gear icons */}
          <circle cx="450" cy="100" r="15" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
          <path d="M450,92 L450,108 M442,100 L458,100" stroke="#14b8a6" strokeWidth="2" />
          
          <circle cx="750" cy="200" r="15" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <path d="M750,192 L750,208 M742,200 L758,200" stroke="#a855f7" strokeWidth="2" />
          
          <circle cx="1050" cy="100" r="15" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <path d="M1050,92 L1050,108 M1042,100 L1058,100" stroke="#f59e0b" strokeWidth="2" />
        </svg>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {robotData.map((robot, index) => (
            <div key={robot.id} className="bg-[#0f172a] border-2 border-teal-500 rounded-lg p-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={`https://img.heroui.chat/image/ai?w=120&h=120&u=${index + 10}`}
                    alt={robot.name}
                    className="w-24 h-24 object-cover rounded-lg mb-3 pixelated"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-400 animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-purple-400 animate-pulse"></div>
                </div>
                <h3 className="text-sm font-pixel text-teal-400 text-center neon-glow-teal">{robot.name}</h3>
                <p className="text-xs font-pixel text-gray-400 text-center">{robot.subtitle}</p>
                <p className="text-[10px] font-pixel text-gray-500 text-center mt-2">{robot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};