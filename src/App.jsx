import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import BigBangScene from "./scenes/BigBangScene";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 70 }}>
      <ambientLight intensity={0.2} />

      <BigBangScene />

      <EffectComposer>
        <Bloom intensity={2} />
      </EffectComposer>
    </Canvas>
  );
}
