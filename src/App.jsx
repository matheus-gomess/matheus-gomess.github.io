import React, { useEffect, useState } from "react";
import Start from "./topics/start/Start";
import Contacts from "./topics/contacts/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import Introduction from "./topics/introduction/Introduction";
import Products from "./topics/products/Products";
import Examples from "./topics/examples/Examples";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const { colorMode } = useColorMode();

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
      }}
    >
      <ScrollToTop />
      <AnimatePresence>
        {showHeader && <Header />}
      </AnimatePresence>
      <Introduction />
      <Start />
      <Examples />
      <Products />
      <Contacts />
      <ToastContainer
        position="bottom-right"
        pauseOnHover={false}
        progressStyle={{ background: "blue" }}
        limit={1}
        autoClose={2500}
        theme={colorMode === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
