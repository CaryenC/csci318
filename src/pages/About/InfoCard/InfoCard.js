import "./InfoCard.css";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const InfoCard = (props) => {
  const { image, name, major, responsibilities } = props.details;

  return (
    <div className="divCol">
      <Card className="infoCard" style={{ border: "0px" }}>
        <div style={{ textAlign: "center" }}>
          <img className="developerImage" src={image} alt="developer" />
        </div>

        <div className="divCardName">
          <Card.Title>
            <h5>{name}</h5>
          </Card.Title>
        </div>

        <div className="majorDiv">
          <h6 className="majorStyle">({major})</h6>
        </div>
        <br />
        <p>Responsibilities</p>

        <ListGroup style={{ textAlign: "left" }}>
          {responsibilities.map((item) => (
            <ListGroup.Item key={item.sl}>{item.task}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default InfoCard;
