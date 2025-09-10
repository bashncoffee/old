import React from "react";
import { Icon } from "@iconify/react";
import { Input, Button } from "@heroui/react";

export const Footer = () => {
  return (
    <div className="bg-teal-600 p-4 border-t-4 border-teal-400">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex gap-4">
          <Button 
            variant="flat" 
            isIconOnly 
            className="bg-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
          >
            <Icon icon="logos:twitter" className="w-4 h-4" />
          </Button>
          <Button 
            variant="flat" 
            isIconOnly 
            className="bg-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
          >
            <Icon icon="logos:linkedin-icon" className="w-4 h-4" />
          </Button>
          <Button 
            variant="flat" 
            isIconOnly 
            className="bg-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
          >
            <Icon icon="logos:github-icon" className="w-4 h-4" />
          </Button>
          <Button 
            variant="flat" 
            isIconOnly 
            className="bg-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
          >
            <Icon icon="logos:dribbble-icon" className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex-grow flex gap-2">
          <Input 
            placeholder="@team/Angrymailbot" 
            className="bg-white rounded-md"
          />
          <Button 
            color="primary"
            className="bg-teal-500 text-white font-pixel text-xs"
          >
            SEND MESSAGE!
          </Button>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs font-pixel text-white bg-black/50 inline-block px-4 py-1 rounded-sm neon-glow-teal">
          ⚡ POWERED BY DATA, DRIVEN BY PIXELS. THANK YOU FOR PLAYING! ⚡
        </p>
      </div>
    </div>
  );
};