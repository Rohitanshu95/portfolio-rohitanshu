import React, { useState, useRef } from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Experience({ experiences = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isScrollingRef = useRef(false);

  const total = experiences.length || 1;

  const goToNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Handle trackpad/wheel gestures over the carousel container
  const handleWheel = (e) => {
    if (isScrollingRef.current) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (delta > 35) {
      if (currentIndex < total - 1) {
        isScrollingRef.current = true;
        setCurrentIndex((prev) => prev + 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    } else if (delta < -35) {
      if (currentIndex > 0) {
        isScrollingRef.current = true;
        setCurrentIndex((prev) => prev - 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    }
  };

  // Handle touch swipes on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      goToNext();
    } else if (swipeDistance < -50) {
      goToPrev();
    }
  };

  return (
    <section className="experience-deck-screen page-screen" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Work History"
          title="Professional Experience"
          description="A chronological journey of enterprise GenAI deployments, agentic systems, and client delivery."
        />

        {/* Stepper Navigation Bar */}
        <div className="exp-nav-bar">
          <div className="exp-progress-counter">
            <span style={{ color: '#ffffff', fontWeight: 600 }}>
              Role {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <div className="exp-dots-indicator">
              {experiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`exp-dot ${currentIndex === idx ? 'active' : ''}`}
                  aria-label={`Jump to experience role ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="exp-ctrl-btn"
              aria-label="Previous Experience"
              title="Previous Role"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex === total - 1}
              className="exp-ctrl-btn"
              aria-label="Next Experience"
              title="Next Role"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Interactive Horizontal Card Track */}
        <div
          className="exp-horizontal-wrapper"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="exp-horizontal-track"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`
            }}
          >
            {experiences.map((exp, idx) => (
              <div key={idx} className="exp-slide-card">
                <div
                  className="glass-card"
                  style={{
                    minHeight: '22rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2rem'
                  }}
                >
                  {/* Top Bar: Role & Period */}
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4px' }}>
                          <span
                            className="badge badge-pill"
                            style={{
                              backgroundColor: '#27272a',
                              color: '#ffffff',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              fontSize: '0.6875rem'
                            }}
                          >
                            ROLE {String(idx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>
                          {exp.role}
                        </h4>
                        <p style={{ color: '#a1a1aa', fontSize: '1rem', marginTop: '2px' }}>
                          {exp.company}
                        </p>
                      </div>

                      <span
                        className="badge badge-pill"
                        style={{
                          backgroundColor: '#18181b',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          fontSize: '0.8125rem',
                          padding: '0.4rem 0.875rem'
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlights List */}
                    <ul
                      style={{
                        marginTop: '1.5rem',
                        paddingLeft: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.625rem',
                        color: '#a1a1aa',
                        fontSize: '0.9375rem',
                        lineHeight: 1.6
                      }}
                    >
                      {exp.highlights?.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Tech Stack Pills & Swipe Instruction */}
                  <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '1.25rem' }}>
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                        {exp.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="badge"
                            style={{
                              fontSize: '0.75rem',
                              color: '#ffffff',
                              backgroundColor: '#18181b',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#71717a', fontFamily: 'var(--font-mono)' }}>
                      <span>Scroll or swipe to view next role</span>
                      {currentIndex < total - 1 ? (
                        <span
                          onClick={goToNext}
                          style={{ cursor: 'pointer', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          <span>Next Role</span>
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                        </span>
                      ) : (
                        <a
                          href="#projects"
                          style={{ color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        >
                          <span>Proceed to Projects</span>
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_downward</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
