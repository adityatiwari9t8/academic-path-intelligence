import React, { RefObject } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { RoadmapModule } from '../types';
import { COLOR_THEMES } from '../constants';

interface RoadmapGridProps {
  showResult: boolean;
  setShowResult: (val: boolean) => void;
  roadmapModulesState: RoadmapModule[];
  selectedSkillsLength: number;
  setActiveDetailModule: (module: RoadmapModule) => void;
  resultsRef: RefObject<HTMLDivElement>;
}

export default function RoadmapGrid({ showResult, setShowResult, roadmapModulesState, selectedSkillsLength, setActiveDetailModule, resultsRef }: RoadmapGridProps) {
  if (!showResult) return null;

  return (
    <div ref={resultsRef} className="animate-in fade-in slide-in-from-bottom-12 duration-700 space-y-8 pt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-14 bg-blue-500 rounded-full" />
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Your Optimized Roadmap</h2>
            <p className="text-sm text-slate-500 mt-1">Calculated based on {selectedSkillsLength} selected competencies.</p>
          </div>
        </div>
        <button 
          onClick={() => { setShowResult(false); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth'}), 100); }}
          className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          Edit Stack
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapModulesState.map((node, i) => {
          const theme = COLOR_THEMES[node.color] || COLOR_THEMES.slate;
          
          return (
            <div key={i} className={`bg-white dark:bg-slate-800 p-8 rounded-[2rem] border ${theme.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group`}>
              <div className={`absolute top-0 right-0 w-40 h-40 ${theme.lightBg} rounded-bl-[120px] -z-10 transition-transform duration-500 group-hover:scale-110`} />

              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 ${theme.lightBg} rounded-2xl flex items-center justify-center ${theme.text}`}>
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full">
                  Step 0{i+1}
                </span>
              </div>
              
              <div className="flex-1 mb-8">
                <h4 className={`text-[10px] font-black ${theme.text} uppercase tracking-[0.15em] mb-3`}>{node.phase}</h4>
                <h3 className="text-xl font-black text-slate-800 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {node.subject}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {node.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Expected Effort</span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{node.effort}</span>
                </div>
                <button 
                  onClick={() => setActiveDetailModule(node)}
                  className={`px-4 py-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-xs font-black uppercase ${theme.text} hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 group/btn`}
                >
                  Details <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}