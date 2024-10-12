// import * as THREE from 'three'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Global } from './style';
import Controls from './components/Controls';
import Scene from './components/Scene';

// const Circle = () => {
//   const circleRef = useRef<THREE.Mesh>(null);

//   return (
//     <mesh ref={circleRef}>
//       <circleGeometry args={[0.5, 100]} />
//       <meshBasicMaterial color="green" side={THREE.DoubleSide} />
//     </mesh>
//   );
// };

const App: React.FC = () => {
  return (
    <>
      <Global />
      <Canvas>
        <Controls
          enableZoom={false}
          enablePan={true}
          enableDamping={true}
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.5}
        />
        <Suspense fallback={null}>
          <group>
            <Scene />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
