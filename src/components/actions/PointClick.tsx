import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Định nghĩa type cho props của handleDoubleClick (cho setCircles)
type SetCirclesType = React.Dispatch<React.SetStateAction<JSX.Element[]>>;

// Hàm tạo một hình tròn
const createCircleMesh = (point: THREE.Vector3): JSX.Element => (
  <mesh 
    position={point} 
    key={uuidv4()}
  >
    <sphereGeometry args={[10, 32, 32]} />
    <meshBasicMaterial color={0x00ff00} />
  </mesh>
);

// Hàm xử lý sự kiện double-click
const handleDoubleClick = (
  event: ThreeEvent<MouseEvent>, 
  setCircles: SetCirclesType
) => {
  const { point } = event;

  console.log("Point-clicked:", point);

  // Tạo một hình tròn tại điểm giao và cập nhật state
  const newCircle = createCircleMesh(point);

  setCircles(prevCircles => [...prevCircles, newCircle]);
};

export default handleDoubleClick;
