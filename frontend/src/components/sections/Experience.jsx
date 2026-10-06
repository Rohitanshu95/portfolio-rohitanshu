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
          const nodeColorClass = `timeline-node-${exp.nodeColor || 'secondary'}`;
          const companyColor = exp.companyColor === 'primary' 
            ? 'var(--primary)' 
            : exp.companyColor === 'tertiary' 
            ? 'var(--tertiary)' 
            : 'var(--secondary)';

          return (
            <div key={idx} className="glass-card" style={{ position: 'relative' }}>
              {/* Timeline Marker Node */}
              <div className={`timeline-node ${nodeColorClass}`}></div>

              {/* Header: Role & Period */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{exp.role}</h4>
                  <p style={{ color: companyColor, fontSize: '0.9375rem', marginTop: '2px' }}>
                    {exp.company}
                  </p>
                </div>

                <span
                  className="badge badge-pill"
                  style={{ backgroundColor: 'var(--surface-high)', color: 'var(--on-surface-variant)', fontSize: '0.75rem' }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Highlights List */}
              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--on-surface-variant)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
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
                        color: companyColor,
                        backgroundColor: 'var(--surface-high)'
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
