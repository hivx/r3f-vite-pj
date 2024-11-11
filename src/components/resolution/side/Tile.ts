
import * as THREE from 'three';
import { pano } from '@/components/resolution/config.json'
import { AbortFunction } from '@/components/resolution/Types';

type DataProps = {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    x: number;
    y: number;
  };

type TileProps = {
  name: string;
  side: string;
  level: number;
  data: DataProps;
  source: string | ((side: string, level: number, x: number, y: number) => string);
};

class TextureLoader extends THREE.Loader{

    load(
        url: string,
        onLoad?: (texture: THREE.Texture) => void,
        onProgress?: (event: ProgressEvent<EventTarget>) => void | null,
        onError?: (event: ErrorEvent) => void | null
    ): THREE.Texture {
        const texture = new THREE.Texture() as THREE.Texture & AbortFunction;
        const loader = new THREE.ImageLoader(this.manager);
        loader.setCrossOrigin(this.crossOrigin);
        loader.setPath(this.path);
    
        const image = loader.load(
            url,
            function (image) {
                texture.image = image;
                texture.needsUpdate = true;
                if (onLoad !== undefined) {
                    onLoad(texture);
                }
            },
            onProgress,
            (err: unknown) => {
                if (onError && err instanceof ErrorEvent) {
                    onError(err);
                }
            }
        );
    
        texture.abort = () => {
            if (image && typeof image.hasAttribute === "function") {
                image.src = "";
            }
        };
    
        return texture;
    }    
}

export const createTile = ({ name, side, level, data, source }: TileProps) => {
    const url = typeof source == 'function' ? source(side, level, data.x, data.y) : source
    const tileBaseSize = pano.tileBase + pano.maxLevels - level
    const half = tileBaseSize / 2
    const offsetX = data.width / 2 - half + data.offsetX
    const offsetY = half - data.height / 2 - data.offsetY
    const geometry = new THREE.PlaneGeometry(data.width, data.height)
    
    const material: THREE.Material = new THREE.MeshBasicMaterial({
        map: new TextureLoader().load(url),
        depthWrite: true,
        transparent: true,
        opacity: 1,
    });

    material.side = THREE.DoubleSide
    const tile = new THREE.Mesh(geometry, material)
    tile.name = name
    tile.position.set(offsetX, offsetY, 0)
    return tile;
}