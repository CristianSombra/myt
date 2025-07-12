import { useState } from 'react'
import { logoNav } from '../../assets/images/Images'
import { FaWhatsapp } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleNavbar = () => setExpanded(!expanded)
  const closeNavbar = () => setExpanded(false)

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white sticky-md-top">
      <div className="container-fluid px-lg-5">
        <a className="navbar-brand">
          <img src={logoNav} width={90} alt="M&T Tienda de ropa" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${expanded ? ' show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-md-4 gap-lg-5 text-center">
            <li className="nav-item">
              <a className="nav-link fs-4 d-md-block d-none" href="#home" onClick={closeNavbar}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="#products" onClick={closeNavbar}>
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="#about" onClick={closeNavbar}>
                Nosotros
              </a>
            </li>
            <li className="nav-item me-0 me-lg-5">
              <a className="nav-link fs-4" href="#contact" onClick={closeNavbar}>
                Contacto
              </a>
            </li>
          </ul>
           <a
            href="https://wa.me/5492964694981"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-success d-md-block d-none ms-4"
          >
            <FaWhatsapp size={45} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
