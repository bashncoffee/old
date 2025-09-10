import React from "react";
import { Button } from "@heroui/react";

export const Navigation = () => {
  const navItems = [
    "HOME BASE",
    "ANALYTICS",
    "ANALYTICS ARENA",
    "QUEST HISTORY",
    "CONTACT LOOT"
  ];

  return (
    <div className="bg-teal-600 flex flex-wrap justify-center border-b-4 border-teal-400">
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant="flat"
          className="font-pixel text-xs md:text-sm text-white bg-transparent hover:bg-teal-700 rounded-none border-r-2 border-teal-400 last:border-r-0 px-2 md:px-4"
        >
          {item}
        </Button>
      ))}
    </div>
  );
};