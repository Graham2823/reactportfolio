import React,{useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleDown, faFile } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
const Header = () => {
  return (

    
   
    <Container className='header'>
        <h1>Graham Freundlich</h1>
        <img src="GrahamPic.jpeg" class="picture"></img>
        <br/>
        <a href='#bio'><FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon></a>
   
    </Container>
   
  )
}

export default Header