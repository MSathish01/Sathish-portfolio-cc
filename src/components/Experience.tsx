"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l border-border ml-4 md:ml-6 space-y-12">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-primary" />
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg text-primary font-medium mt-1">
                                        {exp.company}
                                    </p>
                                </div>
                                {/* <div className="flex items-center text-muted-foreground mt-2 sm:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">Date Range</span>
                </div> */}
                            </div>

                            <ul className="space-y-3">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-muted-foreground flex items-start">
                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
