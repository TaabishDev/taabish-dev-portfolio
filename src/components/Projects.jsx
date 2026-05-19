import { motion } from 'framer-motion';
import { projects, personalInfo } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="section-container" style={{ padding: '100px 20px' }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="section-title heading-font text-gradient"
      >
        Projects
      </motion.p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: index * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <div className="glass-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}>
             <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '15px' }}>{project.title}</h3>
             <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
               {project.description}
             </p>
             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
               {project.tech.map((t, i) => (
                 <span key={i} className="tech-tag" style={{ 
                   fontSize: '0.8rem', 
                   padding: '6px 12px', 
                   background: 'rgba(255,255,255,0.05)', 
                   borderRadius: '20px',
                   border: '1px solid rgba(255,255,255,0.1)',
                   color: 'var(--text-muted)' 
                 }}>
                   {t}
                 </span>
               ))}
             </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}
      >
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="neon-btn">
          View All Projects on GitHub
        </a>
      </motion.div>
    </section>
  );
}
