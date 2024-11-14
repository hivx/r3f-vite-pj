import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Plane } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { pano } from '@/components/resolution/config.json';
import { DataProps } from '@/components/resolution/Types';

type TileProps = {
  name: string;
  side: string;
  level: number;
  data: DataProps;
  source: string | ((side: string, level: number, x: number, y: number) => string);
}

export const CreateTile: React.FC<TileProps> = ({ name, side, level, data, source }) => {
  // Tạo URL cho tile dựa trên source
  const url =
    typeof source === 'function' ? source(side, level, data.x, data.y) : source;

  // Sử dụng useLoader để tải texture
  const texture = useLoader(THREE.TextureLoader, url);

  // Tính toán vị trí tile
  const tileBaseSize = pano.tileBase + pano.maxLevels - level;
  const half = tileBaseSize / 2;
  const offsetX = data.width / 2 - half + data.offsetX;
  const offsetY = half - data.height / 2 - data.offsetY;

  const meshRef = useRef<THREE.Mesh | null>(null);

  // Cấu trúc của Plane và MeshBasicMaterial trong Three Fiber
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.set(offsetX, offsetY, 0);
      meshRef.current.name = name;
    }
  }, [offsetX, offsetY, name]);

  // Thuộc tính của Plane và MeshBasicMaterial trong Three Fiber
  return (
    <Plane
      args={[data.width, data.height]} // Tạo plane với kích thước từ dữ liệu
      position={[offsetX, offsetY, 0]} // Đặt vị trí của tile
      rotation={[0, 0, 0]} // Xoay nếu cần
      name={name} // Đặt tên cho mesh
    >
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.DoubleSide}
        transparent
        opacity={1}
      />
    </Plane>
  );

};

