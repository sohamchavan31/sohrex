import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMousePosition } from '../../hooks/useMousePosition'
import FloatingObjects from './FloatingObjects'

// Camera rig that reacts to mouse movement
function CameraRig() {
  const { x, y } = useMousePosition()
  useFrame(({ camera }) => {
    camera.position.x += (x * 0.4 - camera.position.x) * 0.04
    camera.position.y += (-y * 0.25 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <CameraRig />
      <FloatingObjects />
    </Canvas>
  )
}
