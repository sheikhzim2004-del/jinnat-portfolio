'use client';

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { projectsData } from "../../app/data/projectsData"

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-full">
                    My Work
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                    Featured <span className="text-accent-blue">Projects</span>
                </h2>
                <p className="text-muted-text mt-2 text-base sm:text-lg max-w-xl mx-auto">
                    Here are some of the key projects I have built using modern web technologies.
                </p>
                <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-card-dark border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-accent-blue/50 transition-all duration-300 flex flex-col justify-between group"
                    >
                        <div>
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={400}
                                    width={400}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    // যদি আপাতত ছবি না থাকে তবে ডামি প্লেসহোল্ডার হিসেবে কাজ করবে
                                    onError={(e) => {
                                        e.currentTarget.src = "https://via.placeholder.com/600x400/111827/3B82F6?text=Project+Preview";
                                    }}
                                />
                            </div>

                            {/* Content Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors duration-200">
                                    {project.title}
                                </h3>
                                <p className="text-muted-text text-sm mt-2 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-md border border-accent-cyan/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Links */}
                        <div className="p-6 pt-0 border-t border-gray-800/50 mt-4 flex items-center justify-between gap-2">

                            {/* GitHub Links Container */}
                            <div className="flex items-center gap-3">
                                {/* যদি ফ্রন্টএন্ড ও ব্যাকএন্ড আলাদা থাকে */}
                                {project.clientCode && (
                                    <a
                                        href={project.clientCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-accent-blue transition-colors"
                                        title="Frontend Source Code"
                                    >
                                        <FaGithub size={16} /> Client
                                    </a>
                                )}

                                {project.serverCode && (
                                    <a
                                        href={project.serverCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-accent-cyan transition-colors"
                                        title="Backend Source Code"
                                    >
                                        <FaGithub size={16} /> Server
                                    </a>
                                )}

                                {/* যদি আলাদা না হয়ে একটাই গিটহাব লিংক থাকে */}
                                {project.githubLink && !project.clientCode && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-accent-blue transition-colors"
                                    >
                                        <FaGithub size={16} /> Code
                                    </a>
                                )}
                            </div>

                            {/* Live Demo Link */}
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-blue-400 transition-colors bg-accent-blue/10 px-2.5 py-1.5 rounded-lg border border-accent-blue/20"
                            >
                                Live Demo <FaExternalLinkAlt size={12} />
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}