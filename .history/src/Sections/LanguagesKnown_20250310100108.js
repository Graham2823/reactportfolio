import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(CSSPlugin);

const LanguagesKnown = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [animated, setAnimated] = useState(false);

  const animateItems = (items) => {
    gsap.from(items, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.inOut',
      stagger: 0.2,
      onComplete: () => {
        setAnimated(true);
      },
    });
  };

  return (
    <div className="languagesKnown" ref={ref}>
      <h2>Languages/Software:</h2>
      <ListGroup className="horizontal-list">
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            HTML/CSS
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            JavaScript
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            React
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            React
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Node.js
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            MongoDB
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Express
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Next.js
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Firebase
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Puppeteer Data Scraping
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Python
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Flask
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Typescript
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            MySQL
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            AWS
          </ListGroup.Item>
        )}
        {inView && (
          <ListGroup.Item
            className="list-group-item"
            ref={animateItems}
            style={{ opacity: animated ? 1 : 0 }}
          >
            Wordpress
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default LanguagesKnown;
