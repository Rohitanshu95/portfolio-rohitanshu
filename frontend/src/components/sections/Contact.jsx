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

  const email = profile?.email || 'rohitanshudhar07@gmail.com';
  const phone = profile?.phone || '+91 8144598272';
  const location = profile?.location || 'Bhubaneswar, Odisha, India';

  return (
    <section className="deck-card-contact page-screen contact-section-responsive" id="contact">
      <div className="container contact-container-responsive">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something together"
          description="Open for full-time AI Engineer opportunities, high-impact enterprise contracts, and cutting-edge GenAI architecture collaborations."
        />

        <div className="contact-grid">
          {/* Left Column: Direct Channels */}
          <div className="contact-channels-col">
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="glass-card contact-channel-card"
            >
              <div className="contact-channel-info-row">
                <div className="contact-channel-icon-box">
                  <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#FFFFFF' }}>mail</span>
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">Email Directly</span>
                  <span className="contact-channel-value">{email}</span>
                </div>
              </div>
              <span className="material-symbols-outlined contact-channel-arrow" style={{ fontSize: '20px' }}>
                arrow_forward
              </span>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="glass-card contact-channel-card"
            >
              <div className="contact-channel-info-row">
                <div className="contact-channel-icon-box">
                  <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#FFFFFF' }}>call</span>
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">Direct Phone</span>
                  <span className="contact-channel-value">{phone}</span>
                </div>
              </div>
              <span className="material-symbols-outlined contact-channel-arrow" style={{ fontSize: '20px' }}>
                arrow_forward
              </span>
            </a>

            {/* Location Card */}
            <div className="glass-card contact-channel-card">
              <div className="contact-channel-info-row">
                <div className="contact-channel-icon-box">
                  <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#FFFFFF' }}>location_on</span>
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">Current Location</span>
                  <span className="contact-channel-value">{location}</span>
                </div>
              </div>
            </div>

            {/* Social Profiles Row */}
            <div className="contact-social-row">
              <a
                href={profile?.githubUrl || 'https://github.com/Rohitanshu95'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-social-btn"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>terminal</span>
                <span>GitHub Profile</span>
              </a>
              <a
                href={profile?.linkedinUrl || 'https://linkedin.com/in/rohitanshu-dhar'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-social-btn"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>hub</span>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Controlled Glass Contact Form */}
          <div className="glass-card contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form-body">
              {statusMessage && (
                <div className="contact-alert-box contact-alert-success">
                  <span className="material-symbols-outlined" style={{ color: '#6ee7b7' }}>check_circle</span>
                  <span>{statusMessage}</span>
                </div>
              )}

              {errorMessage && (
                <div className="contact-alert-box contact-alert-error">
                  <span className="material-symbols-outlined" style={{ color: '#fca5a5' }}>error</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="contact-form-row">
                <div className="form-group contact-form-field">
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

                <div className="form-group contact-form-field">
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
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary contact-submit-btn"
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
