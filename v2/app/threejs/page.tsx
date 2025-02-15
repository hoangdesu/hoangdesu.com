'use client';

// guide: https://waelyasmina.net/articles/react-three-fiber-for-beginners/

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  useHelper,
} from '@react-three/drei';
import { DirectionalLightHelper, CameraHelper } from 'three';
import { useControls } from 'leva';

function AnimatedBox() {
  const boxRef = useRef();

  const { color, speed } = useControls({
    color: '#00bfff',
    speed: {
      value: 0.005,
      min: 0.0,
      max: 0.03,
      step: 0.001,
    },
  });

  useFrame(() => {
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  });

  const [wireframe, setWireframe] = useState(false);
  // Handle click event to toggle the wireframe mode
  const handleClick = () => {
    setWireframe(wireframe === false ? true : false);
  };

  return (
    <mesh ref={boxRef} position={[5, 3, 0]} castShadow onClick={handleClick}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
}

function DirectionalLightWithHelper() {
  const light = useRef();
  useHelper(light, DirectionalLightHelper, 2, 'crimson');

  const shadow = useRef();
  useHelper(shadow, CameraHelper);

  return (
    <directionalLight ref={light} position={[-5, 8, 0]} castShadow>
      <orthographicCamera
        attach='shadow-camera'
        ref={shadow}
        left={-2}
        right={2}
        top={8}
        bottom={4}
      />
    </directionalLight>
  );
}

function App() {
  return (
    <div id='canvas-container' className='h-screen'>
      <Canvas shadows>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial />
        </mesh>
        <axesHelper args={[10]} />
        <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} />
        <OrbitControls />
        <AnimatedBox />
        <ambientLight color={0xfcfcfc} intensity={0.2} />
        <DirectionalLightWithHelper />
      </Canvas>
    </div>
  );
}

export default App;
