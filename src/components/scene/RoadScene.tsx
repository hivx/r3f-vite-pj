import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'antd';
import { Html } from '@react-three/drei';
import { DownCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { qiqi, road, sound, video } from '@/assets';
import { StyledPoint } from '@/style';
import { Popup } from '@/popup';

export const RoadScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const RoadInfo = (
    <>
      <p> Nội dung của bức ảnh này là RoadInfo </p>
      <img src={qiqi} alt="Sample Image" style={{ width: '100%' }} />
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
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={road} />

      <Html position={new THREE.Vector3(155.33, -140.13, 453.09)}>
        <Tooltip title="Oldroom">
          <StyledPoint
            style={{color: 'rgb(212, 137, 72, 1)'}}
            onClick={() => {handleroute('/scene1')}}
          >
            <DownCircleTwoTone />
          </StyledPoint>
        </Tooltip>
      </Html>

      <Html position={new THREE.Vector3(-360.41, 10.89, 295.74)}>
        <Tooltip title="Island">
          <StyledPoint
            style={{color: 'rgb(46, 133, 52, 1)'}}
            onClick={() => {handleroute('/scene2')}}
          >
            <LeftCircleTwoTone />
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
        {RoadInfo}
      </Popup>  
      }
    </>
  );
};
