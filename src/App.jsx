import React, { useEffect, useState } from "react";
import Start from "./topics/start/Start";
import Contacts from "./topics/contacts/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion"; // Importar AnimatePresence
import Introduction from "./topics/introduction/Introduction";

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
        fontFamily: "DM Sans, sans-serif",
        minHeight: "100vh",
        maxWidth: "100vw",
        color: "white",
        backgroundColor: "#ffffff"
      }}
    >
      <ScrollToTop />
      <AnimatePresence>
        {showHeader && <Header />}
      </AnimatePresence>
      <Introduction />
      <Start />
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
