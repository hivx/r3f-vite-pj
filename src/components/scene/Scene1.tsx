import { useState } from 'react';
import * as THREE from 'three';
import { Dome } from '../Imgloader';
import { handleDoubleClick } from '../actions';
import { oldroom } from '@/assets';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
import { StyledPoint } from '../../style';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const Scene1: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Dome onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={oldroom} />
      <Html position={new THREE.Vector3(467.81, 39.34, -171.92)}>
        <Tooltip title="Transition BG">
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
