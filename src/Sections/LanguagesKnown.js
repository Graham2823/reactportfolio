import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'; // Required for gsap.to to work
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(CSSPlugin);

const LanguagesKnown = () => {
  const [ref, inView] = useInView(); // Remove triggerOnce

  const animateItem = (item) => {
    gsap.from(item, {
      scaleX: 0,
      duration: 1,
      ease: 'power4.inOut',
      onComplete: () => {
        gsap.set(item, { scaleX: 1 });
      },
    });
  };

  return (
    <div className="languagesKnown" ref={ref}>
      <h2>Languages/Software:</h2>
      <ListGroup className="horizontal-list">
        <ListGroup.Item
          className="list-group-item"
          style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}
        >
          HTML/CSS
        </ListGroup.Item>
        <ListGroup.Item
          className="list-group-item"
          style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}
        >
          JavaScript
        </ListGroup.Item>
        <ListGroup.Item
          className="list-group-item"
          style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}
        >
          React
        </ListGroup.Item>
        <ListGroup.Item className="list-group-item" style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}>Node.js</ListGroup.Item>
        <ListGroup.Item className="list-group-item" style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}>MongoDB</ListGroup.Item>
        <ListGroup.Item className="list-group-item" style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}>Express</ListGroup.Item>
        <ListGroup.Item className="list-group-item" style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}>Next.js</ListGroup.Item>
        <ListGroup.Item className="list-group-item" style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}>EJS</ListGroup.Item>
        <ListGroup.Item className="list-group-item" style={{ opacity: inView ? 1 : 0 }}
          ref={animateItem}>Puppeteer Data Scraping</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default LanguagesKnown;