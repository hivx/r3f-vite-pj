import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';
import { Html } from '@react-three/drei';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { cat1, island, sound, video } from '@/assets';
import { StyledPoint } from '@/style';
import { Popup } from '@/popup';

export const IslandScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const IslandInfo = (
    <>
      <p> Nội dung của bức ảnh này là IslandInfo </p>
      <img src={cat1} alt="Sample Image" style={{ width: '100%' }} />
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
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={island} />

      <Html position={new THREE.Vector3(290.51, -15.11, -401.88)}>
        <Tooltip title="Old room">
          <StyledPoint
            style={{ color: 'rgb(212, 137, 72, 1)'}}
            onClick={() => {handleroute('/scene1')}}
          >
            <LeftCircleTwoTone />
          </StyledPoint>
        </Tooltip>
      </Html>

      <Html position={new THREE.Vector3(500.15, -175.82, 177.42)}>
        <Tooltip title="Sea">
          <StyledPoint
            style={{color: 'rgb(0, 204, 255, 1)'}}
            onClick={() => {handleroute('/scene5')}}
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
        {IslandInfo}
      </Popup>  
      }
    </>
  );
};

