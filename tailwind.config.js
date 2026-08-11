/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#0B0F17',
                'card-dark': '#111827',
                'accent-blue': '#3B82F6',
                'accent-cyan': '#06B6D4',
                'text-primary': '#F9FAFB',
                'text-muted': '#9CA3AF',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.85 },
                },
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                'float-slow': 'float 4s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};