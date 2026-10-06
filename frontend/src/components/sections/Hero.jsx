import React from 'react';

export default function Hero({ profile }) {
  const avatarUrl = profile?.avatarUrl && !profile.avatarUrl.includes('googleusercontent') 
    ? profile.avatarUrl 
    : '/profile.jpg';

  return (
    <section className="hero-page-screen hero-section" id="hero">
      {/* Ambient Radial Glows */}
      <div className="ambient-glow-wrapper">
        <div className="glow-orb glow-orb-primary" style={{ top: '-8rem', left: '20%' }}></div>
        <div className="glow-orb glow-orb-secondary" style={{ top: '12rem', right: '5%' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid">
          {/* Left Column: Copy & Actions */}
          <div className="hero-left">
            {/* Live Status Pill */}
            <div className="live-indicator">
              <span className="pulsing-dot"></span>
              <span>{profile?.statusBadge || 'Available for AI Engineering Roles'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              {profile?.headlinePrefix || "Hi, I'm"}{' '}
              <span className="text-gradient">
                {profile?.headlineHighlight || profile?.name || 'Rohitanshu Dhar'}
              </span>
            </h1>

            {/* Subheadline */}
            <h2 className="hero-subheadline">
              {profile?.subheadline || 'AI Engineer building production-ready GenAI, RAG & AI agent applications'}
            </h2>

            {/* Bio Summary */}
            <p className="hero-summary">
              {profile?.summary || 'Specializing in context-aware retrieval pipelines, autonomous multi-agent systems, and low-latency LLM serving with deterministic benchmarks.'}
            </p>

            {/* Action Buttons */}
            <div className="hero-btn-row">
              <a href="#projects" className="btn btn-primary btn-icon-arrow">
                <span>View Projects</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Activity Strip */}
            <div className="hero-social-strip">
              <a
                href={profile?.githubUrl || 'https://github.com/Rohitanshu95'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span>
                <span>github.com/Rohitanshu95</span>
              </a>

              <a
                href={profile?.linkedinUrl || 'https://linkedin.com/in/rohitanshu-dhar'}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>share</span>
                <span>linkedin.com/in/rohitanshu-dhar</span>
              </a>

              <div className="badge badge-pill" style={{ color: '#CCD0CF', background: '#11212D', border: '1px solid #253745' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>near_me</span>
                <span>{profile?.location || 'Bhubaneswar, Odisha'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Cutout Photo */}
          <div className="hero-right">
            <div className="hero-unbounded-photo-wrapper">
              <img
                src="/profile-cutout.png"
                alt={`${profile?.name || 'Rohitanshu Dhar'} - AI Engineer`}
                className="hero-unbounded-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
