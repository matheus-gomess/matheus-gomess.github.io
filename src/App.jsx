import Main from "./topics/Main";
import Products from "./topics/Products";
import Contacts from "./topics/Contacts";
import InfoHeader from "./topics/InfoHeader";
import ScrollToTop from "./components/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
