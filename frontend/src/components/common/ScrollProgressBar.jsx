import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="global-scroll-progress-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '3px',
        background: 'linear-gradient(90deg, #253745 0%, #4A5C6A 35%, #9BA8AB 70%, #CCD0CF 100%)',
        boxShadow: '0 0 12px rgba(204, 208, 207, 0.9), 0 0 24px rgba(155, 168, 171, 0.4)',
        zIndex: 100,
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
}
