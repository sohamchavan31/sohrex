import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Single floating object with slow rotation + drift
function FloatMesh({ geometry, position, speed = 0.3, distort = 0.3, color = '#00FF94', scale = 1 }) {
  const meshRef = useRef()
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.18
    meshRef.current.rotation.x += 0.002
    meshRef.current.rotation.y += 0.003
    meshRef.current.rotation.z += 0.001
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={1.5}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.85}
        envMapIntensity={0.5}
      />
    </mesh>
  )
}

// Wireframe ring
function WireRing({ position }) {
  const ref = useRef()
  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.x += 0.004
    ref.current.rotation.z += 0.002
  })
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.9, 0.02, 16, 80]} />
      <meshBasicMaterial color="#00FF94" transparent opacity={0.25} />
    </mesh>
  )
}

// Particle cloud
function Particles({ count = 120 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [count])

  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.015
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#00FF94" transparent opacity={0.35} sizeAttenuation />
    </points>
  )
}

export default function FloatingObjects() {
  return (
    <>
      {/* Main orb — left */}
      <FloatMesh
        geometry={<icosahedronGeometry args={[0.85, 4]} />}
        position={[-3.2, 0.3, -1]}
        speed={0.25}
        distort={0.45}
        color="#00FF94"
        scale={1}
      />

      {/* Secondary orb — right */}
      <FloatMesh
        geometry={<icosahedronGeometry args={[0.55, 3]} />}
        position={[3.5, -0.5, -2]}
        speed={0.35}
        distort={0.3}
        color="#00CC75"
        scale={1}
      />

      {/* Small accent — top right */}
      <FloatMesh
        geometry={<octahedronGeometry args={[0.4, 0]} />}
        position={[2.2, 1.8, -1.5]}
        speed={0.5}
        distort={0.15}
        color="#00FF94"
        scale={1}
      />

      {/* Thin wire ring */}
      <WireRing position={[-2.5, -1.2, -2.5]} />

      {/* Particle field */}
      <Particles count={150} />

      {/* Lighting */}
      <ambientLight intensity={0.04} />
      <pointLight position={[-3, 2, 2]}  color="#00FF94" intensity={2.5} distance={8} />
      <pointLight position={[3, -2, -1]} color="#004422" intensity={1.5} distance={10} />
      <pointLight position={[0, 0, 3]}   color="#001a0d" intensity={1}   distance={6} />
    </>
  )
}
