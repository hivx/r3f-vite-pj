// import React, { memo, useMemo } from 'react';
// import * as THREE from 'three';
// import { v4 as uuidv4 } from 'uuid';

// import { useTexture } from '@react-three/drei';

// export const CreateCube:React.FC = memo(() => {
//     const planeGeo = useMemo(() => new THREE.PlaneGeometry(10, 10), []);
//     // Tải các texture từ URL cho mỗi mặt
//     const textures = useTexture ([
//         'https://dev-api.trvi.tours/tile?side=font&x=1&y=1&level=0', // Mặt trước
//         'https://dev-api.trvi.tours/tile?side=back&x=1&y=1&level=0', // Mặt sau
//         'https://dev-api.trvi.tours/tile?side=up&x=1&y=1&level=0', // Mặt trên
//         'https://dev-api.trvi.tours/tile?side=down&x=1&y=1&level=0', // Mặt dưới
//         'https://dev-api.trvi.tours/tile?side=right&x=1&y=1&level=0', // Mặt phải
//         'https://dev-api.trvi.tours/tile?side=left&x=1&y=1&level=0', // Mặt trái
//     ]);

//     // Định nghĩa vị trí và góc quay cho mỗi mặt của cube
//     const faces: { position: [number, number, number]; rotation: [number, number, number] }[] = [
//         { position: [0, 0, -5], rotation: [0, Math.PI, 0] },
//         { position: [0, 0, 5], rotation: [0, 0, 0] },
//         { position: [0, 5, 0], rotation: [-Math.PI / 2, 0, 0] },
//         { position: [0, -5, 0], rotation: [Math.PI / 2, 0, 0] },
//         { position: [5, 0, 0], rotation: [0, Math.PI / 2, 0] },
//         { position: [-5, 0, 0], rotation: [0, -Math.PI / 2, 0] },
//     ];

//     // Tạo các mesh cho mỗi mặt của cube
//     return (
//         <group>
//             {faces.map((face, index) => (
//                 <mesh key={uuidv4()} geometry={planeGeo} position={face.position} scale={[-1, 1, 1]} rotation={face.rotation}>
//                     <meshBasicMaterial map={textures[index]} side={THREE.BackSide} />
//                 </mesh>
//             ))}
//         </group>
//     );
// });
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Side } from '@/components/resolution';

export const CreateCube: React.FC = () => {
    const level = 0; // Level ban đầu
    const tiles = [
        { x: 0, y: 0, width: 512, height: 512 },
    ];

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
