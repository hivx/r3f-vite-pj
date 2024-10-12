// import * as THREE from 'three';
// import Scene from './Scene';

// export const createBox = () => {
//     const scale = { x: 6, y: 6, z: 6 };
//     const pos = { x: 15, y: scale.y / 2, z: 15 };
  
//     const box = new THREE.Mesh(new THREE.BufferGeometry(), 
//         new THREE.MeshPhongMaterial({ color: 0xDC143C }));
//     box.position.set(pos.x, pos.y, pos.z);
//     box.scale.set(scale.x, scale.y, scale.z);
//     box.castShadow = true;
//     box.receiveShadow = true;
//     Scene.add(box);
  
//     box.userData.draggable = true;
//     box.userData.name = 'BOX';
// }