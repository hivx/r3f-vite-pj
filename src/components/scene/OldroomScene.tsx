import React, { useState } from 'react';
import * as THREE from 'three';
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import { Html } from '@react-three/drei';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { oldroom, hiho, video, sound } from '@/assets';
import { StyledPoint } from '@/style';
import { Popup } from '@/popup';

export const OldroomScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const modalChildren = (
    <>
      <p> Nội dung của bức ảnh này là ......... </p>
      <img src={hiho} alt="Sample Image" style={{ width: '100%' }} />
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
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles)} background={oldroom} />
      <Html position={new THREE.Vector3(467.81, 39.34, -171.92)}>
        <Tooltip title="Island">
          <StyledPoint
            style={{ color: 'rgb(46, 133, 52, 1)' }}
            onClick={showModal}
          >
            <LoginOutlined />
          </StyledPoint>
        </Tooltip>
      </Html>
      {isOpen && <Popup 
        title="Thông tin chi tiết"
        open={true}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        {modalChildren}
      </Popup>  
      }
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
