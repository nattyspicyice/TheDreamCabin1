import React from "react";
// import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>The Dream Cabin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        <Nav>
            <Nav.Link href="/login">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
}

export default NavBar;