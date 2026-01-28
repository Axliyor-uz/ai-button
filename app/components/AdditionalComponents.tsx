"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. Define the shape of our state
interface AppContextType {
  count: number;
  isVisible: boolean;
  bgColor: string;
  increment: () => void;
  toggleVisibility: () => void;
  changeColor: () => void;
}

// 2. Create the Context
const AppContext = createContext<AppContextType | undefined>(undefined);

// 3. The Provider Component
export function AppProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [bgColor, setBgColor] = useState<string>("bg-slate-50");

  const increment = () => setCount((prev) => prev + 1);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const changeColor = () => {
    const colors = ["bg-red-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100"];
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  // Example of useEffect: Runs whenever bgColor changes
  useEffect(() => {
    console.log("Background color was updated to:", bgColor);
  }, [bgColor]);

  return (
    <AppContext.Provider value={{ count, isVisible, bgColor, increment, toggleVisibility, changeColor }}>
      {children}
    </AppContext.Provider>
  );
}

// 4. Custom hook for easy access
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
}