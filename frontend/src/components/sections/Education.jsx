import React, { useRef } from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollStep } from '../../hooks/useScrollStep';

const DEFAULT_EDUCATION_LIST = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'GIET, Bhubaneswar (Affiliated to BPUT)',
    cohort: '2022 – 2026',
    location: 'Bhubaneswar, Odisha',
    score: 'CGPA: 8.12',
    coursework: 'Core coursework: Artificial Intelligence, Distributed Systems, Data Structures & Algorithms, Machine Learning, Database Management Systems.',
    icon: 'school'
  },
  {
    degree: 'Intermediate (Science)',
    institution: 'JSRC, Balasore (CHSE, Odisha)',
    cohort: '2020 – 2022',
    location: 'Balasore, Odisha',
    score: 'Percentage: 83%',
    coursework: 'Physics, Chemistry, Mathematics, Information Technology & foundational analytical sciences.',
    icon: 'science'
  },
  {
    degree: 'Matriculation (10th Standard)',
    institution: 'NGHS, Balasore (BSE Odisha)',
    cohort: '2019 – 2020',
    location: 'Balasore, Odisha',
    score: 'Percentage: 88%',
    coursework: 'Foundational General Science, Mathematics, Social Sciences & Regional Language curriculum.',
    icon: 'history_edu'
  }
];

export default function Education({ profile }) {
  const trackRef = useRef(null);
  const educationList = profile?.educationList && profile.educationList.length > 0
    ? profile.educationList
    : DEFAULT_EDUCATION_LIST;

  const total = educationList.length || 1;
  const [activeStep, jumpToStep] = useScrollStep(trackRef, total);

  const goToNext = () => {
    if (activeStep < total - 1) {
      jumpToStep(activeStep + 1);
    }
  };

  const goToPrev = () => {
    if (activeStep > 0) {
      jumpToStep(activeStep - 1);
    }
  };

  // Calculate fill percentage of the spine line up to the active node
  const fillPercentage = total > 1 ? (activeStep / (total - 1)) * 100 : 100;

  return (
    <section className="scroll-track-education" id="education" ref={trackRef}>
      <div className="deck-card-education page-screen">
        <div className="container">
          <SectionHeader
            eyebrow="Academic Background"
            title="Formal Education"
            description="Academic foundation spanning Computer Science & Engineering, Intermediate Science, and Matriculation."
          />

          {/* Stepper Navigation Bar */}
          <div className="exp-nav-bar" style={{ marginBottom: '1rem' }}>
            <div className="exp-progress-counter">
              <span style={{ color: '#CCD0CF', fontWeight: 600 }}>
                Milestone {String(activeStep + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="exp-dots-indicator">
                {educationList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => jumpToStep(idx)}
                    className={`exp-dot ${activeStep === idx ? 'active' : ''}`}
                    aria-label={`Jump to education milestone ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={goToPrev}
                disabled={activeStep === 0}
                className="exp-ctrl-btn"
                aria-label="Previous Milestone"
                title="Previous Milestone"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#CCD0CF' }}>
                  arrow_upward
                </span>
              </button>
              <button
                onClick={goToNext}
                disabled={activeStep === total - 1}
                className="exp-ctrl-btn"
                aria-label="Next Milestone"
                title="Next Milestone"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#CCD0CF' }}>
                  arrow_downward
                </span>
              </button>
            </div>
          </div>

          {/* Vertical Timeline Spine Line with Node Dots (Image Reference) */}
          <div className="edu-timeline-container">
            {/* Continuous vertical spine line */}
            <div className="edu-spine-line">
              <div
                className="edu-spine-line-fill"
                style={{ height: `${fillPercentage}%` }}
              />
            </div>

            {educationList.map((edu, idx) => {
              const isRevealed = idx <= activeStep;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`edu-timeline-item ${isActive ? 'active' : ''}`}
                  style={{
                    opacity: isRevealed ? (isActive ? 1 : 0.65) : 0.2,
                    transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
                    pointerEvents: isRevealed ? 'auto' : 'none',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Node Dot directly on the line */}
                  <div
                    className="edu-spine-node"
                    onClick={() => jumpToStep(idx)}
                    title={`Milestone ${idx + 1}: ${edu.degree}`}
                  />

                  {/* Card Container revealing from lower to upper */}
                  <div className="edu-card-wrapper">
                    <div
                      className="glass-card"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1.25rem',
                        padding: '1.5rem',
                        cursor: 'pointer',
                        borderColor: isActive ? '#4A5C6A' : '#253745',
                        boxShadow: isActive
                          ? '0 16px 40px rgba(6, 20, 27, 0.9), 0 0 25px rgba(204, 208, 207, 0.08)'
                          : '0 8px 24px rgba(6, 20, 27, 0.6)'
                      }}
                      onClick={() => jumpToStep(idx)}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', maxWidth: '44rem' }}>
                        <div
                          style={{
                            width: '3.25rem',
                            height: '3.25rem',
                            borderRadius: '0.875rem',
                            backgroundColor: '#141C25',
                            border: '1px solid #283747',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#FFFFFF' }}>
                            {edu.icon || (idx === 0 ? 'school' : idx === 1 ? 'science' : 'history_edu')}
                          </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                              {edu.degree}
                            </h4>
                            {edu.score && (
                              <span
                                className="badge badge-pill"
                                style={{
                                  backgroundColor: '#141C25',
                                  color: '#FFFFFF',
                                  border: '1px solid #283747',
                                  fontSize: '0.6875rem',
                                  letterSpacing: '0.06em'
                                }}
                              >
                                {edu.score}
                              </span>
                            )}
                          </div>
                          <p style={{ color: '#9BA8AB', fontSize: '0.9375rem' }}>{edu.institution}</p>
                          {edu.coursework && (
                            <p style={{ color: '#9BA8AB', fontSize: '0.8125rem', lineHeight: 1.5, marginTop: '4px' }}>
                              {edu.coursework}
                            </p>
                          )}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '2px',
                          backgroundColor: '#11212D',
                          border: '1px solid #253745',
                          padding: '0.625rem 1.125rem',
                          borderRadius: '0.75rem'
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9BA8AB' }}>
                          Enrolled Cohort
                        </span>
                        <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#CCD0CF' }}>{edu.cohort}</span>
                        <span style={{ fontSize: '0.75rem', color: '#4A5C6A', fontFamily: 'var(--font-mono)' }}>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Section Handoff Cue */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem', fontSize: '0.75rem', color: '#9BA8AB', fontFamily: 'var(--font-mono)' }}>
            {activeStep < total - 1 ? (
              <span
                onClick={goToNext}
                style={{ cursor: 'pointer', color: '#CCD0CF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Scroll to Next Milestone</span>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_downward</span>
              </span>
            ) : (
              <a
                href="#contact"
                style={{ color: '#CCD0CF', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Proceed to Contact & Direct Reach</span>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_downward</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
