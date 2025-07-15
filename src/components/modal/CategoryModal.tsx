import React from "react";
import { SectionProducts } from "../../sections";
import type { ProductImage } from "../../sections";


interface CategoryModalProps {
  categoryName: string;
  images: ProductImage[];
}

const CategoryModal: React.FC<CategoryModalProps> = ({ categoryName, images }) => {
  const formattedName = categoryName.replace(/\s+/g, "");
  const modalId = `productsModal${formattedName}`;
  const carouselId = `productsCarousel${formattedName}`;

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex={-1}
      aria-labelledby={`${modalId}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <span className="fw-bold">
              Nuestra colección de {categoryName}
            </span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <SectionProducts images={images} carouselId={carouselId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
