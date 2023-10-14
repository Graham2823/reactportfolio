import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../page.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

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
            <Nav.Link href="https://github.com/Graham2823">Github<FontAwesomeIcon icon={faGithub} size='3x' color='white'></FontAwesomeIcon></Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1cFC8VlG6fFFfFNC5Oth7ioIDf4XnMxZC/view?usp=sharing">Resume<FontAwesomeIcon icon={faFile} size='3x'></FontAwesomeIcon></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;