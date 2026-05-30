import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero">
          <h1>Welcome to aedition</h1>
          <p>Your app description goes here.</p>
          <button className="btn-primary">Get Started</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} aedition. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
