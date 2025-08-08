import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

import { CreateTile, DataProps } from '@/components/resolution';

type SideProps = {
    side: string;
    level: number;
    tiles: DataProps[];
    source: string | ((side: string, level: number, x: number, y: number) => string);
    meshes: string[];
};

const sidePosition = (side: string) => {
    const tileBaseSize = 10;
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
    const position = sidePosition(side);
    const rotation = sideRotation(side);

    const tileMeshes = useMemo(() => {
        // Tạo url một lần
        return tiles.map((data) => {
            const name = `${side}-${level}x${data.x}x${data.y}`;
            const url = typeof source === 'function' ? source(side, level, data.x, data.y) : source;
            console.log(url);
    
            return (
                <CreateTile
                    key={`${side}-${level}x${data.x}x${data.y}`}
                    name={name}
                    side={side}
                    level={level}
                    data={data}
                    source={url}
                />
            );
        });
    }, [tiles, level, side, source]);

    useEffect(() => {
        const group = groupRef.current;
        if (group) {
            group.position.set(position[0], position[1], position[2]);
            group.rotation.set(rotation[0], rotation[1], rotation[2]);
            group.renderOrder = level + 1;
            group.name = `${side}-${level}`;
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
        <group ref={groupRef}>
            {tileMeshes}
        </group>
    );
};

