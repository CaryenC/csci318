import React from 'react'
// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

function Cards() {
    return (
        <div>
            <Container>
                Top Three Factors to Road Accidents
            <Row>
                <Col sm>
                    <Card className="card-stats">
                        <Card.Body>
                            <Card.Title>#1 Drunk</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card className="card-stats">
                        <Card.Body>
                            <Card.Title>#2 Illegal Driving</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card className="card-stats">
                        <Card.Body>
                            <Card.Title>#3 Insufficient Road Lighting</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
              </Row>
          </Container>
        </div>
    )
}

export default Cards
