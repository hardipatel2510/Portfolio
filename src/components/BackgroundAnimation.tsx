// components/BackgroundAnimation.tsx
"use client";
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const BackgroundAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const colors = ['#3b82f6', '#8b5cf6', '#6366f1', '#a855f7'];
        const numLargeOrbs = 6;
        const numFloatingParticles = 30;

        // 1. Create large soft glowing orbs (The "Aura")
        for (let i = 0; i < numLargeOrbs; i++) {
            const orb = document.createElement('div');
            orb.className = 'absolute rounded-full opacity-10 blur-[120px] mix-blend-screen';
            const size = Math.random() * 500 + 300;
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;
            orb.style.background = colors[Math.floor(Math.random() * colors.length)];
            orb.style.left = `${Math.random() * 100}%`;
            orb.style.top = `${Math.random() * 100}%`;
            containerRef.current.appendChild(orb);

            anime({
                targets: orb,
                translateX: () => anime.random(-300, 300),
                translateY: () => anime.random(-300, 300),
                scale: [1, 1.4, 1],
                duration: () => anime.random(15000, 25000),
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        // 2. Create smaller floating particles (The "Dust/Stars")
        for (let i = 0; i < numFloatingParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute rounded-full opacity-30 shadow-[0_0_10px_rgba(255,255,255,0.5)]';
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = 'white';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            containerRef.current.appendChild(particle);

            // Floating animation with random path
            anime({
                targets: particle,
                translateX: [
                    { value: () => anime.random(-100, 100), duration: 10000 },
                    { value: () => anime.random(-100, 100), duration: 10000 },
                    { value: () => anime.random(-100, 100), duration: 10000 }
                ],
                translateY: [
                    { value: () => anime.random(-100, 100), duration: 10000 },
                    { value: () => anime.random(-100, 100), duration: 10000 },
                    { value: () => anime.random(-100, 100), duration: 10000 }
                ],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1.2, 0.5],
                duration: () => anime.random(15000, 30000),
                easing: 'easeInOutSine',
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
