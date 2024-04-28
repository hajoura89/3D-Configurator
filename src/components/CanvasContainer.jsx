import { Canvas } from '@react-three/fiber';
import { ItemModel } from './ItemModel';
import { Environment, OrbitControls } from '@react-three/drei';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loading } from './Loading';
import { Suspense } from 'react';
gsap.registerPlugin(ScrollTrigger)

export const CanvasContainer = () => {
    return (
        <Canvas camera={{
            position: [
            4.742922067308307, 2.2387122409413784, 1.2218255872664914,
            ],

        }}>
            <OrbitControls
				enablePan={false}
				enableRotate={false}
				enableZoom={false}
			/>
			<Suspense fallback={<Loading />}>
				<ItemModel />
			</Suspense>
			<Environment preset="city" />
        </Canvas>
      );
};