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
        className="home-container"
        >
            <div className="row justify-content-center text-center text-md-start mt-2 my-md-5">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-0">Moda para</h1>
                            <h1>Adolescentes</h1>
                        </div>
                        <div className="col-12 col-md-11 col-lg-9 my-3">
                            <p>En M&T te ofrecemos las últimas tendencias en ropa para adolescentes. Estilo, comodidad y personalidad en cada prenda. Descubrí nuestra colección y encontrá el outfit que mejor te representa.</p>
                        </div>
                        <div className="col-12 d-flex justify-content-md-start d-md-block d-none">
                            <button className="btn btn-dark my-3">
                                Ver Productos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-md-4 col-lg-3 mb-1">
                    <img src={imageHome} className="img-fluid rounded-4 shadow" alt="..."></img>
                </div>
                <div className="d-flex justify-content-center my-4 d-block d-md-none">
                    <button className="btn btn-dark">
                        Ver Productos
                    </button>
                </div>
            </div>
        </motion.section>
    )
}

export default Home;