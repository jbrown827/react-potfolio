import React from "react";
import Style from "./Style.css";
import { Link } from "react-router-dom";
import Landing from "./Landing";

const Nav = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mx-auto">
            <Link to="/">
              <li className="nav-item nav-link">About</li>
            </Link>
            <Link to="/portfolio">
              <li className="nav-item nav-link">Portfolio</li>
            </Link>
            <Link to="/contact">
              <li className="nav-item nav-link">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
