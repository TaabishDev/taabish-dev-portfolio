import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <svg
        width="180"
        height="120"
        viewBox="0 0 180 120"
        style={{
          overflow: 'visible',
          marginBottom: '20px',
          filter: 'drop-shadow(0 0 20px rgba(0, 210, 255, 0.7))'
        }}
      >
        {/* M */}
        <motion.path
          d="M 20 90 L 20 20 L 50 65 L 80 20 L 80 90"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut"
          }}
        />

        {/* T */}
        <motion.path
          d="M 110 20 L 160 20 M 135 20 L 135 90"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: 0.4,
            ease: "easeInOut"
          }}
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#8a2be2" />
          </linearGradient>
        </defs>
      </svg>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="heading-font text-gradient"
        style={{
          letterSpacing: '4px',
          fontSize: '2rem',
          textShadow: '0 0 20px rgba(0,210,255,0.7)'
        }}
      >
        TAABISH.DEV
      </motion.h2>
    </motion.div>
  );
}