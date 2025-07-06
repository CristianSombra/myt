import React from "react";
import { motion } from "framer-motion";
import type {AnimateProps} from "../../components";
import { imageContact1 } from "../../assets/images/Images";

const Contact: React.FC<AnimateProps> = ({animate}) => {
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate= { animate ? { opacity: 1 } : { opacity: 0}}
        id="contact"
        className="container py-4 py-lg-5"
        >
            <div className="mb-5">
                <div className="row d-flex justify-content-around">
                    <div className="col-12 col-md-6 col-lg-5 text-center">
                        <h1>Contáctanos</h1>
                        <div className="my-4">
                            <p>Estamos aquí para escucharte. Completa el formulario o escríbenos directamente y nos pondremos en contacto contigo lo antes posible.</p>
                        </div>
                    </div>
                     <div className="col-12 col-md-5 col-lg-4">
                        <img src={imageContact1} className="img-fluid rounded-5 shadow" alt="..."></img>
                    </div>
                </div>
            </div>
               
            
        </motion.section>
    )
}

export default Contact;