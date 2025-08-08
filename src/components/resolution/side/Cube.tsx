import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Side, DataProps } from '@/components/resolution';
import { pano } from '@/components/resolution/types/config.json';

function generateTiles(level: number, size: number) {
    const tileSize = size / (level + 1); // Kích thước mỗi tile
    console.log(tileSize);
  
    const tiles: DataProps[] = [];
    for (let x = 0; x <= level; x++) {
      for (let y = 0; y <= level; y++) {
        tiles.push({
          x: x,
          y: y,
          width: tileSize,
          height: tileSize,
        });
      }
    }
    return tiles;
  }

export const CreateCube: React.FC = () => {
    const level = 1; // Level ban đầu
    const tiles = useMemo(() => generateTiles(level, pano.tileBase), [level]);

    const source = (side: string, level: number, x: number, y: number) =>
        `https://dev-api.trvi.tours/tile?side=${side}&x=${x}&y=${y}&level=${level}`;

    const meshes: string[] = []; // Khởi tạo danh sách mesh trống ban đầu

    const sides = ['f', 'b', 'l', 'r', 'u', 'd'];

    return (
        <>
            {sides.map((side) => (
                <mesh key={uuidv4()}>
                    <Side
                        key={side}
                        side={side}
                        level={level}
                        tiles={tiles}
                        source={source}
                        meshes={meshes}
                    />
                </mesh>
            ))}
        </>
    );
};
