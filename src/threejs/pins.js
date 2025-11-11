// /src/pins.js
import * as THREE from 'three'
import { convertLatLonToVec3, pinUpVector } from './utils.js'

/**
 * @param {THREE.ColorRepresentation} color
 * @returns {THREE.Group} A THREE.Group object representing the pin.
 */

function createPin(color) {
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

export function addPins(earthGroup) {
  // new york city
  const nycPosition = convertLatLonToVec3(40.71, -74.00, 1)
  const nycPin = createPin(0xff0000);
  nycPin.position.copy(nycPosition);
  nycPin.quaternion.setFromUnitVectors(
    pinUpVector, 
    nycPosition.clone().normalize()
  );
  earthGroup.add(nycPin);

  // london
  const londonPosition = convertLatLonToVec3(51.50, -0.12, 1)
  const londonPin = createPin(0xffff00); 
  londonPin.position.copy(londonPosition);
  londonPin.quaternion.setFromUnitVectors(
    pinUpVector, 
    londonPosition.clone().normalize()
  );
  earthGroup.add(londonPin);

  // sydney
  const sydneyPosition = convertLatLonToVec3( -33.86, 151.20, 1)
  const sydneyPin = createPin(0xff0000); 
  sydneyPin.position.copy(sydneyPosition);
  sydneyPin.quaternion.setFromUnitVectors(
    pinUpVector, 
    sydneyPosition.clone().normalize()
  );
  earthGroup.add(sydneyPin);

  // north pole pin
  const northPolePosition = convertLatLonToVec3(90, 0, 1)
  const northPolePin = createPin(0x00ffff); 
  northPolePin.position.copy(northPolePosition);
  northPolePin.quaternion.setFromUnitVectors(
    pinUpVector, 
    northPolePosition.clone().normalize()
  );
  earthGroup.add(northPolePin);

  // south pole pin
  const southPolePosition = convertLatLonToVec3(-90, 0, 1)
  const southPolePin = createPin(0x00ffff); 
  southPolePin.position.copy(southPolePosition);
  southPolePin.quaternion.setFromUnitVectors(
    pinUpVector, 
    southPolePosition.clone().normalize()
  );
  earthGroup.add(southPolePin);
}