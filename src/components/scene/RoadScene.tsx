import React, { useState } from 'react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Tooltip } from 'antd';
import { Html } from '@react-three/drei';
import { DownCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons';

import { Imgloader } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { qiqi, road, sound, video } from '@/assets';
import { StyledContent, StyledHeader, StyledLayoutPopup, StyledMedia, StyledPoint } from '@/style';
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
    <StyledLayoutPopup>
      <StyledHeader>
        Thông tin chi tiết
      </StyledHeader> 
      <StyledContent>
        <Row gutter={[10, 10]} justify="center">
          <Col span={12}>
            <StyledMedia>
              <img src={qiqi} alt="image1" style={{ width: '100%', height: '258px' }} />
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
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={road} />

      {!isOpen &&
      <>
        <Html position={new THREE.Vector3(155.33, -140.13, 453.09)}>
          <Tooltip title="Oldroom">
            <StyledPoint
              onClick={() => {handleroute('/scene1')}}
            >
              <DownCircleTwoTone />
            </StyledPoint>
          </Tooltip>
        </Html>
        <Html position={new THREE.Vector3(-360.41, 10.89, 295.74)}>
          <Tooltip title="Island">
            <StyledPoint
              onClick={() => {handleroute('/scene2')}}
            >
              <LeftCircleTwoTone />
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
        {RoadInfo}
      </Popup>  
      }
    </>
  );
};
