"use client";

import { AppProvider, useAppContext } from './components/AdditionalComponents';
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame, AnimatePresence } from "framer-motion";
import { 
  MoreHorizontal, Sparkles, Heart, MessageCircle, Share2, Music, ChevronLeft, Camera, Tv, 
  ThumbsUp, ThumbsDown, Repeat2, Bookmark, Send, Plus, MoreVertical, MessageSquare, Search, User,
  Smartphone, MonitorSmartphone
} from "lucide-react"; 

const platforms = [
  { id: 'insta', name: 'Instagram', img: "/images/mountain.jpg", glow: "rgba(168,85,247,0.5)" },
  { id: 'tiktok', name: 'TikTok', img: "/images/mountain.jpg", glow: "rgba(34,211,238,0.4)" },
  { id: 'youtube', name: 'Shorts', img: "/images/mountain.jpg", glow: "rgba(239,68,68,0.4)" },
  { id: 'facebook', name: 'FB Reels', img: "/images/mountain.jpg", glow: "rgba(59,130,246,0.4)" },
  { id: 'snap', name: 'Spotlight', img: "/images/mountain.jpg", glow: "rgba(250,204,21,0.4)" },
];

const baseItems = [...platforms, ...platforms, ...platforms].map((p, i) => ({
  ...p,
  uniqueKey: `${p.id}-${i}`
}));

