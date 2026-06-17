import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import Singularity from "./Singularity";
import ExplosionParticles from "./ExplosionParticles";
import GalaxyField from "./GalaxyField";
import LogoReveal from "./LogoReveal";

export default function BigBangScene() {
  const singularityRef = useRef();
  const explosionRef = useRef();
  const logoRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(camera.position, {
      z: 5,
      duration: 2,
    })
      .to(
        singularityRef.current.scale,
        {
          x: 0.1,
          y: 0.1,
          z: 0.1,
          duration: 1,
        },
        "<"
      )
      .to(
        explosionRef.current,
        {
          progress: 1,
          duration: 2,
        },
        "<"
      )
      .to(
        camera.position,
        {
          z: -100,
          duration: 4,
        },
        "<"
      )
      .to(
        logoRef.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=2"
      );
  }, [camera]);

  return (
    <>
      <Singularity ref={singularityRef} />
      <ExplosionParticles ref={explosionRef} />
      <GalaxyField />
      <LogoReveal ref={logoRef} />
    </>
  );
}
