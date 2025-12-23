"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function NeonFluidBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration
        const particleCount = 20;
        const particles: Particle[] = [];

        const isDark = resolvedTheme === "dark";

        // Colors adapted for theme
        const colors = isDark
            ? [ // Neon for Dark Mode
                "rgba(45, 212, 191, 0.4)", // Teal
                "rgba(6, 182, 212, 0.4)",  // Cyan
                "rgba(59, 130, 246, 0.4)", // Blue
                "rgba(139, 92, 246, 0.3)", // Purple
            ]
            : [ // Vibrant/Pastel for Light Mode (Darker alpha for visibility)
                "rgba(45, 212, 191, 0.6)", // Teal
                "rgba(6, 182, 212, 0.6)",  // Cyan
                "rgba(59, 130, 246, 0.6)", // Blue
                "rgba(139, 92, 246, 0.5)", // Purple
            ];

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            color: string;
            sinValue: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.0;
                this.vy = (Math.random() - 0.5) * 1.0;
                this.radius = Math.random() * 150 + 100;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.sinValue = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < -this.radius) this.x = width + this.radius;
                if (this.x > width + this.radius) this.x = -this.radius;
                if (this.y < -this.radius) this.y = height + this.radius;
                if (this.y > height + this.radius) this.y = -this.radius;

                this.sinValue += 0.01;
                this.radius += Math.sin(this.sinValue) * 0.5;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    this.radius
                );
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Blend mode based on theme
            // Dark mode: 'screen' makes it glow
            // Light mode: 'multiply' or 'source-over' makes it visible like watercolor
            ctx.globalCompositeOperation = isDark ? "screen" : "multiply";

            particles.forEach((particle) => {
                particle.update();
                particle.draw(ctx);
            });

            ctx.globalCompositeOperation = "source-over";
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-50 bg-background pointer-events-none transition-colors duration-500"
            style={{ filter: "blur(60px)" }}
        />
    );
}
