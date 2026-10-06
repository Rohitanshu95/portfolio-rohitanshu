import { useState, useEffect } from 'react';

/**
 * Custom hook to track and step through sub-sections using native scroll progress
 * of a sticky container.
 *
 * @param {React.RefObject} trackRef - Ref to the outer scroll track element
 * @param {number} totalSteps - Total number of sub-sections/slides
 * @returns {[number, (index: number) => void]} [currentStep, jumpToStep]
 */
export function useScrollStep(trackRef, totalSteps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!trackRef.current || totalSteps <= 1) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!trackRef.current) {
            ticking = false;
            return;
          }

          const rect = trackRef.current.getBoundingClientRect();
          const totalScroll = rect.height - window.innerHeight;

          if (totalScroll > 0) {
            const scrolled = -rect.top;

            if (scrolled <= 10) {
              setCurrentStep(0);
            } else if (scrolled >= totalScroll - 10) {
              setCurrentStep(totalSteps - 1);
            } else {
              const progress = scrolled / totalScroll;
              // Map continuous scroll progress evenly to step indices
              const rawIndex = progress * (totalSteps - 1);
              const index = Math.round(rawIndex);
              const clamped = Math.min(totalSteps - 1, Math.max(0, index));
              setCurrentStep(clamped);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to establish position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackRef, totalSteps]);

  const jumpToStep = (targetIdx) => {
    if (!trackRef.current || totalSteps <= 1) return;
    const target = Math.max(0, Math.min(totalSteps - 1, targetIdx));
    const rect = trackRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const totalScroll = trackRef.current.offsetHeight - window.innerHeight;
    const targetProgress = target / (totalSteps - 1);
    const targetY = sectionTop + targetProgress * totalScroll;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  return [currentStep, jumpToStep];
}
