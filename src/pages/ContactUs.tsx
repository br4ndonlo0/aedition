import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import './ContactUs.css'

const WHATSAPP_NUMBER = '6580682338'
const EMAIL = 'sales@aedition.asia'
const PHONE = '+65 80682338'

export default function ContactUs() {
  const [searchParams] = useSearchParams()
  const solutionParam = searchParams.get('solution')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  // Map solution URL token to dropdown value
  useEffect(() => {
    if (solutionParam) {
      if (['sustainability', 'safety', 'wellbeing'].includes(solutionParam)) {
        setFormData(prev => ({ ...prev, subject: solutionParam }))
      }
    }
  }, [solutionParam])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <main className="page contact-page">
      <header className="contact-header">
        <span className="eyebrow">Connect</span>
        <h1 className="section-title">Let's Discuss Your Space</h1>
        <p className="section-subtitle">
          Have an architectural project or looking to retrofit an existing apartment? Get in touch with our team for technical consultations.
        </p>
      </header>

      <div className="contact-grid">
        {/* Left Column: Info & Channels */}
        <div className="contact-info-col">
          <div className="contact-channel-card">
            <h3>Direct Channels</h3>
            
            <div className="channel-list">
              <a href={`mailto:${EMAIL}`} className="channel-row">
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-label">Email sales</span>
                  <span className="channel-val">{EMAIL}</span>
                </div>
              </a>

              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="channel-row">
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-label">Call direct</span>
                  <span className="channel-val">{PHONE}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-row whatsapp-row"
              >
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-label">Instant WhatsApp</span>
                  <span className="channel-val">Message us online</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-channel-card contact-hours-card">
            <h3>Operating Hours</h3>
            <ul className="hours-list">
              <li>
                <span className="days">Monday — Friday</span>
                <span className="time-range">09:00 — 18:00</span>
              </li>
              <li>
                <span className="days">Saturday</span>
                <span className="time-range">By Appointment Only</span>
              </li>
              <li>
                <span className="days">Sunday &amp; Public Holidays</span>
                <span className="time-range closed-status">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Dynamic Form */}
        <div className="contact-form-col">
          {submitted ? (
            <div className="contact-success-state">
              <div className="success-icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2>Message Transmitted</h2>
              <p>
                Thank you for contacting Aedition Technology. Your request has been queued in our system. A project manager will review your submission and follow up within 24 hours.
              </p>
              <div className="success-receipt">
                <span>Receipt ID:</span>
                <code>AE-{Math.floor(100000 + Math.random() * 900000)}</code>
              </div>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send a Message</h3>
              <p className="form-lead-desc">Fill in details below to help us prepare your consultation plan.</p>

              <div className="form-group">
                <label htmlFor="form-name">Your Name</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="e.g. Johnathan Tan"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email">Email Address</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="e.g. john@architecture.com"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-subject">Inquiry Area</label>
                <select
                  id="form-subject"
                  value={formData.subject}
                  onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                >
                  <option value="general">General Inquiry</option>
                  <option value="sustainability">Sustainability Solutions &amp; Auditing</option>
                  <option value="safety">Home Safety &amp; Private Networks</option>
                  <option value="wellbeing">Adaptive Living &amp; Circadian Well-being</option>
                  <option value="consultation">Bespoke Architect Consultation</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="form-message">Message Details</label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  placeholder="Describe your property requirements, timelines, or product spec questions..."
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
