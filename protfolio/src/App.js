import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Porfolio";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Nav />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
