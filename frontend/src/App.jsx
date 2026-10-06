import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import NextPageIndicator from './components/common/NextPageIndicator';
import PageRail from './components/common/PageRail';
import ScrollProgressBar from './components/common/ScrollProgressBar';

import { useActiveSection } from './hooks/useActiveSection';
import {
  fetchProfile,
  fetchSkills,
  fetchExperience,
  fetchProjects,
  fetchAchievements
} from './services/api';

import {
  defaultProfile,
  defaultSkills,
  defaultExperiences,
  defaultProjects,
  defaultAchievements
} from './data/fallbackData';

export default function App() {
  const activeSection = useActiveSection();

  // Initialize with fallback data for instant paint
  const [profile, setProfile] = useState(defaultProfile);
  const [skills, setSkills] = useState(defaultSkills);
  const [experiences, setExperiences] = useState(defaultExperiences);
  const [projects, setProjects] = useState(defaultProjects);
  const [achievements, setAchievements] = useState(defaultAchievements);

  // Hydrate from live backend API
  useEffect(() => {
    async function loadPortfolioData() {
      try {
        const [profData, skillData, expData, projData, achData] = await Promise.all([
          fetchProfile(),
          fetchSkills(),
          fetchExperience(),
          fetchProjects(),
          fetchAchievements()
        ]);

        if (profData) setProfile(profData);
        if (skillData && skillData.length > 0) setSkills(skillData);
        if (expData && expData.length > 0) setExperiences(expData);
        if (projData && projData.length > 0) setProjects(projData);
        if (achData && achData.length > 0) setAchievements(achData);
      } catch (err) {
        console.warn('[App] Error hydrating portfolio data:', err);
      }
    }

    loadPortfolioData();
  }, []);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Top Global Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Dynamic Ambient Background Sheens */}
      <div className="ambient-mesh-glow ambient-mesh-1" aria-hidden="true" />
      <div className="ambient-mesh-glow ambient-mesh-2" aria-hidden="true" />

      <Navbar activeSection={activeSection} profile={profile} />

      {/* Floating Right Page Rail for Desktop */}
      <PageRail activeSection={activeSection} />

      {/* Floating Animated Next Page Prompt */}
      <NextPageIndicator activeSection={activeSection} />

      <main style={{ flex: 1, width: '100%' }}>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Achievements achievements={achievements} />
        <Education profile={profile} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
