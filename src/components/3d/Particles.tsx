import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, BufferGeometry } from 'three';

interface ParticlesProps {
  count: number;
}

export function Particles({ count }: ParticlesProps) {
  const points = useRef<Points>(null);
  const geometry = useRef<BufferGeometry>();

  if (!geometry.current) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();
    }

    geometry.current = new THREE.BufferGeometry();
    geometry.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.current.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.1;
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points} geometry={geometry.current}>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}