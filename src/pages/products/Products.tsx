import React from "react";
import { motion } from "framer-motion";
import type {AnimateProps} from "../../components";
import { imageProducts1, imageProducts2, imageProducts3 } from "../../assets/images/Images";

const Services: React.FC<AnimateProps> = ({animate}) => {
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate= { animate ? { opacity: 1 } : { opacity: 0}}
        id="products"
        className="products-container my-5"
        >
            <div className="row d-flex justify-content-center">
                <div className="col-12 text-center mt-4">
                    <h1>Nuestros Productos</h1>
                </div>
                 <div className="col-11 col-md-6 text-center my-4">
                    <p>En M&T te ofrecemos las últimas tendencias en ropa para adolescentes. Estilo, comodidad y personalidad en cada prenda. Descubrí nuestra colección y encontrá el outfit que mejor te representa.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-10 col-md-3 col-lg-2 text-center">
                    <img src={imageProducts1} className="img-fluid rounded-4" alt="..."></img>
                    <h3 className="my-3">Suéteres</h3>
                    <p>Comodidad y estilo para cualquier ocasión.</p>
                </div>
                <div className="col-10 col-md-3 col-lg-2 mx-md-4 mx-lg-5 my-5 text-center">
                    <img src={imageProducts2} className="img-fluid rounded-4" alt="..."></img>
                    <h3 className="my-3">Camisetas</h3>
                    <p>Diseños versátiles para tu día a día.</p>
                </div>
                <div className="col-10 col-md-3 col-lg-2 text-center">
                    <img src={imageProducts3} className="img-fluid rounded-4" alt="..."></img>
                    <h3 className="my-3">Chaquetas</h3>
                    <p>Protección y tendencia en cada detalle.</p>
                </div>
               
            </div>
        </motion.section>
    )
}

export default Services;