'use client';

export default function Footer() {
    return (
        <footer className="border-t border-gray-800/80 bg-bg-dark py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-text text-sm text-center sm:text-left">
                    © {new Date().getFullYear()} <span className="text-white font-medium">Md Jinnat Islam</span>. All rights reserved.
                </p>
                <p className="text-muted-text text-sm text-center sm:text-right">
                    Built with <span className="text-accent-blue">Next.js</span> & <span className="text-accent-cyan">Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
}