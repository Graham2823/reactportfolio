import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const email = 'gmfreundlich@gmail.com';
    const subject = 'Message from your website';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container className='contactPage' id='contact'>
      <h2>Interested in working together? Lets Talk!!!</h2>
      {/* <Container className='contact'>
        <a href={`mailto:gmfreundlich@gmail.com`}>
          <FontAwesomeIcon icon={faEnvelope} size='4x' color='white' />
        </a>
        <a href={`mailto:gmfreundlich@gmail.com`} style={{ color: 'white' }}>
          <h2>Gmfreundlich@gmail.com</h2>
        </a>
      </Container>
      <Container className='contact'>
        <FontAwesomeIcon icon={faPhone} size='4x' color='white' />
        <h2>617-794-7062</h2>
      </Container> */}
      <Container className='contact'>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
        />
        <Button onClick={handleSendMessage} className='contactButton'>Send Message</Button>
      </Container>
    </Container>
  );
};

export default Contact;
