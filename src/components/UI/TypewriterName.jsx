"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function TypewriterName({ text, highlightText }) {

    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (!isDeleting && displayText.length < highlightText.length) {
            timeout = setTimeout(() => {
                setDisplayText(highlightText.slice(0, displayText.length + 1));
            }, 120);
        } else if (!isDeleting && displayText.length === highlightText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(highlightText.slice(0, displayText.length - 1));
            }, 60);
        } else if (isDeleting && displayText.length === 0) {
            timeout = setTimeout(() => setIsDeleting(false), 500);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, highlightText]);

    return (
        <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
            {text}{" "}
            <br></br>
            <span className="text-accent-blue inline-flex items-center">
                {displayText}
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                    className="ml-1 w-[3px] h-[0.9em] bg-accent-blue inline-block"
                />
            </span>
        </motion.h1>
    );
}