import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function About({ profile }) {
  const bioParagraphs = profile?.aboutBio || [
    'AI Engineer with 1+ year of hands-on experience in Python, FastAPI, React, and Generative AI, building scalable AI apps with LLMs, RAG, vector databases, prompt engineering, and autonomous agents.',
    'Currently pursuing B.Tech in Computer Science and Engineering from GIET, Bhubaneswar (2022–2026). My engineering philosophy centers on deterministic evaluation over vibecoding: systematically driving down hallucination rates, optimizing TTFT (Time to First Token), and implementing reliable multi-agent orchestration loops for mission-critical client workloads.'
  ];

  const metrics = profile?.metrics || [
    {
      title: 'Production Experience',
      value: '1+ Years',
      description: 'End-to-end GenAI & fullstack apps',
      icon: 'terminal',
      color: 'primary'
    },
    {
      title: 'Commercial Engagement',
      value: '4',
      description: 'Internships & delivered client solutions',
      icon: 'work_history',
      color: 'secondary'
    },
    {
      title: 'Competitive Track Record',
      value: '3',
      description: 'Hackathon podiums & fast prototyping',
      icon: 'emoji_events',
      color: 'tertiary'
    }
  ];

  return (
    <section className="container" id="about" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <SectionHeader
        eyebrow="About Me"
        title={profile?.aboutHeading || 'Engineering Intelligence at Scale'}
      />

      <div className="about-grid">
        {/* Left Column: Bio Narrative */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {bioParagraphs.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: idx === 0 ? '1.125rem' : '1rem',
                  lineHeight: 1.7,
                  color: idx === 0 ? 'var(--on-surface)' : 'var(--on-surface-variant)'
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Micro Metric Pill Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#a1a1aa' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ffffff' }}>verified</span>
              <span>Low-Latency Serving</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#a1a1aa' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ffffff' }}>analytics</span>
              <span>Deterministic Benchmarking</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#a1a1aa' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ffffff' }}>hub</span>
              <span>Multi-Agent Graph Workflows</span>
            </span>
          </div>
        </div>

        {/* Right Column: 3 Bento Stat Cards */}
        <div className="about-bento-column">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bento-card">
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#a1a1aa', display: 'block' }}>
                  {metric.title}
                </span>
                <span style={{ fontFamily: 'var(--font-headline)', fontSize: '2.25rem', fontWeight: 700, color: '#ffffff', display: 'block', lineHeight: 1.1, marginTop: '2px' }}>
                  {metric.value}
                </span>
                <p style={{ fontSize: '0.8125rem', color: '#a1a1aa', marginTop: '4px' }}>
                  {metric.description}
                </p>
              </div>

              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#27272a',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>{metric.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
