import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <img className="footer-logo" src="/aedition-logo.png" alt="Aedition Technology" />
          <p className="footer-desc">
            Improving sustainability, safety, and well-being through thoughtful, connected home solutions.
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Solutions</h4>
          <ul className="footer-links">
            <li><Link to="/products?category=sustainability">Sustainability</Link></li>
            <li><Link to="/products?category=safety">Home Safety</Link></li>
            <li><Link to="/products?category=wellbeing">Well-being</Link></li>
            <li><Link to="/products">All Innovations</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h4 className="footer-title">Newsletter</h4>
          <p className="newsletter-text">Subscribe to receive smart home updates and green technology tips.</p>
          {subscribed ? (
            <div className="newsletter-success">
              <span className="success-icon">✓</span> Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="newsletter-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-secondary newsletter-btn" aria-label="Subscribe">
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>COPYRIGHT &copy; {new Date().getFullYear()} AEDITION TECHNOLOGY &ndash; ALL RIGHTS RESERVED.</p>
          <div className="footer-policy-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
