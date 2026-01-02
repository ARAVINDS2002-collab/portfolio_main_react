import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layout, Terminal, Sparkles } from 'lucide-react';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: <Terminal size={28} />,
            skills: ["Python", "JavaScript", "C / C++", "SQL", "DBMS", "PHP"],
            desc: "Logic & Automation"
        },
        {
            title: "AI & ML",
            icon: <Brain size={28} />,
            skills: ["Machine Learning", "Deep Learning", "LLMs & NLP", "Prompt Engineering", "NumPy / Pandas"],
            desc: "Intelligent Core"
        },
        {
            title: "Frontend & UI/UX",
            icon: <Layout size={28} />,
            skills: ["React.js", "Tailwind CSS", "Figma", "Adobe Expertise", "Canva", "HTML5 / CSS3"],
            desc: "Visual Excellence"
        },
        {
            title: "Gen AI Tools",
            icon: <Sparkles size={28} />,
            skills: ["Image Generation", "LLM Prompting", "Local Execution", "Video Gen Tools"],
            desc: "Futuristic Workflows"
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '80px', textAlign: 'center' }}
                >
                    <span className="subheading">Proficiencies</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '20px' }}>
                        Technical <span className="text-gradient">Versatility</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                            style={{ padding: '45px', textAlign: 'left' }}
                        >
                            <div style={{
                                width: '60px', height: '60px',
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), transparent)',
                                borderRadius: '18px',
                                color: 'var(--primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '25px'
                            }}>
                                {category.icon}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{category.title}</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: '800', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px' }}>{category.desc}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        style={{
                                            padding: '8px 18px',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '12px',
                                            fontSize: '0.85rem',
                                            fontWeight: '700',
                                            color: 'var(--text-secondary)',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
