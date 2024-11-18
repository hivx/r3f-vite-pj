import { create } from 'zustand';
import * as THREE from 'three';

interface Tile {
  id: string; // ID duy nhất cho mỗi tile
  position: [number, number, number];
  rotation: [number, number, number];
  texture: THREE.Texture | null;
  size: [number, number]; // Kích thước của tile (width, height)
  isVisible: boolean; // Tile có hiển thị hay không
  level: number; // Level của tile
  face: string; // Mặt của tile (front, back, left, right, top, bottom)
}

interface TileStore {
  tiles: Tile[]; // Danh sách tất cả các tile
  addTile: (tile: Tile) => void; // Thêm một tile mới
  updateTile: (id: string, updates: Partial<Tile>) => void; // Cập nhật thông tin tile
  removeTile: (id: string) => void; // Xóa tile
  getTilesByLevel: (level: number, face?: string) => Tile[]; // Lấy các tile theo level và face
  setVisibility: (id: string, isVisible: boolean) => void; // Thay đổi trạng thái hiển thị
}

export const useVisible = create<TileStore>((set, get) => ({
  tiles: [],

  // Thêm một tile mới
  addTile: (tile) => {
    set((state) => ({
      tiles: [...state.tiles, tile],
    }));
  },

  // Cập nhật thông tin của một tile dựa trên ID
  updateTile: (id, updates) => {
    set((state) => ({
      tiles: state.tiles.map((tile) =>
        tile.id === id ? { ...tile, ...updates } : tile
      ),
    }));
  },

  // Xóa một tile dựa trên ID
  removeTile: (id) => {
    set((state) => ({
      tiles: state.tiles.filter((tile) => tile.id !== id),
    }));
  },

  // Lấy danh sách các tile theo level và (nếu có) face
  getTilesByLevel: (level, face) => {
    const allTiles = get().tiles;
    return allTiles.filter(
      (tile) => tile.level === level && (!face || tile.face === face)
    );
  },

  // Thay đổi trạng thái hiển thị của một tile
  setVisibility: (id, isVisible) => {
    set((state) => ({
      tiles: state.tiles.map((tile) =>
        tile.id === id ? { ...tile, isVisible } : tile
      ),
    }));
  },
}));

