// /src/threejs/pins.js
import * as THREE from 'three'
import { convertLatLonToVec3, pinUpVector } from './utils.js'

/**
 * @param {THREE.ColorRepresentation} color
 * @returns {THREE.Group} A THREE.Group object representing the pin.
 */

// 1. Make sure this function is exported (which it is)
export function createPin(color) {
  const pinGroup = new THREE.Group();

  const pinHeadRadius = 0.008;
  const pinBodyHeight = 0.03;
  const pinBodyRadius = 0.003;

  const headMaterial = new THREE.MeshBasicMaterial({ color: color });
  const headGeometry = new THREE.SphereGeometry(pinHeadRadius, 16, 16);
  const pinHead = new THREE.Mesh(headGeometry, headMaterial);
  pinHead.position.y = pinBodyHeight;
  pinGroup.add(pinHead);

  const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c9c9 });
  const bodyGeometry = new THREE.CylinderGeometry(pinBodyRadius, pinBodyRadius, pinBodyHeight, 16);
  const pinBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
  pinBody.position.y = pinBodyHeight / 2;
  pinGroup.add(pinBody);

  return pinGroup;
}

// 2. Remove the old, hard-coded 'addPins' function
/*
export function addPins(earthGroup) {
  // ...all the old hard-coded pins are deleted...
}
*/