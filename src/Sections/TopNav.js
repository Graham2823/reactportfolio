import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TopNav = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="#bio">About Me</Nav.Link>
            <Nav.Link href="#languages">Languages Known</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
            <Nav.Link href="https://github.com/Graham2823" target='_blank' rel='noopener noreferrer'>
              Github<FontAwesomeIcon icon={faGithub} size='2x' color='white' />
            </Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1BOOa_lWZVMgdK-tJxRC9QiGQSTn_-9GaEwl5mpY9Ij8/edit?usp=sharing" target='_blank' rel='noopener noreferrer'>
              Resume<FontAwesomeIcon icon={faFile} size='2x' />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/graham-freundlich/" target='_blank' rel='noopener noreferrer'>
              LinkedIn<FontAwesomeIcon icon={faLinkedin} size='2x' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
