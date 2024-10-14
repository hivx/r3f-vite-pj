import * as THREE from 'three';
import { ThreeEvent, useLoader } from '@react-three/fiber';

type DomeProps = {
  onDoubleClick: (event: ThreeEvent<MouseEvent>) => void;
};

const Dome: React.FC<DomeProps> = ({ onDoubleClick }) => {
  const texture = useLoader(THREE.TextureLoader, 'src/assets/image.jpg');

  return (
    <mesh onDoubleClick={onDoubleClick}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

export default Dome;
