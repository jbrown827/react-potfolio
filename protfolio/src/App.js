import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Porfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
