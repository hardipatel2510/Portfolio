// src/data/cvData.ts
import { Github, ExternalLink, Code2, Database, PencilRuler, GraduationCap, Briefcase, Zap, Users, ArrowUp } from 'lucide-react';
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  isCompleted?: boolean;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  name: string;
  iconName: 'Code2' | 'Database' | 'PencilRuler';
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export const cvData = {
  personalInfo: {
    name: "Hardi Patel",
    title: "Full-Stack Software Engineer & Computer Engineering Student",
    bio: [
      "I am a results-driven Computer Engineering student at SAL Institute of Technology, specializing in building modern web applications with a focus on performance and user experience. My expertise spans core Java and Data Structures to advanced full-stack development using Next.js, React, and Tailwind CSS.",
      "Driven by curiosity and a commitment to excellence, I have architected diverse solutions ranging from banking ecosystems to social support platforms. My goal is to leverage my technical foundation and collaborative mindset to solve complex real-world challenges while continuously evolving as a developer."
    ],
    resumeLink: "https://1drv.ms/w/c/ae6ee91ec4884036/EWlGJKBoyEJAvVHekkxRPKIBlOnjZfL2ccIhuzpxpFGfYw?e=8Oc9FB",
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "SAL Institute of Technology and Engineering Research (GTU)",
      duration: "2023 - 2027",
    }
  ],
  experience: [
    {
      id: 'proj-lead',
      company: 'Self-Directed Projects',
      position: 'Full-Stack Developer',
      duration: 'Ongoing',
      description: [
        'Architected and implemented "Stride," an intelligent banking ecosystem designed to eliminate institutional friction through digital intelligence and document mastery.',
        'Developed "SafeVoices," a secure case-tracking and support platform for sexual harassment victims, utilizing modern glassmorphism UI for a calm and professional experience.',
        'Engineered "WeatherX," a mobile-first dashboard featuring dynamic time-based themes and advanced CSS blur effects for a premium native app feel.',
        'Built "AstraIntel," a Pinterest-style Space Intelligence Platform with smooth transitions and high-fidelity UI components.'
      ]
    },
    {
      id: 'academic',
      company: 'SAL Institute of Technology',
      position: 'Computer Engineering Student',
      duration: '2023 - Present',
      description: [
        'Consistently applying core engineering principles to project-based learning.',
        'Mastering Java and Data Structures & Algorithms (DSA) through hands-on development of CLI and GUI applications.',
        'Actively participating in collaborative coding environments and peer-led technical initiatives.'
      ]
    }
  ],
  skills: [
    {
      name: 'Frontend Development',
      iconName: 'Code2' as const,
      skills: [
        { name: 'React / Next.js', proficiency: 90 },
        { name: 'Tailwind CSS', proficiency: 95 },
        { name: 'HTML5 / CSS3', proficiency: 95 },
        { name: 'TypeScript', proficiency: 85 },
      ],
    },
    {
      name: 'Backend & Algorithms',
      iconName: 'Database' as const,
      skills: [
        { name: 'Java / OOP', proficiency: 90 },
        { name: 'Python', proficiency: 75 },
        { name: 'DSA', proficiency: 85 },
        { name: 'SQL / Databases', proficiency: 80 },
        { name: 'Git / GitHub', proficiency: 90 },
      ],
    },
    {
      name: 'Design & UI/UX',
      iconName: 'PencilRuler' as const,
      skills: [
        { name: 'Figma', proficiency: 80 },
        { name: 'Glassmorphism', proficiency: 95 },
        { name: 'Responsive Design', proficiency: 100 },
        { name: 'Canva / Mockups', proficiency: 85 },
      ],
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Stride',
      description: 'An intelligent banking ecosystem architected to redefine Indian financial processes. Features include Elite Dashboards, Document Mastery, and Data-Driven Insights.',
      tags: ['Next.js', 'Finance', 'System Architecture'],
      githubLink: 'https://github.com/simitmodi/Stride',
      isCompleted: false,
    },
    {
      id: '2',
      title: 'SafeVoices',
      description: 'A secure support and tracking platform for sexual harassment victims. Prioritizes safety and professional trust through a modern glassmorphism interface.',
      tags: ['Safety', 'Next.js', 'Glassmorphism'],
      githubLink: 'https://github.com/simitmodi/SafeVoices',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'WeatherX Dashboard',
      description: 'Premium Apple-Weather-style dashboard with time-sensitive dynamic themes and gradual blur effects.',
      tags: ['Mobile-First', 'Next.js', 'Advanced CSS'],
      githubLink: 'https://github.com/hardipatel2510/WeatherX',
      isCompleted: true,
    },
    {
      id: '4',
      title: 'AstraIntel Platform',
      description: 'Space Intelligence Platform featuring a Pinterest-style layout and high-fidelity NASA-inspired UI.',
      tags: ['Next.js', 'React', 'Space Tech'],
      isCompleted: false,
    },
    {
      id: '5',
      title: 'Bank Link Integrated Service',
      description: 'Data-driven solution for banking document prep and appointment scheduling.',
      tags: ['HTML', 'Tailwind', 'Frontend'],
      githubLink: 'https://github.com/simitmodi/Bank-Link-Integrated-Services',
      isCompleted: true,
    },
    {
      id: '6',
      title: 'To-Do list',
      description: 'Robust terminal-based task management solution built with core Java and optimized file handling.',
      tags: ['Java', 'CLI', 'Task Management'],
      isCompleted: true,
    },
  ] as Project[],
  coreValues: [
    {
      title: 'Excellence',
      description: 'Committed to high-quality code and aesthetic visual experiences.',
      iconName: 'Zap'
    },
    {
      title: 'Social Impact',
      description: 'Building technology that solves meaningful human and institutional problems.',
      iconName: 'Users'
    },
    {
      title: 'Continuous Growth',
      description: 'Always evolving through self-directed learning and engineering challenges.',
      iconName: 'ArrowUp'
    }
  ]
};
