import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Html } from '@react-three/drei';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { sea } from '@/assets';
import { StyledPoint } from '@/style';

export const SeaScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={sea} />
      <Html position={new THREE.Vector3(-482.19, 45.80, -120.68)}>
        <Tooltip title="Oldroom">
          <StyledPoint
            style={{color: 'rgb(212, 137, 72, 1)'}}
            onClick={() => {handleroute('/scene1')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      <Html position={new THREE.Vector3(-247.75, 37.40, 432.51)}>
        <Tooltip title="Road">
          <StyledPoint
            style={{color: 'rgb(46, 60, 61, 1)'}}
            onClick={() => {handleroute('/scene4')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      <Html position={new THREE.Vector3(480.48, 17.19, 133.43)}>
        <Tooltip title="Island">
          <StyledPoint
            style={{color: 'rgb(46, 133, 52, 1)'}}
            onClick={() => {handleroute('/scene2')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      {circles}
    </>
  );
};
