import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Blocks, Layers, Zap } from 'lucide-react';

const ProjectsSection = () => {
    const githubUrl = "https://github.com/ARAVINDs2002?tab=repositories";

    return (
        <section id="projects" className="section-padding">
            <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{
                        padding: '100px 50px',
                        textAlign: 'center',
                        background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 50%), var(--glass-bg)',
                        position: 'relative'
                    }}
                >
                    {/* Background Decorative Icon */}
                    <Blocks size={400} style={{ position: 'absolute', bottom: '-100px', right: '-100px', opacity: 0.03, color: 'var(--primary)' }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="subheading">Innovation Hub</span>
                        <h2 style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', marginBottom: '30px' }}>
                            Deep Dive <span className="text-gradient">Open Source</span>
                        </h2>
                        <p style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto 60px', lineHeight: '1.8', fontWeight: '500' }}>
                            Architecting scalable AI models and high-performance web systems. Explore my research repos and enterprise-grade UI toolkits on GitHub.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '70px' }}>
                            {[
                                { title: "Neural Research", desc: "Saliency-driven transformer models for computer vision.", icon: <Zap color="var(--primary)" /> },
                                { title: "SaaS Ecosystems", desc: "High-performance dashboards and enterprise dashboards.", icon: <Layers color="var(--secondary)" /> },
                                { title: "AI Integration", desc: "Seamlessly bridging LLMs and vector DBs to UI.", icon: <Blocks color="var(--primary)" /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card"
                                    style={{ padding: '40px', background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <div style={{ marginBottom: '20px', opacity: 0.8 }}>{item.icon}</div>
                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.4rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', opacity: 0.6, fontWeight: '500' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ padding: '20px 50px', fontSize: '1.2rem', borderRadius: '22px' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={24} /> Launch GitHub Portfolio <ExternalLink size={20} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
