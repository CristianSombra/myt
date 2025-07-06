import React, { Suspense } from "react";
import { useInView } from 'react-intersection-observer';
import { Navbar, Footer } from '../layouts';
// import { ToastContainer } from "react-toastify";
import { SpinnerLoader } from '../components';
import { ScrollToTop } from "../utils/scrollToTop/ScrollToTop";
import {
    Home,
    Products,
    About,
    Contact
} from "../pages";


const AppRouter: React.FC = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.40 });
    const [productsRef, productsInView] = useInView({ threshold: 0.20 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.20 });
    const [contactRef, contactInView] = useInView({ threshold: 0.20 });


    return (
        <>
            <Navbar />
            <div ref={homeRef}>
                <Suspense fallback={<SpinnerLoader />}>
                    <Home animate={homeInView} />
                </Suspense>
            </div>
             <div ref={productsRef}>
                <Suspense fallback={<SpinnerLoader />}>
                    <Products animate={productsInView} />
                </Suspense>
            </div>
            <div ref={aboutRef}>
                <Suspense fallback={<SpinnerLoader />}>
                    <About animate={aboutInView} />
                </Suspense>
            </div>
            <div ref={contactRef}>
                <Suspense fallback={<SpinnerLoader />}>
                    <Contact animate={contactInView} />
                </Suspense>
            </div>
            <ScrollToTop/>
            <Footer />
            {/* <ToastContainer /> */}
        </>
    );
};

export default AppRouter;
