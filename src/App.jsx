import Header from "./components/Header";

function App() {
  return (
    <div
      className="App"
      style={{
        overflow: "hidden",
        fontFamily: "Montserrat, sans-serif",
        height: "100vh",
        maxWidth: "100vw",
        color: "white",
        backgroundColor: "#1c222b"
      }}
    >
      <Header />
    </div>
  );
}

export default App;
