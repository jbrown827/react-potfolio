import React, { useState } from "react";
import Style from "./Style.css";
import Project from "./Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project Tantalus",
      description:
        "Project Tantalus is a resource to to search for recipes or restaurants. Restaurants can be searched by city and cuisine type. Recipes can be searched based on main ingredient, meal type, and cuisine type. Search parameters use both textfields and dropdown menus.",
      repo: "https://github.com/jbrown827/Project-Tantalus",
      deployed: "https://spenrad.github.io/Project-Tantalus/",
    },
    {
      id: 2,
      title: "Take Some Notes",
      description:
        "This application allows users to take and save notes, and also delete them when done. Using Express.js, a connection is made between the client and server via a series of HTTP request (GET, POST, and DELETE).",
      repo: "https://github.com/jbrown827/take-some-notes",
      deployed: "https://still-reaches-23584.herokuapp.com/",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description:
        "The fitness tracker app allows users the ability to create a new workout or continue a previous one. The user can add exercises to the pre-existing workout or start a new workout with new exercises. Using the dashboard users can view workout analytics via charts over a 7 day period.",
      repo: "https://github.com/jbrown827/fitness-tracker",
      deployed:
        "https://nameless-harbor-99466.herokuapp.com/?id=6033d2d61e20460015df9e74",
    },
    {
      id: 4,
      title: "Party X",
      description:
        "Welcome to the party! This full stack application built using MVC framework is a major milestone in the progression of four fledgling developers. Together we created an application that allows a user to create an account and login to an account dashboard. The dashboard will show the user a list of events that they can attend, view the upcomming events, and create events of their own.",
      repo: "https://github.com/jbrown827/Project-2",
      deployed: "https://party-x.herokuapp.com/",
    },
    {
      id: 5,
      title: "Employee Directory",
      description:
        "Employee Directory is a react app that allows an employer the ability to view non-sensitive data about their employees. The employer can sort and view names in ascending or descending order, or use the search bar to search for a specific name.",
      repo: "https://github.com/jbrown827/employee-directory",
      deployed: "https://jbrown827.github.io/employee-directory/",
    },
    {
      id: 6,
      title: "Schedule Planner",
      description:
        "A calender application that allows users to save events for each hour of the day. The current day is displayed a top the screen, as the time blocks are colored coded based on the time of day (past,present, or future).",
      repo: "https://github.com/jbrown827/schedule-planner",
      deployed: "https://jbrown827.github.io/schedule-planner/",
    },
  ]);
  return (
    <div id="portfolio" class="container-fluid">
      <div class="container port-style">
        <h2>Projects</h2>
        <hr />
        <div class="row row-cols-1 row-cols-md-3 style-row">
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              repo={project.repo}
              deployed={project.deployed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
