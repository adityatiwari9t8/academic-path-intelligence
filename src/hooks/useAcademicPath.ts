import { useState, useMemo, useRef } from 'react';
import { RoadmapModule } from '../types';
import { SKILL_CATEGORIES } from '../constants';
import { generateRoadmap } from '../utils';

export const useAcademicPath = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDetailModule, setActiveDetailModule] = useState<RoadmapModule | null>(null);
  const [roadmapModulesState, setRoadmapModulesState] = useState<RoadmapModule[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return SKILL_CATEGORIES;
    const lowerQuery = searchQuery.toLowerCase();
    return SKILL_CATEGORIES.map(cat => ({
      ...cat,
      skills: cat.skills.filter(s => s.toLowerCase().includes(lowerQuery))
    })).filter(cat => cat.skills.length > 0);
  }, [searchQuery]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
    if (showResult) setShowResult(false);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowResult(false);
    setTimeout(() => {
      setRoadmapModulesState(generateRoadmap(selectedSkills));
      setIsGenerating(false);
      setShowResult(true);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }, 1200);
  };

  const reset = () => {
    setSelectedSkills([]);
    setShowResult(false);
    setSearchQuery('');
  };

  return {
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
  };
};