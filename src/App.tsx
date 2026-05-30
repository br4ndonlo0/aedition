import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App
