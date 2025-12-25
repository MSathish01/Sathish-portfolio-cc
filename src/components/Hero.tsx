"use client";

import { motion } from "framer-motion";
import { Eye, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";


export default function Hero() {
    const handleViewResume = () => {
        window.open('/Sathish-Resume.pdf', '_blank');
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block py-1 px-3 rounded-full bg-accent/50 text-primary text-sm font-medium mb-6 border border-accent backdrop-blur-sm"
                        >
                            Available for Hire
                        </motion.span>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Hi, I'm <span className="text-primary">{portfolioData.personal.name}</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl text-muted-foreground font-semibold mb-8">
                            {portfolioData.personal.role}
                        </h2>
                        <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground mb-10 leading-relaxed">
                            {portfolioData.heroTagline}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <motion.button
                                onClick={handleViewResume}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-teal-600 text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all cursor-pointer overflow-hidden"
                            >
                                {/* Shimmer Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                <span className="relative z-10">View Resume</span>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
                            </motion.button>
                            <div className="flex gap-4">
                                <a
                                    href={portfolioData.personal.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href={portfolioData.personal.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href={`mailto:${portfolioData.personal.email}`}
                                    className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        className="order-1 lg:order-2 flex justify-center relative"
                    >
                        {/* Glowing Blob Background */}
                        <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full scale-75 animate-pulse" />

                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20 bg-gradient-to-br from-primary/20 to-primary/40">
                            <img
                                src="/profile.jpg"
                                alt={portfolioData.personal.name}
                                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                                loading="eager"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-4 sm:bottom-0 sm:right-0 bg-card/80 backdrop-blur-md p-4 rounded-2xl border border-primary/20 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium text-sm">Open to Work</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
