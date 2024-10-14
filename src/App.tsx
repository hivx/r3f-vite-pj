// import * as THREE from 'three'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Global } from './style';
import Controls from './components/Controls';
import Scene from './components/Scene';

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
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
