import React from 'react';

const NEXT_MAP = {
  hero: { nextId: '#about', label: 'Scroll to Explore // About', icon: 'expand_more' },
  about: { nextId: '#skills', label: 'Next // Skills & Stack', icon: 'expand_more' },
  skills: { nextId: '#experience', label: 'Next // Work History', icon: 'arrow_forward' },
  experience: { nextId: '#projects', label: 'Next // Featured Projects', icon: 'expand_more' },
  projects: { nextId: '#achievements', label: 'Next // Credentials', icon: 'expand_more' },
  achievements: { nextId: '#education', label: 'Next // Education', icon: 'expand_more' },
  education: { nextId: '#contact', label: 'Next // Contact Rohitanshu', icon: 'expand_more' },
  contact: { nextId: '#hero', label: 'Back to Top', icon: 'arrow_upward' }
};

export default function NextPageIndicator({ activeSection = 'hero' }) {
  const currentKey = activeSection || 'hero';
  const target = NEXT_MAP[currentKey] || NEXT_MAP.hero;

  const handleClick = (e) => {
    e.preventDefault();
    const elem = document.querySelector(target.nextId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="next-page-cue"
      aria-label={`Navigate to ${target.label}`}
      title={target.label}
    >
      <span>{target.label}</span>
      <span className="material-symbols-outlined next-cue-icon">{target.icon}</span>
    </button>
  );
}
