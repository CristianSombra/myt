import React from "react";
import { motion } from "framer-motion";
import { imageProducts1, imageProducts2, imageProducts3, imageProducts4 } from "../../assets/images/Images";
import { firstSectionImages, secondSectionImages, thirdSectionImages, fourthSectionImages } from "../../assets/images/Images";
import CategoryModal from "../../components/modal/CategoryModal";
import "../../styles";

const categories = [
  {
    name: "Nuestros Buzos",
    image: imageProducts1,
    description: "Comodidad y estilo.",
    collection: firstSectionImages
  },
  {
    name: "Remeras Oversize",
    image: imageProducts2,
    description: "Diseños versátiles.",
    collection: secondSectionImages
  },
  {
    name: "Estampados",
    image: imageProducts3,
    description: "Tendencia en cada detalle.",
    collection: thirdSectionImages
  },
  {
    name: "Nuestros diseños",
    image: imageProducts4,
    description: "Diseños originales y a medida.",
    collection: fourthSectionImages
  }
];

const Products: React.FC<{ animate: boolean }> = ({ animate }) => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        id="products"
        className="container products-container mb-5"
      >
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center mt-4 mt-md-0">
              <h1>Nuestros Productos</h1>
          </div>
          <div className="col-12 col-md-11 col-lg-9 text-center my-4">
            <p>Descubrí en M&T prendas con diseños propios y en tendencia, pensadas para expresarte con estilo, comodidad, personalidad y un toque relajado. Elegí el outfit que mejor va con vos.</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {categories.map((category, index) => {
            const formattedName = category.name.replace(/\s+/g, "");
            const modalId = `productsModal${formattedName}`;
            return (
              <div
                className="col-10 col-md-5 col-lg-3 text-center category-card"
                key={index}
              >
                <img
                  src={category.image}
                  className="img-fluid rounded-4 shadow"
                  alt={category.name}
                />
                <h4 className="mt-3 mb-2">{category.name}</h4>
                <p>{category.description}</p>
                <button
                  type="button"
                  className="btn btn-dark border-dark hover-btn mb-5 mb-md-5"
                  data-bs-toggle="modal"
                  data-bs-target={`#${modalId}`}
                >
                  Ver colección
                </button>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Renderizar todos los modales */}
      {categories.map((category, index) => (
        <CategoryModal
          key={index}
          categoryName={category.name}
          images={category.collection}
        />
      ))}
    </>
  );
};

export default Products;