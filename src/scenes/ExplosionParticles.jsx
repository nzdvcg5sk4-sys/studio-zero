import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ExplosionParticles() {
  const particlesRef = useRef();
  const geometryRef = useRef();
  const velocityRef = useRef([]);

  const count = 50000;

  useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocity = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      velocity.push({
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
        z: (Math.random() - 0.5) * speed,
      });
    }

    if (geometryRef.current) {
      geometryRef.current.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    }

    velocityRef.current = velocity;
  }, [count]);

  useFrame((state, delta) => {
    if (particlesRef.current && geometryRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;

      const pos = geometryRef.current.attributes.position.array;

      for (let i = 0; i < count; i++) {
        pos[i * 3] += velocityRef.current[i].x * delta;
        pos[i * 3 + 1] += velocityRef.current[i].y * delta;
        pos[i * 3 + 2] += velocityRef.current[i].z * delta;
      }

      geometryRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial size={0.1} color="#ffffff" sizeAttenuation />
    </points>
  );
}
