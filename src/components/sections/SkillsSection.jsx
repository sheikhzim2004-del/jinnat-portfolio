'use client';

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaFigma
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiGithub
} from 'react-icons/si';

export default function SkillsSection() {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
                { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
                { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
                { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
                { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
            ],
        },
        {
            title: 'Backend & Database',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
                { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
            ],
        },
        {
            title: 'Styling, Design & Tools',
            skills: [
                { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
                { name: 'Figma (UI/UX)', icon: <FaFigma className="text-pink-400" /> },
                { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
                { name: 'GitHub', icon: <SiGithub className="text-white" /> },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-full">
                    My Tech Stack
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                    MERN Stack & <span className="text-accent-blue">Modern Skills</span>
                </h2>
                <p className="text-muted-text mt-2 text-base sm:text-lg max-w-xl mx-auto">
                    Technologies and tools I use to build scalable, full-stack web applications.
                </p>
                <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="bg-card-dark border border-gray-800 rounded-2xl p-6 shadow-xl hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-3 flex items-center justify-between">
                                <span>{category.title}</span>
                            </h3>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-3 bg-bg-dark rounded-xl border border-gray-800/80 hover:border-accent-blue/50 hover:scale-105 transition-all duration-200"
                                    >
                                        <span className="text-2xl">{skill.icon}</span>
                                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}