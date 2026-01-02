import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import CareerSection from './components/CareerSection'
import HonorsSection from './components/HonorsSection'
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="main-container">
      {/* Dynamic Nebula Background */}
      <div className="mesh-bg">
        <div className="aura-blob aura-1"></div>
        <div className="aura-blob aura-2"></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CareerSection />
        <HonorsSection />
        <CertificatesSection />
        <ContactSection theme={theme} />
      </main>

      <footer className="glass-card" style={{
        padding: '100px 5%',
        textAlign: 'center',
        borderTop: '1px solid var(--glass-border)',
        borderRadius: '0',
        marginTop: '100px',
        background: 'rgba(0,0,0,0.4)',
        position: 'relative',
        zIndex: 5
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', textAlign: 'left', marginBottom: '80px' }}>
          <div>
            <h2 className="text-gradient" style={{ marginBottom: '25px', fontSize: '2.4rem', fontWeight: '900' }}>ARAVIND S</h2>
            <p style={{ opacity: 0.6, fontSize: '1rem', lineHeight: '1.8', fontWeight: '500' }}>
              Bridging AI complexity with intuitive human experiences. Computer Science specialist focused on Computer Vision and full-stack innovation.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '25px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Navigate</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {['About', 'Skills', 'Career', 'Honors', 'Certificates'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '600', transition: '0.3s' }} className="foot-link">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '25px', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)' }}>
                <Mail size={20} color="var(--primary)" />
                <span style={{ fontWeight: '600' }}>aravindofficial2023@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)' }}>
                <MapPin size={20} color="var(--primary)" />
                <span style={{ fontWeight: '600' }}>Technopark, Trivandrum</span>
              </div>
              <div style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
                <a href="https://github.com/ARAVINDs2002" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: '0.4s' }} className="social-icon"><Github size={24} /></a>
                <a href="https://linkedin.com/in/aravind-s-32ba89308" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: '0.4s' }} className="social-icon"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
          <p style={{ fontSize: '0.85rem', opacity: 0.3, fontWeight: '700', letterSpacing: '3px' }}>© 2026. ENGINEERED BY ARAVIND S. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      <style>{`
        .foot-link:hover { color: var(--primary) !important; transform: translateX(5px); }
        .social-icon:hover { 
          transform: translateY(-5px); 
          color: var(--primary) !important;
          filter: drop-shadow(0 0 10px var(--primary-glow));
        }
      `}</style>
    </div>
  )
}

export default App
