import * as THREE from 'three'
import { convertLatLonToVec3, pinUpVector } from './utils'
import { createPin } from './pins.js'

export function addGlobeFeatures() {
  const featuresGroup = new THREE.Group()

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
    featuresGroup.add(meridianLine);
  }

  // latitude lines
  for (let lat = -60; lat <= 60; lat += 30) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 5) {
      points.push(convertLatLonToVec3(lat, lon, lineRadius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const latitudeLine = new THREE.Line(geometry, lineMaterial);
    featuresGroup.add(latitudeLine);
  }

  // pole pins
  
  const polePinScale = 4 // scale pins
  const polePinColor = 0xc9c9c9 // pin color

  // north pole pin
  const northPolePin = createPin(polePinColor);
  northPolePin.scale.setScalar(polePinScale);
  const northPolePosition = convertLatLonToVec3(90, 0, 1);
  northPolePin.position.copy(northPolePosition);
  northPolePin.quaternion.setFromUnitVectors(
    pinUpVector, 
    northPolePosition.clone().normalize()
  );
  featuresGroup.add(northPolePin);

  // south pole pin
  const southPolePin = createPin(polePinColor);
  southPolePin.scale.setScalar(polePinScale); 
  const southPolePosition = convertLatLonToVec3(-90, 0, 1);
  southPolePin.position.copy(southPolePosition);
  southPolePin.quaternion.setFromUnitVectors(
    pinUpVector, 
    southPolePosition.clone().normalize()
  );
  featuresGroup.add(southPolePin);

  return featuresGroup
}