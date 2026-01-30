"use client";

import { AppProvider, useAppContext } from './components/AdditionalComponents';
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame, AnimatePresence } from "framer-motion";
import { 
  MoreHorizontal, Sparkles, Heart, MessageCircle, Share2, Music, ChevronLeft, Camera, Tv, 
  ThumbsUp, ThumbsDown, Repeat2, Bookmark, Send, Plus, MoreVertical, MessageSquare, Search, User,
  Smartphone, MonitorSmartphone, Play, Eye, TrendingUp, Award, Video, Users, Globe
} from "lucide-react"; 

const platforms = [
  { id: 'insta', name: 'Instagram', img: "/images/mountain.jpg", glow: "rgba(168,85,247,0.5)" },
  { id: 'tiktok', name: 'TikTok', img: "/images/mountain.jpg", glow: "rgba(34,211,238,0.4)" },
  { id: 'youtube', name: 'Shorts', img: "/images/mountain.jpg", glow: "rgba(239,68,68,0.4)" },
  { id: 'facebook', name: 'FB Reels', img: "/images/mountain.jpg", glow: "rgba(59,130,246,0.4)" },
  { id: 'snap', name: 'Spotlight', img: "/images/mountain.jpg", glow: "rgba(250,204,21,0.4)" },
  { id: 'wechat', name: 'WeChat', img: "/images/mountain.jpg", glow: "rgba(7,193,96,0.4)" },
  { id: 'douyin', name: 'Douyin', img: "/images/mountain.jpg", glow: "rgba(254,44,85,0.4)" },
  { id: 'twitter', name: 'X', img: "/images/mountain.jpg", glow: "rgba(255,255,255,0.3)" },
  { id: 'weibo', name: 'Weibo', img: "/images/mountain.jpg", glow: "rgba(230,73,45,0.4)" },
  { id: 'reddit', name: 'Reddit', img: "/images/mountain.jpg", glow: "rgba(255,69,0,0.4)" },
  { id: 'bilibili', name: 'Bilibili', img: "/images/mountain.jpg", glow: "rgba(251,114,153,0.4)" },
  { id: 'vk', name: 'VKontakte', img: "/images/mountain.jpg", glow: "rgba(70,128,194,0.4)" },
  { id: 'naver', name: 'Naver', img: "/images/mountain.jpg", glow: "rgba(3,199,90,0.4)" },
  { id: 'kakao', name: 'KakaoTalk', img: "/images/mountain.jpg", glow: "rgba(254,229,0,0.4)" },
];

const baseItems = [...platforms].map((p, i) => ({
  ...p,
  uniqueKey: `${p.id}-${i}`
}));

