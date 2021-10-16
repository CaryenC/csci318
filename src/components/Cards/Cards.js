import React, { useState } from "react";
// react-bootstrap components
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import InjuryType from "components/Charts/InjuryType";
import Seatbelt from "components/Tables/Seatbelt";
import DynamicData from "components/Dynamic/DynamicData/DynamicData";

function Cards() {
  return (
    <div>
      <Container fluid="md" className="pt-3">
        <Row className="px-2">
          {/* put all graphs here */}
          <Col md={8}>
            {/* first graph here */}
            <Row>
              <Col>
                <InjuryType />
              </Col>
            </Row>
            {/* second graph here */}
            <Row>
              <Col>
                <DynamicData />
              </Col>
            </Row>
            <Row>
              {/* map one here */}
              <Col md={6}>
                <Card className="p-3 mb-5">
                  <Card.Body>
                    <Card.Title>Number of Hospitals in Japan</Card.Title>
                    <Card.Text>
                      <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=19cvjSCewbht-4ixLv4ZHUT8DyaUq4zUE"
                        display="block"
                        width="100%"
                        height="400"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                      ></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* map two here */}
              <Col md={6}>
                <Card className="p-3 mb-5">
                  <Card.Body>
                    <Card.Title>Number of Hospitals in Malaysia</Card.Title>
                    <Card.Text>
                      <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1hzq26yfrv9kKn0yNpShAzvfkG4gJQymk"
                        display="block"
                        width="100%"
                        height="400"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                      ></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* put table here */}
          <Col md={4}>
            <Row>
              <Col>
                <Seatbelt />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
