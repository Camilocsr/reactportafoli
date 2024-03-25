import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Personaje } from "./Personaje";
import { OrbitControls } from "@react-three/drei";

const Pagina404 = () => {
  return (
    <div className="pagina-404-container">
      <h1 className="pagina-404-title">Bienvenido a la página 404</h1>
      <div className="canvas-container">
        <Canvas camera={{ position: [50, 50, 50] }}>
          <ambientLight intensity={1} />
          <Personaje scale={[30, 30, 30]} position={[0, -10, 0]} />
          <Controls />
        </Canvas>
      </div>
    </div>
  );
}

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    controlsRef.current.update();
  });

  return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} enableZoom enablePan />;
};

export default Pagina404;
