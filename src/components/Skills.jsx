import React from 'react';
import { Code, Globe, PenTool, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: <Code size={24} />,
            skills: ['Python', 'C++', 'Java', 'JavaScript']
        },
        {
            title: 'Web Dev',
            icon: <Globe size={24} />,
            skills: ['HTML', 'CSS', 'React', 'Tailwind']
        },
        {
            title: 'AI & ML',
            icon: <Cpu size={24} />,
            skills: ['NumPy', 'Pandas', 'CNN Basics', 'OpenCV']
        },
        {
            title: 'Tools',
            icon: <PenTool size={24} />,
            skills: ['Git', 'GitHub', 'VS Code', 'Postman']
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <h2 className="text-4xl font-bold mb-12 text-center font-accent">
                    Technical <span className="neon-text">Expertise</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card p-6 md:p-8 group hover:bg-accent-primary/[0.05] h-full flex flex-col"
                        >
                            <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform flex items-center justify-center w-12 h-12 glass-card rounded-lg border-accent-primary/20 bg-accent-primary/5">
                                {React.cloneElement(category.icon, { size: 28 })}
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-accent">{category.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 bg-white/5 rounded-md text-sm border border-white/10 hover:border-accent-primary transition-colors text-text-secondary whitespace-nowrap"
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

export default Skills;
