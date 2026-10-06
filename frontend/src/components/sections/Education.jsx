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
        <div className="container edu-container">
          <SectionHeader
            eyebrow="Academic Background"
            title="Formal Education"
            description="Academic foundation spanning Computer Science & Engineering, Intermediate Science, and Matriculation."
          />

          {/* Stepper Navigation Bar */}
          <div className="exp-nav-bar edu-nav-bar">
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
                className="exp-ctrl-btn edu-ctrl-btn"
                aria-label="Previous Milestone"
                title="Previous Milestone"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#CCD0CF' }}>
                  arrow_upward
                </span>
              </button>
              <button
                onClick={goToNext}
                disabled={activeStep === total - 1}
                className="exp-ctrl-btn edu-ctrl-btn"
                aria-label="Next Milestone"
                title="Next Milestone"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#CCD0CF' }}>
                  arrow_downward
                </span>
              </button>
            </div>
          </div>

          {/* Vertical Timeline Spine Line with Node Dots */}
          <div className="edu-timeline-container">
            {/* Continuous vertical spine line */}
            <div className="edu-spine-line">
              <div
                className="edu-spine-line-fill"
                style={{ height: `${fillPercentage}%` }}
              />
            </div>

            {educationList.map((edu, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`edu-timeline-item ${isActive ? 'active' : 'inactive'}`}
                  onClick={() => jumpToStep(idx)}
                  title={`Click to focus milestone ${idx + 1}`}
                >
                  {/* Node Dot directly on the line */}
                  <div
                    className="edu-spine-node"
                    onClick={(e) => {
                      e.stopPropagation();
                      jumpToStep(idx);
                    }}
                    title={`Milestone ${idx + 1}: ${edu.degree}`}
                  />

                  {/* Card Container */}
                  <div className="edu-card-wrapper">
                    <div className="glass-card edu-card">
                      <div className="edu-card-left">
                        <div className="edu-icon-box">
                          <span className="material-symbols-outlined">
                            {edu.icon || (idx === 0 ? 'school' : idx === 1 ? 'science' : 'history_edu')}
                          </span>
                        </div>

                        <div className="edu-info">
                          <div className="edu-title-row">
                            <h4 className="edu-degree-title">
                              {edu.degree}
                            </h4>
                            {edu.score && (
                              <span className="badge badge-pill edu-score-badge">
                                {edu.score}
                              </span>
                            )}
                          </div>
                          <p className="edu-institution-text">{edu.institution}</p>
                          {edu.coursework && (
                            <p className="edu-coursework-text">
                              {edu.coursework}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="edu-cohort-box">
                        <span className="edu-cohort-label">Enrolled Cohort</span>
                        <span className="edu-cohort-val">{edu.cohort}</span>
                        <span className="edu-cohort-loc">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Section Handoff Cue */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.85rem', fontSize: '0.75rem', color: '#9BA8AB', fontFamily: 'var(--font-mono)' }}>
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
