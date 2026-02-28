import React from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'AI Plant Disease Detection',
            desc: 'Deep learning system ensuring agricultural health through rapid leaf disease diagnosis and treatment recommendations.',
            tags: ['Python', 'CNN', 'PyTorch'],
            links: { demo: '#', github: 'https://github.com/LORD1811/AgriCrop' },
            image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop',
            status: 'Completed',
            showDemo: true
        },
        {
            title: 'Smart Resume Analysis',
            desc: 'AI-powered application that evaluates resumes against job descriptions, providing ATS scoring and feedback for improvement.',
            tags: ['Python', 'NLP', 'Streamlit', 'Flask', 'NLP (spaCy/NLTK)', 'PyPDF2'],
            links: { demo: 'https://smart-resume-analyzer-a5uhru1he-krishnas-projects-7d9f14ee.vercel.app/login', github: 'https://github.com/LORD1811/Smart-Resume-Analysis-' },
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
            status: 'Completed',
            showDemo: true
        },
        /* {
             title: 'Rural Bazaar',
             desc: 'Seamless farmer-to-customer platform facilitating direct sales of fresh produce.',
             tags: ['React', 'Node.js', 'MongoDB'],
             links: { demo: '#', github: '#' },
             image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop',
             status: 'In Progress',
             progress: 65,
             showDemo: false
         }*/
    ];

    return (
        <section id="projects" className="section-padding bg-accent-violet/5">
            <div className="container">
                <h2 className="text-4xl font-bold mb-12 text-center font-accent">
                    Featured <span className="neon-text">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card flex flex-col group overflow-hidden"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-body)] to-transparent opacity-60"></div>

                                {project.status === 'In Progress' && (
                                    <div className="absolute top-4 right-4 px-3 py-1.5 glass-card backdrop-blur-md border-accent-primary/30 text-accent-primary text-xs font-bold flex items-center gap-2">
                                        <Loader2 size={12} className="animate-spin" /> {project.status} ({project.progress}%)
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 font-accent group-hover:text-accent-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary text-sm mb-6 flex-1 leading-relaxed">
                                    {project.desc}
                                </p>

                                {project.progress && (
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs mb-2">
                                            <span className="text-text-muted">Development Progress</span>
                                            <span className="text-accent-primary font-bold">{project.progress}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${project.progress}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-accent-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 mt-auto">
                                    {project.showDemo && (
                                        <a href={project.links.demo} className="text-sm font-bold flex items-center gap-2 text-text-primary hover:text-accent-primary transition-colors">
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                    <a href={project.links.github} className="text-sm font-bold flex items-center gap-2 text-text-primary hover:text-accent-primary transition-colors">
                                        <Github size={16} /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
