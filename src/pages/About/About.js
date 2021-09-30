import React from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import InfoCard from "./InfoCard/InfoCard";
import caryen from "../../images/pictures/caryen.jpg";
import json from "../../images/pictures/wei-de.jpg";
import jinny from "../../images/pictures/img_avatar_female.png";
import azizul from "../../images/pictures/azizul.png";
import teamLogo from "../../images/teamlogo/whitebg.png";

const About = () => {
  // Please add developers data here
  const data = [
    {
      sl: 1,
      image: caryen,
      name: "Caryen Cheong Jia Xin",
      major: "Software Engineering",
      responsibilities: [
        { sl: 1, task: "Plan the Gantt Chart" },
        { sl: 2, task: "Allocate job to the team" },
        { sl: 3, task: "Conduct and lead the weekly meetings" },
        { sl: 4, task: "Write and finalize progress and final reports" },
        { sl: 5, task: "Update tasks in Taiga.io" },
        { sl: 6, task: "Involve in gathering local CSV data" },
        {
          sl: 7,
          task: "Develop a pie chart to show Injury Type between Malaysia and Japan",
        },
        {
          sl: 8,
          task: "Compile and organize graphs developed by the team in card view design to present them neatly in this Road Wise web application",
        },
        {
          sl: 9,
          task: "Develop suitable navigation controls and menu options to allow visitors navigate swiftly",
        },
        {
          sl: 10,
          task: "Design and create different version of graphical elements (i.e. Road Wise logo and Avatar logo)",
        },
        { sl: 11, task: "Generate color scheme for Road Wise web application" },
      ],
    },
    {
      sl: 2,
      image: azizul,
      name: "Mohammed Azizul Hoque Sheikh",
      major: "Software Engineering",
      responsibilities: [
        { sl: 1, task: "One" },
        { sl: 2, task: "Two" },
        { sl: 3, task: "Three" },
      ],
    },
    {
      sl: 3,
      image: jinny,
      name: "Saw Zhi Ying",
      major: "No Major",
      responsibilities: [
        { sl: 1, task: "One" },
        { sl: 2, task: "Two" },
        { sl: 3, task: "Three" },
      ],
    },
    {
      sl: 4,
      image: json,
      name: "Tan Wei De",
      major: "Software Engineering and System Security",
      responsibilities: [
        { sl: 1, task: "Record weekly meetings" },
        { sl: 2, task: "Participate in progress report and final reports" },
        { sl: 3, task: "Update taiga.io tasked that was assigned to me" },
        { sl: 4, task: "Develop Bar Chart regarding the road traffic deaths" },
        { sl: 5, task: "Filter Japan and Malaysia Gender" },
        { sl: 6, task: "Information Pages " },
      ],
    },
  ];

  return (
    <Container style={{ width: "70%" }}>
      {/* team logo */}
      <img src={teamLogo} alt="avatar team logo" />
      {/* team name */}
      <h3>AVATAR</h3>
      <br />
      <div className="rowDiv">
        {data.map((item) => (
          <InfoCard key={item.sl} details={item} />
        ))}
      </div>
    </Container>
  );
};

export default About;
