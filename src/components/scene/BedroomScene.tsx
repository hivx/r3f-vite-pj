import { useState } from 'react';
import * as THREE from 'three';
import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { bedroom } from '@/assets';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
import { StyledPoint } from '@/style';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
