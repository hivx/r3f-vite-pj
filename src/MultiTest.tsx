import React, { useEffect } from 'react';
import { Avansel } from '@/components/resolution/build/avansel';

type TilesMatrix = {
  s: string;
  l: string;
  x: string;
  y: string;
};

export const MultiTest: React.FC = () => {
  useEffect(() => {
    const panoElement = document.getElementById('pano3');

    if (panoElement) {
      new Avansel(panoElement)
        .multires(
          [
            { tileSize: 476, size: 476, fallback: true },
            { tileSize: 512, size: 952 },
          ],
          (tile: TilesMatrix) => {
            const { s, l, x, y } = tile;
            const level = parseInt(l) + 1; // tăng cấp độ
            return `/src/assets/multires-1/${level}/${s}${y}_${x}.jpg`; // trả về URL của tile
          }
        )
        .start();

      // Thêm sự kiện listener
      panoElement.addEventListener('dblclick', (event) => {
        console.log('Double-click', event);
      });
    }
  }, []);

  return <div id="pano3" style={{ width: '100vw', height: '100vh' }} />;
};
