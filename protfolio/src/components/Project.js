import React from "react";
import Style from "./Style.css";

const Project = ({ title, description, repo, deployed }) => {
  return (
    <div className="card h-100">
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={repo} className="btn card-btn" target="_blank">
          Live App
        </a>
        <a href={deployed} className="btn card-btn" target="_blank">
          Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
