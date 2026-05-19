import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../constants';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_nvu5cen';
    const templateID = 'template_a0ob1fo';
    const publicKey = 'qKB37EurCY_q9RtNL';

    if (serviceID === 'YOUR_SERVICE_ID') {
      alert("⚠️ EMAILJS NOT CONFIGURED: To actually receive messages to your inbox, you must create a free account at emailjs.com and replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY in Contact.jsx with your actual tokens!");
      setLoading(false);
      return;
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        console.log(error.text);
        setLoading(false);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <section id="contact" className="section-container" style={{ padding: '100px 20px', marginBottom: '50px' }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title heading-font text-gradient"
      >
        Get In Touch
      </motion.p>

      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 300px', maxWidth: '400px' }}
        >
          <div className="glass-card" style={{ padding: '40px', height: '100%' }}>
            <h3 className="glow-text text-gradient" style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px', display: 'inline-block' }}>Contact Info</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
            Ready to collaborate or have an open role? Let's connect!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>📧</div>
              <a href={`mailto:${personalInfo.email}`} className="glow-text" style={{ color: 'white', textDecoration: 'none' }}>{personalInfo.email}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>🔗</div>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="glow-text" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn Profile</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>💻</div>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="glow-text" style={{ color: 'white', textDecoration: 'none' }}>GitHub Profile</a>
            </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 400px', maxWidth: '600px' }}
        >
          <div className="glass-card" style={{ padding: '40px', height: '100%' }}>
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'white', fontSize: '0.9rem' }}>Your Name</label>
              <input type="text" name="user_name" required className="glow-input" style={{ padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'white', fontSize: '0.9rem' }}>Your Email</label>
              <input type="email" name="user_email" required className="glow-input" style={{ padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'white', fontSize: '0.9rem' }}>Your Message</label>
              <textarea name="message" rows="5" required className="glow-input" style={{ padding: '15px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="neon-btn" disabled={loading} style={{ padding: '15px', marginTop: '10px', fontWeight: 'bold' }}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {success && <p style={{ color: 'var(--accent-blue)', textAlign: 'center', marginTop: '10px' }}>Message sent successfully!</p>}
          </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
