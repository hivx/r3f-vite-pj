import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { Col, Row, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
// import Image from 'next/image';
import { LeftCircleTwoTone, RightCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import { Html } from '@react-three/drei';

import { Imgloader, LoadingScene } from '@/components';
import { handleDoubleClick } from '@/components/actions';
import { StyledContent, StyledHeader, StyledLayoutPopup, StyledMedia, StyledPoint } from '@/style';
import { Popup } from '@/popup';


type TooltipPosition = {
  id: number;
  title: string;
  route: string;
  position: [number, number, number];
};

type SceneData = {
  id: number;
  name: string;
  background: string;
  image: string;
  video: string;
  audio: string;
  description: string;
  tooltipPositions: TooltipPosition[];
};

export const TestScene: React.FC = () => {
  const [sceneData, setSceneData] = useState<SceneData | null>(null);
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:4000/scenes/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSceneData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  if (!sceneData) {
    console.log("Loading...");
    return <LoadingScene />;
  }

  const bg = sceneData?.background; 

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setIsOpen(false);
  };

  const handleroute = (event: string) => {
    navigate(event);
  };

  const Info = (
    <StyledLayoutPopup>
      <StyledHeader>
        Thông tin chi tiết
      </StyledHeader>
      <StyledContent>
        <Row gutter={[10, 10]} justify="center">
          <Col span={12}>
            <StyledMedia>
              <img src={sceneData?.image} alt="image1" style={{ width: '100%', height: '100%' }} />
            </StyledMedia>
          </Col>
          <Col span={12}>
            <StyledMedia>
              <video controls style={{ width: '100%', height: '100%' }}>
                <source src={sceneData?.video} type="video/mp4" />
                <track kind="captions" srcLang="en" label="English" />
              </video>
            </StyledMedia>
          </Col>
          <Col span={24}>
            <StyledMedia>
              <audio controls  style={{ width: '100%' }}>
                <source src={sceneData?.audio} type="audio/mpeg" />
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

  return (
    <>
      <Imgloader onDoubleClick={(event) => handleDoubleClick(event, setCircles, setIsOpen)} background={bg} />

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
        {Info}
      </Popup>
      }
    </>
  );
};
