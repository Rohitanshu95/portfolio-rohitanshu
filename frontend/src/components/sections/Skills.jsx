import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Skills({ skills = [] }) {
  return (
    <section className="container" id="skills" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <SectionHeader
        eyebrow="Technical Arsenal"
        title="Skills & Technologies"
        description="A comprehensive suite of modern neural libraries, deployment runtimes, distributed databases, and developer tooling."
      />

      <div className="skills-grid">
        {skills.map((cat, idx) => {
          const isWide = cat.colSpanDesktop === 2 || cat.category.includes('AI/ML');
          return (
            <div
              key={idx}
              className={`glass-card ${isWide ? 'col-span-2-lg' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '24px',
                      color: cat.iconColor === 'primary' ? 'var(--primary)' : cat.iconColor === 'tertiary' ? 'var(--tertiary)' : 'var(--secondary)'
                    }}
                  >
                    {cat.icon || 'code'}
                  </span>
                  <h4 style={{ fontSize: '1.1875rem', fontWeight: 600 }}>{cat.category}</h4>
                </div>

                {cat.specializationTag && (
                  <span
                    className="badge"
                    style={{
                      backgroundColor: 'var(--surface-highest)',
                      color: 'var(--secondary)',
                      fontSize: '0.625rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}
                  >
                    {cat.specializationTag}
                  </span>
                )}
              </div>

              {/* Skill Chips */}
              <div className="skill-chips-wrap">
                {cat.skills?.map((item, sIdx) => {
                  const dotColor = item.dotColor;
                  return (
                    <span key={sIdx} className="skill-chip">
                      {dotColor && (
                        <span
                          className={`chip-dot chip-dot-${dotColor}`}
                        ></span>
                      )}
                      <span>{item.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
