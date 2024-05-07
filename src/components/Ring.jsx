/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ring.glb 
*/

import React, { useRef } from 'react'
import { MeshRefractionMaterial, useGLTF, useTexture } from '@react-three/drei'
import { useCustomization } from "../contexts/RingCustomization";
import { useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three-stdlib';


export default function Ring(props) {
  const { nodes, materials } = useGLTF('/ring.glb')
  const { diamondColor, firstMetalColor, secondMetalColor } = useCustomization();

  // const texture = useLoader(RGBELoader, '/aerodynamics_workshop_1k.hdr')

  // texture.crossOrigin = null ;

  
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.043, -0.093]}>
        <group rotation={[0, 0, 0.9]} scale={1.063}>
          
          
          <mesh castShadow receiveShadow geometry={nodes.diamonds.geometry} material={nodes.diamonds.material} material-color={diamondColor.color}>
              {/* <MeshRefractionMaterial envMap={texture} aberrationStrength={0.02} toneMapped={false} /> */}
           </mesh>  

          {/* <mesh castShadow receiveShadow geometry={nodes.diamonds.geometry} material={nodes.diamonds.material} material-color={diamondColor.color}/> */}
          
          <mesh castShadow receiveShadow geometry={nodes.diamonds001.geometry} material={nodes.diamonds001.material} material-color={diamondColor.color}>
              {/* <MeshRefractionMaterial envMap={texture} aberrationStrength={0.02} toneMapped={false} /> */}
          </mesh>  
          <mesh castShadow receiveShadow geometry={nodes.diamonds002.geometry} material={nodes.diamonds002.material} material-color={diamondColor.color}>
              {/* <MeshRefractionMaterial envMap={texture} aberrationStrength={0.02} toneMapped={false} /> */}
          </mesh>  
          <mesh castShadow receiveShadow geometry={nodes.diamonds003.geometry} material={nodes.diamonds003.material} material-color={diamondColor.color}>
              {/* <MeshRefractionMaterial envMap={texture} aberrationStrength={0.02} toneMapped={false} /> */}
          </mesh>  
          <mesh castShadow receiveShadow geometry={nodes.diamonds004.geometry} material={nodes.diamonds004.material} material-color={diamondColor.color}>
              {/* <MeshRefractionMaterial envMap={texture} aberrationStrength={0.02} toneMapped={false} /> */}
          </mesh>  
          <mesh castShadow receiveShadow geometry={nodes.diamonds005.geometry} material={nodes.diamonds005.material} material-color={diamondColor.color}>
              {/* <MeshRefractionMaterial envMap={texture} aberrationStrength={0.02} toneMapped={false} /> */}
          </mesh>  
          
          <mesh castShadow receiveShadow geometry={nodes.gold.geometry} material={materials.gold} material-color={firstMetalColor.color}>

          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.silver.geometry} material={materials.silver} material-color={secondMetalColor.color}  />

        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ring.glb')
