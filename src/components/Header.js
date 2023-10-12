import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container className='header'>
        <h1>Graham Freundlich</h1>
        <img src="GrahamPic.jpeg" class="picture"></img>
        <br/>
        <div className='icons'>
        <a href='https://github.com/Graham2823'>Github<FontAwesomeIcon icon={faGithub} size='3x' color='white'></FontAwesomeIcon></a>
        <a href='https://drive.google.com/file/d/1cFC8VlG6fFFfFNC5Oth7ioIDf4XnMxZC/view?usp=sharing'> Resume<FontAwesomeIcon icon={faFile} size='3x'></FontAwesomeIcon></a>
        </div>
    </Container>
  )
}

export default Header