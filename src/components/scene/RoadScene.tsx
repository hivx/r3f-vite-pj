import { useState } from 'react';
import * as THREE from 'three';
import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { road } from '@/assets';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
import { StyledPoint } from '@/style';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const RoadScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={road} />
      <Html position={new THREE.Vector3(145.33, -153.13, 453.09)}>
        <Tooltip title="Oldroom">
          <StyledPoint
            style={{color: 'rgb(212, 137, 72, 1)'}}
            onClick={() => {handleroute('/scene1')}}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      <Html position={new THREE.Vector3(-402.41, -11.89, 295.74)}>
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
