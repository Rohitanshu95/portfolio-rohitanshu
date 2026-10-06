import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', num: '01' },
  { label: 'SKILLS', href: '#skills', num: '02' },
  { label: 'EXPERIENCE', href: '#experience', num: '03' },
  { label: 'PROJECTS', href: '#projects', num: '04' },
  { label: 'CONTACT', href: '#contact', num: '05' }
];

export default function Navbar({ activeSection = 'hero', profile }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDockOpen, setIsDockOpen] = useState(false);
  const dockRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setIsDockOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dismiss upward menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dockRef.current && !dockRef.current.contains(e.target)) {
        setIsDockOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsDockOpen(false);
      }
    };

    if (isDockOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDockOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setIsDockOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayName = profile?.name ? profile.name.split(' ')[0].toUpperCase() : 'ROHITANSHU';
  const activeLabel = activeSection ? activeSection.toUpperCase() : 'HOME';

  return (
    <>
      {/* ================= TOP EDITORIAL NAVBAR (SQUEEZES OUT ON SCROLL) ================= */}
      <header className={`editorial-navbar-wrapper ${isScrolled && !mobileOpen ? 'nav-squeezed' : ''}`}>
        <div className="editorial-navbar-bar">
          {/* Brand / Left */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')} 
            className="editorial-nav-brand"
            title="Rohitanshu Dhar"
          >
            <div className="editorial-nav-badge">RD</div>
            <span className="editorial-nav-brand-text">
              DESIGN BY <strong>{displayName}</strong>
            </span>
          </a>

          {/* Center Navigation Links separated by slashes */}
          <nav className="editorial-nav-links" aria-label="Main Navigation">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <React.Fragment key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`editorial-nav-item ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                  {index < NAV_ITEMS.length - 1 && (
                    <span className="editorial-nav-slash" aria-hidden="true">/</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="editorial-nav-actions">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="editorial-nav-hire-btn"
            >
              HIRE ME
            </a>

            <button
              className="editorial-nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer for Top Navbar */}
        {mobileOpen && (
          <div className="editorial-nav-mobile-drawer">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`editorial-mobile-item ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="editorial-nav-hire-btn editorial-mobile-hire"
            >
              HIRE ME
            </a>
          </div>
        )}
      </header>

      {/* ================= BOTTOM-RIGHT CHATBOT-STYLE DOCKED NAVIGATION ================= */}
      <div 
        ref={dockRef}
        className={`editorial-dock-anchor ${isScrolled ? 'dock-visible' : 'dock-hidden'}`}
      >
        {/* Upward Expanding Menu Sheet (Chatbot-style popover) */}
        {isDockOpen && (
          <div 
            className="editorial-dock-sheet" 
            role="dialog" 
            aria-label="Page navigation menu"
          >
            {/* Sheet Header */}
            <div className="dock-sheet-header">
              <div className="dock-sheet-badge-wrap">
                <div className="dock-sheet-badge">RD</div>
                <div className="dock-sheet-titles">
                  <span className="dock-sheet-sub">NAVIGATION DIRECTORY</span>
                  <strong className="dock-sheet-name">{displayName}</strong>
                </div>
              </div>
              <button 
                type="button"
                className="dock-sheet-close-btn"
                onClick={() => setIsDockOpen(false)}
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Quick Section Directory */}
            <nav className="dock-sheet-nav" aria-label="Quick jump section list">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className={`dock-sheet-item ${activeSection === 'hero' ? 'active' : ''}`}
              >
                <span className="dock-sheet-item-num">00</span>
                <span className="dock-sheet-item-text">HOME // TOP</span>
                <span className="material-symbols-outlined dock-sheet-item-arrow">north</span>
              </a>

              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`dock-sheet-item ${isActive ? 'active' : ''}`}
                  >
                    <span className="dock-sheet-item-num">{item.num}</span>
                    <span className="dock-sheet-item-text">{item.label}</span>
                    <span className="material-symbols-outlined dock-sheet-item-arrow">arrow_outward</span>
                  </a>
                );
              })}
            </nav>

            {/* Sheet Footer Action */}
            <div className="dock-sheet-footer">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="dock-sheet-hire-btn"
              >
                <span>HIRE ME</span>
                <span className="material-symbols-outlined">east</span>
              </a>
            </div>
          </div>
        )}

        {/* Floating Chatbot-Style Launcher Trigger Button */}
        <button
          type="button"
          onClick={() => setIsDockOpen(!isDockOpen)}
          className={`editorial-dock-trigger ${isDockOpen ? 'active' : ''}`}
          aria-expanded={isDockOpen}
          aria-label="Toggle navigation menu"
          title={isDockOpen ? 'Close Menu' : `Menu // Currently in ${activeLabel}`}
        >
          {/* Monogram Badge with Status Dot */}
          <div className="editorial-dock-badge">
            <span>RD</span>
            <span className="editorial-dock-live-dot" aria-hidden="true" />
          </div>

          {/* Current Section / Menu Label */}
          <div className="editorial-dock-info">
            <span className="editorial-dock-cue">MENU</span>
            <span className="editorial-dock-active-tag">{activeLabel}</span>
          </div>

          {/* Expand / Close Indicator */}
          <div className="editorial-dock-icon-box">
            <span className="material-symbols-outlined editorial-dock-icon">
              {isDockOpen ? 'close' : 'unfold_more'}
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
