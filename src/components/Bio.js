import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const Bio = () => {
  return (
    <Container className='bio'>
        <h2>About</h2>
        <p>Hello there! My name is Graham Freundlich. I am a fullstack software developer based out of Boston Mass. In May of 2022 I sparked an interest in coding and started self teaching myself through free online resources. After about 7 months of this, I decided that it was time to persure this as a career path. As a result, I enrolled in a 9 month MERN fullstack web development program with Kenzie Academy. I am now looking for work, while continuing to grow my skill set </p>
        {/* <div class="goals">
        <h3>Goals:</h3> */}
        {/* <ListGroup class=''>
            <ListGroup.Item>Make a positive impact</ListGroup.Item>
            <ListGroup.Item>Learn more programming languages</ListGroup.Item>
            <ListGroup.Item>Create efficient, and secure web applications</ListGroup.Item>
            <ListGroup.Item>Create web applications that serve a positive and impactful purpose</ListGroup.Item>
            <ListGroup.Item>Combine my passion for sports and my passion for coding to create web applications focused around sports</ListGroup.Item>
        </ListGroup> */}
    {/* </div> */}
    </Container>
  )
}

export default Bio