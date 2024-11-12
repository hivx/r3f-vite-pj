import React, { useEffect } from 'react';
import { Avansel } from '@/components/resolution/build/avansel';

type TilesMatrix = {
    s: number;
    l: number;
    x: number;
    y: number;
}

const Test: React.FC = () => {
    console.log("multi-test");
  
    useEffect(() => {
        const panoElement = document.getElementById('panotest');
  
        if (panoElement) {
          new Avansel(panoElement)
            .multires(
                [
                    { tileSize: 512, size: 512 * 2 ** 0, fallback: true },
                    { tileSize: 512, size: 512 * 2 ** 1 },
                    { tileSize: 512, size: 512 * 2 ** 2 },
                    { tileSize: 512, size: 512 * 2 ** 3 },
                    { tileSize: 512, size: 512 * 2 ** 4 },
                    { tileSize: 512, size: 512 * 2 ** 5 },
                    { tileSize: 512, size: 512 * 2 ** 6 },
                    { tileSize: 512, size: 512 * 2 ** 7 },
                    { tileSize: 512, size: 512 * 2 ** 8 },
                    { tileSize: 512, size: 512 * 2 ** 9 },
                    { tileSize: 512, size: 512 * 2 ** 10 },
                    { tileSize: 512, size: 512 * 2 ** 11 },
                    { tileSize: 512, size: 512 * 2 ** 12 },
                    { tileSize: 512, size: 512 * 2 ** 13 },
                    { tileSize: 512, size: 512 * 2 ** 14 },
                    { tileSize: 512, size: 512 * 2 ** 15 },
                ],
              () => ({ s, l, x, y }: TilesMatrix) => `https://dev-api.trvi.tours/tile?size=512&total=1024&side=${s}&x=${x}&y=${y}&level=${l}`
            )
            .start();
  
          // Thêm sự kiện double-click
          panoElement.addEventListener('dblclick', (event) => {
            console.log('Screen double-clicked', event);
          });
        //   panoElement.addEventListener('click', (event) => {
        //     console.log('Screen clicked', event);
        //   });
        }
    }, []);
  
    return <div id="panotest" style={{ width: '100vw', height: '100vh' }} />;
};  

export default Test;