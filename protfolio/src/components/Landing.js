import React from "react";
import Style from "./Style.css";

const Landing = () => {
  return (
    <div class="col">
      <div class="card h-100">
        <img
          src="./images/planner-screenshot.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Schedule Planner</h5>
          <p class="card-text">
            A calender application that allows users to save events for each
            hour of the day. The current day is displayed a top the screen, as
            the time blocks are colored coded based on the time of day
            (past,present, or future).
          </p>
          <a
            href="https://jbrown827.github.io/schedule-planner/"
            class="btn card-btn"
            target="_blank"
          >
            Live App
          </a>
          <a
            href="https://github.com/jbrown827/schedule-planner"
            class="btn card-btn"
            target="_blank"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
