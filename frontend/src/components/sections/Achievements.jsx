import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Achievements({ achievements = [] }) {
  const hackathons = achievements.filter((a) => a.type === 'hackathon');
  const certifications = achievements.filter((a) => a.type === 'certification');

  return (
    <section className="deck-card-achievements page-screen" id="achievements">
      <div className="container">
        <SectionHeader
          eyebrow="Honors & Recognition"
          title="Hackathons & Credentials"
          description="Demonstrated rapid prototyping under competitive pressure and validated engineering foundations."
        />

      {/* Hackathons Grid */}
      <div className="achievements-grid" style={{ marginBottom: '1.5rem' }}>
        {hackathons.map((item, idx) => {
          return (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
              <div
                style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#141C25',
                  border: '1px solid #283747',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1", color: '#FFFFFF' }}>
                  {item.icon || 'emoji_events'}
                </span>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#9BA8AB',
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {item.badge}
                </span>

                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginTop: '6px', letterSpacing: '-0.01em' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.8125rem', color: '#9BA8AB', marginTop: '6px', lineHeight: 1.6 }}>
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
          gap: '1.25rem',
          padding: '1.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#FFFFFF' }}>
            verified
          </span>
          <div>
            <span style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#FFFFFF', display: 'block' }}>Professional Certifications</span>
            <span style={{ fontSize: '0.8125rem', color: '#9BA8AB' }}>
              Validated domain competencies & algorithmic engineering expertise
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {certifications.map((cert, cIdx) => (
            <div
              key={cIdx}
              className="badge badge-pill"
              style={{
                padding: '0.55rem 1.15rem',
                backgroundColor: '#141C25',
                border: '1px solid #283747',
                color: '#FFFFFF',
                fontSize: '0.8125rem'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  background: '#CCD0CF'
                }}
              ></span>
              <span>{cert.title}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
