import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ activeSection = 'about', profile }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoUrl = profile?.logoUrl || 'https://lh3.googleusercontent.com/aida/AEtjO1UaJPoGFhBGudmb_fhjuyJ8s-WWN8MD6uvKhoNZ40aRaUIGjHJi78-iuGOR_NBz-E4tkepUvb7CaYfmlP4xhtYrHz2QBnsvpIexGBi6Z1knadcgH2lLifvLx1K7yYJuyJN7Xdmgp3RJeJ8J-QPFhrE-pQiJZALVP7sUykJut4aNmTrJ0mFl-abUMcknNr8nqAX0Sn8PTprA49MdkZU1pmfUH7z7hUgqpgP91oHfCJ0imiQH53R0d3WpRvE-';

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="navbar-brand">
            <img 
              src={logoUrl} 
              alt="RD Monogram Logo" 
              className="brand-monogram" 
            />
            <div className="brand-text-col">
              <span className="brand-name">{profile?.name || 'Rohitanshu Dhar'}</span>
              <span className="brand-role">{profile?.role || 'AI Engineer'}</span>
            </div>
          </a>

          {/* RAG & Agents Pill */}
          <div className="badge badge-pill" style={{ display: 'none', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--secondary)' }}></span>
            <span style={{ fontSize: '0.625rem', color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {profile?.specializationPill || 'RAG & Agents'}
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          <a
            href={profile?.resumeUrl || '#download-resume'}
            download
            className="btn btn-glass"
            style={{ display: 'none', padding: '0.4rem 0.875rem', fontSize: '0.75rem' }}
            id="desktop-resume-btn"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            <span>Download Resume</span>
          </a>

          <div className="nav-avatar-icon" title="AI Engineer">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person</span>
          </div>

          <button
            className="nav-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer container">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              style={{ padding: '0.75rem 1rem', fontSize: '0.875rem' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile?.resumeUrl || '#download-resume'}
            download
            className="btn btn-glass"
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
