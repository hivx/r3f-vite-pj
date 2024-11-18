import React, { useState } from 'react';
import * as THREE from 'three';
import { Col, Row, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LeftCircleTwoTone, RightCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import { Html } from '@react-three/drei';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { oldroom, hiho, video, sound } from '@/assets';
import { StyledContent, StyledHeader, 
  StyledLayoutPopup, StyledMedia, StyledPoint } from '@/style';
import { Popup } from '@/popup';

export const OldroomScene: React.FC = () => {
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const OldroomInfo = (
    <StyledLayoutPopup>
      <StyledHeader>
        Thông tin chi tiết
      </StyledHeader>
      <StyledContent>
        <Row gutter={[10, 10]} justify="center">
          <Col span={12}>
            <StyledMedia>
              <img src={hiho} alt="image1" style={{ width: '100%', height: '100%' }} />
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
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={oldroom} />

      {!isOpen &&
        <>
          <Html position={new THREE.Vector3(467.81, 39.34, -171.92)}>
            <Tooltip title="Island">
              <StyledPoint
                onClick={() => { handleroute('/scene2'); } }
              >
                <RightCircleTwoTone />
              </StyledPoint>
            </Tooltip>
          </Html>
          <Html position={new THREE.Vector3(270.86, -26.30, -410.45)}>
            <Tooltip title="Bedroom">
              <StyledPoint
                onClick={() => { handleroute('/scene3'); } }
              >
                <LeftCircleTwoTone />
              </StyledPoint>
            </Tooltip>
          </Html>
          <Html position={new THREE.Vector3(-100.52, 0, 486.85)}>
            <Tooltip title="Road">
              <StyledPoint
                onClick={() => { handleroute('/scene4'); } }
              >
                <UpCircleTwoTone />
              </StyledPoint>
            </Tooltip>
          </Html>
        </>
      }

      {!isOpen && circles }

      {isOpen && <Popup
        open={isOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        {OldroomInfo}
      </Popup>
      }
    </>
  );
};
