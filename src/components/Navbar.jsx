import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', id: '#about' },
  { name: 'Skills', id: '#skills' },
  { name: 'Experience', id: '#experience' },
  { name: 'Projects', id: '#projects' },
  { name: 'Contact', id: '#contact' }
];

export default function Navbar() {
  const [active, setActive] = useState('');

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '20px 40px',
        zIndex: 100,
        background: 'rgba(5,5,5,0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="heading-font glow-text"
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Taabish<span className="text-gradient">.Dev</span>
        </div>
      </motion.div>

      <ul
        style={{
          display: 'flex',
          gap: '30px',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}
      >
        {navLinks.map((link, i) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <a
              href={link.id}
              onClick={() => setActive(link.name)}
              className={`nav-link ${
                active === link.name ? 'active' : ''
              }`}
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-btn"
          style={{
            padding: '8px 20px',
            fontSize: '0.9rem',
            display: 'inline-block'
          }}
        >
          Resume
        </a>
      </motion.div>
    </nav>
  );
}