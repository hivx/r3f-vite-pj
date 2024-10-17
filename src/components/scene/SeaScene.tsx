import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';
import { RightCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import { Html } from '@react-three/drei';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { tof, sea, sound, video } from '@/assets';
import { StyledPoint } from '@/style';
import { Popup } from '@/popup';

export const SeaScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const SeaInfo = (
    <>
      <p> Nội dung của bức ảnh này là SeaInfo </p>
      <img src={tof} alt="Sample Image" style={{ width: '100%' }} />
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
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={sea} />

      <Html position={new THREE.Vector3(-482.19, 60.80, -120.68)}>
        <Tooltip title="Oldroom">
          <StyledPoint
            style={{color: 'rgb(212, 137, 72, 1)'}}
            onClick={() => {handleroute('/scene1')}}
          >
            <UpCircleTwoTone />
          </StyledPoint>
        </Tooltip>
      </Html>

      <Html position={new THREE.Vector3(-240.75, 60.40, 432.51)}>
        <Tooltip title="Road">
          <StyledPoint
            style={{color: 'rgb(46, 60, 61, 1)'}}
            onClick={() => {handleroute('/scene4')}}
          >
            <RightCircleTwoTone />
          </StyledPoint>
        </Tooltip>
      </Html>

      <Html position={new THREE.Vector3(500.48, 30.19, 133.43)}>
        <Tooltip title="Island">
          <StyledPoint
            style={{color: 'rgb(46, 133, 52, 1)'}}
            onClick={() => {handleroute('/scene2')}}
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
        {SeaInfo}
      </Popup>  
      }
    </>
  );
};
