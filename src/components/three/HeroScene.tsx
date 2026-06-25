"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function GlassSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Sphere ref={meshRef} args={[1.35, 64, 64]} scale={1.15}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.28}
          speed={1.5}
          roughness={0.15}
          metalness={0.85}
          transparent
          opacity={0.55}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40 max-md:hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_55%)]" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        className="h-full w-full"
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-4, -2, 2]} intensity={0.8} color="#3b82f6" />
        <GlassSphere />
      </Canvas>
    </div>
  );
}

export function HeroGlow() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
