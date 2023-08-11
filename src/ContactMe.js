import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className='contactPage' id='contact'>
        <h2>Contact:</h2>
        <div className='contact'>
        <a href="mailto:gmfreundlich@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='4x' color='white'></FontAwesomeIcon></a>
        <a href="mailto:gmfreundlich@gmail.com" style={{'color':'white'}}><h2>Gmfreundlich@gmail.com</h2></a>
        </div>
        <div className='contact'>
        <a href="mailto:gmfreundlich@gmail.com"><FontAwesomeIcon icon={faPhone} size='4x' color='white'></FontAwesomeIcon></a>
        <a style={{'color':'white'}}><h2>617-794-7062</h2></a>
        </div>
    </div>
  )
}

export default Contact