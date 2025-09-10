import React from "react";
import { Header } from "./components/header";
import { MiniDashboards } from "./components/mini-dashboards";
import { AiModelSection } from "./components/ai-model-section";
import { QuestHistory } from "./components/quest-history";
import { BackgroundEffects } from "./components/background-effects";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    // Add a small delay to ensure styles are applied
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-primary text-xl font-pixel animate-pulse">LOADING QUEST DATA...</div>
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <Header />
        
        <div className="px-4 pb-6">
          <div className="rounded-lg overflow-hidden border-4 border-teal-500 bg-[#0f172a]">
            <Navigation />
            
            <div className="p-4">
              <MiniDashboards />
              
              <div className="mt-8">
                <AiModelSection />
              </div>
              
              <div className="mt-8">
                <QuestHistory />
              </div>
            </div>
            
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}