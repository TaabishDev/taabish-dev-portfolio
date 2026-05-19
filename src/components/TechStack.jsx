import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, OrbitControls } from '@react-three/drei';
import { skills } from '../constants';
import { Canvas } from '@react-three/fiber';

const TechOrb = ({ texts }) => {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = time * 0.1;
      group.current.rotation.x = time * 0.1;
    }
  });

  return (
    <group ref={group}>
      {texts.map((text, i) => {
        const phi = Math.acos(-1 + (2 * i) / texts.length);
        const theta = Math.sqrt(texts.length * Math.PI) * phi;
        const x = 3 * Math.cos(theta) * Math.sin(phi);
        const y = 3 * Math.sin(theta) * Math.sin(phi);
        const z = 3 * Math.cos(phi);

        return (
          <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
            <Text
              position={[x, y, z]}
              fontSize={0.4}
              color={i % 2 === 0 ? "#00d2ff" : "#8a2be2"}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {text}
            </Text>
          </Float>
        );
      })}
    </group>
  );
};

export default function TechStack() {
  const allSkills = [
    ...skills.frontend, 
    ...skills.backend, 
    ...skills.database, 
    "Python", "TensorFlow", "React", "Spring Boot", "Machine Learning"
  ].slice(0, 20); // Keep it performant

  return (
    <section id="techstack" className="section-container" style={{ padding: '100px 20px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <p className="section-title heading-font text-gradient" style={{ marginBottom: '20px' }}>
        Tech Universe
      </p>
      <div style={{ flex: 1, width: '100%', position: 'relative', cursor: 'grab' }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <TechOrb texts={allSkills} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
