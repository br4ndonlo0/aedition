import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/aedition-logo.png" alt="Aedition Technology" />
      </div>
      <nav className="header-nav">
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/products">PRODUCTS</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
      </nav>
    </header>
  )
}
