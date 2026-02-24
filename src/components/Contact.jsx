import React from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <h2 className="text-4xl font-bold mb-12 text-center font-accent">
                    Get In <span className="neon-text">Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 font-accent">Let's collaborate</h3>
                        <p className="text-text-secondary mb-10 text-lg leading-relaxed">
                            I'm open to discussing new software development opportunities, AI research collaborations,
                            or internship roles. Feel free to reach out!
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 glass-card text-accent-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Email Me</p>
                                    <p className="text-lg font-medium text-text-primary">krishnx.builds@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 glass-card text-accent-primary group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Location</p>
                                    <p className="text-lg font-medium text-text-primary">Pune, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <a href="https://github.com/LORD1811" className="p-4 glass-card text-text-secondary hover:text-accent-primary transition-all hover:scale-110">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/krushna-badgujar-40534530b/" className="p-4 glass-card text-text-secondary hover:text-accent-primary transition-all hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-8 md:p-10"
                    >
                        {/* 
                            IMPORTANT: Replace 'f/mqkvpzeg' with your actual Formspree endpoint if needed.
                            You can get one at https://formspree.io/
                        */}
                        <form
                            action="https://formspree.io/f/xaqdanpa"
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-secondary">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors text-text-primary placeholder:text-text-muted"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-secondary">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors text-text-primary placeholder:text-text-muted"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-text-secondary">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors text-text-primary placeholder:text-text-muted resize-none"
                                ></textarea>
                            </div>
                            <button type="submit" className="neon-button w-full justify-center py-4">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
