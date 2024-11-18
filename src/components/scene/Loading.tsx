import React from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';

import { LoadingOutlined } from '@ant-design/icons';
import { Html } from '@react-three/drei';

import { StyledPoint } from '@/style';

export const LoadingScene: React.FC = () => {

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <Html position={new THREE.Vector3(467.81, 39.34, -171.92)}>
        <StyledPoint
          onClick={() => { handleroute('/scene2'); } }
        >
          <LoadingOutlined />
        </StyledPoint>
    </Html>
  );
};
