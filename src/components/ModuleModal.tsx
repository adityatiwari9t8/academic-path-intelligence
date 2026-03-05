import React, { useEffect } from 'react';
import { X, Target, ArrowRight, Layers, Library, ExternalLink } from 'lucide-react';
import { RoadmapModule } from '../types';
import { COLOR_THEMES } from '../constants';

interface ModuleModalProps {
  module: RoadmapModule | null;
  onClose: () => void;
}

export default function ModuleModal({ module, onClose }: ModuleModalProps) {
  useEffect(() => {
    if (module) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [module]);

  if (!module) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white dark:bg-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        <div className={`h-2 w-full shrink-0 ${COLOR_THEMES[module.color]?.bg || 'bg-slate-500'}`} />
        <div className="p-6 md:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <span className={`text-[10px] font-black uppercase tracking-widest ${COLOR_THEMES[module.color]?.text || 'text-slate-500'}`}>
                {module.phase}
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                {module.subject}
              </h2>
            </div>
            <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full transition-colors text-slate-500 shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="flex items-center space-x-2 text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                <Target className="w-5 h-5 text-blue-500" />
                <span>Learning Objectives</span>
              </h4>
              <ul className="space-y-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                {module.details.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="flex items-center space-x-2 text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  <Layers className="w-5 h-5 text-indigo-500" />
                  <span>Key Topics</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {module.details.topics.map((topic, i) => (
                    <span key={i} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-bold border border-indigo-100 dark:border-indigo-800/50">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="flex items-center space-x-2 text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  <Library className="w-5 h-5 text-purple-500" />
                  <span>Resources</span>
                </h4>
                <ul className="space-y-2">
                  {module.details.resources.map((res, i) => (
                    <li key={i} className="flex items-center justify-between text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                      <span className="truncate mr-2">{res}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-700 shrink-0 bg-white dark:bg-slate-800">
          <button onClick={onClose} className={`w-full py-4 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all ${COLOR_THEMES[module.color]?.bg || 'bg-slate-600'} ${COLOR_THEMES[module.color]?.hover || 'hover:bg-slate-700'}`}>
            Enroll in Module
          </button>
        </div>
      </div>
    </div>
  );
}