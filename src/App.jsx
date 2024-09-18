import Header from "./components/Header";
import Main from "./topics/Main";
import Products from "./topics/Products";
import Contacts from "./topics/Contacts";
import { Box } from "@chakra-ui/react";

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
        backgroundColor: "#1c222b"
      }}
    >
      <Box marginBottom="10vh"/>
      <Header />
      <Main />
      <Products />
      <Contacts />
    </div>
  );
}

export default App;
