import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../page.css';

const TopNav = () => {
  return (
    <Navbar expand="lg" className="custom-navbar"> {/* Use "lg" for large screens */}
      <Container>
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="#bio">About Me</Nav.Link>
            <Nav.Link href="#languages">Languages Known</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
