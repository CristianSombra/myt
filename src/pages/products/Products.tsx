import React from "react";
import { motion } from "framer-motion";
import type {AnimateProps} from "../../components";
import { teamWork } from "../../assets/images/Images";

const Services: React.FC<AnimateProps> = ({animate}) => {
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate= { animate ? { opacity: 1 } : { opacity: 0}}
        id="products"
        >
            <div className="row my-5 ms-5">
                <div className="col">
                    <h1>Productos</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <img src={teamWork} className="img-fluid" alt="..."></img>
                </div>
                <div className="col-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia repellendus eveniet, quam laudantium amet molestiae possimus minus. Magnam, tempora dolore!
                    </p>
                </div>
            </div>
        </motion.section>
    )
}

export default Services;