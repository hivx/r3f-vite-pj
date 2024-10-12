import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import Dome from './Imgloader';

const Scene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const mouseRef = useRef(new THREE.Vector2());
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000));
  const domeRef = useRef<THREE.Mesh>(null);

  // Đặt camera nhìn vào trung tâm scene
  cameraRef.current.position.set(10, 10, 10);
  cameraRef.current.lookAt(sceneRef.current.position);
  cameraRef.current.updateMatrix();

  const handleClick = (event: MouseEvent) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Sử dụng Raycaster để tạo tia từ camera qua tọa độ chuột
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouseRef.current, cameraRef.current);

    if (domeRef.current) {
      const intersects = raycaster.intersectObject(domeRef.current, true);

      if (intersects.length > 0) {
        const intersectPoint = intersects[0].point; 
        console.log("Intersection Point:", intersectPoint.x, intersectPoint.y, intersectPoint.z);

        setCircles((prevCircles) => [
          ...prevCircles,
          createPoint(intersectPoint),
        ]);
      } else {
        console.error("No intersection found.");
      }
    }
  };

  const createPoint = (point: THREE.Vector3) => {
    return (
      <mesh position={point} key={Math.random()}>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color={0x00ff00} />
      </mesh>
    );
  };

useEffect(() => {
  // Thêm sự kiện dblclick để kiểm tra giao điểm khi người dùng double click
  window.addEventListener('dblclick', handleClick);
  return () => {
    window.removeEventListener('dblclick', handleClick);
  };
}, []);

  return (
    <>
      <Dome ref={domeRef} />
      {circles}
    </>
  );
};

export default Scene;
