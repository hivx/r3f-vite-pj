import * as THREE from 'three';

import { ThreeEvent, useLoader } from '@react-three/fiber';

type DomeProps = {
  onDoubleClick: (event: ThreeEvent<MouseEvent>) => void;
  background: string;
};

export const Imgloader: React.FC<DomeProps> = ({ onDoubleClick, background }) => {
  const texture = useLoader(THREE.TextureLoader, background);

  return (
    <mesh onDoubleClick={onDoubleClick}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial side={THREE.BackSide} map={texture} />
    </mesh>
  );
};
