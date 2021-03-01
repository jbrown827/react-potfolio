import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Porfolio";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
