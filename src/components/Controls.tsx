import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ControlsProps {
    enableZoom?: boolean;
    enableDamping?: boolean;
    enablePan?: boolean;
    dampingFactor?: number;
    autoRotate?: boolean;
    rotateSpeed?: number;
}
  
export const Controls: React.FC<ControlsProps> = ({
    enableZoom = true,
    enablePan = true,
    enableDamping = true,
    dampingFactor = 0.2,
    autoRotate = true,
    rotateSpeed = -0.5,
    }) => {
    const { camera, gl } = useThree();
    const controls = useRef<OrbitControls | null>(null);

    useEffect(() => {
        controls.current = new OrbitControls(camera, gl.domElement);
        controls.current.enableZoom = enableZoom;
        controls.current.enablePan = enablePan;
        controls.current.enableDamping = enableDamping;
        controls.current.dampingFactor = dampingFactor;
        controls.current.autoRotate = autoRotate;
        controls.current.rotateSpeed = rotateSpeed;

        return () => {
        controls.current?.dispose();
        controls.current = null;
        };
    }, [autoRotate, camera, dampingFactor, enableDamping, enablePan, enableZoom, gl, rotateSpeed]);

    useFrame((_, delta) => {
        const speedMultiplier = 50;
        controls.current?.update();

        if (controls.current) {
        controls.current.rotateSpeed = rotateSpeed * speedMultiplier * delta;
        }
    });

    return null;
};

