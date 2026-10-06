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
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#253745',
                  border: '1px solid #4A5C6A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CCD0CF'
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
                    color: '#9BA8AB',
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {item.badge}
                </span>

                <h4 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#CCD0CF', marginTop: '4px' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.8125rem', color: '#9BA8AB', marginTop: '4px', lineHeight: 1.5 }}>
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
          <span className="material-symbols-outlined" style={{ fontSize: '28px', color: '#CCD0CF' }}>
            verified
          </span>
          <div>
            <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#CCD0CF', display: 'block' }}>Professional Certifications</span>
            <span style={{ fontSize: '0.8125rem', color: '#9BA8AB' }}>
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
                backgroundColor: '#11212D',
                border: '1px solid #253745',
                color: '#CCD0CF',
                fontSize: '0.8125rem'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
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
