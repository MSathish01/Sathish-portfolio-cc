"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <User className="text-primary" size={28} />
                            {portfolioData.personal.role}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {portfolioData.summary}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <MapPin className="text-primary" size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium">{portfolioData.personal.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Mail className="text-primary" size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a
                                        href={`mailto:${portfolioData.personal.email}`}
                                        className="font-medium hover:text-primary transition-colors"
                                    >
                                        {portfolioData.personal.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Briefcase className="text-primary" size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Work Status</p>
                                    <p className="font-medium text-green-500">Available for Hire</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-card p-8 rounded-2xl border border-border shadow-sm"
                    >
                        <h4 className="text-xl font-bold mb-6">Quick Stats</h4>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-secondary/50 rounded-lg">
                                <p className="text-3xl font-bold text-primary mb-2">2+</p>
                                <p className="text-sm text-muted-foreground">Internships</p>
                            </div>
                            <div className="text-center p-4 bg-secondary/50 rounded-lg">
                                <p className="text-3xl font-bold text-primary mb-2">4+</p>
                                <p className="text-sm text-muted-foreground">Major Projects</p>
                            </div>
                            <div className="text-center p-4 bg-secondary/50 rounded-lg">
                                <p className="text-3xl font-bold text-primary mb-2">3</p>
                                <p className="text-sm text-muted-foreground">Awards</p>
                            </div>
                            <div className="text-center p-4 bg-secondary/50 rounded-lg">
                                <p className="text-3xl font-bold text-primary mb-2">20+</p>
                                <p className="text-sm text-muted-foreground">Technologies</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
