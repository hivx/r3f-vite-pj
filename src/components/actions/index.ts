export * from './PointClick';



// import * as THREE from 'three';
// import { useRef, useState } from 'react';
// import Dome from './Imgloader';
// import { useThree } from '@react-three/fiber';

// const Scene: React.FC = () => {
//   const [circles, setCircles] = useState<JSX.Element[]>([]);
//   const [showpopup, setShowpopup] = useState<boolean>(false);

//   const mouse = new THREE.Vector2();
//   const { camera } = useThree();
//   const domeRef = useRef<THREE.Mesh>(null);

  // const handlePointerOver = () => {
  //   setShowpopup(true);
  //   console.log('on');
  // };

  // const handlePointerOut = () => {
  //   setShowpopup(false);
  //   console.log('off');
  // };

//   const handleDoubleClick = (event: MouseEvent) => {
//     // Lấy vị trí chuột trong canvas 3D
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     // Sử dụng Raycaster để tạo tia từ camera qua tọa độ chuột
//     const raycaster = new THREE.Raycaster();
//     raycaster.setFromCamera(mouse, camera);

//     if (domeRef.current) {
//       const intersects = raycaster.intersectObject(domeRef.current, true);

//       if (intersects.length > 0) {
//         const intersectPoint = intersects[0].point; 
//         console.log("Intersection Point:", intersectPoint.x, intersectPoint.y, intersectPoint.z);

//         // Thêm hình tròn tại vị trí giao
//         setCircles((prevCircles) => [
//           ...prevCircles,
//           createPoint(intersectPoint, prevCircles.length),
//         ]);
//       } else {
//         console.error("No intersection found.");
//       }
//     }
//   };

//   const createPoint = (point: THREE.Vector3, index: number) => {
//     return (
//       <mesh 
//         onPointerOver={handlePointerOver}
//         onPointerOut={handlePointerOut}
//         position={point}
//         key={index}
//       >
//         <sphereGeometry args={[10, 32, 32]} />
//         <meshBasicMaterial color={0x00ff00} />
//       </mesh>
//     );
//   };

//   return (
//     <>
//       <Dome onDoubleClick={handleDoubleClick} />
//       {circles}
//       {/* {showpopup && <Popup />} */}
//     </>
//   );
// };

// export default Scene;