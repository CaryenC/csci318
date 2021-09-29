import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function TopBar() {
  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Road Wise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/insights">
                <Nav.Link>Insights</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/info-one">
                <Nav.Link>Info One</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/info-two">
                <Nav.Link>Info Two</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/info-three">
                <Nav.Link>Info Three</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/info-four">
                <Nav.Link>Info Four</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
