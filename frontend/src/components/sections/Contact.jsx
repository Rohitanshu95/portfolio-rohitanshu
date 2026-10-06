import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { submitContact } from '../../services/api';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);
    setErrorMessage(null);

    try {
      const response = await submitContact(formData);
      setStatusMessage(response.message || 'Thank you for reaching out! Rohitanshu will get back to you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setErrorMessage(err.message || 'Failed to transmit message. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="deck-card-contact page-screen" id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something together"
          description="Open for full-time AI Engineer opportunities, high-impact enterprise contracts, and cutting-edge GenAI architecture collaborations."
        />

      <div className="contact-grid">
        {/* Left Column: Direct Channels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Email Card */}
          <a
            href={`mailto:${profile?.email || 'rohitanshudhar07@gmail.com'}`}
            className="glass-card"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#202024',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>mail</span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#a1a1aa', display: 'block' }}>
                  Email Directly
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                  {profile?.email || 'rohitanshudhar07@gmail.com'}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#a1a1aa' }}>
              arrow_forward
            </span>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${profile?.phone || '+918144598272'}`}
            className="glass-card"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#202024',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>call</span>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#a1a1aa', display: 'block' }}>
                  Direct Phone
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>
                  {profile?.phone || '+91 8144598272'}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#a1a1aa' }}>
              arrow_forward
            </span>
          </a>

          {/* Location Card */}
          <div
            className="glass-card"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}
          >
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                backgroundColor: '#202024',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>location_on</span>
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#a1a1aa', display: 'block' }}>
                Current Location
              </span>
              <span style={{ fontSize: '1rem', color: '#ffffff' }}>
                {profile?.location || 'Bhubaneswar, Odisha, India'}
              </span>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
            <a
              href={profile?.githubUrl || 'https://github.com/Rohitanshu95'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, padding: '0.75rem', fontSize: '0.8125rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>terminal</span>
              <span>GitHub Profile</span>
            </a>
            <a
              href={profile?.linkedinUrl || 'https://linkedin.com/in/rohitanshu-dhar'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, padding: '0.75rem', fontSize: '0.8125rem' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>hub</span>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Right Column: Controlled Glass Contact Form */}
        <div className="glass-card" style={{ padding: '2rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {statusMessage && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ color: '#ffffff' }}>check_circle</span>
                <span>{statusMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#18181b',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ color: '#ffffff' }}>error</span>
                <span>{errorMessage}</span>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Connor"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="s.connor@enterprise.ai"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject / Project Scope</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="AI Engineer Role / RAG Implementation Discussion"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Details on your team, project requirements, or timelines..."
                required
                className="form-textarea"
                style={{ resize: 'none' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ padding: '0.875rem 1.75rem', fontSize: '0.9375rem', marginTop: '0.25rem' }}
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }}>sync</span>
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
