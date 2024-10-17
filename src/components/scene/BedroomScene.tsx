import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';
import { Html } from '@react-three/drei';
import { RightCircleTwoTone } from '@ant-design/icons';

import { StyledPoint } from '@/style';
import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { bedroom, cat2, sound, video } from '@/assets';
import { Popup } from '@/popup';

export const BedroomScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const BedroomInfo = (
    <>
      <p> Nội dung của bức ảnh này là BedroomInfo </p>
      <img src={cat2} alt="Sample Image" style={{ width: '100%' }} />
      <video controls style={{ width: '100%' }}>
        <source src={video} type="video/mp4" />
      </video>
      <audio controls>
        <source src={sound} type="audio/mpeg" />
      </audio>
    </>
  );

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={bedroom} />

      <Html position={new THREE.Vector3(-310.601, -110.19, -356.64)}>
        <Tooltip title="Oldroom">
          <StyledPoint
            style={{color: 'rgb(212, 137, 72, 1)'}}
            onClick={() => {handleroute('/scene1')}}
          >
            <RightCircleTwoTone />
          </StyledPoint>
        </Tooltip>
      </Html>

      {circles}
      {isOpen && <Popup 
        title="Thông tin chi tiết"
        open={isOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        {BedroomInfo}
      </Popup>  
      }
    </>
  );
};
