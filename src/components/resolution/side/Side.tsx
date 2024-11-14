import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { v4 as uuidv4 } from 'uuid';
import { CreateTile } from '@/components/resolution';
import { pano } from '@/components/resolution/config.json';
import { DataProps } from '@/components/resolution/Types';
import * as THREE from 'three';

type SideProps = {
    side: string;
    level: number;
    tiles: DataProps[];
    source: string | ((side: string, level: number, x: number, y: number) => string);
    meshes: string[];
};

const sidePosition = (side: string, level: number) => {
    const tileBaseSize = pano.tileBase + pano.maxLevels - level;
    const half = tileBaseSize / 2;
    switch (side) {
        case 'f': return [0, 0, half];
        case 'b': return [0, 0, -half];
        case 'l': return [half, 0, 0];
        case 'r': return [-half, 0, 0];
        case 'u': return [0, half, 0];
        case 'd': return [0, -half, 0];
        default: return [0, 0, 0];
    }
};

const sideRotation = (side: string) => {
    switch (side) {
        case 'f': return [0, THREE.MathUtils.degToRad(180), 0];
        case 'b': return [0, THREE.MathUtils.degToRad(0), 0];
        case 'l': return [0, THREE.MathUtils.degToRad(-90), 0];
        case 'r': return [0, THREE.MathUtils.degToRad(90), 0];
        case 'd': return [THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(180), 0];
        case 'u': return [THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(180), 0];
        default: return [0, 0, 0];
    }
};

export const Side: React.FC<SideProps> = ({ side, level, tiles, source, meshes }) => {
    const groupRef = useRef<THREE.Group>(null);

    const url = typeof source === 'function' ? source(side, level, tiles[0].x, tiles[0].y) : source;
    console.log(url);

    const position = sidePosition(side, level);
    const rotation = sideRotation(side);

    const tileMeshes = useMemo(() => {
        return tiles.map((data) => {
            const name = `${level}-${side}-${data.x}-${data.y}`;
            const key = uuidv4();
            return (
                <CreateTile
                    key={key}
                    name={name}
                    side={side}
                    level={level}
                    data={data}
                    source={url}
                />
            );
        });
    }, [tiles, level, side, url]);

    useEffect(() => {
        const group = groupRef.current;
        if (group) {
            group.position.set(position[0], position[1], position[2]);
            group.rotation.set(rotation[0], rotation[1], rotation[2]);
            group.renderOrder = level + 1;
            group.name = `${level}-${side}`;
        }
    }, [position, rotation, level, side]);

    useEffect(() => {
        const group = groupRef.current;

        if (group) {
            group.children.forEach((child) => {
                if (!meshes.includes(child.name)) {
                    const mesh = child as THREE.Mesh;
                    const material = mesh.material as THREE.Material;
                    if (mesh.geometry) mesh.geometry.dispose();
                    if (material) material.dispose();
                    group.remove(mesh);
                }
            });
        }
    }, [meshes]);

    useEffect(() => {
        const group = groupRef.current;
        return () => {
            if (group) {
                group.children.forEach((child) => {
                    const mesh = child as THREE.Mesh;
                    const material = mesh.material as THREE.Material;
                    if (mesh.geometry) mesh.geometry.dispose();
                    if (material) material.dispose();
                });
            }
        };
    }, []);

    return (
        <Canvas>
            <group ref={groupRef}>
                {tileMeshes}
            </group>
        </Canvas>
    );
};

