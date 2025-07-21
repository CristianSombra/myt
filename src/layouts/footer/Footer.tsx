import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../../styles';

const Footer: React.FC = () => {
  return (
    <div className="container-fluid">

      <footer className="bg-white text-center py-4">
        <hr className="border border-secondary opacity-10 mb-5"/>
        <div className="mb-3">
          <a
            href="https://www.facebook.com/cristiansombra87"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook me-3"
            >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/cristiansombra87/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="small text-muted">
          M&T - Todos los derechos reservados © 2025
        </div>
      </footer>
    </div>
  );
};

export default Footer;
