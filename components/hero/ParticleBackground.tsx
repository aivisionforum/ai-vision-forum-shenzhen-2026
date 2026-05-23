"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Procedural wireframe lattice — an abstract circuit-network mesh suggesting
 * robotic-form geometry. A 3×3×3 grid of wireframe cubes, slightly jittered,
 * each connected to its neighbours by edges. Rotates slowly on Y. A small set
 * of magenta vertices glow at random nodes.
 */
function WireframeLattice() {
  const groupRef = useRef<THREE.Group>(null);

  // Build the lattice geometry once.
  const { lineGeometry, pointsGeometry } = useMemo(() => {
    const gridSize = 3; // 3x3x3 = 27 nodes
    const spacing = 3.2;
    const offset = ((gridSize - 1) * spacing) / 2;

    const nodes: THREE.Vector3[] = [];
    // Deterministic jitter so SSR/CSR match if ever rendered server-side.
    // Math.random is fine here — Canvas only mounts client-side.
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          nodes.push(
            new THREE.Vector3(
              x * spacing - offset + (Math.random() - 0.5) * 0.4,
              y * spacing - offset + (Math.random() - 0.5) * 0.4,
              z * spacing - offset + (Math.random() - 0.5) * 0.4,
            ),
          );
        }
      }
    }

    // Build edges between immediate axis-aligned neighbours
    const indexOf = (x: number, y: number, z: number) =>
      x * gridSize * gridSize + y * gridSize + z;

    const linePositions: number[] = [];
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          const a = nodes[indexOf(x, y, z)];
          if (x + 1 < gridSize) {
            const b = nodes[indexOf(x + 1, y, z)];
            linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
          if (y + 1 < gridSize) {
            const b = nodes[indexOf(x, y + 1, z)];
            linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
          if (z + 1 < gridSize) {
            const b = nodes[indexOf(x, y, z + 1)];
            linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3),
    );

    // Pick 6 random nodes for magenta glow points
    const accentCount = 6;
    const pointPositions: number[] = [];
    const usedIndices = new Set<number>();
    while (usedIndices.size < accentCount && usedIndices.size < nodes.length) {
      usedIndices.add(Math.floor(Math.random() * nodes.length));
    }
    usedIndices.forEach((i) => {
      pointPositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
    });

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(pointPositions, 3),
    );

    return { lineGeometry, pointsGeometry };
  }, []);

  // Slow continuous Y-axis rotation. `useFrame` is paused automatically when
  // the tab is hidden (r3f behavior) — no manual visibility handling needed.
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0003;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#00E5FF" transparent opacity={0.45} />
      </lineSegments>
      <points geometry={pointsGeometry}>
        <pointsMaterial
          color="#FF006E"
          size={0.22}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
    </group>
  );
}

/**
 * Three.js canvas wrapper. Transparent so the PCB-trace SVG behind it shows
 * through. Sits absolute inset-0 — caller controls z-index via parent.
 */
export function ParticleBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <ambientLight intensity={0.5} />
        <WireframeLattice />
      </Canvas>
    </div>
  );
}
