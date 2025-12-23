"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
    "AI/ML": "bg-purple-500/10 text-purple-500 dark:text-purple-400",
    "Blockchain": "bg-orange-500/10 text-orange-500 dark:text-orange-400",
    "Full Stack": "bg-blue-500/10 text-blue-500 dark:text-blue-400",
    "Security": "bg-red-500/10 text-red-500 dark:text-red-400",
    "Developer Tools": "bg-green-500/10 text-green-500 dark:text-green-400",
    "Utility": "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",
    "Games": "bg-pink-500/10 text-pink-500 dark:text-pink-400",
    "Portfolio": "bg-yellow-500/10 text-yellow-500 dark:text-yellow-400",
};

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    
    const majorProjects = portfolioData.projects.filter((p) => p.isMajor);
    const otherProjects = portfolioData.projects.filter((p) => !p.isMajor);
    
    const visibleProjects = showAll
        ? [...majorProjects, ...otherProjects]
        : majorProjects;

    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {portfolioData.projects.length} projects in AI/ML, Full Stack & Blockchain
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                layout
                                className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Card Header */}
                                <div className={`h-1.5 w-full ${project.isMajor ? 'bg-gradient-to-r from-primary to-teal-400' : 'bg-muted'}`} />
                                
                                <div className="p-5">
                                    {/* Category & Featured Badge */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-xs font-medium px-2 py-1 rounded ${categoryColors[project.category] || "bg-gray-500/10 text-gray-500"}`}>
                                            {project.category}
                                        </span>
                                        {project.isMajor && (
                                            <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                                                ★ Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[2.5rem]">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.tech.split(", ").slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.split(", ").length > 3 && (
                                            <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                                                +{project.tech.split(", ").length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* GitHub Button */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary text-sm font-medium transition-all"
                                    >
                                        <Github size={16} />
                                        View on GitHub
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More/Less Button */}
                {otherProjects.length > 0 && (
                    <div className="text-center mt-10">
                        <button
                            type="button"
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                        >
                            {showAll ? (
                                <>
                                    <ChevronUp size={18} />
                                    Show Less
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={18} />
                                    Show All {portfolioData.projects.length} Projects
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
