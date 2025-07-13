import React from "react";
import { firstSectionImages } from "../../assets/images/Images";

const FirstSectionProducts: React.FC = () => {

  return (
    <div className="container py-5">
      <div className="row">
        {firstSectionImages.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card mb-4">
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
  );
};

export default FirstSectionProducts;
