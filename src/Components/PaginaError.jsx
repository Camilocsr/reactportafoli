import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Personaje } from "./Personaje";
import { OrbitControls } from "@react-three/drei";
import { PointLight } from "three";

const Pagina404 = () => {
  return (
    <div className="pagina-404-container">
      <h1 className="pagina-404-title">404</h1>
      <div className="canvas-container">
        <Canvas camera={{ position: [50, 50, 50] }}>
          <ambientLight intensity={1} />
          {/* <PointLight position={[35,35,0]} intensity={0.4}/>
          <PointLight position={[-35,35,0]} intensity={0.4}/> */}
          <Suspense fallback={null}>
            <Personaje scale={[30, 30, 30]} position={[0, -10, 0]} />
          </Suspense>
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
