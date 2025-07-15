import React from "react";
import { motion } from "framer-motion";
import type {AnimateProps} from "../../components";
import { imageProducts1, imageProducts2, imageProducts3, imageProducts4 } from "../../assets/images/Images";

const Producs: React.FC<AnimateProps> = ({animate}) => {
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate= { animate ? { opacity: 1 } : { opacity: 0}}
        id="products"
        className="container products-container mb-5"
        >
            <div className="row d-flex justify-content-center">
                <div className="col-12 text-center mt-4 mt-md-0">
                    <h1>Nuestros Productos</h1>
                </div>
                 <div className="col-12 col-md-11 col-lg-9 text-center my-4">
                    <p>En M&T te ofrecemos las últimas tendencias en ropa para adolescentes. Estilo, comodidad y personalidad en cada prenda. Descubrí nuestra colección y encontrá el outfit que mejor te representa.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-5 col-lg-3 text-center">
                    <img src={imageProducts1} className="img-fluid rounded-4 shadow" alt="..."></img>
                    <h4 className="my-3">Deportivo</h4>
                    <p>Comodidad y estilo para cualquier ocasión.</p>
                    <button
                      type="button"
                      className="btn btn-dark mb-5 mb-md-5"
                      data-bs-toggle="modal"
                      data-bs-target="#productsModal"
                    >
                      Ver colección
                    </button>
                </div>
                <div className="col-10 col-md-5 col-lg-3 text-center">
                    <img src={imageProducts2} className="img-fluid rounded-4 shadow" alt="..."></img>
                    <h4 className="my-3">Oversize</h4>
                    <p>Diseños versátiles para tu día a día.</p>
                </div>
                <div className="col-10 col-md-5 col-lg-3 text-center">
                    <img src={imageProducts3} className="img-fluid rounded-4 shadow" alt="..."></img>
                    <h4 className="my-3">Estampados</h4>
                    <p>Protección y tendencia en cada detalle.</p>
                </div>
                <div className="col-10 col-md-5 col-lg-3 text-center">
                    <img src={imageProducts4} className="img-fluid rounded-4 shadow" alt="..."></img>
                    <h4 className="my-3">Nuestros diseños</h4>
                    <p>Protección y tendencia en cada detalle.</p>
                </div>
            </div>
        </motion.section>
    )
}

export default Producs;