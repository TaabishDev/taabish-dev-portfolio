import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../constants';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={ref} className="section-container" style={{ padding: '100px 20px' }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="section-title heading-font text-gradient"
      >
        Work Experience
      </motion.p>
      
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Background Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '0',
          bottom: '0',
          width: '2px',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 0
        }} />
        
        {/* Animated Glow Line */}
        <motion.div style={{
          position: 'absolute',
          left: '20px',
          top: '0',
          bottom: '0',
          width: '4px',
          background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple))',
          zIndex: 1,
          transformOrigin: 'top',
          scaleY,
          boxShadow: '0 0 15px rgba(0, 210, 255, 0.8)'
        }} />

        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: index * 0.1 }}
            style={{ position: 'relative', paddingLeft: '60px', marginBottom: '50px' }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute',
              left: '9px',
              top: '10px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'var(--bg-color)',
              border: `4px solid ${index % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'}`,
              zIndex: 1,
              boxShadow: `0 0 10px ${index % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'}`
            }} />
            
            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{exp.title}</h3>
                  <h4 style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '5px' }}>{exp.company}</h4>
                </div>
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '5px 15px', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem',
                  color: index % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'
                }}>
                  {exp.duration}
                </div>
              </div>
              <ul style={{ marginTop: '20px', paddingLeft: '20px', color: '#d0d0d0', lineHeight: '1.6' }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
