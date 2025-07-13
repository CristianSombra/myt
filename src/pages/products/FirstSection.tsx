import React from "react";
import { imageProducts1 } from "../../assets/images/Images";

const FirstSectionProducts: React.FC = () => {

  return (
    <div className="container py-5">
      
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <img
              src={imageProducts1}
              className="card-img-top"
              alt="Prenda 1"
            />
            <div className="card-body">
              <h5 className="card-title">Prenda 1</h5>
              <p className="card-text">Descripción breve de la prenda.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FirstSectionProducts;
