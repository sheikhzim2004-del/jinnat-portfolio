import React from 'react';
import { FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';

const AboutSection = () => {

    const stats = [
        {
            icon: <FaCode className="text-accent-blue text-2xl" />,
            title: 'Focus',
            desc: 'Frontend & Web Development',
        },
        {
            icon: <FaBriefcase className="text-accent-cyan text-2xl" />,
            title: 'Projects',
            desc: 'Built Responsive & Interactive Apps',
        },
        {
            icon: <FaGraduationCap className="text-accent-blue text-2xl" />,
            title: 'Continuous Learning',
            desc: 'Exploring React, Next.js & Modern UI',
        },
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    About <span className="text-accent-blue">Me</span>
                </h2>
                <div className="w-16 h-1 bg-accent-blue mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Side: Short Bio Card */}
                <div className="lg:col-span-7 bg-card-dark border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Passionate Web Developer Crafting Digital Experiences
                    </h3>
                    <p className="text-muted-text leading-relaxed mb-4">
                        Hello! I&apos;m Md Jinnat Islam. I have a strong passion for designing and building interactive, fast, and user-friendly web interfaces. My focus is on writing clean, maintainable code and solving complex frontend issues.
                    </p>
                    <p className="text-muted-text leading-relaxed">
                        I love working with technologies like HTML, CSS, JavaScript, React, and Next.js, alongside modern styling libraries like Tailwind CSS. I am always eager to learn new tools and improve my technical skill set.
                    </p>
                </div>

                {/* Right Side: Quick Highlight Cards */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card-dark border border-gray-800 hover:border-accent-blue/50 p-5 rounded-xl transition-all duration-300 flex items-center space-x-4"
                        >
                            <div className="p-3 bg-bg-dark rounded-lg border border-gray-800">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                <p className="text-sm text-muted-text">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutSection;