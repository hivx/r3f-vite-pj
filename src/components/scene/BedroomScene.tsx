import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Tooltip } from 'antd';
import { Html } from '@react-three/drei';
import { RightCircleTwoTone } from '@ant-design/icons';

import { StyledContent, StyledHeader, StyledLayoutPopup, StyledMedia, StyledPoint } from '@/style';
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
    <StyledLayoutPopup>
      <StyledHeader>
        Thông tin chi tiết
      </StyledHeader>
      <StyledContent>
        <Row gutter={[10, 10]} justify="center">
          <Col span={12}>
            <StyledMedia>
              <img src={cat2} alt="image1" style={{ width: '100%', height: '258px' }} />
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
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={bedroom} />

      {!isOpen &&
        <Html position={new THREE.Vector3(-310.601, -110.19, -356.64)}>
          <Tooltip title="Oldroom">
            <StyledPoint
              onClick={() => {handleroute('/scene1')}}
            >
              <RightCircleTwoTone />
            </StyledPoint>
          </Tooltip>
        </Html>
      }

      {!isOpen && circles}

      {isOpen && <Popup
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