// --- PLATFORM OVERLAYS ---
const PlatformOverlay = ({ id }: { id: string }) => {
  const AIBadge = () => (
    <motion.div
      animate={{
        scale: [1, 1.01935, 1],
        boxShadow: [
          "0 0 0 0px rgba(239, 68, 68, 0.9)",
          "0 0 0 19px rgba(239, 68, 68, 0)"
        ]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="bg-red-600 rounded-full px-4 py-3 bottom-1 flex items-center justify-center relative"
    >
      <span className="text-[16px] text-white font-black tracking-wider">AI</span>
    </motion.div>
  );

  switch (id) {
    case 'tiktok':
      return (
        <>
          <div className="absolute top-15 left-0 w-full flex justify-center items-center gap-8 z-50">
            <span className="text-white/60 text-[15px] font-bold">Following</span>
            <div className="flex flex-col items-center">
              <span className="text-white text-[15px] font-bold">For You</span>
              <div className="w-12 h-0.5 bg-white mt-1 rounded-full" />
            </div>
          </div>
          <div className="absolute top-12 right-6 z-50"><Search size={24} className="text-white" /></div>
          <div className="absolute top-12 left-6 z-50"><Tv size={24} className="text-white" /></div>
          <div className="absolute right-1 bottom-24 flex flex-col items-center gap-1.5 z-50">
            <div className="relative mb-4">
              <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-gray-800 shadow-lg" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5 border-2 border-black">
                <Plus size={24} className="text-white" strokeWidth={5} />
              </div>
            </div>
            <AIBadge />
            <Heart size={22} className="text-white" fill="currentColor" /><span className="text-[15px] text-white font-bold">2.4M</span>
            <MessageCircle size={22} className="text-white mt-2" fill="currentColor" /><span className="text-[15px] text-white font-bold">45.2K</span>
            <Bookmark size={22} className="text-white mt-2" fill="currentColor" /><span className="text-[15px] text-white font-bold">128K</span>
            <Share2 size={22} className="text-white mt-2" fill="currentColor" /><span className="text-[15px] text-white font-bold">分享</span>
          </div>
          <div className="absolute bottom-15 left-6 right-20 z-50">
            <span className="text-white text-[14px] font-bold mb-2 block">@wasp_vision_ai</span>
            <p className="text-white text-[14px] leading-relaxed mb-5 line-clamp-3">TikTok layout in 3D space. Exploring neural interfaces. #AI #Tech</p>
          </div>
        </>
      );

    case 'youtube':
      return (
        <>
          <div className="absolute top-15 right-6 flex items-center gap-8 z-50 text-white/90">
            <Search size={24} /><Camera size={24} /><MoreVertical size={24} />
          </div>
          <div className="absolute right-1 bottom-15 flex flex-col items-center gap-2.5 z-50">
            <AIBadge />
            <ThumbsUp size={22} className="text-white" fill="currentColor" /><span className="text-[15px] text-white font-bold">845K</span>
            <ThumbsDown size={22} className="text-white" fill="currentColor" /><span className="text-[15px] text-white font-bold">Dislike</span>
            <MessageSquare size={22} className="text-white" fill="currentColor" /><span className="text-[15px] text-white font-bold">12K</span>
            <Share2 size={22} className="text-white" fill="currentColor" /><span className="text-[15px] text-white font-bold">Share</span>
          </div>
          <div className="absolute bottom-15 left-6 right-20 z-50">
            <div className="flex items-center gap-8 mb-4">
              <div className="w-30 h-12 rounded-full bg-red-600 border border-white/10 flex items-center justify-center font-black text-white text-[15px]">WV</div>
              <span className="text-white text-[15px] font-bold truncate max-w-[125px]">@WaspVisionAI</span>
              <button className="bg-white text-black px-3 py-2 rounded-full text-[15px] font-black uppercase">Subscribe</button>
            </div>
            <p className="text-white text-[15px] line-clamp-2 leading-snug">The evolution of YouTube Shorts. 🚀 #Shorts #AI</p>
          </div>
        </>
      );

    case 'insta':
      return (
        <>
          <div className="absolute right-1 bottom-15 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-11 h-11 rounded-full border border-white overflow-hidden bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[1.5px]">
                <div className="w-full h-full rounded-full bg-black border border-black overflow-hidden">
                   <div className="w-full h-full bg-gray-600" />
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full border-2 border-black">
                <Plus size={12} className="text-white" strokeWidth={4} />
              </div>
            </div>
            <AIBadge />
            <div className="flex flex-col items-center">
              <Heart size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium mt-1">145K</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium mt-1">1,204</span>
            </div>
            <div className="flex flex-col items-center">
              <Repeat2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium mt-1">120</span>
            </div>
            <div className="flex flex-col items-center">
              <Send size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium mt-1">120</span>
            </div>
            <MoreVertical size={21} className="text-white" />
            <div className="w-12 h-12 rounded-md border-2 border-white/80 overflow-hidden mt-2">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black animate-pulse" />
            </div>
          </div>
          <div className="absolute bottom-15 left-6 right-20 z-50 flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-full bg-gray-500" />
              <span className="text-white text-[15px] font-semibold">wasp_vision</span>
              <button className="px-2.5 py-0.5 border border-white/40 rounded-md text-[14px] font-bold text-white hover:bg-white/10 transition-colors">
                Follow
              </button>
            </div>
            <p className="text-white text-[14px] line-clamp-2 leading-snug">
              Creating the future of UI with AI-driven components. #WaspVision #NextJS #UI
            </p>
            <div className="flex items-center gap-1.5 overflow-hidden">
               <Music size={12} className="text-white" />
               <div className="whitespace-nowrap animate-marquee">
                  <span className="text-[15px] text-white">Wasp Vision AI • Original Audio</span>
               </div>
            </div>
          </div>
        </>
      );

    case 'snap':
      return (
        <>
          <div className="absolute top-15 left-0 w-full px-6 flex justify-between items-center z-50">
            <div className="w-12 h-12  flex items-center justify-center ">
              <User size={24} className="text-white" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white top-12 text-[15px] font-extrabold tracking-tight">Spotlight</span>
              <div className="w-1 h-1 bg-yellow-400 rounded-full mt-0.5" />
            </div>
            <div className="w-12 h-12  flex items-center justify-center">
              <Search size={24} className="text-white" />
            </div>
          </div>
          <div className="absolute right-1 bottom-15 flex flex-col items-center gap-1.5 z-50">
             <div className="relative mb-3">
              <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-gray-800 shadow-lg">
                <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-black" />
              </div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5 border-2 border-black">
                <Plus size={12} className="text-white" strokeWidth={5} />
              </div>
            </div>
            <AIBadge />
            <div className="flex flex-col items-center gap-1.5">
              <div className="rounded-full   hover:bg-black/40 transition-colors">
                <Heart size={20} className="text-white" fill="none" />
              </div>
              <span className="text-[14px] text-white font-bold drop-shadow-md">24.5k</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="rounded-full  ">
                <MessageSquare size={20} className="text-white" />
              </div>
              <span className="text-[14px] text-white font-bold drop-shadow-md">402</span>
            </div>
            <div className="flex flex-col items-center ">
                <Repeat2 size={20} className="text-white" />
              <span className="text-[14px] text-white font-medium mt-1">120</span>
            </div>
            <div className="flex flex-col items-center">
              <Send size={20} className="text-white -rotate-12" />
              <span className="text-[14px] text-white font-medium mt-1">120</span>
            </div>
            <MoreHorizontal size={20} className="text-white" />
            <div className="w-12 h-12 rounded-md border-2 border-white/80 overflow-hidden mt-2">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black animate-pulse" />
            </div>
          </div>
          <div className="absolute bottom-15 left-6 right-20 z-50">
            <div className="flex items-center gap-8 mb-2">
              <span className="text-white text-[15px] font-black drop-shadow-lg">@wasp_vision</span>
              <button className="bg-white text-black text-[14px] font-black px-2.5 py-1.5 rounded-full hover:bg-gray-200 transition-colors uppercase tracking-tight">
                Subscribe
              </button>
            </div>
            <p className="text-white text-[15px] font-medium leading-relaxed drop-shadow-md line-clamp-2">
              Snapchat Spotlight is looking crazy in 3D! Check out this AI vision. ✨
            </p>
            <div className="flex items-center gap-2.5 mt-3 p-2 bg-black/30 backdrop-blur-md rounded-lg w-fit border border-white/5">
              <Music size={24} className="text-white" />
              <span className="text-[14px] text-white font-bold">Original Sound - Wasp AI</span>
            </div>
          </div>
        </>
      );

    case 'facebook':
      return (
        <>
          <div className="absolute top-15 left-0 w-full px-3 flex justify-between items-center z-50">
            <div className="flex items-center gap-1.5">
              <ChevronLeft size={21} className="text-white" />
              <span className="text-white text-[18px] font-bold">Reels</span>
            </div>
            <div className="flex items-center gap-8">
              <Camera size={24} className="text-white" />
              <Search size={24} className="text-white" />
              <div className="w-12 h-12 rounded-full bg-gray-600 border border-white/20 overflow-hidden" />
            </div>
          </div>
          <div className="flex flex-col items-center absolute right-1 bottom-15 flex flex-col items-center gap-1.5 z-50">
            <AIBadge />
            <div className="flex flex-col items-center">
              <div className="group/icon cursor-pointer">
                 <ThumbsUp size={24} className="text-white drop-shadow-lg group-hover:text-blue-500 transition-colors" fill="currentColor" />
              </div>
              <span className="text-[15px] text-white font-semibold mt-1">12K</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare size={24} className="text-white drop-shadow-lg" fill="currentColor" />
              <span className="text-[15px] text-white font-semibold mt-1">458</span>
            </div>
            <div className="flex flex-col items-center">
              <Send size={24} className="text-white drop-shadow-lg" fill="currentColor" />
              <span className="text-[15px] text-white font-semibold mt-1">1.1K</span>
            </div>
            <div className="flex flex-col items-center">
              <Bookmark size={24} className="text-white drop-shadow-lg" fill="currentColor" />
              <span className="text-[15px] text-white font-bold mt-1">128K</span>
            </div>
            <MoreHorizontal size={24} className="text-white drop-shadow-lg" />
            <div className="w-12 h-12 rounded-full border-[3px] border-gray-800 bg-black flex items-center justify-center animate-spin-slow mt-2">
               <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400" />
            </div>
          </div>
          <div className="absolute bottom-15 left-6 right-20 z-50">
            <div className="flex items-center gap-8 mb-2">
              <div className="w-[30px] h-[27px] rounded-full border-2 border-blue-600 overflow-hidden">
                <div className="w-full h-full bg-gray-700" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="text-white text-[15px] font-bold">Wasp Vision AI</span>
                  <span className="text-blue-500 text-[16px] font-bold hover:underline cursor-pointer">Follow</span>
                </div>
              </div>
            </div>
            <p className="text-white text-[15px] line-clamp-2 mb-3 leading-tight drop-shadow-md">
              Facebook Reels integrated into the 3D ecosystem. High-fidelity rendering with Next.js. #Meta #AI #Web3
            </p>
            <div className="flex items-center gap-2.5">
               <div className="bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-md flex items-center gap-2.5">
                  <Music size={12} className="text-white" />
                  <span className="text-[15px] text-white font-medium">Original Audio • wasp_vision_ai</span>
               </div>
            </div>
          </div>
        </>
      );

    case 'wechat':
      return (
        <>
          {/* WeChat Channels Header */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <span className="text-white text-[14px] font-semibold">视频号</span>
            <Search size={20} className="text-white" />
          </div>
          
          {/* Right Side Actions */}
          <div className="absolute right-2 bottom-15 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-700">
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#07C160] rounded-full p-0.5">
                <Plus size={11} className="text-white" strokeWidth={4} />
              </div>
            </div>
            
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <Heart size={20} className="text-white" fill="currentColor" />
              <span className="text-[14px] text-white font-medium">8.2万</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <MessageCircle size={20} className="text-white" />
              <span className="text-[14px] text-white font-medium">1234</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Bookmark size={20} className="text-white" />
              <span className="text-[14px] text-white font-medium">收藏</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Share2 size={20} className="text-white" />
              <span className="text-[14px] text-white font-medium">转发</span>
            </div>
            
            <MoreHorizontal size={20} className="text-white" />
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-15 left-6 right-20 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-[15px] font-bold">W</span>
              </div>
              <span className="text-white text-[14px] font-medium">Wasp Vision AI</span>
              <button className="px-2.5 py-0.5 bg-[#07C160] rounded-md text-white text-[14px] font-medium">
                关注
              </button>
            </div>
            <p className="text-white text-[15px] line-clamp-2 leading-snug">
              微信视频号3D展示。探索人工智能与社交媒体的融合。#AI #WeChat #创新
            </p>
          </div>
        </>
      );

    case 'douyin':
      return (
        <>
          {/* Douyin Header */}
          <div className="absolute top-15 left-0 w-full flex justify-center items-center gap-8 z-50">
            <span className="text-white/60 text-[14px] font-medium">关注</span>
            <div className="flex flex-col items-center">
              <span className="text-white text-[14px] font-bold">推荐</span>
              <div className="w-12 h-0.5 bg-white mt-0.5 rounded-full" />
            </div>
            <span className="text-white/60 text-[14px] font-medium">同城</span>
          </div>
          
          <div className="absolute top-12 right-4 z-50"><Search size={20} className="text-white" /></div>
          
          {/* Right Side Actions - Douyin Style */}
          <div className="absolute right-1 bottom-16 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gradient-to-br from-pink-500 to-red-500 shadow-lg" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5 border-2 border-black">
                <Plus size={12} className="text-white" strokeWidth={5} />
              </div>
            </div>
            
            <AIBadge />
            
            <Heart size={24} className="text-white" fill="currentColor" />
            <span className="text-[14px] text-white font-bold -mt-1">156万</span>
            
            <MessageCircle size={24} className="text-white mt-1" />
            <span className="text-[14px] text-white font-bold -mt-1">8.7万</span>
            
            <Bookmark size={24} className="text-white mt-1" />
            <span className="text-[14px] text-white font-bold -mt-1">收藏</span>
            
            <Share2 size={24} className="text-white mt-1" />
            <span className="text-[14px] text-white font-bold -mt-1">分享</span>
            
            {/* Vinyl Record */}
            <div className="w-11 h-11 rounded-full border-[3px] border-gray-900 bg-black flex items-center justify-center animate-spin-slow mt-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500" />
            </div>
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-11 left-6 right-20 z-50">
            <span className="text-white text-[15px] font-bold mb-2 block">@抖音AI视觉</span>
            <p className="text-white text-[15px] leading-relaxed line-clamp-2">
              抖音3D立体展示效果。人工智能驱动的创新体验。#抖音 #AI #科技
            </p>
          </div>
        </>
      );

    case 'twitter':
      return (
        <>
          {/* X/Twitter Header - Minimal */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-black text-[18px]">𝕏</span>
            </div>
            <MoreVertical size={22} className="text-white" />
          </div>
          
          {/* Right Side Actions - X Style */}
          <div className="absolute right-2 bottom-15 flex flex-col items-center gap-8 z-50">
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Heart size={24} className="text-white" />
              </div>
              <span className="text-[14px] text-white font-semibold">24.5K</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
              <span className="text-[14px] text-white font-semibold">3.2K</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Repeat2 size={24} className="text-white" />
              </div>
              <span className="text-[14px] text-white font-semibold">8.9K</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Share2 size={24} className="text-white" />
              </div>
              <span className="text-[14px] text-white font-semibold">Share</span>
            </div>
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-15 left-6 right-20 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-11 h-11 rounded-full bg-gray-600 border-2 border-white/20" />
              <div className="flex flex-col">
                <span className="text-white text-[14px] font-bold">@wasp_vision</span>
                <span className="text-white/60 text-[14px]">2h ago</span>
              </div>
            </div>
            <p className="text-white text-[14px] line-clamp-2 leading-snug">
              Building the future of social media visualization with AI. 3D carousel experience on X. 
            </p>
          </div>
        </>
      );

    case 'weibo':
      return (
        <>
          {/* Weibo Header */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <span className="text-white text-[14px] font-bold">视频</span>
            <MoreHorizontal size={22} className="text-white" />
          </div>
          
          {/* Right Side Actions */}
          <div className="absolute right-2 bottom-17 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-gradient-to-br from-orange-500 to-red-600">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#E6492D] rounded-full p-0.5 border-2 border-black">
                <Plus size={12} className="text-white" strokeWidth={4} />
              </div>
            </div>
            
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <Heart size={21} className="text-white" fill="currentColor" />
              <span className="text-[14px] text-white font-medium">12.3万</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <MessageCircle size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">5432</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Repeat2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">转发</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Share2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">分享</span>
            </div>
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-15 left-6 right-22 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-11 h-11 rounded-full bg-orange-600 flex items-center justify-center border border-white/20">
                <span className="text-white text-[14px] font-bold">微</span>
              </div>
              <span className="text-white text-[14px] font-semibold">Wasp Vision AI</span>
              <button className="px-2.5 py-0.5 bg-[#E6492D] rounded-md text-white text-[14px] font-medium">
                关注
              </button>
            </div>
            <p className="text-white text-[15px] line-clamp-2 leading-snug">
              微博视频3D展示方案。探索AI与社交媒体的创新融合。#微博 #人工智能 #科技创新
            </p>
          </div>
        </>
      );

    case 'reddit':
      return (
        <>
          {/* Reddit Header */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-12 rounded-full bg-[#FF4500] flex items-center justify-center">
                <span className="text-white font-black text-[15px]">r/</span>
              </div>
              <span className="text-white text-[15px] font-bold">AI</span>
            </div>
            <MoreVertical size={22} className="text-white" />
          </div>
          
          {/* Right Side Actions */}
          <div className="absolute right-2 bottom-15 flex flex-col items-center gap-8 z-50">
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <TrendingUp size={20} className="text-[#FF4500]" strokeWidth={2.5} />
              </div>
              <span className="text-[14px] text-white font-bold">18.5k</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <MessageSquare size={20} className="text-white" />
              </div>
              <span className="text-[14px] text-white font-bold">842</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Share2 size={20} className="text-white" />
              </div>
              <span className="text-[14px] text-white font-bold">Share</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Award size={20} className="text-yellow-400" />
              </div>
              <span className="text-[14px] text-white font-bold">Award</span>
            </div>
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-15 left-6 right-20 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[#FF4500] text-[14px] font-bold">r/artificial</span>
              <span className="text-white/60 text-[14px]">• Posted by u/wasp_vision</span>
            </div>
            <p className="text-white text-[14px] font-semibold mb-1">
              3D Social Media Carousel with AI Integration
            </p>
            <p className="text-white/80 text-[15px] line-clamp-2 leading-snug">
              Built this immersive 3D carousel showcasing different social platforms. What do you think?
            </p>
          </div>
        </>
      );

    case 'bilibili':
      return (
        <>
          {/* Bilibili Header */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <div className="flex items-center gap-1.5">
              <Tv size={22} className="text-[#FB7299]" />
              <span className="text-white text-[14px] font-bold">竖屏视频</span>
            </div>
            <div className="flex items-center gap-8">
              <Search size={20} className="text-white" />
              <MoreVertical size={20} className="text-white" />
            </div>
          </div>
          
          {/* Right Side Actions */}
          <div className="absolute right-1 bottom-15 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#FB7299] overflow-hidden bg-gradient-to-br from-pink-400 to-pink-600" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#FB7299] rounded-full p-0.5 border-2 border-black">
                <Plus size={12} className="text-white" strokeWidth={4} />
              </div>
            </div>
            
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <Heart size={21} className="text-white" fill="currentColor" />
              <span className="text-[14px] text-white font-medium">23.4万</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <MessageSquare size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">6789</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Bookmark size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">收藏</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Share2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">分享</span>
            </div>
            
            <MoreHorizontal size={21} className="text-white mt-1" />
          </div>
          
          {/* Bottom Info with Bilibili Style */}
          <div className="absolute bottom-15 left-6 right-22 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center border border-white/20">
                <span className="text-white text-[14px] font-bold">B</span>
              </div>
              <span className="text-white text-[14px] font-semibold">Wasp Vision AI</span>
              <button className="px-2.5 py-0.5 bg-[#FB7299] rounded-md text-white text-[14px] font-medium">
                关注
              </button>
            </div>
            <p className="text-white text-[15px] line-clamp-2 leading-snug mb-2">
              B站竖屏视频3D展示效果！人工智能驱动的创新体验。#bilibili #AI #前端开发
            </p>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 bg-[#FB7299]/20 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                <Eye size={12} className="text-[#FB7299]" />
                <span className="text-[14px] text-white font-medium">89.2万</span>
              </div>
            </div>
          </div>
        </>
      );

    case 'vk':
      return (
        <>
          {/* VKontakte Header */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <span className="text-white text-[14px] font-bold">Клипы</span>
            <Search size={20} className="text-white" />
          </div>
          
          {/* Right Side Actions */}
          <div className="absolute right-2 bottom-15 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#4680C2] overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#4680C2] rounded-full p-0.5 border-2 border-black">
                <Plus size={12} className="text-white" strokeWidth={4} />
              </div>
            </div>
            
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <Heart size={21} className="text-white" fill="currentColor" />
              <span className="text-[14px] text-white font-medium">15.2K</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <MessageCircle size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">892</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Repeat2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">Репост</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Share2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">Share</span>
            </div>
            
            <MoreHorizontal size={21} className="text-white mt-1" />
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-15 left-6 right-22 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-11 h-11 rounded-full bg-[#4680C2] flex items-center justify-center border border-white/20">
                <span className="text-white text-[15px] font-bold">W</span>
              </div>
              <span className="text-white text-[14px] font-semibold">Wasp Vision AI</span>
              <button className="px-2.5 py-0.5 bg-[#4680C2] rounded-md text-white text-[14px] font-medium">
                Подписаться
              </button>
            </div>
            <p className="text-white text-[15px] line-clamp-2 leading-snug">
              3D карусель социальных медиа с интеграцией ИИ. Инновационный подход к визуализации контента.
            </p>
          </div>
        </>
      );

    case 'naver':
      return (
        <>
          {/* Naver TV Header */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#03C75A] font-black text-[18px]">N</span>
              <span className="text-white text-[15px] font-bold">클립</span>
            </div>
            <MoreVertical size={22} className="text-white" />
          </div>
          
          {/* Right Side Actions */}
          <div className="absolute right-2 bottom-15 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#03C75A] overflow-hidden bg-gradient-to-br from-green-500 to-green-700" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#03C75A] rounded-full p-0.5 border-2 border-black">
                <Plus size={12} className="text-white" strokeWidth={4} />
              </div>
            </div>
            
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <Heart size={21} className="text-white" fill="currentColor" />
              <span className="text-[14px] text-white font-medium">8.4천</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <MessageCircle size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">234</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Bookmark size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">저장</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Share2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">공유</span>
            </div>
            
            <MoreHorizontal size={21} className="text-white mt-1" />
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-15 left-6 right-22 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-11 h-11 rounded-full bg-[#03C75A] flex items-center justify-center border border-white/20">
                <span className="text-white text-[14px] font-bold">W</span>
              </div>
              <span className="text-white text-[14px] font-semibold">Wasp Vision AI</span>
              <button className="px-2.5 py-0.5 bg-[#03C75A] rounded-md text-white text-[14px] font-medium">
                구독
              </button>
            </div>
            <p className="text-white text-[15px] line-clamp-2 leading-snug">
              네이버 TV 3D 소셜 미디어 캐러셀. AI 기반 혁신적인 시각화 경험. #네이버 #AI #기술
            </p>
          </div>
        </>
      );

    case 'kakao':
      return (
        <>
          {/* KakaoTalk TV Header */}
          <div className="absolute top-15 left-0 w-full px-5 flex justify-between items-center z-50">
            <ChevronLeft size={22} className="text-white" />
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-12 rounded-lg bg-[#FEE500] flex items-center justify-center">
                <MessageSquare size={24} className="text-black" fill="currentColor" />
              </div>
              <span className="text-white text-[15px] font-bold">카카오TV</span>
            </div>
            <Search size={20} className="text-white" />
          </div>
          
          {/* Right Side Actions */}
          <div className="absolute right-2 bottom-15 flex flex-col items-center gap-2.5 z-50">
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full border-2 border-[#FEE500] overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#FEE500] rounded-full p-0.5 border-2 border-black">
                <Plus size={12} className="text-black" strokeWidth={4} />
              </div>
            </div>
            
            <AIBadge />
            
            <div className="flex flex-col items-center gap-1.5">
              <Heart size={21} className="text-white" fill="currentColor" />
              <span className="text-[14px] text-white font-medium">12.3천</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <MessageCircle size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">567</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Bookmark size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">보관</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <Share2 size={21} className="text-white" />
              <span className="text-[14px] text-white font-medium">공유</span>
            </div>
            
            <MoreHorizontal size={21} className="text-white mt-1" />
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-15 left-6 right-22 z-50">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-11 h-11 rounded-full bg-[#FEE500] flex items-center justify-center border border-white/20">
                <span className="text-black text-[14px] font-black">W</span>
              </div>
              <span className="text-white text-[14px] font-semibold">Wasp Vision AI</span>
              <button className="px-2.5 py-0.5 bg-[#FEE500] rounded-md text-black text-[14px] font-bold">
                구독
              </button>
            </div>
            <p className="text-white text-[15px] line-clamp-2 leading-snug">
              카카오TV 3D 소셜 미디어 캐러셀 구현. 인공지능 기반 혁신적 경험. #카카오 #AI
            </p>
          </div>
        </>
      );

    default:
      return <div />;
  }
};

function MainContent() {
  const radius = 1050; 
  const [isDragging, setIsDragging] = useState(false);
  const [deviceType, setDeviceType] = useState<'iphone' | 'android'>('iphone');
  
  const x = useMotionValue(0);
  const rotateY = useSpring(x, { stiffness: 45, damping: 35 });
  
  useAnimationFrame(() => { if (!isDragging) x.set(x.get() + 0.1); });

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#010105] overflow-hidden">
      
      {/* DEVICE TOGGLE BUTTON */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-[100] flex gap-2.5 bg-white/5 backdrop-blur-xl p-2 rounded-2xl border border-white/10">
        <button 
          onClick={() => setDeviceType('iphone')}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all ${deviceType === 'iphone' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          <Smartphone size={20} />
          <span className="text-xs font-bold">iPhone</span>
        </button>
        <button 
          onClick={() => setDeviceType('android')}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all ${deviceType === 'android' ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          <MonitorSmartphone size={20} />
          <span className="text-xs font-bold">Android</span>
        </button>
      </div>

      <motion.div 
        className="relative h-screen w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: "1800px" }}
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
                className="absolute w-[370px] h-[807.5px] group"
                style={{ transform: `rotateY(${angle}deg) translateZ(${radius}px)`, transformStyle: "preserve-3d" }}
              >
                <div className="relative w-full h-full transition-all duration-700 group-hover:translate-y-[-30px]" style={{ transformStyle: "preserve-3d" }}>
                  
                  {/* PHONE FRONT */}
                  <div className={`absolute inset-0 border-[1px] border-white/20 overflow-hidden z-20 bg-black shadow-2xl transition-all duration-500
                       ${deviceType === 'iphone' ? 'rounded-[3.95rem]' : 'rounded-[1.875rem]'}`}
                       style={{ backfaceVisibility: "hidden", boxShadow: `0 0 75px -19px ${item.glow}` }}>
                    
                    <PlatformOverlay id={item.id} />

                    {/* DYNAMIC HARDWARE OVERLAYS */}
                    <AnimatePresence mode="wait">
                      {deviceType === 'iphone' ? (
                        /* iPhone Dynamic Island */
                        <motion.div 
                          key="iphone-island"
                          initial={{ opacity: 0, y: -11 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                          className="absolute top-4 left-1/2 -translate-x-1/2 w-[125px] h-[37px] bg-black rounded-[1.5rem] z-[60] border-x border-b border-white/10" 
                        />
                      ) : (
                        /* Android Punch Hole */
                        <motion.div 
                          key="android-hole"
                          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
                          className="absolute top-5 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0a0a0a] rounded-full z-[60] border border-white/10 shadow-inner"
                        />
                      )}
                    </AnimatePresence>

                    {/* Bottom Indicator (Home Bar) */}
                    <div className={`absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white/30 z-[60] rounded-full transition-all duration-500
                        ${deviceType === 'iphone' ? 'w-35 h-1.5' : 'w-27 h-1.5'}`} 
                    />

                    <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                  </div>

                  {/* PHONE BACK */}
                  <div className={`absolute inset-0 border border-white/10 flex flex-col items-center justify-center bg-[#050508] transition-all duration-500
                       ${deviceType === 'iphone' ? 'rounded-[3.75rem]' : 'rounded-[1.875rem]'}`}
                       style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                    <div className="w-25 h-25 rounded-full bg-purple-500/5 flex items-center justify-center border border-purple-500/10 mb-8">
                      <Sparkles className="text-purple-500/20" size={50} />
                    </div>
                    <p className="text-[15px] font-bold tracking-[1em] text-white/20 uppercase">WASP-2</p>
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
