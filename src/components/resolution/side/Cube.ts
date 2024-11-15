import * as THREE from 'three';
import { pano } from '@/components/resolution/config.json'

function createCube(): THREE.Mesh {
    const boxSize = pano.tileBase + pano.maxLevels + 2
    const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize)
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
    material.side = THREE.BackSide
    material.opacity = 1
    material.transparent = true
    return new THREE.Mesh( geometry, material )
}

export { createCube }

