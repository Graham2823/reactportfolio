import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../components/projectCard';

const Projects = () => {

  return (
    <Container className='projectContainer'>
      <h2>Projects:</h2>
      <div className='projects'>
        <ProjectCard name={"Basketball Game"} link={"https://graham2823.github.io/basketballGame/?fbclid=IwAR1WNPgFrsd_o2boUvyhd1LBjGqm-YaNaeZLNFQbY9C0HKW1FoL7E5P2EuQ"} image={"bballGame.jpeg"} languages={["Javasript", "HTML", "CSS"]} description="Play against the computer in a basketball game, where the first to 11 is the winner!"/>
        <ProjectCard name={"Terror Time Machine"} link={"https://capstone-terror-time-machine-client.vercel.app/"} image={"TTM.jpeg"} languages={["React", "Node.js", "Express","Javasript", "CSS", "Firebase", "MongoDB"]} description={"Discuss some of the most famous horror movies of all time!"}/>
      </div>
    </Container>
  );
};

export default Projects;
