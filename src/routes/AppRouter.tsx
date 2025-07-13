import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { Navbar, Footer } from '../layouts';
// import { ToastContainer } from "react-toastify";
import { SpinnerLoader } from '../components';
import { ScrollToTop } from "../utils/scrollToTop/ScrollToTop";
import {
    Home,
    Products,
    About,
    Contact,
    FirstSectionProducts
} from "../pages";


const MainPage: React.FC = () => {
    const [homeRef, homeInView] = useInView({ threshold: 0.40 });
    const [productsRef, productsInView] = useInView({ threshold: 0.20 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.20 });
    const [contactRef, contactInView] = useInView({ threshold: 0.20 });



    return (
        <>
            <div ref={homeRef} id="home">
              <Suspense fallback={<SpinnerLoader />}>
                <Home animate={homeInView} />
              </Suspense>
            </div>
            <div ref={productsRef} id="products">
              <Suspense fallback={<SpinnerLoader />}>
                <Products animate={productsInView} />
              </Suspense>
            </div>
            <div ref={aboutRef} id="about">
              <Suspense fallback={<SpinnerLoader />}>
                <About animate={aboutInView} />
              </Suspense>
            </div>
            <div ref={contactRef} id="contact">
              <Suspense fallback={<SpinnerLoader />}>
                <Contact animate={contactInView} />
              </Suspense>
            </div>

            <div
              className="modal fade"
              id="productsModal"
              tabIndex={-1}
              aria-labelledby="productsModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="productsModalLabel">Nuestra colección de ropa</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Suspense fallback={<SpinnerLoader />}>
                      <FirstSectionProducts />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>



        </>
    );
};


const AppRouter: React.FC = () => {
     return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/buzos" element={<FirstSectionProducts />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default AppRouter;
