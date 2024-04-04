import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../components/projectCard';

const Projects = () => {

  return (
    <Container className='projectContainer'>
      <h2>Projects:</h2>
      <div className='projects'>
        <ProjectCard name={"Everything NBA"} link={"https://nbaapp.vercel.app/"} image={"everythingNBA.jpeg"} languages={["Next.js", "React", "Bootstrap","Javascript", "CSS", "Firebase", "mongoDB", "Puppeteer"]} description={"Make an account, add your favorite NBA players and teams, and get stats in a matter of seconds!"}/>
        <ProjectCard name={"Terror Time Machine"} link={"https://capstone-terror-time-machine-client.vercel.app/"} image={"TTM.jpeg"} languages={["React", "Node.js", "Express","Javascript", "CSS", "Firebase", "MongoDB"]} description={"Discuss some of the most famous horror movies of all time!"}/>
        <ProjectCard name={"Client Website"} link={"https://prezyves.org/"} image={"PrezYves.png"} languages={["Wordpress", "CSS"]} description={"Utilized Wordpress to build a blog website for the president of Urban College of Boston"}/>
        <ProjectCard name={"Basketball Game"} link={"https://graham2823.github.io/basketballGame/?fbclid=IwAR1WNPgFrsd_o2boUvyhd1LBjGqm-YaNaeZLNFQbY9C0HKW1FoL7E5P2EuQ"} image={"bballGame.jpeg"} languages={["Javascript", "HTML", "CSS"]} description="Play against the computer in a basketball game, where the first to 11 is the winner!"/>
      </div>
    </Container>
  );
};

export default Projects;
