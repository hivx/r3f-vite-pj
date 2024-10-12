import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Dome = forwardRef((props, ref) => {
  const texture = useLoader(THREE.TextureLoader, 'src/assets/image.jpg');
  const domeRef = useRef<THREE.Mesh>(null);

  // Tạo hình cầu với ảnh 360 độ
  useImperativeHandle(ref, () => domeRef.current);

  return (
    <mesh ref={domeRef} {...props}>
      <sphereGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  );
});

export default Dome;
