import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoScene from '../components/LogoScene'
import './Home.css'

const PILLARS = [
  {
    title: 'Sustainability',
    description: 'Energy-aware systems that reduce waste without sacrificing comfort.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pillar-icon">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    badge: 'Eco-Smart'
  },
  {
    title: 'Safety',
    description: 'Reliable monitoring and controls designed for peace of mind at home.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pillar-icon">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    badge: 'Secure'
  },
  {
    title: 'Well-being',
    description: 'Environments that adapt to how you live, rest, and recharge.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pillar-icon">
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    badge: 'Adaptive'
  },
] as const

const STATS = [
  { value: '45%', label: 'Average Energy Savings' },
  { value: '< 1s', label: 'Safety System Response' },
  { value: '100%', label: 'Adaptive Air & Climate' },
  { value: '24/7', label: 'Support & Management' },
] as const

const DEMO_MODES = [
  {
    id: 'eco',
    name: 'Eco Mode',
    desc: 'Prioritize low-consumption and solar-offset automation.',
    metrics: [
      { key: 'Active Source', val: 'Solar Grid (95%)' },
      { key: 'Thermostat Target', val: '24.5°C' },
      { key: 'Idle Outlets', val: 'Powered Off' },
      { key: 'Power Saving', val: '-32%' }
    ]
  },
  {
    id: 'safety',
    name: 'Secure Mode',
    desc: 'Lock down entry points and enable high-fidelity perimeter tracking.',
    metrics: [
      { key: 'Door Locks', val: 'Armed & Double-Locked' },
      { key: 'IR Sensors', val: 'Active (Outdoor)' },
      { key: 'Window Seals', val: 'Monitored (OK)' },
      { key: 'Response Alert', val: 'Instant Push Enabled' }
    ]
  },
  {
    id: 'wellbeing',
    name: 'Circadian Mode',
    desc: 'Harmonize indoor lighting color index and humidity levels with biological cycles.',
    metrics: [
      { key: 'Light Spectrum', val: 'Warm Amber (2700K)' },
      { key: 'Humidity Level', val: 'Balanced (55%)' },
      { key: 'Purifier Fan', val: 'Whisper Quiet' },
      { key: 'Sound Masking', val: 'Ocean Surf Stream' }
    ]
  }
]

export default function Home() {
  const scrollY = useRef(0)
  const [activeDemo, setActiveDemo] = useState<'eco' | 'safety' | 'wellbeing'>('eco')

  useEffect(() => {
    function onScroll() {
      scrollY.current = window.scrollY
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const currentDemo = DEMO_MODES.find(d => d.id === activeDemo) || DEMO_MODES[0]

  return (
    <main className="home">
      {/* Hero split layout */}
      <section className="home-hero-section" aria-label="Aedition Hero">
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <span className="eyebrow">Smart Home Innovation</span>
            <h1 className="home-hero-title">
              Adding <span className="text-accent">New Edition</span> Technology starts here.
            </h1>
            <p className="home-hero-lead">
              Improving sustainability, safety, and well-being through thoughtful, connected home solutions tailored to modern spaces.
            </p>
            <div className="home-hero-actions">
              <Link to="/products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Consult an Architect
              </Link>
            </div>
          </div>
          <div className="home-hero-media">
            <LogoScene scrollY={scrollY} />
            <span className="home-scroll-hint">Scroll down to explore</span>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="home-stats-section">
        <div className="container">
          <div className="home-stats-grid">
            {STATS.map(stat => (
              <div key={stat.label} className="stat-card">
                <span className="stat-val">{stat.value}</span>
                <span className="stat-lbl">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro details */}
      <section className="home-intro-details">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="eyebrow">The Core Foundation</span>
            <h2 className="section-title">Designed for Living, Engineered for Tomorrow</h2>
            <p className="section-subtitle">
              We create smart hubs that integrate with your daily routines, providing high-efficiency controls while maintaining a beautiful aesthetic.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="home-pillars-section">
        <div className="container">
          <div className="home-pillars-grid">
            {PILLARS.map(({ title, description, icon, badge }) => (
              <div key={title} className="pillar-card">
                <div className="pillar-icon-box">{icon}</div>
                <span className="pillar-badge">{badge}</span>
                <h3 className="pillar-title">{title}</h3>
                <p className="pillar-desc">{description}</p>
                <Link to="/products" className="pillar-link">
                  Learn about solutions <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Showcase Dashboard */}
      <section className="home-showcase-section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="eyebrow">Interactive Hub</span>
            <h2 className="section-title">Experience the Ecosystem</h2>
            <p className="section-subtitle">
              Click the modes below to see how our unified smart home adapters regulate efficiency, security, and climate variables in real-time.
            </p>
          </div>

          <div className="showcase-interactive-panel">
            <div className="showcase-menu">
              {DEMO_MODES.map(mode => (
                <button
                  key={mode.id}
                  className={`showcase-tab-btn ${activeDemo === mode.id ? 'active-tab' : ''}`}
                  onClick={() => setActiveDemo(mode.id as any)}
                >
                  <span className="tab-bullet"></span>
                  {mode.name}
                </button>
              ))}
            </div>

            <div className="showcase-content">
              <div className="showcase-info">
                <h3>{currentDemo.name} Settings</h3>
                <p>{currentDemo.desc}</p>
              </div>
              <div className="showcase-dashboard">
                <div className="dashboard-grid">
                  {currentDemo.metrics.map(met => (
                    <div key={met.key} className="dashboard-card">
                      <span className="dashboard-key">{met.key}</span>
                      <span className="dashboard-val">{met.val}</span>
                    </div>
                  ))}
                </div>
                <div className="dashboard-pulse-footer">
                  <span className="pulse-dot"></span> System Live &amp; Optimizing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="home-cta-section">
        <div className="container home-cta-box">
          <h2 className="home-cta-heading">Ready to bring your space into a new edition?</h2>
          <p className="home-cta-subtext">
            Consult with our automation architects today to audit your home's energy performance and design a custom network.
          </p>
          <div className="home-cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Book a consultation
            </Link>
            <Link to="/about" className="btn btn-ghost">
              Learn our process
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
