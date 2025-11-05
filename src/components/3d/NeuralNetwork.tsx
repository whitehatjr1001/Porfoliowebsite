"use client";

import { useMemo, useRef } from "react";
import { Sphere, Line, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Line2 } from "three-stdlib";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import * as THREE from "three";

type Node = {
  id: string;
  position: [number, number, number];
};

const sections = [
  "home",
  "experience",
  "projects",
  "publications",
  "education",
  "skills",
];

const NeuralNetwork = () => {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);
  const materialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const linesRef = useRef<(Line2 | null)[]>([]);

  const nodes: Node[] = useMemo(() => [
    { id: "home", position: [0, 0, 0] },
    { id: "experience", position: [2, 2, 0] },
    { id: "projects", position: [-2, 2, 0] },
    { id: "publications", position: [2, -2, 0] },
    { id: "education", position: [-2, -2, 0] },
    { id: "skills", position: [0, 4, 0] },
  ], []);

  const edges = useMemo(() => [
    ["home", "experience"],
    ["home", "projects"],
    ["home", "publications"],
    ["home", "education"],
    ["experience", "skills"],
    ["projects", "skills"],
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scroll.offset * Math.PI * 2;
    }
    state.camera.position.z = 5 - scroll.offset * 2;
    state.camera.lookAt(0, 0, 0);

    materialsRef.current.forEach((material, index) => {
      const sectionIndex = index;
      const sectionScroll = scroll.range(sectionIndex / sections.length, 1 / sections.length);
      material.opacity = sectionScroll;
      material.emissiveIntensity = sectionScroll * 2;
    });

    linesRef.current.forEach((line) => {
      if (line) {
        const sectionIndex = Math.floor(linesRef.current.indexOf(line) / 2);
        const sectionScroll = scroll.range(sectionIndex / sections.length, 1 / sections.length);
        if (line.material instanceof LineMaterial) {
          line.material.opacity = sectionScroll;
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <Sphere key={node.id} position={node.position}>
          <meshStandardMaterial color="hotpink" emissive="hotpink" transparent ref={(el) => { if (el) materialsRef.current[index] = el; }} />
        </Sphere>
      ))}
      {edges.map(([startId, endId], index) => {
        const startNode = nodes.find((n) => n.id === startId);
        const endNode = nodes.find((n) => n.id === endId);
        if (!startNode || !endNode) return null;

        const start = new THREE.Vector3(...startNode.position);
        const end = new THREE.Vector3(...endNode.position);

        return <Line key={index} points={[start, end]} color="white" transparent ref={(el) => { if (el) linesRef.current[index] = el as Line2; }} />;
      })}
    </group>
  );
};

export default NeuralNetwork;
