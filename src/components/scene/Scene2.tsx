import { useState } from 'react';
import * as THREE from 'three';
import { Dome } from '@/components';
import { handleDoubleClick } from '@/components';
import { island } from '@/assets';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
import { StyledPoint } from '@/style';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export const Scene2: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Dome onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={island} />
      <Html position={new THREE.Vector3(295.51, -26.11, -401.88)}>
        <Tooltip title="Transition BG">
          <StyledPoint
            style={{ color: 'rgb(212, 137, 72, 1)'}}
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
