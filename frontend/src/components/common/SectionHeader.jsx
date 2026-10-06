import React from 'react';

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow && (
        <div className="section-eyebrow">
          <span className="section-eyebrow-bar"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h3 className="section-title">{title}</h3>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
