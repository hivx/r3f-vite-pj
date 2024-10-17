import { Route, Routes } from 'react-router-dom';
import { OldroomScene, IslandScene, BedroomScene, RoadScene, SeaScene } from '@/components';


export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<OldroomScene />} />
      <Route path="/scene1" element={<OldroomScene />} />
      <Route path="/scene2" element={<IslandScene />} />
      <Route path="/scene3" element={<BedroomScene />} />
      <Route path="/scene4" element={<RoadScene />} />
      <Route path="/scene5" element={<SeaScene />} />
    </Routes>
  );
};
