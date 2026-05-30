import { NavLink, Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="header-logo">
          <img src="/aedition-logo.png" alt="Aedition Technology" />
        </Link>
        <nav className="header-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="header-actions">
          <Link to="/contact" className="btn btn-ghost header-cta-btn">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  )
}
