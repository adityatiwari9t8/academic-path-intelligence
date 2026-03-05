import React from 'react';
import { Search, Filter, X } from 'lucide-react';

interface SkillSelectorProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filteredCategories: any[];
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
}

export default function SkillSelector({ searchQuery, setSearchQuery, filteredCategories, selectedSkills, toggleSkill }: SkillSelectorProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden p-6 md:p-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-slate-100 dark:border-slate-700/50">
        <h3 className="text-xl font-bold flex items-center space-x-2 text-slate-800 dark:text-slate-200 shrink-0">
          <Filter className="w-5 h-5 text-blue-500" />
          <span>Select Your Skills</span>
        </h3>
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search technologies, concepts, languages..."
            className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="min-h-[400px]">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900/50 rounded-full flex items-center justify-center border border-slate-100 dark:border-slate-700">
              <Search className="w-8 h-8 text-slate-300 dark:text-slate-600" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              No skills found matching "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredCategories.map((category) => (
              <div key={category.name} className="space-y-4">
                <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-700/50 pb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill: string) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        onClick={() => toggleSkill(skill)}
                        className={`
                          px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border
                          ${isSelected 
                            ? 'bg-[#2b3453] border-[#2b3453] text-white shadow-md transform scale-[1.02]' 
                            : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm hover:-translate-y-0.5'}
                        `}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}