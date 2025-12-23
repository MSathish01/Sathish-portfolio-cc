"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function InteractiveBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Smooth mouse movement
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Update state for direct position (optional usage)
            setMousePosition({ x: clientX, y: clientY });

            // Update motion values for smooth spring animation
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-50 overflow-hidden pointer-events-none"
        >
            {/* 1. Base Gradient Background */}
            <div className="absolute inset-0 bg-background" />

            {/* 2. Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* 3. Mouse Spotlight Effect */}
            <motion.div
                className="absolute inset-0 opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
            />

            {/* 4. Secondary Spotlight (Subtle Color Shift) */}
            <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                    background: `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(14, 165, 233, 0.1), transparent 80%)`,
                }}
            />

            {/* 5. Floating Orbs (Ambient Animation) */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"
            />
        </div>
    );
}
