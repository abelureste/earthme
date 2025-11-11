import * as THREE from 'three'
import { getStarfield } from './getStarfield.js'

export function createEnvironment(scene) {
  // star surround
  const stars = getStarfield({numStars: 2000})
  scene.add(stars)

  // sunlight position
  const sunlight = new THREE.DirectionalLight(0xffffff)
  sunlight.position.set(-2, 0.5, 1.5)
  scene.add(sunlight)
}