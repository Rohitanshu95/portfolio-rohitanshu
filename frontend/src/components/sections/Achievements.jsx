import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Achievements({ achievements = [] }) {
  const hackathons = achievements.filter((a) => a.type === 'hackathon');
  const certifications = achievements.filter((a) => a.type === 'certification');

  return (
    <section className="container" id="achievements" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <SectionHeader
        eyebrow="Honors & Recognition"
        title="Hackathons & Credentials"
        description="Demonstrated rapid prototyping under competitive pressure and validated engineering foundations."
      />

      {/* Hackathons Grid */}
      <div className="achievements-grid" style={{ marginBottom: '1.5rem' }}>
        {hackathons.map((item, idx) => {
          return (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#202024',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1" }}>
                  {item.icon || 'emoji_events'}
                </span>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#a1a1aa',
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {item.badge}
                </span>

                <h4 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', marginTop: '4px', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Certifications Strip */}
      <div
        className="glass-card"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#ffffff' }}>
            verified
          </span>
          <div>
            <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', display: 'block' }}>Professional Certifications</span>
            <span style={{ fontSize: '0.8125rem', color: '#a1a1aa' }}>
              Validated domain competencies & algorithmic expertise
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {certifications.map((cert, cIdx) => (
            <div
              key={cIdx}
              className="badge"
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.75rem',
                backgroundColor: '#18181b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '0.8125rem'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#ffffff'
                }}
              ></span>
              <span>{cert.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
