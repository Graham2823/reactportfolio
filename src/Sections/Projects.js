import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const Projects = () => {

  return (
    <Container className='projectContainer'>
      <h2>Projects:</h2>
      <div className='projects'>
        <a href="https://graham2823.github.io/basketballGame/?fbclid=IwAR1WNPgFrsd_o2boUvyhd1LBjGqm-YaNaeZLNFQbY9C0HKW1FoL7E5P2EuQ">
          <img src="bballGame.jpeg" alt="Basketball Game" />
        </a>
        <a href="https://capstone-terror-time-machine-client.vercel.app/">
          <img src="TTM.jpeg" alt="Terror Time Machine" />
        </a>
      </div>
    </Container>
  );
};

export default Projects;
