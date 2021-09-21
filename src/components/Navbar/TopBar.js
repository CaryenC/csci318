import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function TopBar() {
    return (
        <>
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand>
                <img
                    alt=""
                    src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/overview">
                        <Nav.Link>Overview</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/info-one">
                        <Nav.Link>Info One</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default TopBar