// --- PLATFORM OVERLAYS REMAIN THE SAME ---
const PlatformOverlay = ({ id }: { id: string }) => {
  switch (id) {
    case 'tiktok':
      return (
        <>
          <div className="absolute top-10 left-0 w-full flex justify-center items-center gap-4 z-50">
            <span className="text-white/60 text-[8px] font-bold">Following</span>
            <div className="flex flex-col items-center">
              <span className="text-white text-[8px] font-bold">For You</span>
              <div className="w-3 h-0.5 bg-white mt-1 rounded-full" />
            </div>
          </div>
          <div className="absolute top-10 right-5 z-50"><Search size={15} className="text-white" /></div>
          <div className="absolute top-10 left-5 z-50"><Tv size={15} className="text-white" /></div>
          <div className="absolute right-0.5 bottom-19 flex flex-col items-center gap-1 z-50">
            <div className="relative mb-3">
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-800 shadow-lg" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5 border-2 border-black">
                <Plus size={10} className="text-white" strokeWidth={5} />
              </div>
            </div>
<motion.div
  animate={{
    // Exact scale from the code snippet
    scale: [1, 1.01935, 1],
    // The red wave: 3rd value (blur) is 0, 4th value (spread) expands
    boxShadow: [
      "0 0 0 0px rgba(239, 68, 68, 0.9)",   // Start: Bright red, tight to button
      "0 0 0 15px rgba(239, 68, 68, 0)"     // End: Spread to 15px, fade to 0
    ]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: [0.4, 0, 0.2, 1], // YouTube's standard smooth easing
  }}
  className="bg-red-600 rounded-full px-2.5 py-1.5 flex items-center justify-center relative"
>
  <span className="text-[10px] text-white font-black tracking-wider">AI</span>
</motion.div>
            <Heart size={18} className="text-white" fill="currentColor" /><span className="text-[6px] text-white font-bold">2.4M</span>
            <MessageCircle size={18} className="text-white mt-2" fill="currentColor" /><span className="text-[6px] text-white font-bold">45.2K</span>
            <Bookmark size={18} className="text-white mt-2" fill="currentColor" /><span className="text-[6px] text-white font-bold">128K</span>
            <Share2 size={18} className="text-white mt-2" fill="currentColor" /><span className="text-[6px] text-white font-bold">分享</span>
          </div>
          <div className="absolute bottom-12 left-4 right-16 z-50">
            <span className="text-white text-[9px] font-bold mb-2 block">@wasp_vision_ai</span>
            <p className="text-white text-[7px] leading-relaxed mb-4 line-clamp-3">TikTok layout in 3D space. Exploring neural interfaces. #AI #Tech</p>
          </div>
        </>
      );
    case 'youtube':
      return (
        <>
          <div className="absolute top-10 right-5 flex items-center gap-6 z-50 text-white/90">
            <Search size={15} /><Camera size={15} /><MoreVertical size={15} />
          </div>
          <div className="absolute right-1 bottom-8 flex flex-col items-center gap-2 z-50">
<motion.div
  animate={{
    // Exact scale from the code snippet
    scale: [1, 1.01935, 1],
    // The red wave: 3rd value (blur) is 0, 4th value (spread) expands
    boxShadow: [
      "0 0 0 0px rgba(239, 68, 68, 0.9)",   // Start: Bright red, tight to button
      "0 0 0 15px rgba(239, 68, 68, 0)"     // End: Spread to 15px, fade to 0
    ]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: [0.4, 0, 0.2, 1], // YouTube's standard smooth easing
  }}
  className="bg-red-600 rounded-full px-2.5 py-1.5 flex items-center justify-center relative"
>
  <span className="text-[10px] text-white font-black tracking-wider">AI</span>
</motion.div>
            <ThumbsUp size={14} className="text-white" fill="currentColor" /><span className="text-[6px] text-white font-bold">845K</span>
            <ThumbsDown size={14} className="text-white" fill="currentColor" /><span className="text-[6px] text-white font-bold">Dislike</span>
            <MessageSquare size={14} className="text-white" fill="currentColor" /><span className="text-[6px] text-white font-bold">12K</span>
            <Share2 size={14} className="text-white" fill="currentColor" /><span className="text-[6px] text-white font-bold">Share</span>
          </div>
          <div className="absolute bottom-10 left-4 right-16 z-50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 rounded-full bg-red-600 border border-white/10 flex items-center justify-center font-black text-white text-[10px]">WV</div>
              <span className="text-white text-[8px] font-bold truncate max-w-[100px]">@WaspVisionAI</span>
              <button className="bg-white text-black px-2 py-1 rounded-full text-[6px] font-black uppercase">Subscribe</button>
            </div>
            <p className="text-white text-[8px] line-clamp-2 leading-snug">The evolution of YouTube Shorts. 🚀 #Shorts #AI</p>
          </div>
        </>
      );
     case 'insta':
      return (
        <>
          {/* 1. RIGHT SIDE INTERACTION STACK */}
          <div className="absolute right-1 bottom-13 flex flex-col items-center gap-2 z-50">
            {/* Profile Avatar with Plus */}
            <div className="relative mb-2">
              <div className="w-7 h-7 rounded-full border border-white overflow-hidden bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-black border border-black overflow-hidden">
                   <div className="w-full h-full bg-gray-600" /> {/* Profile Placeholder */}
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full border-2 border-black">
                <Plus size={10} className="text-white" strokeWidth={4} />
              </div>
            </div>

              <motion.div
  animate={{
    // Exact scale from the code snippet
    scale: [1, 1.01935, 1],
    // The red wave: 3rd value (blur) is 0, 4th value (spread) expands
    boxShadow: [
      "0 0 0 0px rgba(239, 68, 68, 0.9)",   // Start: Bright red, tight to button
      "0 0 0 15px rgba(239, 68, 68, 0)"     // End: Spread to 15px, fade to 0
    ]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: [0.4, 0, 0.2, 1], // YouTube's standard smooth easing
  }}
  className="bg-red-600 rounded-full px-2.5 py-1.5 flex items-center justify-center relative"
>
  <span className="text-[10px] text-white font-black tracking-wider">AI</span>
</motion.div>
            
            <div className="flex flex-col items-center">
              <Heart size={17} className="text-white" />
              <span className="text-[7px] text-white font-medium mt-1">145K</span>
            </div>
            
            <div className="flex flex-col items-center">
              <MessageCircle size={17} className="text-white" />
              <span className="text-[7px] text-white font-medium mt-1">1,204</span>
            </div>
              <div className="flex flex-col items-center">
                <Repeat2 size={17} className="text-white" />
              <span className="text-[7px] text-white font-medium mt-1">120</span>
              </div>
             <div className="flex flex-col items-center">
            <Send size={17} className="text-white" />
              <span className="text-[7px] text-white font-medium mt-1">120</span>
              </div>
            <MoreVertical size={17} className="text-white" />
            
            {/* Music Square */}
            <div className="w-4 h-4 rounded-md border-2 border-white/80 overflow-hidden mt-2">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black animate-pulse" />
            </div>
          </div>

          {/* 2. BOTTOM INFO SECTION (Specific to Insta Reels) */}
          <div className="absolute bottom-8 left-4 right-16 z-50 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gray-500" /> {/* User small avatar */}
              <span className="text-white text-[10px] font-semibold">wasp_vision</span>
              <button className="px-2 py-0.5 border border-white/40 rounded-md text-[7px] font-bold text-white hover:bg-white/10 transition-colors">
                Follow
              </button>
            </div>
            <p className="text-white text-[9px] line-clamp-2 leading-snug">
              Creating the future of UI with AI-driven components. #WaspVision #NextJS #UI
            </p>
            <div className="flex items-center gap-1.5 overflow-hidden">
               <Music size={8} className="text-white" />
               <div className="whitespace-nowrap animate-marquee">
                  <span className="text-[8px] text-white">Wasp Vision AI • Original Audio</span>
               </div>
            </div>
          </div>
        </>
      );
        case 'snap':
      return (
        <>
          {/* 1. TOP NAVIGATION (Snapchat Style) */}
          <div className="absolute top-10 left-0 w-full px-6 flex justify-between items-center z-50">
            <div className="w-6 h-6  flex items-center justify-center ">
              <User size={15} className="text-white" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white top-10 text-[12px] font-extrabold tracking-tight">Spotlight</span>
              <div className="w-1 h-1 bg-yellow-400 rounded-full mt-0.5" />
            </div>
            <div className="w-6 h-6  flex items-center justify-center">
              <Search size={15} className="text-white" />
            </div>
          </div>

          {/* 2. RIGHT SIDE INTERACTION (Snapchat Icons) */}
          <div className="absolute right-1 bottom-10 flex flex-col items-center gap-1 z-50">
             <div className="relative mb-3">
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-800 shadow-lg">
                <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-black" />
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5 border-2 border-black">
                <Plus size={10} className="text-white" strokeWidth={5} />
              </div>
            </div>

            <motion.div
  animate={{
    // Exact scale from the code snippet
    scale: [1, 1.01935, 1],
    // The red wave: 3rd value (blur) is 0, 4th value (spread) expands
    boxShadow: [
      "0 0 0 0px rgba(239, 68, 68, 0.9)",   // Start: Bright red, tight to button
      "0 0 0 15px rgba(239, 68, 68, 0)"     // End: Spread to 15px, fade to 0
    ]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: [0.4, 0, 0.2, 1], // YouTube's standard smooth easing
  }}
  className="bg-red-600 rounded-full px-2.5 py-1.5 flex items-center justify-center relative"
>
  <span className="text-[10px] text-white font-black tracking-wider">AI</span>
</motion.div>
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-full   hover:bg-black/40 transition-colors">
                <Heart size={16} className="text-white" fill="none" />
              </div>
              <span className="text-[7px] text-white font-bold drop-shadow-md">24.5k</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="rounded-full  ">
                <MessageSquare size={16} className="text-white" />
              </div>
              <span className="text-[7px] text-white font-bold drop-shadow-md">402</span>
            </div>

            <div className="flex flex-col items-center ">
                <Repeat2 size={16} className="text-white" />
              <span className="text-[7px] text-white font-medium mt-1">120</span>
            </div>
            <div className="flex flex-col items-center">
              <Send size={16} className="text-white -rotate-12" />
              <span className="text-[7px] text-white font-medium mt-1">120</span>
              </div>
             
            <MoreHorizontal size={16} className="text-white" />
            
            {/* Music Square */}
            <div className="w-4 h-4 rounded-md border-2 border-white/80 overflow-hidden mt-2">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black animate-pulse" />
            </div>

            </div>

          {/* 3. BOTTOM INFO (Username + Subscribe) */}
          <div className="absolute bottom-10 left-5 right-16 z-50">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white text-[10px] font-black drop-shadow-lg">@wasp_vision</span>
              <button className="bg-white text-black text-[7px] font-black px-2 py-1.5 rounded-full hover:bg-gray-200 transition-colors uppercase tracking-tight">
                Subscribe
              </button>
            </div>
            <p className="text-white text-[8px] font-medium leading-relaxed drop-shadow-md line-clamp-2">
              Snapchat Spotlight is looking crazy in 3D! Check out this AI vision. ✨
            </p>
            <div className="flex items-center gap-2 mt-3 p-1.5 bg-black/30 backdrop-blur-md rounded-lg w-fit border border-white/5">
              <Music size={12} className="text-white" />
              <span className="text-[9px] text-white font-bold">Original Sound - Wasp AI</span>
            </div>
          </div>
        </>
      );
        case 'facebook':
      return (
        <>
          {/* 1. TOP HEADER (Facebook Reels Style) */}
          <div className="absolute top-10 left-0 w-full px-3 flex justify-between items-center z-50">
            <div className="flex items-center gap-1">
              <ChevronLeft size={17} className="text-white" />
              <span className="text-white text-[14px] font-bold">Reels</span>
            </div>
            <div className="flex items-center gap-3">
              <Camera size={15} className="text-white" />
              <Search size={15} className="text-white" />
              <div className="w-8 h-8 rounded-full bg-gray-600 border border-white/20 overflow-hidden" />
            </div>
          </div>

          {/* 2. RIGHT SIDE INTERACTION (FB Standard) */}
          <div className="flex flex-col items-center absolute right-1 bottom-8 flex flex-col items-center gap-1 z-50">
            <motion.div
  animate={{
    // Exact scale from the code snippet
    scale: [1, 1.01935, 1],
    // The red wave: 3rd value (blur) is 0, 4th value (spread) expands
    boxShadow: [
      "0 0 0 0px rgba(239, 68, 68, 0.9)",   // Start: Bright red, tight to button
      "0 0 0 15px rgba(239, 68, 68, 0)"     // End: Spread to 15px, fade to 0
    ]
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: [0.4, 0, 0.2, 1], // YouTube's standard smooth easing
  }}
  className="bg-red-600 rounded-full px-2.5 py-1.5 flex items-center justify-center relative"
>
  <span className="text-[10px] text-white font-black tracking-wider">AI</span>
</motion.div>
            
            <div className="flex flex-col items-center">
              <div className="group/icon cursor-pointer">
                 <ThumbsUp size={12} className="text-white drop-shadow-lg group-hover:text-blue-500 transition-colors" fill="currentColor" />
              </div>
              <span className="text-[6px] text-white font-semibold mt-1">12K</span>
            </div>



            <div className="flex flex-col items-center">
              <MessageSquare size={12} className="text-white drop-shadow-lg" fill="currentColor" />
              <span className="text-[6px] text-white font-semibold mt-1">458</span>
            </div>


            <div className="flex flex-col items-center">
              <Send size={12} className="text-white drop-shadow-lg" fill="currentColor" />
              <span className="text-[6px] text-white font-semibold mt-1">1.1K</span>
            </div>
            <div className="flex flex-col items-center">
              <Bookmark size={12} className="text-white drop-shadow-lg" fill="currentColor" />
              <span className="text-[6px] text-white font-bold mt-1">128K</span>
            </div>

            <MoreHorizontal size={12} className="text-white drop-shadow-lg" />
            
            {/* Spinning Record / Audio */}
            <div className="w-6 h-6 rounded-full border-[3px] border-gray-800 bg-black flex items-center justify-center animate-spin-slow mt-2">
               <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400" />
            </div>
          </div>

          {/* 3. BOTTOM INFO (Username + Blue Follow) */}
          <div className="absolute bottom-10 left-4 right-16 z-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[24px] h-[22px] rounded-full border-2 border-blue-600 overflow-hidden">
                <div className="w-full h-full bg-gray-700" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-white text-[10px] font-bold">Wasp Vision AI</span>
                  <span className="text-blue-500 text-[13px] font-bold hover:underline cursor-pointer">Follow</span>
                </div>
              </div>
            </div>
            <p className="text-white text-[10px] line-clamp-2 mb-3 leading-tight drop-shadow-md">
              Facebook Reels integrated into the 3D ecosystem. High-fidelity rendering with Next.js. #Meta #AI #Web3
            </p>
            <div className="flex items-center gap-2">
               <div className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-2">
                  <Music size={10} className="text-white" />
                  <span className="text-[8px] text-white font-medium">Original Audio • wasp_vision_ai</span>
               </div>
            </div>
          </div>
        </>
      );
        default:
      return (
        <div />
      );
  }
};

