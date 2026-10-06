import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Education({ profile }) {
  const edu = profile?.education || {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'GIET, Bhubaneswar (Affiliated to BPUT)',
    cohort: '2022 – 2026',
    location: 'Bhubaneswar, Odisha',
    coursework: 'Core coursework: Artificial Intelligence, Distributed Systems, Data Structures & Algorithms, Machine Learning, Database Management Systems.'
  };

  return (
    <section className="container" id="education" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <SectionHeader
        eyebrow="Academic Background"
        title="Formal Education"
      />

      <div
        className="glass-card"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          padding: '1.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', maxWidth: '42rem' }}>
          <div
            style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '1rem',
              backgroundColor: '#202024',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
              marginTop: '4px'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>school</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h4 style={{ fontSize: '1.1875rem', fontWeight: 700, color: '#ffffff' }}>{edu.degree}</h4>
            <p style={{ color: '#a1a1aa', fontSize: '0.9375rem' }}>{edu.institution}</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.8125rem', lineHeight: 1.5, marginTop: '4px' }}>
              {edu.coursework}
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2px',
            backgroundColor: '#18181b',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.75rem 1.25rem',
            borderRadius: '0.75rem'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#a1a1aa' }}>
            Enrolled Cohort
          </span>
          <span style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff' }}>{edu.cohort}</span>
          <span style={{ fontSize: '0.75rem', color: '#71717a', fontFamily: 'var(--font-mono)' }}>{edu.location}</span>
        </div>
      </div>
    </section>
  );
}
