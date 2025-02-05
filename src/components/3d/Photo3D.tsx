import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { Mesh } from 'three';

interface Photo3DProps {
  position: [number, number, number];
}

export function Photo3D({ position }: Photo3DProps) {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[2.5, 3.5]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.2}
        roughness={0.8}
      />
    </mesh>
  );
}