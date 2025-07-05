import React from "react"
import '../../styles';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start text-muted border-top">
      <div className="container text-center text-md-start py-4">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase">Punto Sur Digital</h5>
            <p>
              Diseño web moderno, limpio y funcional. Servicios digitales adaptados a tus necesidades.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-3">Navegación</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-reset">Home</a></li>
              <li><a href="#about" className="text-reset">About</a></li>
              <li><a href="#services" className="text-reset">Services</a></li>
              <li><a href="#contact" className="text-reset">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold mb-3">Seguinos</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-reset">Instagram</a></li>
              <li><a href="#" className="text-reset">Facebook</a></li>
              <li><a href="#" className="text-reset">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-light border-top small">
        © {new Date().getFullYear()} Punto Sur Digital. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
