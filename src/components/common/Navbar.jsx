'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    // Mobile Menu state
    const [isOpen, setIsOpen] = useState(false);

    // Nav links array
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo / Name */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-wider text-white">
                            JINNAT<span className="text-accent-blue">.DEV</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-muted-text hover:text-accent-blue text-sm font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="#contact"
                            className="px-4 py-2 text-sm font-medium text-white bg-accent-blue hover:bg-blue-600 rounded-lg shadow-md transition-all duration-200"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-card-dark border-b border-gray-800 px-4 pt-2 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-muted-text hover:text-white hover:bg-gray-800 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center mt-2 px-4 py-2 text-sm font-medium text-white bg-accent-blue hover:bg-blue-600 rounded-lg transition"
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;