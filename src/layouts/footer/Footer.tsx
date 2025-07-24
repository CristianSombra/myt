import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../../styles';

const Footer: React.FC = () => {
  return (
    <div className="container-fluid">

      <footer className="bg-white text-center py-4">
        <hr className="border border-secondary opacity-10 mb-3 mb-md-4"/>
        <div className="row d-flex justify-content-center my-3 mt-4 mx-md-auto">
          <div className="col-3 col-md-1 mb-3">
          <a
            href="https://www.facebook.com/cristiansombra87"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            >
            <FontAwesomeIcon icon={faFacebook}  style={{ fontSize: '40px' }}  />
          </a>
          </div>
          <div className="col-3 col-md-1">
            <a
              href="https://www.instagram.com/cristiansombra87/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              >
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '40px' }}  />
            </a>
          </div>
        </div>
        <div className="small text-muted">
          M&T - Todos los derechos reservados © 2025
        </div>
      </footer>
    </div>
  );
};

export default Footer;
