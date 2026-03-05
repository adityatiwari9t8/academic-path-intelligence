import { useAcademicPath } from './hooks/useAcademicPath';
import Hero from './components/Hero';
import SkillSelector from './components/SkillsSelector';
import StackToolbar from './components/StackToolbar';
import RoadmapGrid from './components/RoadmapGrid';
import ModuleModal from './components/ModuleModal';

export default function App() {
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
  );
}