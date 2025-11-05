"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import NeuralNetwork from "./NeuralNetwork";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";

const Scene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ScrollControls pages={6}>
          <NeuralNetwork />
          <Scroll html>
            <div className="container max-w-4xl mx-auto px-4">
              <Hero />
              <Experience />
              <Projects />
              <Publications />
              <Education />
              <Skills />
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Scene;
