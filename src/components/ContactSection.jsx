import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, MessageSquare } from 'lucide-react';

const ContactSection = () => {
    const contacts = [
        {
            label: "Direct Email",
            value: "aravindofficial2023@gmail.com",
            href: "mailto:aravindofficial2023@gmail.com",
            icon: <Mail size={24} />,
            color: "var(--primary)"
        },
        {
            label: "Professional Profile",
            value: "/in/aravind-s-32ba89308",
            href: "https://linkedin.com/in/aravind-s-32ba89308",
            icon: <Linkedin size={24} />,
            color: "var(--secondary)"
        },
        {
            label: "Open Source",
            value: "@ARAVINDs2002",
            href: "https://github.com/ARAVINDs2002",
            icon: <Github size={24} />,
            color: "var(--primary)"
        }
    ];

    return (
        <section id="contact" className="section-padding">
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subheading">Collaboration</span>
                    <h2 style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', marginBottom: '25px', lineHeight: 1 }}>
                        Let's Start a <span className="text-gradient">Project</span>
                    </h2>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '80px', margin: '0 auto 80px', maxWidth: '650px', fontWeight: '500' }}>
                        Open to discussing high-impact AI research, innovative partnerships, or full-time roles.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {contacts.map((contact, idx) => (
                            <motion.a
                                key={idx}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{
                                    padding: '50px 40px',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '20px',
                                    background: 'rgba(255,255,255,0.01)'
                                }}
                                whileHover={{ y: -15, borderColor: contact.color, background: 'rgba(139, 92, 246, 0.05)' }}
                            >
                                <div style={{
                                    color: contact.color,
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    padding: '20px',
                                    borderRadius: '24px',
                                    boxShadow: `0 10px 30px -5px ${contact.color}33`
                                }}>
                                    {contact.icon}
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.85rem', opacity: 0.5, textTransform: 'uppercase', marginBottom: '8px', fontWeight: '800', letterSpacing: '2px' }}>{contact.label}</p>
                                    <p style={{ fontWeight: '900', fontSize: '1.15rem', color: 'var(--text-primary)' }}>{contact.value}</p>
                                </div>
                                <div style={{
                                    color: contact.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontSize: '0.9rem',
                                    fontWeight: '800',
                                    marginTop: '10px'
                                }}>
                                    INITIATE CONTACT <ArrowRight size={18} />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ marginTop: '100px', opacity: 0.4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}
                    >
                        <MessageSquare size={20} />
                        <p style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Response time: within 24 hours</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
