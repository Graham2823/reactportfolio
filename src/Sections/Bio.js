import React, { useEffect, useState, useRef } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(CSSPlugin);

const Bio = () => {
  const [ref, inView] = useInView({ triggerOnce: false, rootMargin: '-50px 0px' });
  const [animationStarted, setAnimationStarted] = useState(false);
  const itemsRef = useRef(null);

  useEffect(() => {
    if (inView && !animationStarted && itemsRef.current) {
      const items = itemsRef.current.querySelectorAll('.bio-list-item');
      gsap.from(items, {
        scaleX: 2,
        scaleY: 2,
        opacity: 0,
        y: -100,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.8,
        
      });

      setAnimationStarted(true); // Mark animation as started
    }
  }, [inView, animationStarted]);

  return (
    <Container className='bio' ref={ref}>
      <h2>About</h2>
      <div className='about'>
        <ListGroup className='vertical-list' ref={itemsRef}>
          <ListGroup.Item className='bio-list-item'>
            <FontAwesomeIcon icon={faHouse} />: Boston, Mass
          </ListGroup.Item>
          <ListGroup.Item className='bio-list-item'>
            <FontAwesomeIcon icon={faUserGraduate} />: Lasell University '21
          </ListGroup.Item>
          <ListGroup.Item className='bio-list-item'>
            <FontAwesomeIcon icon={faUserGraduate} />: Kenzie Academy Full Stack Bootcamp '23
          </ListGroup.Item>
          <ListGroup.Item className='bio-list-item'>
            <FontAwesomeIcon icon={faBasketball} />: Basketball Enthusiast
          </ListGroup.Item>
          <ListGroup.Item className='bio-list-item'>
            <FontAwesomeIcon icon={faPlaystation} />: Video Gamer
          </ListGroup.Item>
          <ListGroup.Item className='bio-list-item'>
            <FontAwesomeIcon icon={faPaw} />: Animal Lover
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  );
};

export default Bio;
