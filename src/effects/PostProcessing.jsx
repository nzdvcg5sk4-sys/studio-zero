import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom intensity={2.5} luminanceThreshold={0.1} />
      <ChromaticAberration offset={[0.001, 0.001]} />
    </EffectComposer>
  );
}
