import React from 'react';

export default function About({ profile }) {
  const bioQuote = profile?.editorialQuote || 
    `"${profile?.name || 'Rohitanshu Dhar'} is a talented AI Engineer & Developer, known for his creative prowess and technical expertise. With a passion for crafting visually stunning and functional digital experiences, Rohitanshu combines design aesthetics with coding finesse to bring intelligent systems to life. Specializing in building scalable AI apps with LLMs, RAG, vector databases, prompt engineering, and autonomous agents."`;

  const bioParagraphs = profile?.aboutBio || [
    'AI Engineer with 1+ year of hands-on experience in Python, FastAPI, React, and Generative AI, building scalable AI apps with LLMs, RAG, vector databases, prompt engineering, and autonomous agents.',
    'B.Tech in Computer Science and Engineering from GIET, Bhubaneswar (2022–2026, CGPA: 8.12). My engineering philosophy centers on deterministic evaluation over vibecoding: systematically driving down hallucination rates, optimizing TTFT (Time to First Token), and implementing reliable multi-agent orchestration loops for mission-critical client workloads.'
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
    <section className="deck-card-about editorial-about-section" id="about">
      <div className="container">
        {/* Editorial Top Split (Reference Image Design) */}
        <div className="editorial-about-top-grid">
          {/* Left Column: Giant ABOUT title & Arrow */}
          <div className="editorial-about-title-col">
            <h2 className="editorial-about-huge-title">ABOUT</h2>
            <div className="editorial-about-arrow-wrap">
              <svg 
                className="editorial-about-arrow-svg" 
                viewBox="0 0 64 64" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="16" y1="48" x2="48" y2="16" />
                <polyline points="20 16 48 16 48 44" />
              </svg>
            </div>
          </div>

          {/* Right Column: Editorial Quote Text */}
          <div className="editorial-about-quote-col">
            <p className="editorial-about-quote-text">
              {bioQuote}
            </p>
          </div>
        </div>

        {/* Detailed Bio & Bento Grid below editorial intro */}
        <div className="about-grid editorial-about-subgrid">
          {/* Left Column: Technical Narrative & Micro-metrics */}
          <div className="glass-card editorial-about-glass-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {bioParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: idx === 0 ? '1.0625rem' : '0.9375rem',
                    lineHeight: 1.7,
                    color: idx === 0 ? '#CCD0CF' : '#9BA8AB'
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Micro Metric Pill Bar */}
            <div className="editorial-micro-pills">
              <span className="editorial-micro-pill">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#CCD0CF' }}>verified</span>
                <span>Low-Latency Serving</span>
              </span>
              <span className="editorial-micro-pill">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#CCD0CF' }}>analytics</span>
                <span>Deterministic Benchmarking</span>
              </span>
              <span className="editorial-micro-pill">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#CCD0CF' }}>hub</span>
                <span>Multi-Agent Graph Workflows</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3 Bento Stat Cards */}
          <div className="about-bento-column">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bento-card">
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9BA8AB', display: 'block' }}>
                    {metric.title}
                  </span>
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '2.25rem', fontWeight: 700, color: '#CCD0CF', display: 'block', lineHeight: 1.1, marginTop: '2px' }}>
                    {metric.value}
                  </span>
                  <p style={{ fontSize: '0.8125rem', color: '#9BA8AB', marginTop: '4px' }}>
                    {metric.description}
                  </p>
                </div>

                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.75rem',
                    backgroundColor: '#16222F',
                    border: '1px solid #2D3E4E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CCD0CF'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>{metric.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
