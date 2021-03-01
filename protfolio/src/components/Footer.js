import React from "react";
import Style from "./Style.css";

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom">
      <div className="footer-div">
        <span>
          <a href="https://github.com/jbrown827">
            <i className="fab fa-github"></i>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/jaja-brown-a42261201/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </span>
        <br className="d-md-none" />
        <span>
          <i className="fa fa-at"></i> jaja.c.brown@gmail.com
        </span>
      </div>
    </nav>
  );
};

export default Footer;
