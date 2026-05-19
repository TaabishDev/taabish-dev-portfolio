import { motion } from 'framer-motion';
import { certifications } from '../constants';

export default function Certifications() {
  return (
    <section id="certifications" className="section-container" style={{ padding: '100px 20px' }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="section-title heading-font text-gradient"
      >
        Certifications & Achievements
      </motion.p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', width: '100%' }}>
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100, delay: index * 0.1 }}
            style={{ width: '100%', height: '100%' }}
          >
            <div className="glass-card" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px', width: '100%', height: '100%' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              minWidth: '60px',
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: 'white',
              fontSize: '0.8rem',
              textAlign: 'center'
            }}>
              {cert.badge.split(' ')[0]}
            </div>
            <div>
              <h4 className="glow-text" style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px', cursor: 'default' }}>{cert.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cert.date}</p>
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
