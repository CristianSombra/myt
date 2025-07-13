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
        className="container py-4 py-lg-1"
        >
            <div className="mb-5 mt-2 mt-md-0">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-9 text-center">
                        <h1>Contáctanos</h1>
                        <div className="my-4">
                            <p>Estamos aquí para escucharte. Completa el formulario o escríbenos directamente y nos pondremos en contacto contigo lo antes posible.</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-around my-3">
                    <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1 text-center">                    
                        <form>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label visually-hidden">
                              Nombre completo
                            </label>
                            <input
                              type="text"
                              className="form-control border-0 border-bottom rounded-0 shadow-none"
                              id="name"
                              placeholder="Nombre completo"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label visually-hidden">
                              Celular
                            </label>
                            <input
                              type="tel"
                              className="form-control border-0 border-bottom rounded-0 shadow-none"
                              id="phone"
                              placeholder="Celular"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label visually-hidden">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control border-0 border-bottom rounded-0 shadow-none"
                              id="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="message" className="form-label visually-hidden">
                              Mensaje
                            </label>
                            <textarea
                              className="form-control border-0 border-bottom rounded-0 shadow-none"
                              id="message"
                              rows={10}
                              placeholder="Mensaje"
                              required
                            ></textarea>
                          </div>
                          <div className="text-end">
                            <button
                              type="submit"
                              className="btn btn-outline-dark px-4 rounded-pill"
                            >
                              Enviar
                            </button>
                          </div>
                        </form>
                    </div>
                    
                     <div className="col-10 col-md-5 col-lg-4 order-1 order-md-2 mb-5 mb-md-0">
                        <img src={imageContact1} className="img-fluid rounded-5 shadow col-md-12 col-lg-11" alt="..."></img>
                    </div>
                </div>
            </div>
               
            
        </motion.section>
    )
}

export default Contact;