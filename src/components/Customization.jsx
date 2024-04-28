import { Canvas } from "@react-three/fiber";
import React from "react";
import { useNavigate } from "react-router-dom";
import Experience from "./Experience";
 
const Customization = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen w-full fixed top-0">
                <button 
                    className="top-0 right-0 m-4 font-rubix p-2 bg-pink-800 text-white font-medium rounded-lg z-10" 
                    onClick={() => navigate(-1)}>
                    Go Back Home
                </button>
                <Canvas>
                    <color attach="background" args={["#e5d8eb"]} />
                    <fog attach="fog" args={["#e5d8eb", 10, 20]} />
                    <Experience />
                    
                </Canvas>
                
            </div>
        </>
    );
};
 
export default Customization;