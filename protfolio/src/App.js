import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Porfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <Route path="/" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
