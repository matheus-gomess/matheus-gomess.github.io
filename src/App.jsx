import React, { useEffect, useState } from "react";
import Main from "./topics/Main";
import Products from "./topics/Products";
import Contacts from "./topics/Contacts";
import InfoHeader from "./topics/InfoHeader";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion"; // Importar AnimatePresence

function App() {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        overflow: "hidden",
        fontFamily: "Montserrat, sans-serif",
        minHeight: "100vh",
        maxWidth: "100vw",
        color: "white",
        backgroundColor: "#ffffff"
      }}
    >
      <ScrollToTop />
      <AnimatePresence>
        {showHeader && <Header />} {/* Envolver com AnimatePresence */}
      </AnimatePresence>
      <InfoHeader />
      <Main />
      <Products />
      <Contacts />
      <ToastContainer
        position="top-center"
        pauseOnHover={false}
        progressStyle={{ background: "blue" }}
        limit={2}
        autoClose={2500}
      />
    </div>
  );
}

export default App;
