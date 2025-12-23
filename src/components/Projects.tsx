"use client";

import { motion } from "framer-motion";
import { Github, Code2, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import SpotlightCard from "@/components/SpotlightCard";

const categoryColors: Record<string, string> = {
    "AI/ML": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Blockchain": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Full Stack": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Security": "bg-red-500/20 text-red-400 border-red-500/30",
    "Developer Tools": "bg-green-500/20 text-green-400 border-green-500/30",
    "Utility": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    "Games": "bg-pink-500/20 text-pink-400 border-pink-500/30",
    "Portfolio": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    
    // Get major projects first, then others
    const majorProjects = portfolioData.projects.filter((p) => p.isMajor);
    const otherProjects = portfolioData.projects.filter((p) => !p.isMajor);
    
    const visibleProjects = showAll
        ? [...majorProjects, ...otherProjects]
        : majorProjects;

    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground mb-4">
                        {majorProjects.length} major projects • {portfolioData.projects.length} total
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <SpotlightCard className="h-full hover:border-primary/50 transition-colors hover:shadow-xl group">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <Code2 size={20} />
                                            </div>
                                            {project.isMajor && (
                                                <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                                                    <Sparkles size={12} />
                                                    Major
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all z-10"
                                                aria-label="View Source"
                                            >
                                                <Github size={18} />
                                            </a>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all z-10"
                                                aria-label="Open Project"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <span className={`inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${categoryColors[project.category] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                                        {project.category}
                                    </span>

                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {project.tech.split(", ").slice(0, 4).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.split(", ").length > 4 && (
                                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                                                +{project.tech.split(", ").length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

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
                            className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
                        >
                            {showAll ? (
                                <>Show Major Projects Only</>
                            ) : (
                                <>
                                    View All {portfolioData.projects.length} Projects
                                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-xs group-hover:bg-primary-foreground/20">
                                        +{otherProjects.length} more
                                    </span>
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
