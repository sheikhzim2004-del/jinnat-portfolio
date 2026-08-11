'use client';

import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank you for reaching out! I will get back to you soon.', {
            style: {
                backgroundColor: '#111827', // প্রজেক্টের card-dark কালার
                color: '#F9FAFB',
                border: '1px solid #3B82F6', // accent-blue বর্ডার
            },
        });
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 rounded-full">
                    Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                    Contact <span className="text-accent-blue">Me</span>
                </h2>
                <p className="text-muted-text mt-2 text-base sm:text-lg max-w-xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to drop a message!
                </p>
                <div className="w-16 h-1 bg-accent-blue mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left Side: Contact Info */}
                <div className="lg:col-span-5 flex flex-col space-y-6 justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s talk about everything!</h3>
                        <p className="text-muted-text leading-relaxed mb-8">
                            I am open to freelance opportunities, full-time roles, or just a friendly chat. Send me an email or find me on my socials.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-4 bg-card-dark border border-gray-800 rounded-xl">
                                <div className="p-3 bg-bg-dark rounded-lg text-accent-blue text-xl border border-gray-800">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-muted-text">Email Me</h4>
                                    <p className="text-base font-semibold text-white">islamjinnat544@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-card-dark border border-gray-800 rounded-xl">
                                <div className="p-3 bg-bg-dark rounded-lg text-accent-cyan text-xl border border-gray-800">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-muted-text">Location</h4>
                                    <p className="text-base font-semibold text-white">Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow Me</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/sheikhzim2004-del"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-card-dark border border-gray-800 rounded-xl text-gray-300 hover:text-accent-blue hover:border-accent-blue/50 transition-all duration-200"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jinnat-islam-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-card-dark border border-gray-800 rounded-xl text-gray-300 hover:text-accent-blue hover:border-accent-blue/50 transition-all duration-200"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="lg:col-span-7 bg-card-dark border border-gray-800 p-8 rounded-2xl shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-bg-dark border border-gray-800 rounded-xl text-white focus:outline-none focus:border-accent-blue transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-bg-dark border border-gray-800 rounded-xl text-white focus:outline-none focus:border-accent-blue transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                            <input
                                type="text"
                                required
                                placeholder="Project Inquiry"
                                className="w-full px-4 py-3 bg-bg-dark border border-gray-800 rounded-xl text-white focus:outline-none focus:border-accent-blue transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea
                                rows={5}
                                required
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 bg-bg-dark border border-gray-800 rounded-xl text-white focus:outline-none focus:border-accent-blue transition resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 text-white font-semibold bg-accent-blue hover:bg-blue-600 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            <FaPaperPlane /> Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}