import * as THREE from 'three'

// camera
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1500);
camera.position.set(-35, 70, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));


const raycaster = new THREE.Raycaster();
const clickPointer = new THREE.Vector2();
const moveMouse = new THREE.Vector2();

window.addEventListener('click', event => {
	clickPointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	clickPointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
  raycaster.setFromCamera(clickPointer, camera);
  const found = raycaster.intersectObject (THREE.Scene.children);
})

window.addEventListener('mousemove', event => {
  clickPointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	clickPointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


})
























// import * as THREE from 'three';
// import { useFrame } from '@react-three/fiber';
// import { useRef } from 'react';

// interface HotspotProps {
//   position: [number, number, number]; // Tọa độ để gắn hotspot
//   onClick: () => void; // Hàm callback khi click
// }

// const PointClick: React.FC<HotspotProps> = ({ position, onClick }) => {
//   const meshRef = useRef<THREE.Mesh>(null); // Tạo ref để tham chiếu đến mesh

//   // Tạo hiệu ứng cho hotspot (tùy chọn)
//   useFrame(() => {
//     if (meshRef.current) {
//       const mesh = meshRef.current; // Lưu trữ tham chiếu mesh
//       const scaleValue = 1 + Math.sin(Date.now() * 0.002) * 0.1; // Nhấp nháy hoặc phồng lên
//       mesh.scale.set(scaleValue, scaleValue, scaleValue);
//     }
//   });

//   const handlePointerOver = () => {
//     if (meshRef.current) {
//       const material = meshRef.current.material;
//       if (Array.isArray(material)) {
//         material.forEach((mat) => (mat as THREE.MeshBasicMaterial).color.set('orange'));
//       } else {
//         (material as THREE.MeshBasicMaterial).color.set('orange'); // Thay đổi màu khi hover
//       }
//     }
//   };

//   const handlePointerOut = () => {
//     if (meshRef.current) {
//       const material = meshRef.current.material;
//       if (Array.isArray(material)) {
//         material.forEach((mat) => (mat as THREE.MeshBasicMaterial).color.set('yellow')); // Trở về màu gốc khi không hover
//       } else {
//         (material as THREE.MeshBasicMaterial).color.set('yellow'); // Trở về màu gốc khi không hover
//       }
//     }
//   };

//   return (
//     <mesh
//       ref={meshRef}
//       position={position}
//       onClick={onClick}
//       onPointerOver={handlePointerOver}
//       onPointerOut={handlePointerOut}
//     >
//       <sphereGeometry args={[0.1, 100, 100]} /> {/* Kích thước hình cầu */}
//       <meshBasicMaterial color="yellow" /> {/* Đổi màu thành vàng */}
//     </mesh>
//   );
// };

// export default PointClick;
