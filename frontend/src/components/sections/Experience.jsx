import React, { useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollStep } from '../../hooks/useScrollStep';

export default function Experience({ experiences = [] }) {
  const trackRef = useRef(null);
  const total = experiences.length || 1;
  const [currentIndex, jumpToStep] = useScrollStep(trackRef, total);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToNext = () => {
    if (currentIndex < total - 1) {
      jumpToStep(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      jumpToStep(currentIndex - 1);
    }
  };

  // Handle touch swipes on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 45) {
      goToNext();
    } else if (swipeDistance < -45) {
      goToPrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="scroll-track-experience" id="experience" ref={trackRef}>
      <div className="experience-deck-screen page-screen">
        <div className="container">
          <SectionHeader
            eyebrow="Work History"
            title="Professional Experience"
            description="A chronological journey of enterprise GenAI deployments, agentic systems, and client delivery."
          />

          {/* Stepper Navigation Bar */}
          <div className="exp-nav-bar">
            <div className="exp-progress-counter">
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>
                Role {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="exp-dots-indicator">
                {experiences.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToStep(idx)}
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
                <div key={idx} className={`exp-slide-card ${currentIndex === idx ? 'active' : ''}`}>
                  <div className="glass-card exp-slide-inner">
                    {/* Top Bar: Role & Period */}
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '6px' }}>
                            <span
                              className="badge badge-pill"
                              style={{
                                backgroundColor: '#141C25',
                                color: '#FFFFFF',
                                border: '1px solid #283747',
                                fontSize: '0.6875rem',
                                letterSpacing: '0.08em'
                              }}
                            >
                              ROLE {String(idx + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <h4 style={{ fontSize: '1.625rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                            {exp.role}
                          </h4>
                          <p style={{ color: '#9BA8AB', fontSize: '1rem', marginTop: '2px', fontWeight: 500 }}>
                            {exp.company}
                          </p>
                        </div>

                        <span
                          className="badge badge-pill"
                          style={{
                            backgroundColor: '#0E141C',
                            color: '#FFFFFF',
                            border: '1px solid #1E2835',
                            fontSize: '0.8125rem',
                            padding: '0.45rem 1rem'
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
                          color: '#CBD5E1',
                          fontSize: '0.9375rem',
                          lineHeight: 1.65
                        }}
                      >
                        {exp.highlights?.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom: Tech Stack Pills & Swipe Instruction */}
                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #1E2835', marginTop: '1.25rem' }}>
                      {exp.techStack && exp.techStack.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                          {exp.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="badge"
                              style={{
                                fontSize: '0.75rem',
                                color: '#CCD0CF',
                                backgroundColor: '#11212D',
                                border: '1px solid #253745'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#9BA8AB', fontFamily: 'var(--font-mono)' }}>
                        <span>Scroll through roles to explore career history</span>
                        {currentIndex < total - 1 ? (
                          <span
                            onClick={goToNext}
                            style={{ cursor: 'pointer', color: '#CCD0CF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          >
                            <span>Next Role</span>
                            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                          </span>
                        ) : (
                          <a
                            href="#projects"
                            style={{ color: '#CCD0CF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
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
      </div>
    </section>
  );
}
