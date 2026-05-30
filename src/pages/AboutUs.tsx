import './AboutUs.css'

const VALUES = [
  {
    title: 'Sustainability',
    desc: 'We engineering devices with low energy overhead, leveraging smart sleep states and environment offsets to minimize resource usage.',
  },
  {
    title: 'Safety First',
    desc: 'Privacy and security are non-negotiable. Our localized computing architecture ensures your data stays safe and secure in your home.',
  },
  {
    title: 'Adaptive Utility',
    desc: 'Smart homes should adapt to people, not the other way around. Our products dynamically learn and calibrate schedules automatically.',
  },
  {
    title: 'Minimalist Aesthetic',
    desc: 'High technology should blend invisibly into home architecture. Our physical adapters are designed to be ultra-compact and visually clean.',
  },
] as const

const MILESTONES = [
  {
    year: '2024',
    title: 'Founding & Concept',
    desc: 'Aedition Technology is established in Singapore with the mission to build low-power IoT home adaptations that bridge architecture and technology.',
  },
  {
    year: '2025',
    title: 'EcoHub Core Launch',
    desc: 'Successfully launched the EcoHub smart thermal system, achieving an average of 35% residential air-con power savings in pilot tests.',
  },
  {
    year: '2026',
    title: 'Expansion & Unified App',
    desc: 'Introduced security and circadian lighting modules, consolidating all nodes into a unified local smart home dashboard.',
  },
] as const

export default function AboutUs() {
  return (
    <main className="page about-page">
      {/* Page Header */}
      <header className="about-header">
        <span className="eyebrow">Our Story</span>
        <h1 className="section-title">Crafting the Future of Living</h1>
        <p className="section-subtitle">
          Aedition Technology design and builds connected modules that make modern spaces highly energy-efficient, safe, and comfortable.
        </p>
      </header>

      {/* Mission & Vision split */}
      <section className="about-mission-section">
        <div className="about-mission-grid">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To democratize smart home efficiency by creating adaptable, localized modules that seamlessly integrate into existing buildings, allowing anyone to optimize their environment for lower waste and higher safety.
            </p>
          </div>
          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              A future where homes are conscious ecosystems that dynamically adjust resource usage in sync with natural cycles and human schedules, enhancing wellness while lowering the collective carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values grid */}
      <section className="about-values-section">
        <div className="section-title-wrapper">
          <span className="eyebrow">Values</span>
          <h2 className="section-title">What Drives Our Design</h2>
        </div>
        <div className="values-grid">
          {VALUES.map(val => (
            <div key={val.title} className="value-card">
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="about-timeline-section">
        <div className="section-title-wrapper">
          <span className="eyebrow">Timeline</span>
          <h2 className="section-title">Our Growth Path</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {MILESTONES.map((stone, idx) => (
            <div key={stone.year} className={`timeline-item ${idx % 2 === 0 ? 'left-item' : 'right-item'}`}>
              <div className="timeline-bullet"></div>
              <div className="timeline-card">
                <span className="timeline-year">{stone.year}</span>
                <h4>{stone.title}</h4>
                <p>{stone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
