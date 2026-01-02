import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const CareerSection = () => {
    const experiences = [
        {
            role: "Software Developer",
            company: "Creative App Lab, Technopark, Trivandrum",
            period: "Aug 2025 - Present",
            type: "work"
        },
        {
            role: "Mobile and Web Technology Intern",
            company: "Creative App Lab, Technopark, Trivandrum",
            period: "March 2025 - July 2025",
            type: "work"
        }
    ];

    const education = [
        {
            degree: "M.Sc Computer Science (AI Specialization)",
            institution: "Karyavattom Campus",
            period: "2023 - 2025",
            result: "8.94 CGPA",
            type: "edu"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "UIT Kanjiramkulam",
            period: "2020 - 2023",
            result: "7.706 CGPA",
            type: "edu"
        }
    ];

    return (
        <section id="career" className="section-padding">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <span className="subheading">Timeline</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                        Career & <span className="text-gradient">Education</span>
                    </h2>
                </motion.div>

                <div className="career-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px' }}>
                    {/* Work Experience */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Briefcase color="var(--primary)" /> Professional Experience
                        </h3>
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="glass-card"
                                style={{ padding: '35px', position: 'relative' }}
                            >
                                <div style={{
                                    position: 'absolute', top: '35px', left: '-1px', width: '4px', height: '30px',
                                    background: 'var(--primary)', borderRadius: '0 4px 4px 0'
                                }}></div>
                                <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px' }}>{exp.role}</h4>
                                <p style={{ color: 'var(--secondary)', fontWeight: '700', marginBottom: '15px', fontSize: '1rem' }}>{exp.company}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5, fontSize: '0.9rem', fontWeight: 'bold' }}>
                                    <Calendar size={14} /> {exp.period}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <GraduationCap color="var(--primary)" /> Academic Journey
                        </h3>
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="glass-card"
                                style={{ padding: '35px', position: 'relative' }}
                            >
                                <div style={{
                                    position: 'absolute', top: '35px', right: '-1px', width: '4px', height: '30px',
                                    background: 'var(--secondary)', borderRadius: '4px 0 0 4px'
                                }}></div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '8px' }}>{edu.degree}</h4>
                                        <p style={{ opacity: 0.6, fontWeight: '700', marginBottom: '15px' }}>{edu.institution}</p>
                                    </div>
                                    <div style={{ background: 'var(--primary-glow)', padding: '6px 15px', borderRadius: '100px', border: '1px solid var(--primary)' }}>
                                        <span style={{ fontWeight: '900', color: '#fff', fontSize: '0.9rem' }}>{edu.result}</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5, fontSize: '0.9rem', fontWeight: 'bold' }}>
                                    <Calendar size={14} /> {edu.period}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 600px) {
          .career-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default CareerSection;
