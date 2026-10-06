import React from 'react';

export default function Hero({ profile }) {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutElem = document.querySelector('#about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fullNameUpper = (profile?.name || 'Rohitanshu Dhar').toUpperCase();

  return (
    <section className="editorial-hero-section" id="hero">
      {/* Subtle Geometric Background Rings */}
      <svg 
        className="editorial-hero-bg-lines" 
        viewBox="0 0 1440 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Upper Left Arc */}
        <circle cx="480" cy="180" r="320" stroke="rgba(24, 34, 45, 0.14)" strokeWidth="1.2" />
        {/* Lower Right Arc */}
        <circle cx="1120" cy="520" r="280" stroke="rgba(24, 34, 45, 0.12)" strokeWidth="1.2" />
      </svg>

      {/* Main Container */}
      <div className="editorial-hero-container">
        {/* Left Side Role/Tagline */}
        <div className="editorial-hero-left-tag">
          <span className="editorial-tag-title">AI Developer</span>
        </div>

        {/* Continuous Right-to-Left Running Marquee Name (Beside & Behind Portrait) */}
        <div className="editorial-hero-marquee-wrap" aria-hidden="true">
          <div className="editorial-hero-marquee-inner">
            <div className="editorial-hero-marquee-group">
              <span>{fullNameUpper}</span>
              <span className="marquee-divider">•</span>
              <span>{fullNameUpper}</span>
              <span className="marquee-divider">•</span>
              <span>{fullNameUpper}</span>
              <span className="marquee-divider">•</span>
            </div>
            <div className="editorial-hero-marquee-group" aria-hidden="true">
              <span>{fullNameUpper}</span>
              <span className="marquee-divider">•</span>
              <span>{fullNameUpper}</span>
              <span className="marquee-divider">•</span>
              <span>{fullNameUpper}</span>
              <span className="marquee-divider">•</span>
            </div>
          </div>
        </div>

        {/* Center Foreground Portrait Cutout (Overlapping Giant Name) */}
        <div className="editorial-hero-portrait-wrap">
          <img
            src="/profile-cutout.png"
            alt={`${profile?.name || 'Rohitanshu Dhar'} - AI Engineer & Developer`}
            className="editorial-hero-portrait-img"
          />
        </div>

        {/* Right Side Scroll Indicator */}
        <div className="editorial-hero-right-scroll">
          <a 
            href="#about" 
            onClick={handleScrollDown} 
            className="editorial-scroll-link"
            aria-label="Scroll down to About section"
          >
            <span className="editorial-scroll-text">Scroll down</span>
            <span className="editorial-scroll-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
