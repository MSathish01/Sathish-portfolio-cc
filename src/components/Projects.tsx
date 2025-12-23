"use client";

import { motion } from "framer-motion";
import { Github, FolderOpen } from "lucide-react";
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" as const }
        }
    };

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <FolderOpen size={16} />
                        My Work
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of {portfolioData.projects.length} projects showcasing my expertise in AI/ML, Full Stack Development, and Blockchain
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {visibleProjects.map((project, index) => (
                        <motion.article
                            key={index}
                            variants={cardVariants}
                            className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                            {/* Card Header with gradient */}
                            <div className={`h-2 w-full ${project.isMajor ? 'bg-gradient-to-r from-primary to-teal-400' : 'bg-gradient-to-r from-muted to-muted-foreground/20'}`} />
                            
                            <div className="p-6">
                                {/* Top Row */}
                                <div className="flex items-start justify-between mb-3">
                                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md ${categoryColors[project.category] || "bg-gray-500/10 text-gray-500"}`}>
                                        {project.category}
                                    </span>
                                    {project.isMajor && (
                                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.split(", ").slice(0, 3).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.split(", ").length > 3 && (
                                        <span className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                                            +{project.tech.split(", ").length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="pt-4 border-t border-border">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors"
                                    >
                                        <Github size={16} />
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Show More Button */}
                {otherProjects.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button
                            type="button"
                            onClick={() => setShowAll((prev) => !prev)}
                            aria-expanded={showAll}
                            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-card border-2 border-border hover:border-primary text-foreground hover:text-primary transition-all font-medium"
                        >
                            {showAll ? (
                                <>
                                    <span>Show Featured Only</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted">{majorProjects.length}</span>
                                </>
                            ) : (
                                <>
                                    <span>View All Projects</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">+{otherProjects.length} more</span>
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
