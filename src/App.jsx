import Background from './components/canvas/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Loading from './components/Loading';

import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  /* =========================
     PAGE LOAD
  ========================= */

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    window.scrollTo(0, 0);

    if (window.location.hash) {
      window.history.replaceState(
        '',
        document.title,
        window.location.pathname
      );
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  /* =========================
     FUTURISTIC CUSTOM CURSOR
  ========================= */

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const dot = document.querySelector('.custom-cursor-dot');

    const moveCursor = (e) => {
      if (cursor && dot) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    /* =========================
       CURSOR HOVER EFFECTS
    ========================= */

    const links = document.querySelectorAll('a, button');

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        if (cursor) {
          cursor.style.transform =
            'translate(-50%, -50%) scale(1.8)';

          cursor.style.background =
            'rgba(0,210,255,0.15)';

          cursor.style.boxShadow =
            `
            0 0 20px #00d2ff,
            0 0 40px rgba(0,210,255,0.8),
            0 0 70px rgba(138,43,226,0.6)
            `;
        }
      });

      link.addEventListener('mouseleave', () => {
        if (cursor) {
          cursor.style.transform =
            'translate(-50%, -50%) scale(1)';

          cursor.style.background =
            'transparent';

          cursor.style.boxShadow =
            `
            0 0 10px #00d2ff,
            0 0 25px rgba(0,210,255,0.8),
            0 0 45px rgba(138,43,226,0.6)
            `;
        }
      });
    });

    return () => {
      window.removeEventListener(
        'mousemove',
        moveCursor
      );
    };
  }, []);

  return (
    <>
      {/* =========================
          CUSTOM CURSOR
      ========================= */}

      <div className="custom-cursor"></div>

      <div className="custom-cursor-dot"></div>

      {/* =========================
          LOADING SCREEN
      ========================= */}

      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>

      {/* =========================
          3D BACKGROUND
      ========================= */}

      <div
        id="canvas-container"
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 1.5s ease'
        }}
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 60
          }}
        >
          <Background />
        </Canvas>
      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Navbar />

        <main>
          <Hero />

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Certifications />

          <Contact />
        </main>

        {/* =========================
            FOOTER
        ========================= */}

        <footer
          style={{
            textAlign: 'center',

            padding: '30px',

            borderTop:
              '1px solid rgba(255,255,255,0.05)',

            color: 'var(--text-muted)',

            background:
              'rgba(5,5,5,0.8)',

            backdropFilter: 'blur(10px)'
          }}
        >
          <p>
            © 2026 Mohammed Taabish | Built with ❤️ + Web3 + Creative Development
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;