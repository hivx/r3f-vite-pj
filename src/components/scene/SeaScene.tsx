import { useState } from 'react';
import * as THREE from 'three';
import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { sea } from '@/assets';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
import { StyledPoint } from '@/style';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
      <Html position={new THREE.Vector3(-247.75351422131138, 37.40, 432.51)}>
        <Tooltip title="Road">
          <StyledPoint
            style={{color: 'rgb(46, 60, 61, 1)'}}
            onClick={() => {handleroute('/scene4')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      {circles}
    </>
  );
};
