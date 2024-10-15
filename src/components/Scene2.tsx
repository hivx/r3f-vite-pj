import { useState } from 'react';
import * as THREE from 'three';
import Dome from './Imgloader';
import handleDoubleClick from './actions/PointClick';
import { island } from '../assets';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
import { StyledPoint } from '../style';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Scene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  const navigate = useNavigate();

  const handleroute = () => {
    navigate('/scene1');
  };

  return (
    <>
      <Dome onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={island} />
      <Html position={new THREE.Vector3(496.4, 2.1, -57.17)}>
        <Tooltip title="Transition BG">
          <StyledPoint
            onClick={handleroute}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      {circles}
    </>
  );
};

export default Scene;
