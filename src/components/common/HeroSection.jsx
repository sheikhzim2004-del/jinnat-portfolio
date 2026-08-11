'use client';

import TypewriterName from "../UI/TypewriterName"
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text Info */}
                <div className="flex flex-col space-y-6 text-center md:text-left">
                    <div className="inline-block">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-full">
                            Welcome to my portfolio
                        </span>
                    </div>

                    <TypewriterName text="Hi, I'm"
                        highlightText="Md Jinnat Islam">
                    </TypewriterName>
                    {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Hi, I&apos;m <span className="text-accent-blue">Md Jinnat Islam</span>
                    </h1> */}

                    <h2 className="text-xl sm:text-2xl font-medium text-gray-300">
                        Frontend & Web Developer
                    </h2>

                    <p className="text-muted-text text-base sm:text-lg max-w-xl">
                        I specialize in building clean, dynamic, and responsive web applications using React, Next.js, and modern UI frameworks.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                        <a
                            href="#contact"
                            className="px-6 py-3 text-sm font-semibold text-white bg-accent-blue hover:bg-blue-600 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2"
                        >
                            <FaEnvelope /> Hire Me
                        </a>

                        <a
                            href="/resume.pdf"
                            download="Md_Jinnat_Islam_Resume.pdf"
                            className="px-6 py-3 text-sm font-semibold text-white bg-card-dark border border-gray-700 hover:border-accent-cyan hover:text-accent-cyan rounded-xl transition-all duration-200 flex items-center gap-2"
                        >
                            <FaDownload /> Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-muted-text">
                        <a
                            href="https://github.com/sheikhzim2004-del"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-blue text-2xl transition-colors duration-200"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jinnat-islam-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent-blue text-2xl transition-colors duration-200"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Right Column: Profile Image / Avatar Placeholder */}
                <div className="flex justify-center items-center">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                        <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-accent-blue to-accent-cyan animate-pulse-slow">
                            <div className="w-full h-full bg-card-dark rounded-full overflow-hidden flex items-center justify-center border-4 border-bg-dark">
                                <img
                                    src="/images/profile.PNG"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* badge */}
                        <div className="absolute -top-2 -left-6 sm:-left-10 animate-float-slow">
                            <div className="flex items-center gap-2 bg-card-dark/90 backdrop-blur-md border border-accent-cyan/40 text-text-primary text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.35)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Open to Hire
                            </div>
                        </div>

                        <div className="absolute top-6 -right-8 sm:-right-14 animate-float">
                            <div className="bg-card-dark/90 backdrop-blur-md border border-accent-blue/40 text-text-primary text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.35)]">
                                MERN Stack Specialist
                            </div>
                        </div>

                        <div className="absolute bottom-2 -right-4 sm:-right-8 animate-float-slow">
                            <div className="bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                5+ Full-Stack Projects
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}