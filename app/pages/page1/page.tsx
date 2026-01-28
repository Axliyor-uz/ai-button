"use client";

import { useAppContext, AppProvider } from '../../components/AdditionalComponents';
import Link from 'next/link';

function Content() {
  // We only grab what we need from the context
  const { count } = useAppContext();

  // Distinct Function: A full state reset
  const handleReset = () => {
    // In a real app, you'd add a 'reset' function to your context.
    // For now, let's just trigger a simple window reload to show a "hard reset"
    // or imagine calling a dispatch function here.
    window.location.href = "/"; 
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">The Reset Zone</h1>
        
        <p className="text-slate-400">
          You currently have <span className="text-emerald-400 font-mono text-xl">{count}</span> points stored in Context.
        </p>

        {/* The One Button */}
        <button
          onClick={handleReset}
          className="px-8 py-4 bg-red-500 hover:bg-red-600 rounded-full font-bold transition-transform active:scale-90 shadow-lg shadow-red-500/50"
        >
          Nuke All Progress
        </button>

        <div className="pt-8">
          <Link href="/" className="text-sm text-slate-500 underline hover:text-slate-300">
            ← Back to Main Page
          </Link>
        </div>
      </div>
    </main>
  );
}
