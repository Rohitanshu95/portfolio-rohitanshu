import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Experience({ experiences = [] }) {
  return (
    <section className="container" id="experience" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <SectionHeader
        eyebrow="Work History"
        title="Professional Experience"
        description="A chronological timeline of production deployments, enterprise engineering, and AI consulting roles."
      />

      <div className="timeline-container">
        {/* Continuous Gradient Spine */}
        <div className="timeline-spine"></div>

        {experiences.map((exp, idx) => {
          return (
            <div key={idx} className="glass-card" style={{ position: 'relative' }}>
              {/* Timeline Marker Node */}
              <div className="timeline-node timeline-node-primary"></div>

              {/* Header: Role & Period */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>{exp.role}</h4>
                  <p style={{ color: '#a1a1aa', fontSize: '0.9375rem', marginTop: '2px' }}>
                    {exp.company}
                  </p>
                </div>

                <span
                  className="badge badge-pill"
                  style={{ backgroundColor: '#18181b', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.12)', fontSize: '0.75rem' }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Highlights List */}
              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#a1a1aa', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {exp.highlights?.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              {exp.techStack && exp.techStack.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '1rem', marginTop: '0.5rem' }}>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="badge"
                      style={{
                        fontSize: '0.6875rem',
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
