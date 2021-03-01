import React from "react";
import Style from "./Style.css";

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
            <li className="nav-item nav-link">About</li>
            <li className="nav-item nav-link">Portfolio</li>
            <li className="nav-item nav-link">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
