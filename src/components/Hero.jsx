import { motion } from 'framer-motion';
import { personalInfo } from '../constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="section-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 20px'
      }}
    >
      {/* Animated Background Image */}
      <motion.img
        src="/profile.png"
        alt="background"
        initial={{ scale: 1.1, opacity: 0.12 }}
        animate={{
          scale: [1.1, 1.15, 1.1],
          y: [0, -1, 0],
          rotate: [0, 1, -1, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          width: '700px',
          maxWidth: '90%',
          opacity: 0.12,
          zIndex: 0,
          filter: 'blur(1px)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: '1000px',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: '1.5rem',
            color: 'var(--accent-blue)',
            marginBottom: '20px'
          }}
          className="heading-font"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginBottom: '25px' }}
        >
          <h1
            style={{
              fontSize: '5.5rem',
              lineHeight: 1.1,
              margin: 0,
              cursor: 'default'
            }}
            className="heading-font text-gradient glow-text"
          >
            {personalInfo.name}
          </h1>
        </motion.div>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontSize: '2rem',
            color: 'var(--text-muted)',
            marginBottom: '50px',
            lineHeight: '1.5'
          }}
        >
          {personalInfo.role}
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            flexWrap: 'wrap'
          }}
        >
          <a
            href="#projects"
            className="neon-btn"
            style={{
              padding: '15px 35px',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            🚀 Explore Work
          </a>

          <a
            href="#contact"
            className="neon-btn-secondary"
            style={{
              padding: '15px 35px',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            📩 Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
          opacity: 0.6,
          zIndex: 2
        }}
      >
        <div
          style={{
            width: '4px',
            height: '12px',
            background: 'var(--accent-blue)',
            borderRadius: '2px'
          }}
        />
      </motion.div>
    </section>
  );
}