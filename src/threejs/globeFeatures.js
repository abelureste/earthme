import * as THREE from 'three'
import { convertLatLonToVec3 } from 'utils.js'

export function addGlobeFeatures(earthGroup) {
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xaaaaaa,
    transparent: true,
    opacity: 0.35,
    depthTest: false
  });
  
  const lineRadius = 1.003; 

  // 12 meridians every 30 degrees
  for (let lon = -180; lon < 180; lon += 30) {
    const points = [];
    for (let lat = 90; lat >= -90; lat -= 5) { 
      points.push(convertLatLonToVec3(lat, lon, lineRadius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const meridianLine = new THREE.Line(geometry, lineMaterial);
    earthGroup.add(meridianLine);
  }

  // latitude lines
  for (let lat = -60; lat <= 60; lat += 30) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 5) {
      points.push(convertLatLonToVec3(lat, lon, lineRadius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const latitudeLine = new THREE.Line(geometry, lineMaterial);
    earthGroup.add(latitudeLine);
  }
}