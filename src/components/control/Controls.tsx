import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Global } from '@/style';
import { AppRoutes } from '@/routes';

export const Controls: React.FC = () => {
    const isRoom = true;
    const [fov, setFov] = useState<number>(50);
    const [isRotate, setIsRotate] = useState<boolean>(false);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (isRoom) {
                const fovChange = event.deltaY > 0 ? 10 : -10;
                setFov((prevFov) => {
                    const newFov = prevFov + fovChange;
                    return Math.max(15, Math.min(100, newFov));
                });
            }
        };
    
        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isRoom]);
    
    const handleRotate = () => {
        setIsRotate(false);
    };

    return (
        <Router>
            <Global />
            <Canvas onClick={handleRotate}>
                <PerspectiveCamera 
                    makeDefault
                    position={[0, 0, 5]}
                    fov={fov}
                />
                <OrbitControls
                    enableZoom={false}
                    enablePan={true}
                    enableDamping={true}
                    dampingFactor={0.2}
                    autoRotate={isRotate}
                    rotateSpeed={-0.2}
                />
                <Suspense fallback={null}>
                    <AppRoutes />
                </Suspense>
            </Canvas>
        </Router>
    );
};
