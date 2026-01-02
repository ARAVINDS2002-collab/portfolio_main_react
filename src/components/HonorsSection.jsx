import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Globe } from 'lucide-react';

const HonorsSection = () => {
    const honors = [
        {
            title: "Research Publication",
            desc: "Presented a research paper at the ICMLDE International Conference at Dehradun titled \"Saliency Driven Transformer Models for Deepfake Video Detection\".",
            icon: <Globe size={28} />
        },
        {
            title: "PhD Eligibility",
            desc: "Qualified and eligible for doctoral studies (PhD) for the years 2025 and 2026 via the National Eligibility Test (NET).",
            icon: <Award size={28} />
        },
        {
            title: "Coding Practice",
            desc: "Successfully completed all Coding Bat Python challenges.",
            icon: <Zap size={28} />
        },
        {
            title: "Social Responsibility",
            desc: "Active participation and service in the Student Police Cadet (SPC) volunteer program.",
            icon: <ShieldCheck size={28} />
        }
    ];

    return (
        <section id="honors" className="section-padding" style={{ background: 'rgba(139, 92, 246, 0.02)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <span className="subheading">Distinctions</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                        Honors & <span className="text-gradient">Recognition</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {honors.map((honor, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                            style={{ padding: '40px', textAlign: 'center' }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{
                                margin: '0 auto 25px', width: '70px', height: '70px',
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', boxShadow: '0 15px 35px var(--primary-glow)'
                            }}>
                                {honor.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{honor.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem', fontWeight: '500' }}>
                                {honor.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HonorsSection;
