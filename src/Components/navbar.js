import React from 'react';
import {Container,Navbar,Nav} from "react-bootstrap"

function Header() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">HOUSING SOCIETY</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">USERS</Nav.Link>
              <Nav.Link href="#pricing">RESOURCES</Nav.Link>
              <Nav.Link href="#pricing">BOOKINGS</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">LOGIN</Nav.Link>
              <Nav.Link href="#deets">SIGNUP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
export default Header;
