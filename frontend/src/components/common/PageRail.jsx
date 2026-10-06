import React from 'react';

const SECTIONS = [
  { id: 'hero', num: '01', label: 'Home' },
  { id: 'about', num: '02', label: 'About' },
  { id: 'skills', num: '03', label: 'Skills' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'projects', num: '05', label: 'Projects' },
  { id: 'achievements', num: '06', label: 'Honors' },
  { id: 'education', num: '07', label: 'Education' },
  { id: 'contact', num: '08', label: 'Contact' }
];

export default function PageRail({ activeSection = 'hero' }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="page-rail" aria-label="Page section navigation">
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={(e) => handleClick(e, sec.id)}
            className={`rail-dot-btn ${isActive ? 'active' : ''}`}
            aria-label={`Jump to ${sec.label}`}
          >
            <span className="rail-dot" />
            <span className="rail-tooltip">
              {sec.num} // {sec.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
