import React, { useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import { createEarth } from '../threeJS/earth.js'
import { createEnvironment } from '../threejs/environment.js'
import { addPins } from '../threejs/pins.js'

function SceneContent() {
  const { tiltGroup, earthGroup, cloudMesh } = useMemo(() => {
    return createEarth()
  }, [])
  
  const scene = useMemo(() => {
    const s = new THREE.Scene()
    createEnvironment(s)
    addPins(earthGroup)
    return s
  }, [earthGroup])

  useFrame(() => {
    cloudMesh.rotation.y += 0.00002
    earthGroup.rotation.y += 0.0002
  })

  return (
    <>
      <primitive object={scene} /> 
      <primitive object={tiltGroup} />
      <OrbitControls />
    </>
  )
}

export default function GlobeBackground() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
      gl={{ antialias: true }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        //zIndex: -1,
      }}
    >
      <color attach="background" args={['black']} />
      <SceneContent />
    </Canvas>
  )
}