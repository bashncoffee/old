import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, Progress, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const completedQuests = [
  {
    id: "sql-dungeon",
    name: "DUNGEON OF RETAIL DATA",
    subtitle: "DATA EADTS (SQL)",
    icon: "lucide:database",
    description: "Conquered complex SQL queries in the retail data dungeon"
  },
  {
    id: "python-pandas",
    name: "STARSHIP SUPPLY CHAIN",
    subtitle: "Python/Pandas, (R/Shiny)",
    icon: "lucide:package",
    description: "Optimized supply chain data with Python and R visualizations"
  }
];

export const QuestHistory = () => {
  return (
    <div className="bg-[#1e293b] rounded-lg border-2 border-teal-500 p-4">
      <h2 className="text-xl font-pixel text-center text-yellow-200 mb-6 neon-glow-yellow">
        QUEST HISTORY
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4 flex justify-center">
          <img 
            src="https://img.heroui.chat/image/game?w=150&h=200&u=scroll" 
            alt="Quest scroll" 
            className="h-40 w-auto object-contain animate-pulse-slow"
          />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-pixel text-teal-400 neon-glow-teal">99%</span>
              <span className="text-xs font-pixel text-gray-400">AGGREGATION COMPLETE</span>
            </div>
            <div className="h-4 bg-teal-900 rounded-full overflow-hidden">
              <div className="h-full bg-teal-400 rounded-full animate-pulse" style={{width: "99%"}}></div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <Button 
                color="primary" 
                variant="flat"
                className="font-pixel text-xs border border-teal-500 rounded-full neon-box-glow-teal"
              >
                FUSION RESULTS
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {completedQuests.map((quest) => (
              <div key={quest.id} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#0f172a] p-2 rounded-lg border border-teal-500 neon-box-glow-teal">
                    <Icon icon={quest.icon} className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-sm font-pixel text-white">{quest.name}</h3>
                  <p className="text-xs font-pixel text-gray-400">{quest.subtitle}</p>
                  <p className="text-[10px] font-pixel text-gray-500 mt-1">{quest.description}</p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="bg-[#0f172a] px-3 py-1 rounded-sm border border-yellow-500 text-xs font-pixel text-yellow-400 neon-box-glow-yellow">
                    COMPLETED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};