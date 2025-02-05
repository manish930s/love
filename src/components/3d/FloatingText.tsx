import { Text3D, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

interface FloatingTextProps {
  position: [number, number, number];
  text: string;
}

export function FloatingText({ position, text }: FloatingTextProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial color="#4299e1" />
        </Text3D>
      </Center>
    </group>
  );
}