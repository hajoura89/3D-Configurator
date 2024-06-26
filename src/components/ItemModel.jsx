import {useGLTF, useTexture } from '@react-three/drei'
import {useThree } from '@react-three/fiber';
import gsap from "gsap";
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const ItemModel = () => {
    const {nodes, materials} = useGLTF("ring.glb ");
    const {scene, camera} = useThree();
    const tl = gsap.timeline();

    // const texture = useTexture('Texture/diamond_.jpg')
    // const texture = useTexture('Texture/pinkish-diamond.jpg')
    const texture = useTexture('Texture/diamond.jpg')
    
    useLayoutEffect(() => {
		new ScrollTrigger({});
		// component About.tsx
		tl.to(camera.position, {
			x: 4.0,
			y: 2.0,
			z: 1.8,
			scrollTrigger: {
				trigger: ".second-section",
				start: "top bottom",
				end: "top top",
				scrub: true,
				immediateRender: false,
			},
		})
        .to(scene.position, {
            x: 4.01,
            y: 0.76,
            z: 2.70,
            scrollTrigger: {
                trigger: ".second-section",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
        })

        .to(scene.rotation, {
            x: 0.47,
            y: -3.48,
            z: -0.21,
            scrollTrigger: {
                trigger: ".second-section",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
        })

		// component - CustomizeNow.tsx
        .to(camera.position, {
            x: -2.0,
            y: 0.0,
            z: -0.20,
            scrollTrigger: {
                trigger: ".third-section",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
        })
        .to(scene.position, {
            x: 4.01,
            y: -1.24,
            z: 1.70,
            scrollTrigger: {
                trigger: ".third-section",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
        })
        .to(scene.rotation, {
            x: 0.47,
            y: -3.48,
            z: -0.21,
            scrollTrigger: {
                trigger: ".third-section",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
        });
	}, []);


    return (
        <>
            <directionalLight 
                castShadow 
                position={[-2.38, 1.32 , 0.74]}
                intensity={5}
            />
            <group 
                castShadow
                scale={1.063}
                position={[3, 1, -1]} 
                rotation={[0, 0.3, 0.9]}
            >
                <mesh castShadow geometry={nodes.gold.geometry} material={materials.gold} />
                <mesh castShadow geometry={nodes.silver.geometry} material={materials.silver} />
                <mesh castShadow geometry={nodes.diamonds002.geometry}  material={nodes.diamonds002.material}>
                    <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
                </mesh>
                <mesh castShadow geometry={nodes.diamonds001.geometry} material={nodes.diamonds001.material} >
                    <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
                </mesh>
                <mesh castShadow geometry={nodes.diamonds003.geometry} material={nodes.diamonds003.material} >
                    <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
                </mesh>
                <mesh castShadow geometry={nodes.diamonds005.geometry} material={nodes.diamonds005.material} >
                    <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
                </mesh>
                <mesh castShadow geometry={nodes.diamonds.geometry} material={nodes.diamonds.material} >
                    <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
                </mesh>
                <mesh castShadow geometry={nodes.diamonds004.geometry} material={nodes.diamonds004.material} >
                    <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
                </mesh>
                
            </group>
        </>
    );
};