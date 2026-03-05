import { useState, useEffect } from 'react';
import { useAcademicPath } from './hooks/useAcademicPath';
import Hero from './components/Hero';
import SkillSelector from './components/SkillsSelector';
import StackToolbar from './components/StackToolbar';
import RoadmapGrid from './components/RoadmapGrid';
import ModuleModal from './components/ModuleModal';

export default function App() {
  // --- Dark Mode Implementation ---
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check if the user has a saved preference or prefer-color-scheme
    const isDark = 
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };
  // --------------------------------

  const {
    selectedSkills,
    isGenerating,
    showResult,
    searchQuery,
    setSearchQuery,
    activeDetailModule,
    setActiveDetailModule,
    roadmapModulesState,
    resultsRef,
    filteredCategories,
    toggleSkill,
    handleGenerate,
    reset,
    setShowResult
  } = useAcademicPath();

  return (
    /* Added a full-screen wrapper with background/text transitions */
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      
      {/* Dark Mode Toggle Button */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className={`max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-8 space-y-12 relative ${selectedSkills.length > 0 && !showResult ? 'pb-40' : 'pb-12'}`}>
        
        <ModuleModal module={activeDetailModule} onClose={() => setActiveDetailModule(null)} />

        <Hero />

        <SkillSelector 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredCategories={filteredCategories}
          selectedSkills={selectedSkills}
          toggleSkill={toggleSkill}
        />

        {!showResult && (
          <StackToolbar 
            selectedSkills={selectedSkills}
            toggleSkill={toggleSkill}
            reset={reset}
            handleGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        )}

        <RoadmapGrid 
          showResult={showResult}
          setShowResult={setShowResult}
          roadmapModulesState={roadmapModulesState}
          selectedSkillsLength={selectedSkills.length}
          setActiveDetailModule={setActiveDetailModule}
          resultsRef={resultsRef}
        />

      </div>
    </div>
  );
}