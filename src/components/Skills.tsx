"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {portfolioData.skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-card text-card-foreground px-6 py-3 rounded-xl shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all cursor-default"
                        >
                            <span className="font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
