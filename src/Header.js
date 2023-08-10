import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className='header'>
        <h1>Graham Freundlich Portfolio</h1>
        <img src="GrahamPic.jpeg" class="picture"></img>
        <br/>
        <a href='https://github.com/Graham2823'><FontAwesomeIcon icon={faGithub} size='5x' color='white'></FontAwesomeIcon></a>
    </div>
  )
}

export default Header