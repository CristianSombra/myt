import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { logoNav } from '../../assets/images/Images';
import { FaWhatsapp } from 'react-icons/fa';
import '../../styles';

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleNavbar = () => setExpanded(!expanded);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        setExpanded(false); // Cierra el menú animado
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 0); // Espera a que termine la animación
      }
    }
  };

   useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white sticky-md-top">
      <div className="container-fluid px-lg-5">
        <a className="navbar-brand">
          <img src={logoNav} width={90} alt="M&T Tienda de ropa" />
        </a>

        <div
          className={`custom-menu-button d-md-none ${expanded ? 'open' : ''}`}
          onClick={toggleNavbar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <motion.div
          initial={isMobile ? { height: 0, opacity: 0 } : { height: 'auto', opacity: 1 }}
          animate={isMobile
            ? { height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }
            : { height: 'auto', opacity: 1 }
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`collapse navbar-collapse justify-content-center text-center ${expanded ? 'show' : ''}`}
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-md-4 gap-lg-5 text-center">
            <li className="nav-item">
              <a
                className="nav-link fs-4 d-md-block d-none"
                href="#home"
                onClick={handleLinkClick}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="#products" onClick={handleLinkClick}>
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="#about" onClick={handleLinkClick}>
                Nosotros
              </a>
            </li>
            <li className="nav-item me-0 me-lg-5">
              <a className="nav-link fs-4" href="#contact" onClick={handleLinkClick}>
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
          <a
            href="https://wa.me/5492964694981"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-success d-md-none d-block ms-4"
            style={{ textDecoration: 'none' }}
          >
            <p className='fs-4'>WhatsApp Corporativo</p>
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
