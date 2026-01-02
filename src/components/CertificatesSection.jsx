import React from 'react';
import { motion } from 'framer-motion';
import { FileBadge, Download, ExternalLink } from 'lucide-react';

const CertificatesSection = () => {
    const certifications = [
        {
            title: "ICMLDE Research Presentation",
            issuer: "ICMLDE International Conference",
            details: "For the paper \"Saliency Driven Transformer Models for Deepfake Video Detection\"."
        },
        {
            title: "Python Fundamentals for Beginners",
            issuer: "Great Learning",
            details: "Comprehensive coverage of Python core concepts."
        },
        {
            title: "Smart English Basics for Professionals",
            issuer: "Great Learning",
            details: "Professional communication standards."
        }
    ];

    return (
        <section id="certificates" className="section-padding">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '60px' }}
                >
                    <span className="subheading">Credentials</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                        Professional <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: '35px 45px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '20px'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                                <div style={{ color: 'var(--primary)', opacity: 0.8 }}>
                                    <FileBadge size={40} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '5px' }}>{cert.title}</h4>
                                    <p style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{cert.issuer}</p>
                                    <p style={{ marginTop: '10px', opacity: 0.6, fontSize: '0.95rem' }}>{cert.details}</p>
                                </div>
                            </div>

                            <button className="btn btn-outline" style={{ padding: '12px 25px', fontSize: '0.9rem' }}>
                                View Certificate <ExternalLink size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
