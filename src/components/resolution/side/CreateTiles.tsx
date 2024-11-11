// import * as THREE from 'three';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader as ThreeTextureLoader } from 'three';
// import { pano } from '@/components/resolution/config.json';

// type DataProps = {
//     width: number;
//     height: number;
//     offsetX: number;
//     offsetY: number;
//     x: number;
//     y: number;
//   };

// type TileProps = {
//   side: string;
//   level: number;
//   data: DataProps;
//   source: string | ((side: string, level: number, x: number, y: number) => string);
// };

// export const Tile = ({ side, level, data, source }: TileProps) => {
//   const url = typeof source === 'function' ? source(side, level, data.x, data.y) : source;
//   const texture = useLoader(ThreeTextureLoader, url);

//   const tileBaseSize = pano.tileBase + pano.maxLevels - level;
//   const half = tileBaseSize / 2;
//   const offsetX = data.width / 2 - half + data.offsetX;
//   const offsetY = half - data.height / 2 - data.offsetY;
  
//   console.log(data);

//   return (
//     <mesh position={[offsetX, offsetY, 0]}>
//       <planeGeometry args={[data.width, data.height]} />
//       <meshBasicMaterial map={texture} transparent={true} opacity={1} side={THREE.DoubleSide} />
//     </mesh>
//   );
// };

