import React from 'react';

export default function SectionHeader({ eyebrow, title, description, showArrow = true }) {
  return (
    <div className="editorial-section-header">
      {eyebrow && (
        <div className="editorial-eyebrow">
          <span className="editorial-eyebrow-slash">//</span>
          <span className="editorial-eyebrow-text">{eyebrow}</span>
        </div>
      )}

      <div className="editorial-header-title-row">
        <h3 className="editorial-section-title">{title}</h3>
        {showArrow && (
          <div className="editorial-header-arrow" aria-hidden="true">
            <svg 
              className="editorial-arrow-icon"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        )}
      </div>

      {description && <p className="editorial-section-desc">{description}</p>}
    </div>
  );
}
