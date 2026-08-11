import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import './Products.css'

interface ProductVariant {
  name: string
  desc: string
}

interface Product {
  id: string
  title: string
  category: 'air-purifier' | 'cleaner-capsule' | 'kitchen-safety'
  categoryLabel: string
  tagline: string
  image: string
  description: string
  features: string[]
  specs: { label: string; value: string }[]
  variants: ProductVariant[]
  badge?: string
}

const PRODUCTS: Product[] = [
  {
    id: 'air-purifier',
    title: 'SauberAir FLAT Air Purifier',
    category: 'air-purifier',
    categoryLabel: 'Air Purifier',
    tagline: "World's Slimmest Wall-Mount HEPA Purifier & Picture Frame",
    image: '/images/sauberair_flat_purifier.png',
    badge: 'Popular',
    description:
      'Designed to seamlessly blend into your interior decor as a picture frame or artwork, the SauberAir FLAT delivers hospital-grade air purification at breathing height while featuring a built-in Bluetooth stereo speaker.',
    features: [
      'Ultra-thin 9cm wall-mount profile (10cm with photo frame)',
      'Hospital-grade HEPA H13/H14 & Activated Carbon filters',
      'Coanda Effect intake & exhaust circulation at breathing height',
      'Built-in high-fidelity Bluetooth speaker',
      'Mobile app for real-time PM2.5 monitoring & sleep mode scheduling'
    ],
    specs: [
      { label: 'Thickness', value: '9cm (10cm framed)' },
      { label: 'Filter Type', value: 'HEPA H13 / H14 + UV-C' },
      { label: 'Noise Level', value: '< 22 dB (Whisper Quiet)' },
      { label: 'Coverage Area', value: 'Up to 45 m²' }
    ],
    variants: [
      {
        name: 'SauberAir FLAT Standard',
        desc: 'Sleek picture frame design with H13 HEPA & Bluetooth audio.'
      },
      {
        name: 'SauberAir FLAT Pro',
        desc: 'Includes H14 HEPA & UV-C Photocatalytic sterilization module.'
      }
    ]
  },
  {
    id: 'cleaner-capsule',
    title: 'Cleanser Capsules',
    category: 'cleaner-capsule',
    categoryLabel: 'Cleaner Capsule',
    tagline: '100% Dissolvable & 97% Biodegradable Cleaning Pods',
    image: '/images/cleanser_capsule.png',
    badge: 'Eco Solution',
    description:
      'Revolutionary zero-waste cleaning capsules. Engineered with water-soluble film technology that dissolves within minutes, eliminating single-use plastic bottles, bulky transport weight, and dosage wastage.',
    features: [
      '100% dissolvable coat with 97% biodegradable active soap formula',
      '2-in-1 Hydrating Body Shower Gel & Hair Shampoo pod',
      '15g Commercial Liquid Pods (1 capsule yields 5–10L solution)',
      'Zero single-use plastic packaging & reduced carbon shipping foot-print',
      'Precise dosage control eliminates chemical overuse and waste'
    ],
    specs: [
      { label: 'Dissolution Time', value: '< 3 Minutes in water' },
      { label: 'Eco Footprint', value: 'Zero Microplastics, 100% Water Soluble' },
      { label: 'Commercial Yield', value: '1 Pod (15g) = 5-10L Liquid' },
      { label: 'Ingredients', value: 'Plant-derived bio-surfactants' }
    ],
    variants: [
      {
        name: 'Seamild Bath & Shower Pod',
        desc: '2-in-1 hydrating shower gel & hair shampoo capsule for personal care.'
      },
      {
        name: 'Commercial Soap Pods',
        desc: 'Concentrated 15g pods for Floor, Surface, and Foam Hand Soap.'
      }
    ]
  },
  {
    id: 'kitchen-safety',
    title: 'e+AutOff Kitchen Safety',
    category: 'kitchen-safety',
    categoryLabel: 'Kitchen Safety',
    tagline: 'Automatic Gas Stove Safety Timer & Auto-Shutoff Device',
    image: '/images/kitchen_safety_autoff.png',
    badge: 'Home Safety',
    description:
      'Intelligent automatic gas cooker shutoff devices engineered to eliminate forgotten stove fires and overcooked food. Retrofits onto your existing gas stove knobs in minutes without altering gas piping.',
    features: [
      'Automatic gas shutoff mechanism prevents kitchen fires',
      '1 to 99-minute customizable cooking countdown timer',
      'Integrated child safety lock and manual override knob',
      'Retrofits existing gas stoves in under 5 minutes without piping changes',
      'Audible countdown alarm before automatic gas isolation'
    ],
    specs: [
      { label: 'Timer Range', value: '1 to 99 Minutes' },
      { label: 'Installation', value: '5-Minute Tool-less Retrofit' },
      { label: 'Power Source', value: 'Long-life Replaceable Batteries' },
      { label: 'Safety standard', value: 'CE Certified Auto-Shutoff' }
    ],
    variants: [
      {
        name: 'e+AutOff CN02',
        desc: 'Compact plug-and-play preset auto-timer knob for home kitchens.'
      },
      {
        name: 'e+AutOff TY09',
        desc: 'Universal premium knob with digital countdown, child lock & custom timing.'
      }
    ]
  }
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  function setCategory(cat: string) {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory)

  return (
    <main className="page products-page">
      {/* Header Section */}
      <header className="products-header">
        <span className="eyebrow">Aedition Products</span>
        <h1 className="section-title">Innovations for Safety, Well-being & Sustainability</h1>
        <p className="section-subtitle">
          Explore our breakthrough consumer and commercial products designed to elevate air quality, eliminate plastic waste, and secure your kitchen automatically.
        </p>
      </header>

      {/* Category Filter Tabs */}
      <div className="products-filter-bar" role="tablist" aria-label="Product categories">
        <button
          role="tab"
          aria-selected={activeCategory === 'all'}
          className={`filter-btn ${activeCategory === 'all' ? 'active-filter' : ''}`}
          onClick={() => setCategory('all')}
        >
          All Products
        </button>
        <button
          role="tab"
          aria-selected={activeCategory === 'air-purifier'}
          className={`filter-btn ${activeCategory === 'air-purifier' ? 'active-filter' : ''}`}
          onClick={() => setCategory('air-purifier')}
        >
          Air Purifier
        </button>
        <button
          role="tab"
          aria-selected={activeCategory === 'cleaner-capsule'}
          className={`filter-btn ${activeCategory === 'cleaner-capsule' ? 'active-filter' : ''}`}
          onClick={() => setCategory('cleaner-capsule')}
        >
          Cleaner Capsule
        </button>
        <button
          role="tab"
          aria-selected={activeCategory === 'kitchen-safety'}
          className={`filter-btn ${activeCategory === 'kitchen-safety' ? 'active-filter' : ''}`}
          onClick={() => setCategory('kitchen-safety')}
        >
          Kitchen Safety
        </button>
      </div>

      {/* Product Showcase Grid */}
      <section className="products-grid-section">
        <div className="products-grid">
          {filteredProducts.map(prod => (
            <article key={prod.id} className="product-card">
              <div className="product-image-wrap">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="product-image"
                  loading="lazy"
                />
                {prod.badge && <span className="product-badge">{prod.badge}</span>}
              </div>

              <div className="product-card-body">
                <div className="product-meta">
                  <span className="product-category-lbl">{prod.categoryLabel}</span>
                </div>
                <h2 className="product-name">{prod.title}</h2>
                <span className="product-tagline">{prod.tagline}</span>
                <p className="product-desc">{prod.description}</p>

                {/* Key Specifications Grid */}
                <div className="product-specs-box">
                  <h5>Technical Specifications</h5>
                  <div className="specs-pill-grid">
                    {prod.specs.map(spec => (
                      <div key={spec.label} className="spec-pill">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="product-specs-box features-box">
                  <h5>Key Features</h5>
                  <ul className="product-specs-list">
                    {prod.features.map(f => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Buttons */}
                <div className="product-actions">
                  <button
                    className="btn btn-secondary product-cta"
                    onClick={() => setSelectedProduct(prod)}
                  >
                    View Model Specs & Details
                  </button>
                  <Link
                    to={`/contact?product=${prod.id}`}
                    className="btn btn-primary product-cta"
                  >
                    Inquire About Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal Detail View */}
      {selectedProduct && (
        <div className="product-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div
            className="product-modal-content"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close details modal"
            >
              ✕
            </button>
            <div className="modal-header">
              <span className="product-category-lbl">{selectedProduct.categoryLabel}</span>
              <h2>{selectedProduct.title}</h2>
              <p className="product-tagline">{selectedProduct.tagline}</p>
            </div>
            <div className="modal-body">
              <div className="modal-img-container">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
              </div>
              <div className="modal-details">
                <h3>Product Overview</h3>
                <p>{selectedProduct.description}</p>

                <h3>Available Models & Variations</h3>
                <div className="variants-list">
                  {selectedProduct.variants.map(v => (
                    <div key={v.name} className="variant-card">
                      <h4>{v.name}</h4>
                      <p>{v.desc}</p>
                    </div>
                  ))}
                </div>

                <h3>Full Specifications</h3>
                <table className="modal-specs-table">
                  <tbody>
                    {selectedProduct.specs.map(s => (
                      <tr key={s.label}>
                        <th>{s.label}</th>
                        <td>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="modal-actions">
                  <Link
                    to={`/contact?product=${selectedProduct.id}`}
                    className="btn btn-primary"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Send Product Inquiry
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

