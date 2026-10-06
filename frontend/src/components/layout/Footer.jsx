import React from 'react';

export default function Footer({ profile }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '30rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', fontWeight: 600, color: '#CCD0CF' }}>
                {profile?.name || 'Rohitanshu Dhar'}
              </span>
              <span className="badge badge-pill" style={{ fontSize: '0.6875rem', background: '#11212D', color: '#CCD0CF', border: '1px solid #253745' }}>
                v2.6.0
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9BA8AB', lineHeight: 1.6 }}>
              Crafted for production-ready AI systems, scalable RAG architectures, and autonomous agent workflows.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#9BA8AB', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#CCD0CF' }}>location_on</span>
              <span>{profile?.location || 'Bhubaneswar, Odisha, India'}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a
              href={profile?.githubUrl || 'https://github.com/Rohitanshu95'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>terminal</span>
              <span>GitHub</span>
            </a>
            <a
              href={profile?.linkedinUrl || 'https://linkedin.com/in/rohitanshu-dhar'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>hub</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile?.email || 'rohitanshudhar07@gmail.com'}`}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div style={{ height: '1px', width: '100%', background: '#253745' }}></div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: '#9BA8AB', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          <p>© {currentYear} {profile?.name || 'Rohitanshu Dhar'}. Crafted for production-ready AI systems.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#hero" onClick={scrollToTop} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#CCD0CF' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_upward</span>
              <span>Back to Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
