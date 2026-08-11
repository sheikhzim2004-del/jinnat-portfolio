"use client";

import { motion } from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
    direction = "up", // 'up', 'down', 'left', 'right'
    fullWidth = false,
    className = "",
}) {
    // ডিরেকশন অনুযায়ী ইনিশিয়াল পজিশন সেট করার লজিক
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, margin: "-50px" }} // একবার স্ক্রোল করলে এনিমেশন হবে
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // প্রফেশনাল স্মুথ কিউবিক বেজিয়ার কার্ভ
            }}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
}