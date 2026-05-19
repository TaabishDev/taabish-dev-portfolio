import { motion } from 'framer-motion';
import { personalInfo, education } from '../constants';

export default function About() {
  return (
    <section id="about" className="section-container" style={{ padding: '100px 20px' }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="section-title heading-font text-gradient"
      >
        About Me
      </motion.p>
      
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          style={{ flex: '1 1 400px' }}
        >
          <div className="glass-card" style={{ padding: '40px', height: '100%' }}>
          <h3 className="heading-font glow-text text-gradient" style={{ fontSize: '2rem', marginBottom: '20px', display: 'inline-block' }}>Who am I?</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
            {personalInfo.bio}
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
             <div style={{ padding: '15px', borderLeft: '3px solid var(--accent-blue)', background: 'var(--glass-bg)' }}>
               <h4 style={{ color: 'white', marginBottom: '5px' }}>AI/ML Focus</h4>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Deep Learning, CNNs, Data Pipelines</p>
             </div>
             <div style={{ padding: '15px', borderLeft: '3px solid var(--accent-purple)', background: 'var(--glass-bg)' }}>
               <h4 style={{ color: 'white', marginBottom: '5px' }}>Full Stack Focus</h4>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>React, Spring Boot, Databases</p>
             </div>
          </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <h3 className="heading-font text-gradient glow-text" style={{ fontSize: '1.8rem', paddingLeft: '20px' }}>Education Journey</h3>
          {education.map((edu, index) => (
            <div key={index} className="glass-card" style={{ padding: '25px', borderLeft: `4px solid ${index === 0 ? 'var(--accent-blue)' : 'var(--accent-purple)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '5px' }}>
                <h4 style={{ fontSize: '1.3rem', color: 'white', flex: 1, minWidth: '200px' }}>{edu.degree}</h4>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', fontWeight: 'bold', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '12px' }}>
                  {edu.duration}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{edu.school}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
