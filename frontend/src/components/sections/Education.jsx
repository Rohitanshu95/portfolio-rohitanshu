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
              backgroundColor: 'var(--surface-high)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--secondary)',
              flexShrink: 0,
              marginTop: '4px'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>school</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h4 style={{ fontSize: '1.1875rem', fontWeight: 600 }}>{edu.degree}</h4>
            <p style={{ color: 'var(--secondary)', fontSize: '0.9375rem' }}>{edu.institution}</p>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.8125rem', lineHeight: 1.5, marginTop: '4px' }}>
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
            backgroundColor: 'var(--surface-high)',
            padding: '0.75rem 1.25rem',
            borderRadius: '0.75rem'
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--secondary)' }}>
            Enrolled Cohort
          </span>
          <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--on-surface)' }}>{edu.cohort}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', fontFamily: 'var(--font-mono)' }}>{edu.location}</span>
        </div>
      </div>
    </section>
  );
}
