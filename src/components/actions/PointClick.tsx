import * as THREE from 'three';
import { ThreeEvent } from '@react-three/fiber';
import { v4 as uuidv4 } from 'uuid';
import { Html } from '@react-three/drei';
import { LoginOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { StyledPoint } from '../../style';

// Định kiểu cho SetCircles
type SetCirclesType = React.Dispatch<React.SetStateAction<JSX.Element[]>>;

// Hàm tạo icon LoginOutlined khi double-click
const createLoginIcon = (
    point: THREE.Vector3,
    key: string,
    removeCircle: (key: string) => void
): JSX.Element => {
  const handleClick = () => {
    console.log(point);
  };

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    removeCircle(key);
  };

  return (
    <Html position={point} key={key}>
      <Tooltip title="Transittion BG">
        <StyledPoint 
          onClick={handleClick}
          onContextMenu={handleContextMenu}
        >
          <LoginOutlined />
        </StyledPoint>
      </Tooltip>
    </Html>
  );
};

// Hàm xử lý sự kiện double-click
const handleDoubleClick = (
  event: ThreeEvent<MouseEvent>,
  setCircles: SetCirclesType
): void => {
  const key = uuidv4();
  const { point } = event;

  // console.log("Point-clicked:", point);

  const removeCircle = (removeKey: string) => {
    setCircles(prevCircles => prevCircles.filter(circle => circle.key !== removeKey));
  };

  // Tạo icon mới
  const newIcon = createLoginIcon(point, key, removeCircle);

  // Cập nhật state với icon mới
  setCircles(prevCircles => [...prevCircles, newIcon]);
};

export default handleDoubleClick;
