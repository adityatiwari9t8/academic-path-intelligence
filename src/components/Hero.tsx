import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-800/50">
        <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
        <span>Curriculum Intelligence Engine</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">Academic Path Intelligence</h1>
      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Map your current technical stack to discover the most efficient, personalized route toward software engineering mastery.
      </p>
    </div>
  );
}