import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const Header = () => {


  return (
    <Container className="header">
      <h1>Graham Freundlich</h1>
      <img src="GrahamPic.jpeg" className="picture" alt="Graham's Picture" />
      <br />
      <a href="#bio" >
        <FontAwesomeIcon icon={faArrowCircleDown} size="3x" className="arrow" />
      </a>
    </Container>
  );
};

export default Header;
