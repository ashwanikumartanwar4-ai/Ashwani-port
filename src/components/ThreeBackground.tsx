import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Neon Arc Shader
const neonArcVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const neonArcFragmentShader = `
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    float intensity = sin(time * 2.0) * 0.5 + 0.5;
    
    // Create arc shape
    float arc = 1.0 - smoothstep(0.0, 0.1, abs(uv.y - 0.5));
    arc *= smoothstep(0.0, 0.3, uv.x) * smoothstep(1.0, 0.7, uv.x);
    
    // Neon glow effect
    vec3 neonBlue = vec3(0.4, 0.8, 1.0);
    vec3 neonPurple = vec3(0.8, 0.4, 1.0);
    vec3 color = mix(neonBlue, neonPurple, sin(time + uv.x * 3.14159) * 0.5 + 0.5);
    
    gl_FragColor = vec4(color * arc * intensity, arc * 0.8);
  }
`;

// Grid Shader
const gridVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const gridFragmentShader = `
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv * 20.0;
    
    // Grid lines
    vec2 grid = abs(fract(uv - 0.5) - 0.5) / fwidth(uv);
    float line = min(grid.x, grid.y);
    float gridValue = 1.0 - min(line, 1.0);
    
    // Pulsing effect
    float pulse = sin(time * 3.0) * 0.3 + 0.7;
    
    vec3 neonBlue = vec3(0.4, 0.8, 1.0);
    gl_FragColor = vec4(neonBlue * gridValue * pulse * 0.3, gridValue * 0.2);
  }
`;

function NeonArc() {
  const meshRef = useRef(null);
  
  const material = useMemo(
    () => new THREE.ShaderMaterial({
      vertexShader: neonArcVertexShader,
      fragmentShader: neonArcFragmentShader,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
    }),
    []
  );

  useFrame((state) => {
    if (material.uniforms) {
      material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 2, -3]} material={material}>
      <planeGeometry args={[8, 3]} />
    </mesh>
  );
}

function CyberGrid() {
  const meshRef = useRef(null);
  
  const material = useMemo(
    () => new THREE.ShaderMaterial({
      vertexShader: gridVertexShader,
      fragmentShader: gridFragmentShader,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
    }),
    []
  );

  useFrame((state) => {
    if (material.uniforms) {
      material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, -5]} rotation={[-Math.PI / 3, 0, 0]} material={material}>
      <planeGeometry args={[20, 20]} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <NeonArc />
      <CyberGrid />
      <ambientLight intensity={0.1} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0" style={{ zIndex: -2 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: '#00000a' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}