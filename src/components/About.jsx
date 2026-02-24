import React from 'react';
import { Award, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding bg-accent-violet/5">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 font-accent">
                            About <span className="neon-text">Me</span>
                        </h2>
                        <p className="text-text-secondary text-lg mb-8">
                            I am a Bachelor of Computer Applications student (2023–2027) with a deep interest in artificial intelligence
                            and software craftsmanship. My journey is driven by a curiosity to solve complex problems through code.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 glass-card text-accent-primary">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Education</h3>
                                    <p className="text-text-secondary">Bachelor of Computer Applications (2023–2027)</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="p-3 glass-card text-accent-primary">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Focus Areas</h3>
                                    <p className="text-text-secondary">Python, Web Development, Machine Learning , Artifical Intelligence </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Achievement Card */}
                        <div className="glass-card p-8 float-animation">
                            <div className="p-4 bg-accent-violet/20 w-fit rounded-full mb-6 text-accent-primary">
                                <Award size={40} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Avishkar Competition</h3>
                            <p className="text-text-secondary mb-6">
                                Winner of the prestigious Avishkar research convention competition, showcasing innovative problem-solving
                                and technical excellence at the university level.
                            </p>
                            <div className="flex items-center gap-2 text-accent-primary font-semibold">
                                <span className="w-10 h-[3px] bg-accent-primary rounded-full"></span>
                                Top Achiever
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-accent-primary opacity-30 rounded-tr-3xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-accent-primary opacity-30 rounded-bl-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
