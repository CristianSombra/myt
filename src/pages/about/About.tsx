import React from "react";
import { motion } from "framer-motion";
import type {AnimateProps} from "../../components";
import { imageAbout1 } from "../../assets/images/Images";

const About: React.FC<AnimateProps> = ({animate}) => {
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate= { animate ? { opacity: 1 } : { opacity: 0}}
        id="about"
        className="about-container my-5"
        >
           <div className="row d-flex justify-content-center">
                <div className="col-12 text-center mt-5">
                    <h1>Sobre Nosotros</h1>
                </div>
                 <div className="col-11 col-md-8 col-lg-7 text-center my-4">
                    <p>En M&T te ofrecemos las últimas tendencias en ropa para adolescentes. Estilo, comodidad y personalidad en cada prenda. Descubrí nuestra colección y encontrá el outfit que mejor te representa.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6 col-lg-5 text-center my-5">
                    <img src={imageAbout1} className="img-fluid rounded-4 shadow" alt="..."></img>
                </div>           
            </div>
        </motion.section>
    )
}

export default About;