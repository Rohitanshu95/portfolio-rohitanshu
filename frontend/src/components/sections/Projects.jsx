import React, { useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollStep } from '../../hooks/useScrollStep';

export default function Projects({ projects = [] }) {
  const trackRef = useRef(null);
  const total = projects.length || 1;
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

  // Handle mobile touch swipes
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
    <section className="scroll-track-projects" id="projects" ref={trackRef}>
      <div className="deck-card-projects page-screen">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Work"
            title="Production & Autonomous AI Systems"
            description="Selected engineering builds spanning context-rich agent loops, document evaluation engines, and edge-optimized local intelligence."
          />

          {/* Stepper Navigation Bar */}
          <div className="exp-nav-bar" style={{ marginBottom: '1rem' }}>
            <div className="exp-progress-counter">
              <span style={{ color: '#CCD0CF', fontWeight: 600 }}>
                System {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="exp-dots-indicator">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToStep(idx)}
                    className={`exp-dot ${currentIndex === idx ? 'active' : ''}`}
                    aria-label={`Jump to project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={goToPrev}
                disabled={currentIndex === 0}
                className="exp-ctrl-btn"
                aria-label="Previous Project"
                title="Previous System"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#CCD0CF' }}>
                  arrow_back
                </span>
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex === total - 1}
                className="exp-ctrl-btn"
                aria-label="Next Project"
                title="Next System"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#CCD0CF' }}>
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Zoom-In Horizontal Track */}
          <div
            className="proj-horizontal-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="proj-horizontal-track"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`
              }}
            >
              {projects.map((proj, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`proj-slide-card ${isActive ? 'active' : ''}`}
                  >
                    <div className="proj-slide-inner">
                      {/* Top Content */}
                      <div>
                        {/* Category Header */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                            <span
                              className="badge badge-pill"
                              style={{
                                color: '#FFFFFF',
                                backgroundColor: '#141C25',
                                border: '1px solid #283747',
                                fontSize: '0.6875rem',
                                letterSpacing: '0.08em'
                              }}
                            >
                              BUILD {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span
                              className="badge badge-pill"
                              style={{
                                color: '#FFFFFF',
                                backgroundColor: '#0E141C',
                                border: '1px solid #1E2835',
                                fontSize: '0.6875rem',
                                letterSpacing: '0.06em'
                              }}
                            >
                              {proj.categoryBadge}
                            </span>
                          </div>

                          <div
                            style={{
                              width: '2.5rem',
                              height: '2.5rem',
                              borderRadius: '0.625rem',
                              backgroundColor: '#141C25',
                              border: '1px solid #283747',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#FFFFFF'
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                              {proj.icon || 'code'}
                            </span>
                          </div>
                        </div>

                        {/* Project Title */}
                        <h4 style={{ fontSize: '1.625rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.625rem', letterSpacing: '-0.02em' }}>
                          {proj.title}
                        </h4>

                        {/* Description */}
                        <p style={{ fontSize: '0.9375rem', color: '#9BA8AB', lineHeight: 1.7, maxWidth: '52rem' }}>
                          {proj.description}
                        </p>

                        {/* Tech Stack Pills */}
                        {proj.tags && proj.tags.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem' }}>
                            {proj.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="badge"
                                style={{
                                  backgroundColor: '#0E141C',
                                  color: '#E2E8F0',
                                  border: '1px solid #1E2835',
                                  fontSize: '0.75rem',
                                  borderRadius: '9999px',
                                  padding: '0.35rem 0.75rem'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom: Action Buttons & Navigation Cue */}
                      <div
                        style={{
                          paddingTop: '1.5rem',
                          borderTop: '1px solid #1E2835',
                          marginTop: '1.5rem',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '1rem'
                        }}
                      >
                        <div className="project-btn-row" style={{ marginTop: 0 }}>
                          <a
                            href={proj.githubUrl || 'https://github.com/Rohitanshu95'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary project-btn"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span>
                            <span>GitHub Repo</span>
                          </a>

                          <a
                            href={proj.demoUrl || '#contact'}
                            className="btn btn-primary project-btn"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                            <span>Live System</span>
                          </a>
                        </div>

                        <div style={{ fontSize: '0.75rem', color: '#9BA8AB', fontFamily: 'var(--font-mono)' }}>
                          {currentIndex < total - 1 ? (
                            <span
                              onClick={goToNext}
                              style={{ cursor: 'pointer', color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                            >
                              <span>Next System</span>
                              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                            </span>
                          ) : (
                            <a
                              href="#achievements"
                              style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                            >
                              <span>Proceed to Honors & Hackathons</span>
                              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_downward</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
