import * as THREE from 'three'
import { getFresnelMat } from './getFresnelMat.js'

export function createEarth() {
  // a parent group for the axial tilt
  const tiltGroup = new THREE.Group()
  tiltGroup.rotation.z = -23.4 * Math.PI / 180 // Earth's axial tilt
  
  // define earthGroup for the planet's rotation
  const earthGroup = new THREE.Group()
  tiltGroup.add(earthGroup)

  const loader = new THREE.TextureLoader()
  const geometry = new THREE.SphereGeometry( 1, 64, 32 )

  // earth day material
  const material = new THREE.MeshStandardMaterial({
    map: loader.load('./src/assets/8k_earth_daymap.jpg')
  })
  const earth = new THREE.Mesh( geometry, material )
  earthGroup.add( earth )

  // earth night lights
  const lightsMat = new THREE.MeshBasicMaterial({
    map: loader.load('./src/assets/8k_earth_nightmap.jpg'),
    blending: THREE.AdditiveBlending
  })
  const lightMesh = new THREE.Mesh(geometry, lightsMat)
  earthGroup.add(lightMesh)

  // earth cloud overlay
  const cloudMat = new THREE.MeshStandardMaterial({
    map: loader.load('./src/assets/8k_earth_clouds.jpg'),
    blending: THREE.AdditiveBlending,
  })
  const cloudMesh = new THREE.Mesh(geometry, cloudMat)
  cloudMesh.scale.setScalar(1.002)
  earthGroup.add(cloudMesh)

  // earth glow effect
  const fresnelMat = getFresnelMat();
  const glowMesh = new THREE.Mesh(geometry, fresnelMat)
  glowMesh.scale.setScalar(1.01)
  earthGroup.add(glowMesh)

  return { tiltGroup, earthGroup, cloudMesh, glowMesh }
}