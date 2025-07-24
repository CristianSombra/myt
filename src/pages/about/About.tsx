import React from "react";
import { motion } from "framer-motion";
import type { AnimateProps } from "../../components";
import { imageAbout1 } from "../../assets/images/Images";
import { ShoppingBag, Sparkles, GlobeLock } from "lucide-react";
import "../../styles";


const features = [
  {
    icon: <ShoppingBag size={40} color="#CDA274" className="mb-3" />,
    title: "Estilo para Cada Momento",
    description:
      "Outfits versátiles para la escuela, la uni o salir con amigos. Siempre a la moda, siempre vos."
  },
  {
    icon: <Sparkles size={40} color="#CDA274" className="mb-3" />,
    title: "Destaca tu Personalidad",
    description:
      "Nuestra ropa no solo es tendencia, es una forma de expresión. Crea looks que hablen por vos."
  },
  {
    icon: <GlobeLock size={40} color="#CDA274" className="mb-3" />,
    title: "Comunicación 100% Segura",
    description:
      "Hablá con nosotros solo por nuestras redes oficiales o WhatsApp corporativo. Pagá tu prenda al recibirla, sin adelantos ni sorpresas."
  }
];

const About: React.FC<AnimateProps> = ({ animate }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={animate ? { opacity: 1 } : { opacity: 0 }}
      id="about"
      className="about-container my-5"
    >
      <div className="row d-flex justify-content-center">
        <div className="col-12 text-center mt-4 mt-md-0">
          <h1>Sobre Nosotros</h1>
        </div>
        <div className="col-11 col-md-9 col-lg-7 text-center my-4">
          <p>
            En M&T te ofrecemos las últimas tendencias en ropa para adolescentes.
            Estilo, comodidad y personalidad en cada prenda. Descubrí nuestra colección y
            encontrá el outfit que mejor te representa.
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-11 col-md-8 col-lg-6 text-center my-3">
          <img
            src={imageAbout1}
            className="img-fluid rounded-4 shadow"
            alt="Sobre Nosotros"
          />
        </div>
      </div>
      <div className="container py-4">
        <div className="row d-flex justify-content-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-8 col-md-4 col-lg-3 mx-lg-4 mb-4"
            >
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  {feature.icon}
                  <h5
                    className="card-title fw-bold"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {feature.title}
                  </h5>
                  <p
                    className="card-text text-muted d-none d-md-block"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
