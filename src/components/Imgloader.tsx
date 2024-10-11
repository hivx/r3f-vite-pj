import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

const Dome: React.FC = () => {
    const texture = useLoader(THREE.TextureLoader, 'src/assets/image.jpg');
    return (
        <mesh>
            <sphereGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    );
};

export default Dome;