function MainContent() {
  const radius = 850; 
  const [isDragging, setIsDragging] = useState(false);
  const [deviceType, setDeviceType] = useState<'iphone' | 'android'>('iphone');
  
  const x = useMotionValue(0);
  const rotateY = useSpring(x, { stiffness: 45, damping: 35 });
  
  useAnimationFrame(() => { if (!isDragging) x.set(x.get() + 0.1); });

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#010105] overflow-hidden">
      
      {/* DEVICE TOGGLE BUTTON */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[100] flex gap-2 bg-white/5 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10">
        <button 
          onClick={() => setDeviceType('iphone')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${deviceType === 'iphone' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          <Smartphone size={16} />
          <span className="text-xs font-bold">iPhone</span>
        </button>
        <button 
          onClick={() => setDeviceType('android')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${deviceType === 'android' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          <MonitorSmartphone size={16} />
          <span className="text-xs font-bold">Android</span>
        </button>
      </div>

      <motion.div 
        className="relative h-screen w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: "2200px" }}
        onPanStart={() => setIsDragging(true)}
        onPanEnd={() => setIsDragging(false)}
        onPan={(_, info) => x.set(x.get() + info.delta.x * 0.2)}
      >
        <motion.div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d", z: -radius, rotateY }}>
          {baseItems.map((item, index) => {
            const angle = (index / baseItems.length) * 360;
            return (
              <div
                key={item.uniqueKey}
                className="absolute w-[240px] h-[510px] group"
                style={{ transform: `rotateY(${angle}deg) translateZ(${radius}px)`, transformStyle: "preserve-3d" }}
              >
                <div className="relative w-full h-full transition-all duration-700 group-hover:translate-y-[-30px]" style={{ transformStyle: "preserve-3d" }}>
                  
                  {/* PHONE FRONT */}
                  <div className={`absolute inset-0 border-[1px] border-white/20 overflow-hidden z-20 bg-black shadow-2xl transition-all duration-500
                       ${deviceType === 'iphone' ? 'rounded-[3rem]' : 'rounded-[1.5rem]'}`}
                       style={{ backfaceVisibility: "hidden", boxShadow: `0 0 60px -15px ${item.glow}` }}>
                    
                    <PlatformOverlay id={item.id} />

                    {/* DYNAMIC HARDWARE OVERLAYS */}
                    <AnimatePresence mode="wait">
                      {deviceType === 'iphone' ? (
                        /* iPhone Dynamic Island */
                        <motion.div 
                          key="iphone-island"
                          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-[1.2rem] z-[60] border-x border-b border-white/10" 
                        />
                      ) : (
                        /* Android Punch Hole */
                        <motion.div 
                          key="android-hole"
                          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
                          className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#0a0a0a] rounded-full z-[60] border border-white/10 shadow-inner"
                        />
                      )}
                    </AnimatePresence>

                    {/* Bottom Indicator (Home Bar) */}
                    <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/30 z-[60] rounded-full transition-all duration-500
                        ${deviceType === 'iphone' ? 'w-24 h-1' : 'w-12 h-1'}`} 
                    />

                    <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                  </div>

                  {/* PHONE BACK */}
                  <div className={`absolute inset-0 border border-white/10 flex flex-col items-center justify-center bg-[#050508] transition-all duration-500
                       ${deviceType === 'iphone' ? 'rounded-[3rem]' : 'rounded-[1.5rem]'}`}
                       style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                    <div className="w-20 h-20 rounded-full bg-purple-500/5 flex items-center justify-center border border-purple-500/10 mb-6">
                      <Sparkles className="text-purple-500/20" size={40} />
                    </div>
                    <p className="text-[10px] font-bold tracking-[1em] text-white/20 uppercase">WASP-2</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Glossy Floor */}
      <div className="absolute bottom-[-200px] w-[150%] h-[500px] bg-gradient-to-t from-purple-600/10 to-transparent blur-[120px] -z-10"
           style={{ transform: "rotateX(75deg)" }} />
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













