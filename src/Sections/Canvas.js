import React, { useRef } from 'react';
import { OrbitControls, SpotLight, Stars, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

function Balls(props) {
  const ref = useRef();
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(80));
  return (
    <mesh {...props} ref={ref}>
      <Sphere visible args={[1.1, 64, 64]} position={[x, y, z]}>
        <meshStandardMaterial color={Math.random() * 0xFFFFFF} roughness={0.3} />
      </Sphere>
    </mesh>
  );
}

const CanvasArt = () => {
    const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load("GrahamPic.jpeg");
  return (
    <div className='mainContainer'>
        <div className='headerInfo'>
        <h1>Graham Freundlich</h1>
        <img src="GrahamPic.jpeg" class="picture"></img>
        <br/>
        <a href='#bio'><FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon></a>
        </div>
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight intensity={0.6} position={[10, 0, 0]} />
        <SpotLight intensity={1} position={[30, 0, 0]} />
        <Stars />
        <OrbitControls enableZoom={false} />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />
        <Balls />

      </Canvas>
    </div>
  );
};

export default CanvasArt;
