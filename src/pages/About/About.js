import React from "react";
import { Container, Row } from "react-bootstrap";
import InfoCard from "./InfoCard/InfoCard";
import caryen from "../../images/pictures/caryen.jpg";
import teamLogo from "../../images/teamlogo/whitebg.png";

const About = () => {
  // Please add developers data here
  const data = [
    {
      sl: 1,
      image: caryen,
      name: "Caryen Cheong Jia Xin",
      major: "No Major",
      responsibilities: [
        { sl: 1, task: "One" },
        { sl: 2, task: "Two" },
        { sl: 3, task: "Three" },
      ],
    },
    {
      sl: 2,
      image: "https://i.ibb.co/ngH1Pb7/photo-azizul-170-X-180.png",
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
      image: "https://i.ibb.co/ngH1Pb7/photo-azizul-170-X-180.png",
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
      image: "https://i.ibb.co/ngH1Pb7/photo-azizul-170-X-180.png",
      name: "Tan Wei De",
      major: "No Major",
      responsibilities: [
        { sl: 1, task: "One" },
        { sl: 2, task: "Two" },
        { sl: 3, task: "Three" },
      ],
    },
  ];

  return (
    <Container>
      <img src={teamLogo} alt="" />
      <h3>AVATAR</h3>
      <br />
      <Row>
        {data.map((item) => (
          <InfoCard key={item.sl} details={item} />
        ))}
      </Row>
    </Container>
  );
};

export default About;
