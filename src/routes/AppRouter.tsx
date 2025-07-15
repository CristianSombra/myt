// src/routes/AppRouter.tsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Navbar, Footer } from "../layouts";
import { SpinnerLoader } from "../components";
import { ScrollToTop } from "../utils/scrollToTop/ScrollToTop";
import {
  Home,
  Products,
  About,
  Contact
} from "../pages";

const MainPage: React.FC = () => {
  const [homeRef, homeInView] = useInView({ threshold: 0.20 });
  const [productsRef, productsInView] = useInView({ threshold: 0.20 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.10 });
  const [contactRef, contactInView] = useInView({ threshold: 0.10 });

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
    </>
  );
};

const AppRouter: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/buzos" element={<Products animate={true} />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default AppRouter;
