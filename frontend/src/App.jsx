
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container">

            <Link className="navbar-brand fw-bold fs-4" to="/">
              UrbanCart
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Services">
                    Services
                  </Link>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light mt-5">

        <div className="container py-5">

          <div className="row">

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">UrbanCart</h5>
              <p className="text-secondary">
                Your modern destination for quality products and reliable
                services.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Quick Links</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    className="text-secondary text-decoration-none"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    className="text-secondary text-decoration-none"
                    to="/about"
                  >
                    About
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    className="text-secondary text-decoration-none"
                    to="/Services"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-secondary text-decoration-none"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Contact Us</h5>

              <p className="text-secondary mb-1">
                Email: info@urbancart.com
              </p>

              <p className="text-secondary mb-1">
                Phone: +254 700 000 000
              </p>

              <p className="text-secondary">
                Kenya
              </p>
            </div>

          </div>

          <hr className="border-secondary" />

          <div className="text-center text-secondary">
            <small>
              © {new Date().getFullYear()} UrbanCart. All rights reserved.
            </small>
          </div>

        </div>

      </footer>

    </div>
  )
}

export default App
