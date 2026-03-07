// src/components/BackgroundAnimation.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const BackgroundAnimation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const blobs = containerRef.current.querySelectorAll('.blob');

        // Create floating animation for each blob
        blobs.forEach((blob) => {
            // Random starting positions
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;

            anime({
                targets: blob,
                translateX: () => [
                    { value: anime.random(-100, 100), duration: anime.random(15000, 25000) },
                    { value: anime.random(-100, 100), duration: anime.random(15000, 25000) }
                ],
                translateY: () => [
                    { value: anime.random(-100, 100), duration: anime.random(15000, 25000) },
                    { value: anime.random(-100, 100), duration: anime.random(15000, 25000) }
                ],
                scale: () => [
                    { value: anime.random(0.8, 1.5), duration: anime.random(10000, 20000) },
                    { value: anime.random(0.8, 1.5), duration: anime.random(10000, 20000) }
                ],
                easing: 'easeInOutQuad',
                loop: true,
                direction: 'alternate',
            });
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background"
            aria-hidden="true"
        >
            {/* Aurora Blobs */}
            <div
                className="blob absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 bg-primary left-[-10%] top-[-10%]"
            />
            <div
                className="blob absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 bg-secondary right-[-5%] bottom-[-10%]"
            />
            <div
                className="blob absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-10 bg-accent left-[20%] bottom-[10%]"
            />
            <div
                className="blob absolute w-[550px] h-[550px] rounded-full blur-[110px] opacity-15 bg-primary/40 right-[15%] top-[20%]"
            />

            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle Gradient Overlay to ground the blobs */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/50" />
        </div>
    );
};

export default BackgroundAnimation;
