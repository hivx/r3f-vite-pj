import React from 'react';
// import { Controls } from '@/components';
import { Side } from '@/components/resolution/side/Side';

const tilesData = [
  { x: 0, y: 0, width: 256, height: 256, offsetX: 0, offsetY: 0 },
  { x: 0, y: 0, width: 256, height: 256, offsetX: 0, offsetY: 0 },

];

const source = (side: string, level: number, x: number, y: number) => `/src/assets/multires-1/${level}/${side}${x}_${y}.jpg`;
const meshes = [''];

const App: React.FC = () => {
  // return (<Controls />);
  return(
    <Side 
      side={"d"}
      level={1}
      tiles={tilesData}
      source={source}
      meshes={meshes}
    />
  );
};

export default App;




