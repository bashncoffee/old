import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

// Updated chart data and titles to match the request
const chartData = [
  {
    id: "level-up",
    title: "LEVEL UP: Sales Trends",
    type: "line",
    data: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 500 },
      { name: "Apr", value: 450 },
      { name: "May", value: 470 },
      { name: "Jun", value: 400 },
    ],
    color: "#14b8a6",
    icon: "lucide:trending-up"
  },
  {
    id: "esp-gained",
    title: "ESP GAINED: User Churn",
    type: "line",
    data: [
      { name: "Jan", value: 300 },
      { name: "Feb", value: 400 },
      { name: "Mar", value: 350 },
      { name: "Apr", value: 500 },
      { name: "May", value: 450 },
      { name: "Jun", value: 400 },
    ],
    color: "#a855f7",
    icon: "lucide:users"
  },
  {
    id: "esp-gates",
    title: "ESP GATES: User Churn",
    type: "bar",
    data: [
      { name: "Jan", value: 200 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 400 },
      { name: "Apr", value: 300 },
      { name: "May", value: 500 },
      { name: "Jun", value: 450 },
    ],
    color: "#14b8a6",
    icon: "lucide:bar-chart"
  },
  {
    id: "esp-gates2",
    title: "ESP GATES: User Churn",
    type: "line",
    data: [
      { name: "Jan", value: 350 },
      { name: "Feb", value: 400 },
      { name: "Mar", value: 300 },
      { name: "Apr", value: 450 },
      { name: "May", value: 350 },
      { name: "Jun", value: 400 },
    ],
    color: "#a855f7",
    icon: "lucide:activity"
  },
  {
    id: "boss-battle",
    title: "BOSS BATTLE: Market Basket",
    type: "line",
    data: [
      { name: "Jan", value: 300 },
      { name: "Feb", value: 350 },
      { name: "Mar", value: 400 },
      { name: "Apr", value: 300 },
      { name: "May", value: 450 },
      { name: "Jun", value: 400 },
    ],
    color: "#f59e0b",
    icon: "lucide:shopping-cart"
  },
  {
    id: "boss-battle2",
    title: "BOSS BATTLE: Market Basket",
    type: "line",
    data: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 450 },
      { name: "Apr", value: 350 },
      { name: "May", value: 400 },
      { name: "Jun", value: 450 },
    ],
    color: "#14b8a6",
    icon: "lucide:star"
  }
];

export const MiniDashboards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/3">
        <div className="bg-[#1e293b] rounded-lg border-2 border-teal-500 p-4 h-full">
          <div className="relative">
            <img
              src="https://img.heroui.chat/image/avatar?w=300&h=300&u=42"
              alt="Data Analyst Character"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="absolute top-1/4 right-1/4 animate-pulse">
              <Icon icon="lucide:headphones" className="w-6 h-6 text-teal-400" />
            </div>
            <div className="absolute top-1/3 right-1/3 animate-pulse">
              <Icon icon="lucide:glasses" className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#0f172a] px-3 py-1 rounded-md border border-teal-400 text-xs font-pixel text-teal-400">
              LEVEL 42 DATA WIZARD
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-2/3">
        <div className="bg-[#1e293b] rounded-lg border-2 border-teal-500 p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {chartData.map((chart) => (
              <div 
                key={chart.id} 
                className="bg-[#0f172a] rounded-md border border-teal-600 p-2"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-pixel text-teal-400">{chart.title}</span>
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <Icon icon={chart.icon} className="w-3 h-3 text-black" />
                  </div>
                </div>
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    {chart.type === 'line' ? (
                      <LineChart
                        data={chart.data}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke={chart.color} 
                          strokeWidth={2}
                          dot={{ r: 1 }}
                        />
                      </LineChart>
                    ) : (
                      <BarChart
                        data={chart.data}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <Bar dataKey="value" fill={chart.color} />
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};