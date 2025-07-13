import { lazy } from "react"

export const Home = lazy(() => import("./home/Home"));
export const About = lazy(() => import("./about/About"));
export const Products = lazy(() => import("./products/Products"));
export const Contact = lazy(() => import("./contact/Contact"));

// Secciones de Productos

export const FirstSectionProducts = lazy(() => import ("./products/FirstSection"));