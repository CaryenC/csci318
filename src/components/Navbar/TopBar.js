import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavbarBrand, Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import appLogo from "../../images/applogo/full.png";

function TopBar() {
  return (
    <>
      <Navbar bg="light shadow" variant="light" expand="lg" sticky="top">
        <Container>
          <NavbarBrand className="pt-0">
            <a href="http://localhost:3000/">
            <img
              src={appLogo}
              height="50"
              href="http://localhost:3000/"
            /></a>
            </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Insights</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/road-safety-campaign">
                <Nav.Link>Road Safety Campaign</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/road-safety-plan-2021-2030">
                <Nav.Link>Road Safety Plan (2021 - 2030)</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/messages-for-the-victims">
                <Nav.Link>Messages For the Victims</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/news">
                <Nav.Link>News</Nav.Link>
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
