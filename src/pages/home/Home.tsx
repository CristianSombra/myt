import React from "react";
import { motion } from "framer-motion";
import type {AnimateProps} from "../../components";
import { imageHome } from "../../assets/images/Images";
import '../../styles';


const Home: React.FC<AnimateProps> = ({animate}) => {
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate= { animate ? { opacity: 1 } : { opacity: 0}}
        id="home"
        className="container-fluid home-container"
        >
            <div className="row d-flex justify-content-center mt-2 my-md-5">
                <div className="col-12 col-md-6">
                    <div className="row text-center text-md-start">
                        <div className="col-12">
                            <h1 className="mb-0">Moda</h1>
                            <h1>Argentina</h1>
                        </div>
                        <div className="col-12 col-md-11 col-lg-10 my-3">
                            <p>En M&T te acercamos las últimas tendencias en moda urbana, con diseños propios que combinan estilo, comodidad y personalidad. Descubrí nuestra colección y encontrá el outfit que mejor va con vos.</p>
                        </div>
                        <div className="col-12 d-flex justify-content-md-start d-lg-block d-none">
                            <a href="#products" className="btn btn-dark border-dark hover-btn">
                                Ver Productos
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-md-4 col-lg-4 col-xl-3 mb-1">
                    <img src={imageHome} className="img-fluid rounded-4 shadow" alt="..."></img>
                </div>
                <div className="d-flex justify-content-center my-4 d-block d-md-none">
                    <a href="#products" className="btn btn-dark border-dark hover-btn">
                      Ver Productos
                    </a>
                </div>
            </div>
        </motion.section>
    )
}

export default Home;