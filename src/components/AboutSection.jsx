import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const AboutSection = () => {
    return (
        <section id="about" className="section-padding">
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="about-container"
                >
                    <span className="subheading">The Narrative</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '40px', lineHeight: 1 }}>
                        Design. Develop. <span className="text-gradient">Innovate.</span>
                    </h2>

                    <div className="glass-card" style={{ padding: '60px', position: 'relative', overflow: 'visible' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-30px',
                            left: '40px',
                            background: 'var(--primary)',
                            padding: '20px',
                            borderRadius: '24px',
                            color: '#fff',
                            boxShadow: '0 10px 30px var(--primary-glow)'
                        }}>
                            <Quote size={32} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.8', fontWeight: '500' }}>
                                I'm Aravind S, a computer science specialist with a focus on Artificial Intelligence. My journey in technology is driven by a desire to bridge the gap between complex AI models and intuitive user experiences.
                            </p>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                I recently completed my Master’s degree in Computer Science with an AI specialization, achieving a CGPA of 8.94. During my postgraduate studies, I worked on AI-focused coursework and research, which helped me develop a strong foundation in machine learning concepts, prompt engineering, and modern front end technologies.
                            </p>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                As part of my PG program, I published a research paper titled <span style={{ color: 'var(--primary)', fontWeight: '700' }}>“Saliency Driven Transformer Models for Deepfake Video Detection”</span>, presented at the ICMLDE conference in Dehradun. I completed my BCA with a CGPA of 7.706.
                            </p>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                I am learning to effectively use AI tools for automation and content generation to improve productivity and streamline development workflows. I’m particularly interested in growing at the intersection of AI, UI/UX, and front end development. Thus aiming to be an all rounder capable of solving any problem.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
