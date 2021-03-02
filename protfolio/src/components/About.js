import React from "react";
import Style from "./Style.css";
import profile from "../images/profile.jpg";

const About = () => {
  return (
    <div id="about" className="container-fluid">
      <div className="container">
        <h2>About</h2>
        <hr />
        <div className="row style-row">
          <div className="col-md-4 style-col">
            <img
              className="img-thumbnail"
              src={profile}
              alt="profile picture"
              width="250px"
              height="250px"
            />
          </div>
          <div className="col col-md-6 style-col">
            <div className="row">
              <div className="col col-md-12 style-col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae incidunt dolorem, nam et a non debitis magnam
                  soluta nobis labore rerum hic nihil quibusdam cum quae ea
                  molestiae provident officiis aliquam veniam architecto quo
                  laboriosam dignissimos? Saepe aspernatur aliquam eligendi!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae aliquam tempore itaque optio laborum quidem dolores
                  reiciendis. Reiciendis voluptatem asperiores ipsa maxime, esse
                  impedit blanditiis nulla, corrupti iusto aliquid libero. Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="col col-md-12 style-col">
                <h4>Languages and Technologies</h4>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node js</span>
                <span>Express</span>
                <span>MySql</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
