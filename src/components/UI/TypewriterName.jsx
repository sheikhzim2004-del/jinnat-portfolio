"use client";
import { motion } from "framer-motion";

const name = "Md Jinnat Islam";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.3,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2 },
    },
};

export default function TypewriterName() {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
            Hi, I&apos;m{" "}
            <span className="text-accent-blue inline-flex items-center">
                <motion.span
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex"
                >
                    {name.split("").map((char, i) => (
                        <motion.span key={i} variants={letter}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.span>
            </span>
        </motion.h1>
    );
}