import React from "react";
import Style from "./Style.css";

const Contact = () => {
  return (
    <div id="about" className="container-fluid">
      <div className="container">
        <h2>Contact Me</h2>
        <hr />
        <div className="row style-row">
          <div className="col style-col">
            <ul className="contact-list text-center">
              <li>
                <a href="https://github.com/jbrown827" target="_blank">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <i className="fa fa-at fa-2x"></i> jaja.c.brown@gmail.com
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jaja-brown-a42261201/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
