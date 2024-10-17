import { useState } from 'react';
import * as THREE from 'three';
import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { oldroom } from '@/assets';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
import { StyledPoint } from '@/style';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const OldroomScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={oldroom} />
      <Html position={new THREE.Vector3(467.81, 39.34, -171.92)}>
        <Tooltip title="Island">
          <StyledPoint
            style={{color: 'rgb(46, 133, 52, 1)'}}
            onClick={() => {handleroute('/scene2')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      <Html position={new THREE.Vector3(282.86, -26.30, -410.45)}>
        <Tooltip title="Bedroom">
          <StyledPoint
            style={{color: 'rgb(220, 167, 34, 1)'}}
            onClick={() => {handleroute('/scene3')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      <Html position={new THREE.Vector3(-111.52, -4.80, 486.85)}>
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
