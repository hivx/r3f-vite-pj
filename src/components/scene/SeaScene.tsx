import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Tooltip } from 'antd';
import { RightCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import { Html } from '@react-three/drei';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { tof, sea, sound, video } from '@/assets';
import { StyledContent, StyledHeader, 
  StyledLayoutPopup, StyledMedia, StyledPoint } from '@/style';
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
    <StyledLayoutPopup>
      <StyledHeader>
        Thông tin chi tiết
      </StyledHeader>
      <StyledContent>
        <Row gutter={[10, 10]} justify="center">
          <Col span={12}>
            <StyledMedia>
              <img src={tof} alt="image1" style={{ width: '100%', height: '258px' }} />
            </StyledMedia>
          </Col>
          <Col span={12}>
            <StyledMedia>
              <video controls style={{ width: '100%', height: '100%' }}>
                <source src={video} type="video/mp4" />
                <track kind="captions" srcLang="en" label="English" />
              </video>
            </StyledMedia>
          </Col>
          <Col span={24}>
            <StyledMedia>
              <audio controls  style={{ width: '100%' }}>
                <source src={sound} type="audio/mpeg" />
                <track kind="captions" srcLang="en" label="English" />
              </audio>
            </StyledMedia>
          </Col>
          <Col span={24}>
            <StyledMedia>
              Mô tả của trang này là hình ảnh local, video ant demo, sound demo.
            </StyledMedia>
          </Col>
        </Row>
      </StyledContent>
    </StyledLayoutPopup>
  );

  const navigate = useNavigate();

  const handleroute = (event: string) => {
    navigate(event);
  };

  return (
    <>
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={sea} />

      {!isOpen &&
      <>
        <Html position={new THREE.Vector3(-482.19, 60.80, -120.68)}>
          <Tooltip title="Oldroom">
            <StyledPoint
              onClick={() => {handleroute('/scene1')}}
            >
              <UpCircleTwoTone />
            </StyledPoint>
          </Tooltip>
        </Html>
        <Html position={new THREE.Vector3(-240.75, 60.40, 432.51)}>
          <Tooltip title="Road">
            <StyledPoint
              onClick={() => {handleroute('/scene4')}}
            >
              <RightCircleTwoTone />
            </StyledPoint>
          </Tooltip>
        </Html>
        <Html position={new THREE.Vector3(500.48, 30.19, 133.43)}>
          <Tooltip title="Island">
            <StyledPoint
              onClick={() => {handleroute('/scene2')}}
            >
              <RightCircleTwoTone />
            </StyledPoint>
          </Tooltip>
        </Html>
      </>
      }

      {!isOpen && circles}

      {isOpen && <Popup 
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
