// components/BackgroundAnimation.tsx
"use client";
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const BackgroundAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const colors = ['#3b82f6', '#8b5cf6', '#6366f1', '#a855f7'];
        const numParticles = 20;

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute rounded-full opacity-20 blur-3xl';
            const size = Math.random() * 300 + 100;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            containerRef.current.appendChild(particle);

            anime({
                targets: particle,
                translateX: () => anime.random(-200, 200),
                translateY: () => anime.random(-200, 200),
                scale: [1, 1.5, 1],
                duration: () => anime.random(10000, 20000),
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background"
            aria-hidden="true"
        />
    );
};

export default BackgroundAnimation;
