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
            <div className="row justify-content-center text-center text-md-start my-md-5">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-0">Moda para</h1>
                            <h1>Adolescentes</h1>
                        </div>
                        <div className="col-12 col-md-11 col-lg-9 my-3">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia repellendus eveniet, quam laudantium amet molestiae possimus minus. Magnam, tempora dolore!</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center justify-content-md-start d-md-block d-none">
                            <button className="btn btn-dark my-3">
                                Ver Productos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-md-4 col-lg-3">
                    <img src={imageHome} className="img-fluid rounded-4 shadow" alt="..."></img>
                    <button className="btn btn-dark my-5 d-block d-md-none">
                        Ver Productos
                    </button>
                </div>
            </div>
        </motion.section>
    )
}

export default Home;