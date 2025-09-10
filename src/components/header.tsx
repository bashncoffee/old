import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="py-6">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="relative mx-auto w-fit">
          <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl"></div>
          <div className="relative bg-[#2d1b69] border-4 border-teal-400 rounded-full px-12 py-4 neon-box-glow-teal">
            <div className="absolute inset-x-0 top-0 flex justify-center">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-yellow-300 mx-1 animate-pulse"></div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-yellow-300 mx-1 animate-pulse"></div>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl font-pixel uppercase tracking-wider text-center text-[#f8d3a8] neon-glow-purple">
              PIXELATED INSIGHTS: DATA ANALYST QUEST LOG
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};