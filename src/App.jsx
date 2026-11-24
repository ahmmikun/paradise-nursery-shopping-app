import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import './App.css'

function App() {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow">Grow something beautiful</p>
            <h1>Paradise Nursery</h1>
            <p className="hero-copy">
              Hand-picked houseplants, delivered to your door. Find the perfect green
              companion for every corner of your home.
            </p>
            <div className="hero-actions">
              <Link to="/plants" className="btn btn-primary btn-large">
                Get Started
              </Link>
              <a href="#about" className="btn btn-ghost btn-large">
                Our Story
              </a>
            </div>
            <div className="hero-highlights">
              <span>🌿 24 unique plants</span>
              <span>🚚 Fast, careful delivery</span>
              <span>💚 Lifetime care tips</span>
            </div>
          </div>
        </section>

        <AboutUs />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Paradise Nursery. Grown with love.</span>
          <Link to="/plants">Browse the collection →</Link>
        </div>
      </footer>
    </div>
  )
}

export default App
