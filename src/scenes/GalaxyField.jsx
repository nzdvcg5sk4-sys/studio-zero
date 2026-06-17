import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function GalaxyField() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 100000;

    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 200;
      const angle = radius * 0.3;

      posArray[i * 3] = Math.cos(angle) * radius;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 50;
      posArray[i * 3 + 2] = Math.sin(angle) * radius;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: "#ffffff",
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    return particlesMesh;
  }, []);

  return <primitive object={particles} ref={pointsRef} />;
}