import { Canvas } from '@react-three/fiber';
import './App.css'

const App = () => {

  const Cube = ({ position, side, color }) => {
    return (
      <mesh position={[2,0,0]}>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
    )
  }

  return (
    <>
      <Canvas>
        <directionalLight position={[0,0,2]} />
        <Cube />
        <mesh position={[-2,0,0]}>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh position={[-2,2.5,0]}>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
        <mesh position={[2,2.5,0]}>
          <boxGeometry args={[2,2,2]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
