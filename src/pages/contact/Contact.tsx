import React from "react";
import { motion } from "framer-motion";
import type { AnimateProps } from "../../components";
import { imageContact1 } from "../../assets/images/Images";
import { FormContact } from "../../components";
import "../../styles";

const Contact: React.FC<AnimateProps> = ({ animate }) => {
    const handleFormSuccess = () => {
        // Aquí puedes agregar lógica adicional después de un envío exitoso
        console.log("Mensaje enviado correctamente");
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            id="contact"
            className="container py-4 py-lg-1"
        >
            <div className="mb-5 mt-2 mt-md-0">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-9 text-center">
                        <h1>Contáctanos</h1>
                        <div className="my-4">
                            <p>
                                Estamos aquí para escucharte. Completa el formulario o escríbenos directamente y nos pondremos en contacto contigo lo antes posible.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-around my-3">
                    <div className="col-12 col-md-7 col-lg-5 order-2 order-md-1 text-center d-flex">
                        <FormContact onSuccess={handleFormSuccess} />
                    </div>
                    <div className="col-10 col-md-5 col-lg-4 order-1 order-md-2 mb-5 mb-md-0">
                        <img
                            src={imageContact1}
                            className="img-fluid rounded-5 shadow col-md-12 col-lg-11"
                            alt="Contact"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
