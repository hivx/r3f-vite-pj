import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Global } from './style';
import { Controls } from '@/components';
import { AppRoutes } from '@/routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
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
          <AppRoutes />
        </Suspense>
      </Canvas>
    </Router>
  );
};

export default App;
