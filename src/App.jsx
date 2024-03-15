import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, OrbitControls, Text3D, Center } from '@react-three/drei';
import './App.css'
import font from '../src/assets/fonts/jsonFont.json';
import { MeshNormalMaterial } from 'three';
import Particles from './Particles';

const App = () => {


  return (
    <>
      <Canvas>
        <OrbitControls />
        <directionalLight position={[0, 1, 5]} intensity={5} />

        <Center>
          <Text3D
            font={font} 
            height={.3} 
            size={1.2}
            bevelEnabled
            bevelSegments={40}
            >
            Show + Tell
            
            <meshPhysicalMaterial
              roughness={0.275}
              metalness={0.44}
              ior={1.348}
              iridescence={0.796}
              color={'#FFFFFF'}
            />
            {/* <MeshWobbleMaterial factor={.1} speed={1} /> */}
          </Text3D>
        </Center>

        <Particles />
      </Canvas>
    </>
  )
}

export default App
