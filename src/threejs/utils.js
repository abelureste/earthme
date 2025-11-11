import * as THREE from 'three'

/**
 * @param {number} lat Latitude in degrees
 * @param {number} lon Longitude in degrees
 * @param {number} radius The radius of the sphere
 * @returns {THREE.Vector3}
 */
export function convertLatLonToVec3(lat, lon, radius) {
  // degrees to radians
  const latRad = lat * (Math.PI / 180);
  const lonRad = -lon * (Math.PI / 180);

  // calculate coordinates
  const x = radius * Math.cos(latRad) * Math.cos(lonRad);
  const y = radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.sin(lonRad);

  return new THREE.Vector3(x, y, z);
}

export const pinUpVector = new THREE.Vector3(0, 1, 0);