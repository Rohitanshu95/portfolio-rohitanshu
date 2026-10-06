import { useState, useEffect } from 'react';

const DEFAULT_SECTIONS = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'achievements',
  'education',
  'contact'
];

export function useActiveSection(sectionIds = DEFAULT_SECTIONS) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // If near the top, active is hero
      if (window.scrollY < window.innerHeight * 0.4) {
        setActiveSection('hero');
        return;
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
