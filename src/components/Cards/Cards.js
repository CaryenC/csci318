import React from 'react'
// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col,
    Table
  } from "react-bootstrap";

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
                                <Card className="p-3 mb-5">
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* second graph here */}
                        <Row>
                            <Col>
                                <Card className="p-3 mb-5">
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            {/* map one here */}
                            <Col md={6}>
                                <Card className="p-3 mb-5">
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            {/* map two here */}
                            <Col md={6}>
                                <Card className="p-3 mb-5">
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
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
                                <Table bordered hover size="sm" responsive>
                                    <thead>
                                        <tr>
                                            <th>Factors</th>
                                            <th>Malaysia</th>
                                            <th>Japan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Drunk Driver</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Illegal Driving</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Insufficient Road Lighting</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Drunk Driver</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Illegal Driving</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Insufficient Road Lighting</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Drunk Driver</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Illegal Driving</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Insufficient Road Lighting</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Drunk Driver</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Illegal Driving</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>Insufficient Road Lighting</td>
                                            <td>15000</td>
                                            <td>14000</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
          </Container>
        </div>
    )
}

export default Cards
