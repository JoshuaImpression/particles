import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Particles = () => {
    const particles = useRef();
    const verticesAmount = 2000;
    const positionArray = new Float32Array(verticesAmount * 3);

    for(let i = 0; i < verticesAmount * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 10.0;
    }
    
    useFrame((_,delta) => {
        particles.current.rotation.y += delta * 0.1;
    });

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute 
                    attach="attributes-position" 
                    count={positionArray.length / 3} 
                    itemSize={3}
                    array={positionArray}
                />

            </bufferGeometry>
            <pointsMaterial size={0.02} />
        </points>
    )

}

export default Particles;