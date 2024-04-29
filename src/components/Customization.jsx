import { Canvas } from "@react-three/fiber";
import React from "react";
import { useNavigate } from "react-router-dom";
import Ring from "./Ring";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Configurator from "./Configurator";
import { CustomizationProvider } from "../contexts/RingCustomization";
 
const Customization = () => {
    const navigate = useNavigate();

    return (
        <>
        <   CustomizationProvider>
                <div className="h-screen w-full fixed top-0">
                    <button 
                        className="absolute top-0 right-0 m-4 font-rubix p-2 bg-pink-800 text-white font-medium rounded-lg z-10" 
                        onClick={() => navigate(-1)}>
                        Go Back Home
                    </button>

                    <Canvas shadows camera={{ position: [0, 0, 150], fov: 40 }}>
                        <Stage environment="city" intensity={0.8}>
                            <Ring scale={-1} rotation={[0, 0.5, Math.PI]} position={[-2, 0, -2]} />
                        </Stage>
                        <BakeShadows />
                        <OrbitControls makeDefault autoRotate />
                    </Canvas>
                    <div className="absolute bottom-4 right-4 w-80 bg-pink-300 text-black px-4 py-2 flex flex-col gap-8 rounded-lg">
                        <Configurator />
                    </div>
                </div>
            </CustomizationProvider>
        </>
    );
};
 
export default Customization;