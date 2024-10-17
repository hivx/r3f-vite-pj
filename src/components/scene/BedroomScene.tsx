import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';
import { Html } from '@react-three/drei';
import { LoginOutlined } from '@ant-design/icons';

import { StyledPoint } from '@/style';
import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { bedroom } from '@/assets';

export const BedroomScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={bedroom} />
      <Html position={new THREE.Vector3(-307.45, -68.54, -387.10)}>
        <Tooltip title="Oldroom">
          <StyledPoint
            style={{color: 'rgb(212, 137, 72, 1)'}}
            onClick={() => {handleroute('/scene1')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      {circles}
    </>
  );
};
