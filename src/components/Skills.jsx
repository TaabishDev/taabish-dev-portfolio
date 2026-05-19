import { motion } from 'framer-motion';
import { skills } from '../constants';

const SkillCategory = ({ title, items, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, type: "spring", stiffness: 100, delay }}
    style={{ flex: '1 1 250px' }}
  >
    <div className="glass-card" style={{ padding: '30px', height: '100%' }}>
      <h3 style={{ color: 'var(--accent-blue)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {items.map((item, idx) => (
        <span 
          key={idx}
          className="tech-tag"
          style={{
            padding: '10px 18px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '25px',
            fontSize: '0.95rem',
            color: 'var(--text-muted)'
          }}
        >
          {item}
        </span>
      ))}
    </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="section-container" style={{ padding: '100px 20px' }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="section-title heading-font text-gradient"
      >
        Technical Arsenal
      </motion.p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <SkillCategory title="Frontend" items={skills.frontend} delay={0.1} />
        <SkillCategory title="Backend & DB" items={[...skills.backend, ...skills.database]} delay={0.2} />
        <SkillCategory title="Blockchain" items={skills.blockchain} delay={0.3} />
        <SkillCategory title="Tools & Concepts" items={skills.tools} delay={0.4} />
      </div>
    </section>
  );
}
