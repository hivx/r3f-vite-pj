import * as THREE from 'three';
import { Tooltip } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { InfoCircleTwoTone } from '@ant-design/icons';

import { StyledPoint } from '@/style';

// Định kiểu cho SetCircles
type SetCirclesType = React.Dispatch<React.SetStateAction<JSX.Element[]>>;

// Hàm tạo icon khi double-click
const createLoginIcon = (
    point: THREE.Vector3,
    key: string,
    removeCircle: (key: string) => void,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
): JSX.Element => {
  const handleClick = () => {
    console.log(point);
    setIsOpen(true);
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    removeCircle(key);
  };

  return (
    <Html position={point} key={key}>
      <Tooltip title="Thông tin chi tiết">
        <StyledPoint 
          onClick={handleClick}
          onContextMenu={handleContextMenu}
        >
          <InfoCircleTwoTone />
        </StyledPoint>
      </Tooltip>
    </Html>
  );
};

// Hàm xử lý sự kiện double-click
export const handleDoubleClick = (
  event: ThreeEvent<MouseEvent>,
  setCircles: SetCirclesType,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  const key = uuidv4();
  const { point } = event;

  const removeCircle = (removeKey: string) => {
    setCircles(prevCircles => prevCircles.filter(circle => circle.key !== removeKey));
  };

  // Tạo icon mới
  const newIcon = createLoginIcon(point, key, removeCircle, setIsOpen);

  // Cập nhật state với icon mới
  setCircles(prevCircles => [...prevCircles, newIcon]);
};

