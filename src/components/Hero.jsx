import { motion } from 'framer-motion';
import { personalInfo } from '../constants';

export default function Hero() {
  return (
    <section id="home" className="section-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '100vh',
      gap: '40px'
    }}>
      <div style={{ flex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', marginBottom: '10px' }}
          className="heading-font"
        >
          Hi, I'm
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginBottom: '20px' }}
        >
          <h1
            style={{
              fontSize: '4.5rem',
              lineHeight: 1.1,
              color: 'white',
              cursor: 'default',
              margin: 0
            }}
            className="heading-font text-gradient glow-text"
          >
            {personalInfo.name}
          </h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '30px' }}
        >
          {personalInfo.role}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ display: 'flex', gap: '20px' }}
        >
          <a href="#projects" className="neon-btn" style={{ padding: '15px 30px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            Explore Work
          </a>
          <a href="#contact" className="neon-btn-secondary" style={{ padding: '15px 30px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            Contact Me
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="animate-float"
        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
      >
        <div className="profile-img-container" style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          padding: '10px',
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
          boxShadow: 'var(--neon-shadow)',
          position: 'relative'
        }}>
           {/* Using placeholder. Update with actual image path inside public/ or src/assets/ */}
          <img 
            src="/taabish.jpeg" 
            alt="Mohammed Taabish" 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '5px solid var(--bg-color)'
            }}
          />
        </div>
      </motion.div>
      
      <motion.div 
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: '30px',
          height: '50px',
          borderRadius: '15px',
          border: '2px solid var(--text-muted)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
          opacity: 0.6
        }}
      >
        <div style={{ width: '4px', height: '12px', background: 'var(--accent-blue)', borderRadius: '2px' }} />
      </motion.div>
    </section>
  );
}
