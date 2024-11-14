// import { useRef, useState, useEffect } from 'react';
// import { Group, PerspectiveCamera, Vector3, Vector2, Raycaster } from '@react-three/fiber';
// import { useThree } from '@react-three/fiber';
// import { createSide, updateSide, deleteSide } from './common/Side.js';
// import { tilesFor } from '../utils';
// import { createCube } from './common/cube';
// import { pano } from '../../config.json';
// import Controls from '../../systems/Controls.js';

// const Multires = ({ levels, source, controls }) => {
//   const [visible, setVisible] = useState({
//     pixels: [],
//     maxLevel: 0,
//     sides: {},
//     meshes: []
//   });

//   const [pixelsMin] = useState(0.5);
//   const [pixelsMax] = useState(5);
//   const { camera, gl } = useThree();  // useThree hook provides camera access

//   const cubeRef = useRef(createCube());

//   const createPano = () => {
//     return new Group();
//   };

//   const pixelsBySize = (size, fov) => {
//     const height = gl.domElement.parentElement.clientHeight;
//     const number = height / (0.9 * fov * size / 100);
//     return {
//       number,
//       visible: number >= pixelsMin && number <= pixelsMax
//     };
//   };

//   const pointSideXY = (point) => {
//     const size = pano.maxLevels + pano.tileBase + 2;
//     const mul = 1000000;
//     const hs = size / 2;
//     const hsMul = hs * mul;
//     const x = Math.round(point.x * mul);
//     const y = Math.round(point.y * mul);
//     const z = Math.round(point.z * mul);
//     if (z === hsMul) return { side: 'f', x: 1 - (point.x + hs) / size, y: 1 - (point.y + hs) / size };
//     if (z === -hsMul) return { side: 'b', x: (point.x + hs) / size, y: 1 - (point.y + hs) / size };
//     if (x === hsMul) return { side: 'l', x: (point.z + hs) / size, y: 1 - (point.y + hs) / size };
//     if (x === -hsMul) return { side: 'r', x: (hs - point.z) / size, y: 1 - (point.y + hs) / size };
//     if (y === hsMul) return { side: 'u', x: 1 - (point.x + hs) / size, y: (point.z + hs) / size };
//     if (y === -hsMul) return { side: 'd', x: 1 - (point.x + hs) / size, y: 1 - (point.z + hs) / size };
//   };

//   // Create an event listener for the camera move
//   useEffect(() => {
//     const onCameraMove = () => {
//       // Your logic for camera move
//     };

//     controls.canvas.addEventListener('cameraMove', onCameraMove);
//     controls.canvas.addEventListener('fovChanged', onCameraMove);

//     return () => {
//       controls.canvas.removeEventListener('cameraMove', onCameraMove);
//       controls.canvas.removeEventListener('fovChanged', onCameraMove);
//     };
//   }, [controls]);

//   // Function to handle updating the visible data
//   const updatePosition = () => {
//     const pos = controls.position();
//     onPosFovChanged(pos);
//     addUpdateVisible();
//     if (camera.fov !== pos.fov) {
//       camera.fov = pos.fov;
//       camera.updateProjectionMatrix();
//     }
//   };

//   const onPosFovChanged = (pos) => {
//     calcVisibleData(pos);
//   };

//   const calcVisibleData = (pos) => {
//     const levels = levels.length;
//     let hasVisible = false;
//     let maxLevel = 0;
//     for (let i = 0; i < levels; i++) {
//       const item = pixelsBySize(levels[i].size, pos.fov);
//       if (levels[i].fallback) item.visible = true;
//       if (item.visible && !hasVisible) hasVisible = true;
//       if (item.visible && i > maxLevel) maxLevel = i;
//       visible.pixels[i] = item;
//     }
//     setVisible({ ...visible, maxLevel });
//   };

//   return (
//     <group ref={cubeRef}>
//       {/* Render pano here */}
//     </group>
//   );
// };

// export default Multires;
