// import * as THREE from 'three'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Global } from './style';
import Controls from './components/Controls';
import {Scene1} from './components';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Scene2} from './components';

const App: React.FC = () => {
  return (
    <>
      <Global />
      <Canvas>
        <Controls
          enableZoom={false}
          enablePan={true}
          enableDamping={true}
          dampingFactor={0.5}
          autoRotate={false}
          rotateSpeed={-0.5}
        />
        <Suspense fallback={null}>
          <Router>
            <Routes>
              <Route path="/" element={<Scene1 />} />
              <Route path="/scene1" element={<Scene1 />} />
              <Route path="/scene2" element={<Scene2 />} />
            </Routes>
          </Router>
        </Suspense>
      </Canvas>
    </>
  );
};

export default App;
