import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
            {/* Background flare */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary opacity-10 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-primary opacity-5 blur-[120px] rounded-full animate-pulse"></div>

            <div className="container relative z-10 grid md:grid-cols-1 gap-12 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary text-sm font-medium mb-6 backdrop-blur-sm">
                        AI-integrated Full Stack Developer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="neon-text">Krishna</span>. <br />
                        Designing the Future with AI.
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 mx-auto md:mx-0">
                        A passionate Computer Application student dedicated to building innovative software solutions,
                        blending advanced AI integrations with seamless web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <a href="#projects" className="neon-button">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="/resume.pdf" download className="outline-button">
                            Download Resume <Download size={18} />
                        </a>
                    </div>

                    <div className="mt-12 flex gap-6 justify-center md:justify-start">
                        <a href="https://github.com/LORD1811" className="text-text-secondary hover:text-accent-primary transition-all">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/krushna-badgujar-40534530b/" className="text-text-secondary hover:text-accent-primary transition-all">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:krishnx.builds@gmail.com" className="text-text-secondary hover:text-accent-primary transition-all">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
