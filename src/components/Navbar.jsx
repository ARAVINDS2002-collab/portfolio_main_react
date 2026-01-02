import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Rocket } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Career', href: '#career' },
        { name: 'Honors', href: '#honors' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
            style={{
                paddingLeft: '8%',
                paddingRight: '8%',
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                backdropFilter: scrolled ? 'blur(25px)' : 'none'
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{
                    fontSize: '1.6rem',
                    fontWeight: '900',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    letterSpacing: '-1px'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        padding: '8px',
                        borderRadius: '12px',
                        display: 'flex',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                    }}>
                        <Rocket size={24} color="#fff" />
                    </div>
                    <span>ARAVIND <span className="text-gradient">S</span></span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} style={{
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            fontWeight: '700',
                            transition: 'var(--transition-smooth)',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            opacity: 0.7
                        }} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <button onClick={toggleTheme} style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '14px',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: '0.3s'
                    }}>
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }} className="mobile-toggle">
                    <button onClick={toggleTheme} style={{ color: 'var(--primary)', background: 'none', border: 'none' }}>
                        {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="glass-card" style={{
                    position: 'absolute',
                    top: '100%',
                    left: '5%',
                    right: '5%',
                    marginTop: '15px',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    borderRadius: '24px'
                }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            fontWeight: '800',
                            fontSize: '1.2rem'
                        }}>
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
              .nav-link:hover {
                color: var(--primary) !important;
                opacity: 1 !important;
                transform: translateY(-2px);
              }
              @media (min-width: 1024px) {
                .desktop-menu { display: flex !important; }
                .mobile-toggle { display: none !important; }
              }
            `}</style>
        </nav>
    );
};

export default Navbar;
