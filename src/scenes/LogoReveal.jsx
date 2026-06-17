import { useRef, forwardRef } from "react";

const LogoReveal = forwardRef((props, ref) => {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, -50]}>
        <planeGeometry args={[20, 10]} />
        <meshBasicMaterial color="#000000" transparent opacity={0} />
      </mesh>
      <mesh position={[0, 0, -50]}>
        <textGeometry args={["STUDIO ZERO", {}]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
});

LogoReveal.displayName = "LogoReveal";
export default LogoReveal;
