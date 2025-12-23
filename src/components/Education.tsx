"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Education = () => {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-foreground">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-8">
                    {/* Main/Current Education - Large Card */}
                    {portfolioData.education.slice(0, 1).map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="relative bg-card border border-border rounded-3xl p-8 overflow-hidden group hover:shadow-xl hover:border-primary/50 transition-all duration-500">
                                {/* Gradient Background - Subtle */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                                        {/* Left Side - Main Info */}
                                        <div className="flex-1 space-y-6">
                                            {/* Status Badge */}
                                            {edu.status && (
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-primary-foreground text-sm font-medium shadow-lg shadow-primary/20">
                                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                                    {edu.status}
                                                </div>
                                            )}

                                            {/* Degree Info */}
                                            <div>
                                                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-xl text-muted-foreground">
                                                    {edu.field}
                                                </p>
                                            </div>

                                            {/* Institution Details */}
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-muted-foreground">
                                                    <Building2 className="w-5 h-5 text-primary" />
                                                    <span className="text-lg">{edu.institution}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-muted-foreground">
                                                    <MapPin className="w-5 h-5 text-primary" />
                                                    <span>{edu.location}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-muted-foreground">
                                                    <Calendar className="w-5 h-5 text-primary" />
                                                    <span>{edu.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side - CGPA Circle & Icon */}
                                        <div className="flex flex-col items-center gap-6">
                                            {/* Graduation Icon */}
                                            <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                <GraduationCap className="w-12 h-12" />
                                            </div>

                                            {/* CGPA Circle */}
                                            {edu.cgpa && (
                                                <div className="relative">
                                                    <svg className="w-40 h-40 transform -rotate-90">
                                                        <circle
                                                            cx="80"
                                                            cy="80"
                                                            r="70"
                                                            stroke="currentColor"
                                                            strokeWidth="8"
                                                            fill="none"
                                                            className="text-secondary"
                                                        />
                                                        <circle
                                                            cx="80"
                                                            cy="80"
                                                            r="70"
                                                            stroke="currentColor"
                                                            strokeWidth="8"
                                                            fill="none"
                                                            strokeDasharray={`${(edu.cgpa / 10) * 440} 440`}
                                                            strokeLinecap="round"
                                                            className="text-primary transition-all duration-1000"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                        <span className="text-4xl font-bold text-foreground">{edu.cgpa}</span>
                                                        <span className="text-sm text-muted-foreground">CGPA</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Secondary Education - Smaller Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.education.slice(1).map((edu, index) => (
                            <motion.div
                                key={index + 1}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full">
                                    <div className="relative z-10 space-y-4">
                                        {/* Header */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                <GraduationCap className="w-8 h-8" />
                                            </div>
                                            {edu.percentage && (
                                                <div className="text-right">
                                                    <div className="text-3xl font-bold text-primary">{edu.percentage}%</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Duration Badge */}
                                        <div className="inline-block px-3 py-1 bg-secondary rounded-full text-secondary-foreground text-sm font-medium">
                                            {edu.duration}
                                        </div>

                                        {/* Title */}
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-3">{edu.field}</p>
                                        </div>

                                        {/* Details */}
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Building2 className="w-4 h-4 text-primary" />
                                                <span>{edu.institution}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
