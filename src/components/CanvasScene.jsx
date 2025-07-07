import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const CanvasScene = () => {
  return (
    <Canvas className="h-screen w-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <OrbitControls enableZoom={false} />
      <Sphere visible args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#915EFF"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Canvas>
  )
}

export default CanvasScene
