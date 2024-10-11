import * as THREE from 'three';
import Dome from "./ImgLoader";
import { useEffect, useRef } from "react";

const Scene: React.FC = () => {
    const mouseRef = useRef(new THREE.Vector2());

    // const handleMouseMove = (event: MouseEvent) => {
    //     mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    //     console.log(mouseRef.current);
    // };

    const handleClick = (event: MouseEvent) => {
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

        console.log("Mouse Clicked at: ", mouseRef.current);
    };

    useEffect(() => {
        
        window.addEventListener('click', handleClick);
        return () => {
            
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <Dome />
        </>
    );
};

export default Scene;
