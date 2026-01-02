import React from 'react';
import { ExternalLink, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="home" className="section-padding" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            textAlign: 'center',
            paddingTop: '180px'
        }}>
            <div className="hero-content" style={{ zIndex: 1, position: 'relative' }}>
                {/* Floating Background Sparkle */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ position: 'absolute', top: '-60px', right: '-60px', opacity: 0.2, color: 'var(--secondary)' }}
                >
                    <Sparkles size={120} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(139, 92, 246, 0.1)',
                        padding: '10px 20px',
                        borderRadius: '100px',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        marginBottom: '30px'
                    }}
                >
                    <Zap size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--primary)' }}>Available for Innovation</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                        fontWeight: '950',
                        marginBottom: '25px',
                        lineHeight: 0.9,
                        color: 'var(--text-primary)',
                        letterSpacing: '-3px'
                    }}
                >
                    ARAVIND <span className="text-gradient">S</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
                        lineHeight: '1.5',
                        marginBottom: '50px',
                        maxWidth: '850px',
                        color: 'var(--text-secondary)',
                        fontWeight: '500',
                        opacity: 0.8
                    }}
                >
                    Pioneering the intersection of <span style={{ color: 'var(--text-primary)', fontWeight: '700' }}>AI Research</span> and <span style={{ color: 'var(--text-primary)', fontWeight: '700' }}>Exceptional UX</span>. Specialist in Computer Vision and high-performance neural architectures.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="#projects" className="btn btn-primary" style={{ padding: '18px 45px' }}>
                        Explore All Work
                    </a>
                    <a href="#contact" className="btn btn-outline" style={{ padding: '18px 45px' }}>
                        Let's Talk <ExternalLink size={20} />
                    </a>
                </motion.div>
            </div>

            <style>{`
        .btn-primary::after {
          content: "";
          position: absolute;
          width: 100%; height: 100%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          top: 0; left: -100%;
          transition: 0.6s;
        }
        .btn-primary:hover::after { left: 100%; }
      `}</style>
        </section>
    );
};

export default HeroSection;
