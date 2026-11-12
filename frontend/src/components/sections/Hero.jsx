import React, { useState, useEffect } from 'react';

export default function Hero({ profile }) {
  const [motionOn, setMotionOn] = useState(true);
  const [liveEffects, setLiveEffects] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Progress from 0 to 1 as user scrolls down 1 full viewport
      const p = Math.min(Math.max(scrollY / (vh * 0.85), 0), 1);
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects') || document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutElem = document.querySelector('#about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fullName = profile?.name || 'Rohitanshu Dhar';
  const nameParts = fullName.split(' ');
  const firstName = nameParts[0] || 'Rohitanshu';
  const lastName = nameParts.slice(1).join(' ') || 'Dhar';

  // Opacity & scale of background photo as user scrolls down
  const photoOpacity = Math.max(1 - scrollProgress * 1.25, 0);
  const photoScale = 1 + scrollProgress * 0.08;
  const photoTranslateY = scrollProgress * 30; // subtle parallax sink

  return (
    <section 
      className={`sarthak-hero-root ${!motionOn ? 'motion-disabled' : ''} ${liveEffects ? 'live-effects-active' : ''}`} 
      id="hero"
    >
      {/* Background Ambience / Subtle Lighting Glow */}
      <div 
        className="sarthak-hero-ambient" 
        style={{ opacity: Math.max(1 - scrollProgress * 1.5, 0) }}
        aria-hidden="true" 
      />

      {/* Main Full-Height Portrait Background Image (Fades out seamlessly as you scroll down) */}
      <div 
        className="sarthak-hero-photo-wrap"
        style={{
          opacity: photoOpacity,
          transform: `translate3d(0, ${photoTranslateY}px, 0) scale(${photoScale})`,
          pointerEvents: photoOpacity <= 0.05 ? 'none' : 'auto'
        }}
      >
        <img
          src="/hero-portrait-blended.jpg"
          alt={fullName}
          className="sarthak-hero-photo"
        />
        <div className="sarthak-hero-vignette" aria-hidden="true" />
      </div>

      {/* Hero Content Canvas */}
      <div className="sarthak-hero-content">
        {/* Top Tagline */}
        <p className="sarthak-hero-subhead">
          AI &amp; AUTONOMOUS SYSTEMS ARCHITECTURE
        </p>

        {/* Big Signature Typography Name */}
        <h1 className="sarthak-hero-name">
          <span className="sarthak-name-first">{firstName}</span>
          <span className="sarthak-name-last">{lastName}</span>
        </h1>

        {/* Tailored Bio Pitch Statement */}
        <p className="sarthak-hero-desc">
          I build <strong>production AI systems</strong>, architect multi-agent workflows,<br className="sarthak-br-desktop" />
          and scale intelligent applications.
        </p>

        {/* Main Action Buttons */}
        <div className="sarthak-hero-actions">
          <a
            href="#projects"
            onClick={handleScrollToWork}
            className="sarthak-btn-pill"
          >
            <span>Explore my work</span>
            <span className="sarthak-btn-icon" aria-hidden="true">↓</span>
          </a>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="sarthak-btn-underline"
          >
            <span>Start a conversation</span>
            <span className="sarthak-btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Bottom Footer Controls Row */}
      <div 
        className="sarthak-hero-bottom-bar"
        style={{ opacity: Math.max(1 - scrollProgress * 2, 0) }}
      >
        {/* Left Side: Live Effects Toggle & Scroll to Discover */}
        <div className="sarthak-hero-bottom-left">
          <button
            type="button"
            className={`sarthak-bottom-toggle-btn ${liveEffects ? 'active' : ''}`}
            onClick={() => setLiveEffects(!liveEffects)}
            aria-label="Toggle live effects"
          >
            <span>Enable live effects</span>
          </button>

          <a
            href="#about"
            onClick={handleScrollDown}
            className="sarthak-scroll-discover"
          >
            <span className="sarthak-scroll-accent-bar" aria-hidden="true" />
            <span className="sarthak-scroll-discover-text">SCROLL TO DISCOVER</span>
            <span className="sarthak-scroll-discover-arrow" aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Right Side: Engineering & AI Meta + Motion Toggle */}
        <div className="sarthak-hero-bottom-right">
          <div className="sarthak-meta-text">
            <span className="sarthak-meta-label">AI &amp; AGENT SYSTEMS</span>
            <span className="sarthak-meta-value">SINCE 2022</span>
          </div>

          <button
            type="button"
            className={`sarthak-motion-toggle-btn ${motionOn ? 'active' : ''}`}
            onClick={() => setMotionOn(!motionOn)}
            aria-label="Toggle motion animation"
          >
            <span className="sarthak-motion-icon" aria-hidden="true">
              {motionOn ? '⏸' : '▶'}
            </span>
            <span className="sarthak-motion-label">
              {motionOn ? 'MOTION ON' : 'MOTION OFF'}
            </span>
            <span className="sarthak-sparkle-icon" aria-hidden="true">✦</span>
          </button>
        </div>
      </div>
    </section>
  );
}
