import React from 'react';

export default function Footer({ profile }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '32rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="editorial-footer-brand">
                {profile?.name ? profile.name.toUpperCase() : 'ROHITANSHU DHAR'}
              </span>
              <span className="badge badge-pill" style={{ fontSize: '0.6875rem', background: '#0E141C', color: '#FFFFFF', border: '1px solid #1E2936' }}>
                PROD-READY AI
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9BA8AB', lineHeight: 1.7 }}>
              Crafted for production-grade GenAI systems, deterministic retrieval pipelines, and autonomous multi-agent loops.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9BA8AB', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#FFFFFF' }}>location_on</span>
              <span>{profile?.location || 'Bhubaneswar, Odisha, India'}</span>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a
              href={profile?.githubUrl || 'https://github.com/Rohitanshu95'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.75rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>terminal</span>
              <span>GitHub</span>
            </a>
            <a
              href={profile?.linkedinUrl || 'https://linkedin.com/in/rohitanshu-dhar'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.75rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>hub</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile?.email || 'rohitanshudhar07@gmail.com'}`}
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.75rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div style={{ height: '1px', width: '100%', background: '#17202B' }}></div>

        {/* Bottom Strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: '#9BA8AB', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          <p>© {currentYear} {profile?.name || 'Rohitanshu Dhar'}. Built with deterministic engineering & editorial aesthetics.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#hero" onClick={scrollToTop} className="editorial-back-to-top">
              <span>Back to Top</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_upward</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
