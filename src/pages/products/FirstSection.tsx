import React, { useEffect, useState } from "react";
import { firstSectionImages } from "../../assets/images/Images";
import "../../styles";

type ProductImage = {
  src: string;
  title: string;
  description: string;
};

const chunkArray = (arr: ProductImage[], size: number): ProductImage[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );
};

const getChunkSize = (width: number): number => {
  if (width >= 992) return 3; // lg and up
  if (width >= 768) return 2; // md and up
  return 1; // sm and down
};

const FirstSectionProducts: React.FC = () => {
  const [chunkSize, setChunkSize] = useState(getChunkSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(getChunkSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunks = chunkArray(firstSectionImages, chunkSize);

  return (
    <div className="container py-5">
      <div id="productsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunks.map((group, groupIndex) => (
            <div
              className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
              key={groupIndex}
            >
              <div className="row">
                {group.map((item, itemIndex) => (
                  <div
                    className={`col-12 ${
                      chunkSize === 3
                        ? "col-lg-4"
                        : chunkSize === 2
                        ? "col-md-6"
                        : "col-12"
                    }`}
                    key={itemIndex}
                  >
                    <div className="card">
                      <img
                        src={item.src}
                        className="card-img-top"
                        alt={item.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productsCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productsCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default FirstSectionProducts;
