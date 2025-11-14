import { useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import { createEarth } from '../threeJS/earth.js'
import { createEnvironment } from '../threejs/environment.js'
import { createPin } from '../threejs/pins.js'
import { convertLatLonToVec3, pinUpVector } from '../threejs/utils.js'
import { addGlobeFeatures } from '../threejs/globeFeatures.js'


function Pin({ latitude, longitude, color = 0xff0000 }) {
  const pin = useMemo(() => {
    const position = convertLatLonToVec3(latitude, longitude, 1)
    
    const pinMesh = createPin(color)
    
    pinMesh.position.copy(position)
    pinMesh.quaternion.setFromUnitVectors(
      pinUpVector,
      position.clone().normalize()
    );
    return pinMesh
  }, [latitude, longitude, color])

  return <primitive object={pin} />
}

function SceneContent({ showGlobeFeatures, isRotating, pins }) {
  const { tiltGroup, earthGroup, cloudMesh } = useMemo(() => {
    return createEarth()
  }, [])
  
  const globeFeaturesGroup = useMemo(() => {
    return addGlobeFeatures()
  }, [])

  const scene = useMemo(() => {
    const s = new THREE.Scene()
    createEnvironment(s)
    earthGroup.add(globeFeaturesGroup)
    return s
  }, [earthGroup, globeFeaturesGroup])

  useEffect(() => {
    globeFeaturesGroup.visible = showGlobeFeatures;
  }, [showGlobeFeatures, globeFeaturesGroup])

  useFrame(() => {
    cloudMesh.rotation.y += 0.00002
    if (isRotating) {
      earthGroup.rotation.y += 0.0002
    }
  })

  return (
    <>
      <primitive object={scene} /> 
      <primitive object={tiltGroup} />
      <OrbitControls />

      <primitive object={earthGroup}>
        {pins.map(pin => (
          <Pin 
            key={pin.id} 
            latitude={pin.latitude} 
            longitude={pin.longitude} 
          />
        ))}
      </primitive>
    </>
  )
}

export default function GlobeBackground({ showGlobeFeatures, isRotating, pins }) {
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
      }}
    >
      <color attach="background" args={['black']} />
      <SceneContent 
        showGlobeFeatures={showGlobeFeatures} 
        isRotating={isRotating} 
        pins={pins}
      />
    </Canvas>
  )
}