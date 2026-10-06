import React from 'react';
import SectionHeader from '../common/SectionHeader';

export default function Projects({ projects = [] }) {
  return (
    <section className="deck-card-projects page-screen" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Work"
          title="Production & Autonomous AI Systems"
          description="Selected engineering builds spanning context-rich agent loops, document evaluation engines, and edge-optimized local intelligence."
        />

      <div className="projects-grid">
        {projects.map((proj, idx) => {
          return (
            <div key={idx} className="glass-card project-card">
              {/* Card Body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    className="badge badge-pill"
                    style={{ color: '#ffffff', backgroundColor: '#18181b', border: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '0.6875rem' }}
                  >
                    {proj.categoryBadge}
                  </span>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#ffffff' }}>
                    {proj.icon || 'code'}
                  </span>
                </div>

                {/* Project Title */}
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  {proj.title}
                </h4>

                {/* Description */}
                <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: 1.6 }}>
                  {proj.description}
                </p>

                {/* Tech Tags */}
                {proj.tags && proj.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.5rem' }}>
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="badge"
                        style={{
                          backgroundColor: '#18181b',
                          color: '#e4e4e7',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.6875rem'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="project-btn-row">
                <a
                  href={proj.githubUrl || 'https://github.com/Rohitanshu95'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary project-btn"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span>
                  <span>GitHub</span>
                </a>

                <a
                  href={proj.demoUrl || '#contact'}
                  className="btn btn-primary project-btn"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
