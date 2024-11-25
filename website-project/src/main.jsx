import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.jsx";
import HeroPage from "./HeroPage.jsx";
import AboutPage from "./AboutPage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import ContactPage from "./ContactPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <HeroPage />
    <AboutPage />
    <ServicesPage />
    <Banner />
    <ContactPage />
    <Footer />
  </StrictMode>
);
