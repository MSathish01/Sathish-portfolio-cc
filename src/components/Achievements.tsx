"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
    return (
        <section id="achievements" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolioData.achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors"
                        >
                            {achievement.image ? (
                                <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4">
                                    <Trophy size={24} />
                                </div>
                            )}
                            <p className="font-medium text-lg">{achievement.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
