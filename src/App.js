import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelMove from "./components/Ihu-move";
import "./App.css";

function App() {
  return (
    <div>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "#111a21",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <ModelMove position={[0.025, -0.9, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
