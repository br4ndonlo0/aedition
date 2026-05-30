import { useSearchParams, Link } from 'react-router-dom'
import './Products.css'

interface SolutionArea {
  id: string
  title: string
  category: 'sustainability' | 'safety' | 'wellbeing'
  tagline: string
  description: string
  features: string[]
  deliverables: string[]
}

const SOLUTIONS: SolutionArea[] = [
  {
    id: 'sustainability',
    title: 'Sustainability & Energy Auditing',
    category: 'sustainability',
    tagline: 'Thermal & Power Optimization',
    description: 'We design and integrate smart adapters for cooling, heating, and power distribution systems. Our integrations continuously calibrate compressor cycles against outdoor humidity and solar gain to minimize grid load.',
    features: [
      'Smart HVAC compressor control integrations',
      'Solar-offset auto scheduling',
      'Standby power line cutoffs',
      'Real-time circuit-level load auditing'
    ],
    deliverables: ['Energy usage audit report', 'Custom hardware adapters', 'Localized control dashboard']
  },
  {
    id: 'safety',
    title: 'Offline-First Home Safety',
    category: 'safety',
    tagline: 'Zero-Cloud Biometrics & Sensors',
    description: 'We construct secure local access networks. By keeping all biometric access logs, sensor data, and video feeds within a physical home server, we eliminate remote cloud vulnerability.',
    features: [
      'AES-256 local encrypted smart locks',
      'Privacy-first local video streaming nodes',
      'Window and door state sensor arrays',
      'Instant local alert push notifications'
    ],
    deliverables: ['Biometric latch installation', 'Private gateway server', 'Secure local network build']
  },
  {
    id: 'wellbeing',
    title: 'Adaptive Living & Well-being',
    category: 'wellbeing',
    tagline: 'Circadian Air & Ambient Controls',
    description: 'We engineer indoor environments that align with human biology. Our systems coordinate humidity levels, particulate air filtration, and lighting warmth to match sunrise/sunset cycles.',
    features: [
      'Circadian amber-to-daylight lighting grids',
      'Automated PM2.5 and humidity air exchange',
      'Acoustic sound masking nodes',
      'Sleep-to-wake climate scripting'
    ],
    deliverables: ['Circadian light tuning profile', 'Filtration integration', 'Adaptive scene programming']
  }
]

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Consultation & Audit',
    desc: 'We analyze your property plans, thermal layout, and current electrical layout to identify efficiency and safety opportunities.'
  },
  {
    step: '02',
    name: 'System Architecture',
    desc: 'Our engineering team maps out a low-draw local Thread network and selects/customizes the necessary hardware adapters.'
  },
  {
    step: '03',
    name: 'Integration & Coding',
    desc: 'We install custom smart nodes, configure your private local gateway hub, and program climate and safety routines.'
  },
  {
    step: '04',
    name: 'Local Calibration',
    desc: 'We perform physical environment tests to verify air flow exchange speed, lighting curves, and offline lock relays.'
  }
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'

  function setCategory(cat: string) {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS
    : SOLUTIONS.filter(s => s.category === activeCategory)

  return (
    <main className="page products-page">
      {/* Header */}
      <header className="products-header">
        <span className="eyebrow">Solutions Portfolio</span>
        <h1 className="section-title">Connected Engineering Services</h1>
        <p className="section-subtitle">
          Instead of generic standalone devices, Aedition Technology builds unified, custom smart networks. We configure local sensors and control loops tailored specifically to your residential or commercial space.
        </p>
      </header>

      {/* Filter Menu */}
      <div className="products-filter-bar">
        <button
          className={`filter-btn ${activeCategory === 'all' ? 'active-filter' : ''}`}
          onClick={() => setCategory('all')}
        >
          All Solutions
        </button>
        <button
          className={`filter-btn ${activeCategory === 'sustainability' ? 'active-filter' : ''}`}
          onClick={() => setCategory('sustainability')}
        >
          Sustainability
        </button>
        <button
          className={`filter-btn ${activeCategory === 'safety' ? 'active-filter' : ''}`}
          onClick={() => setCategory('safety')}
        >
          Safety
        </button>
        <button
          className={`filter-btn ${activeCategory === 'wellbeing' ? 'active-filter' : ''}`}
          onClick={() => setCategory('wellbeing')}
        >
          Well-being
        </button>
      </div>

      {/* Solutions Grid */}
      <section className="products-grid-section">
        <div className="products-grid">
          {filteredSolutions.map(sol => (
            <div key={sol.id} className="product-card">
              <div className="product-meta">
                <span className="product-category-lbl">{sol.category}</span>
              </div>
              <h3 className="product-name">{sol.title}</h3>
              <span className="product-tagline">{sol.tagline}</span>
              <p className="product-desc">{sol.description}</p>
              
              <div className="product-specs-box">
                <h5>Integrated Functions</h5>
                <ul className="product-specs-list">
                  {sol.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="product-specs-box deliverables-box">
                <h5>Typical Deliverables</h5>
                <ul className="product-specs-list deliverables-list">
                  {sol.deliverables.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <Link to={`/contact?solution=${sol.id}`} className="btn btn-primary product-cta">
                  Inquire About This Solution
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="products-comparison-section">
        <div className="section-title-wrapper">
          <span className="eyebrow">Methodology</span>
          <h2 className="section-title">Our Engineering Process</h2>
          <p className="section-subtitle">How we transition a standard space into a highly efficient, safety-encrypted new edition.</p>
        </div>

        <div className="process-flow-grid">
          {PROCESS_STEPS.map(step => (
            <div key={step.step} className="process-step-card">
              <span className="step-num">{step.step}</span>
              <h4>{step.name}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
