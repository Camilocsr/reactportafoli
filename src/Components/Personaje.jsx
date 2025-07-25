/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 personaje.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';

export function Personaje(props) {
  const { nodes, materials } = useGLTF('./personaje.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
      <mesh geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} />
      <mesh geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} />
      <mesh geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} />
      <mesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} />
      <mesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} />
      <mesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} />
      <mesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} />
      <mesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} />
      <mesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} />
    </group>
  )
}

useGLTF.preload('./personaje.gltf')
