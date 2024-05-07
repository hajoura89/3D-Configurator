import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ring from "./Ring";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Configurator from "./Configurator";
import { CustomizationProvider } from "../contexts/RingCustomization";
 
const Customization = () => {
    const navigate = useNavigate();
    const canvas = useRef(null);
    const [canvasImage, setCanvasImage] = useState(null);

    const captureCanvas = async () => {
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const dataURL = canvas.current.toDataURL();
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "customization.png";
        a.click();

     };


    return (
        <>
            <CustomizationProvider>
                <div className="flex h-screen w-full">
                    <div className="w-3/4 relative">
                        <button 
                            className="absolute top-0 left-0 m-4 font-rubix p-2 bg-pink-800 text-white font-medium rounded-lg z-10" 
                            onClick={() => navigate(-1)}>
                            Go Back
                        </button>
                        <button 
                            className="absolute top-0 right-0 m-4 font-rubix p-2 bg-pink-800 text-white font-medium rounded-lg z-10" 
                            onClick={captureCanvas}>
                            Capture
                        </button>
                       
                        <Canvas ref={canvas} shadows camera={{ position: [0, 0, 150], fov: 40 }}>
                            <Stage environment="city" intensity={0.8}>
                                <Ring scale={-1} rotation={[0, 0.5, Math.PI]} position={[-2, 0, -2]} />
                            </Stage>
                            <BakeShadows />
                            <OrbitControls makeDefault autoRotate />
                        </Canvas>
                    </div>
                    <div className="w-1/4 bg-pink-50 text-black px-4 py-2 flex flex-col gap-8 rounded-lg">
                        <Configurator />
                    </div>
                </div>
            </CustomizationProvider>
        </>
    );
};
 
export default Customization;
