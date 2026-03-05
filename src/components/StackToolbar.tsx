import React from 'react';
import { X, RotateCcw, BookOpen } from 'lucide-react';

interface StackToolbarProps {
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  reset: () => void;
  handleGenerate: () => void;
  isGenerating: boolean;
}

export default function StackToolbar({ selectedSkills, toggleSkill, reset, handleGenerate, isGenerating }: StackToolbarProps) {
  if (selectedSkills.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-full duration-300 pointer-events-none p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.4)] rounded-2xl md:rounded-[2rem] p-3 md:p-4 pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
        
        <div className="w-full sm:flex-1 flex items-center gap-4 md:gap-6 overflow-hidden pl-2">
          <div className="flex flex-col shrink-0">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">Stack</span>
            <span className="text-lg font-black text-slate-800 dark:text-slate-200 leading-none">{selectedSkills.length}</span>
          </div>
          
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 shrink-0 hidden sm:block" />
          
          <div className="flex-1 flex gap-2 overflow-x-auto custom-scrollbar pb-1 pt-1 -mx-2 px-2 mask-linear-fade">
            {selectedSkills.map(s => (
              <span key={s} className="shrink-0 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1.5 group">
                {s}
                <button onClick={(e) => { e.stopPropagation(); toggleSkill(s); }} className="text-slate-400 hover:text-rose-500 focus:outline-none">
                  <X className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-auto flex items-center gap-3 shrink-0 pr-1">
          <button 
            onClick={reset} 
            className="p-3 text-slate-400 hover:bg-rose-50 hover:text-rose-500 dark:hover:bg-rose-900/30 rounded-xl transition-colors"
            title="Clear Stack"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`
              flex-1 sm:flex-none px-6 md:px-8 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2
              ${isGenerating ? 'bg-slate-800 text-slate-400 cursor-not-allowed' : 'bg-[#2b3453] text-white hover:bg-[#1f2640] shadow-lg hover:shadow-xl hover:-translate-y-0.5'}
            `}
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-slate-400 border-t-white rounded-full animate-spin" />
                <span>Compiling...</span>
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4" />
                <span>Generate Map</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}