"use client";

import { AppProvider, useAppContext } from './components/AdditionalComponents';
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"; // Note: You may need to install lucide-react or use your own icons

// 1. Define the 5 unique platforms
const platforms = [
  { id: 'insta', name: 'Instagram', img: "/images/img.jpg", color: "bg-gradient-to-tr from-yellow-400 to-purple-600" },
  { id: 'tiktok', name: 'TikTok', img: "/images/img.jpg", color: "bg-black" },
  { id: 'youtube', name: 'Shorts', img: "/images/img.jpg", color: "bg-red-600" },
  { id: 'facebook', name: 'FB Reels', img: "/images/img.jpg", color: "bg-blue-600" },
  { id: 'snap', name: 'Spotlight', img: "/images/img.jpg", color: "bg-yellow-300" },
];

// 2. Repeat the set 3 times to get 15 total items
const baseItems = [...platforms, ...platforms, ...platforms].map((p, i) => ({
  ...p,
  uniqueKey: `${p.id}-${i}`
}));

function MainContent() {
  const { bgColor } = useAppContext();
  const radius = 650;
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  
  const rotateY = useSpring(x, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001
  });
  
  useAnimationFrame(() => {
    if (!isDragging) {
      x.set(x.get() + 0.15); 
    }
  });

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 transition-colors duration-500 ${bgColor}`}>
      <div className="z-10 max-w-10xl w-full items-center justify-center flex flex-col gap-8">

      <motion.div 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ perspective: "2000px" }}
        onPanStart={() => setIsDragging(true)}
        onPanEnd={() => setIsDragging(false)}
        onPan={(_, info) => {
          x.set(x.get() + info.delta.x * 0.2);
        }}
      >
        <motion.div
          className="relative w-full h-full flex items-center justify-center pointer-events-none"
          style={{ 
            transformStyle: "preserve-3d",
            z: -400, 
            rotateY: rotateY 
          }}
        >
          {baseItems.map((item, index) => {
            const angle = (index / baseItems.length) * 360;
            return (
              <div
                key={item.uniqueKey}
                className="absolute w-[210px] h-[460px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  {/* FRONT FACE */}
                  <div 
                    className="absolute inset-0 rounded-[2.8rem] border-[3px] overflow-hidden backface-hidden z-20 transition-all duration-1000 border-white/20 shadow-2xl bg-black"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* UI Header Overlay */}
                    <div className="absolute top-0 w-full p-6 flex justify-between items-center z-40 bg-gradient-to-b from-black/60 to-transparent">
                        <span className="text-white text-[10px] font-bold tracking-widest uppercase">{item.name}</span>
                        <MoreHorizontal size={14} className="text-white" />
                    </div>

                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-50 border border-white/10" />
                    
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-80" />

                    {/* INTERACTION BUTTON STACK */}
                    <div className="absolute bottom-10 right-3 z-50 flex flex-col items-center gap-0 pointer-events-auto">
                      
                      {/* THE AI BUTTON (Red/White) */}
                      <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform mb-2 ring-2 ring-white/20">
                        <span className="text-[15px] font-black">AI</span>
                        
                      </button>

                      {/* Standard Actions (Styled consistently) */}
                      <button className="flex flex-col items-center gap-1 group">
                        <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white group-active:scale-90 transition-transform">
                          <Heart size={20} fill="white" />
                        </div>
                        <span className="text-[10px] text-white font-medium">1.2k</span>
                      </button>

                      <button className="flex flex-col items-center gap-1 group">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white group-active:scale-90 transition-transform">
                          <MessageCircle size={20} fill="white" />
                        </div>
                        <span className="text-[10px] text-white font-medium">438</span>
                      </button>

                      <button className="flex flex-col items-center gap-1 group">
                        <div className="w-10 h-10 rounded-full   flex items-center justify-center text-white group-active:scale-90 transition-transform">
                          <Share2 size={20} fill="white" />
                        </div>
                        <span className="text-[10px] text-white font-medium">Share</span>
                      </button>

                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`w-6 h-6 rounded-full ${item.color}`} />
                            <span className="text-white text-[10px] font-bold">@wasp_vision</span>
                        </div>
                        <p className="text-white text-[9px] line-clamp-2 opacity-80">Check out the latest AI integration on {item.name} #AI #Tech</p>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div 
                    className="absolute inset-0 rounded-[2.5rem] border-[2px] backdrop-blur-[30px] flex flex-col items-center justify-center transition-all duration-700 bg-purple-950/20 border-purple-400/30"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "visible" }}
                  >
                    <div className="w-10 h-10 rounded-full blur-xl opacity-40 mb-4 bg-purple-400" />
                    <p className="text-[7px] font-bold tracking-[0.5em] opacity-40">WASP VISION</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}