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
    title: "Computer Engineering Student",
    bio: [
      "I’m a computer engineering student with a curious mindset and a willingness to explore new opportunities. While I’m still discovering my path, I enjoy being part of collaborative environments where I can learn, contribute, and grow. I believe in showing up, asking questions, and doing my best — no matter the challenge.",
      "I’m someone who values consistency, teamwork, and self-improvement. I may not have everything figured out yet, but I’m committed to learning, trying new things, and becoming the best version of myself — one step at a time."
    ],
    resumeLink: "https://1drv.ms/w/c/ae6ee91ec4884036/EWlGJKBoyEJAvVHekkxRPKIBlOnjZfL2ccIhuzpxpFGfYw?e=8Oc9FB",
  },
  education: [
    {
      degree: "B.E. in Computer Engineering",
      institution: "SAL Institute of Technology and Engineering Research",
      duration: "2023 - 2027",
    }
  ],
  experience: [
    // Placeholder for now, user can fill this in
    {
      id: 'exp1',
      company: 'TBD',
      position: 'Computer Engineering Intern/Student',
      duration: 'Ongoing',
      description: [
        'Actively learning and applying core engineering principles.',
        'Working on personal projects to build a strong foundation in Java and DSA.',
        'Collaborating with peers on academic and personal coding initiatives.'
      ]
    }
  ],
  skills: [
    {
      name: 'Programming Languages',
      iconName: 'Code2' as const,
      skills: [
        { name: 'HTML', proficiency: 40 },
        { name: 'Java', proficiency: 60 },
        { name: 'CSS', proficiency: 30 },
        { name: 'DSA', proficiency: 40 },
      ],
    },
    {
      name: 'Databases',
      iconName: 'Database' as const,
      skills: [
        { name: 'SQL', proficiency: 70 },
      ],
    },
    {
      name: 'Design Tools',
      iconName: 'PencilRuler' as const,
      skills: [
        { name: 'Canva', proficiency: 75 },
      ],
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Bank Link Integrated Service',
      description: 'A smart, data-driven web solution designed to reduce unnecessary bank visits by helping users pre-book appointments and receive precise guidance on required documents. Built a responsive frontend using HTML and Tailwind CSS.',
      tags: ['HTML', 'Tailwind CSS', 'Frontend'],
      githubLink: 'https://github.com/simitmodi/Bank-Link-Integrated-Services',
      isCompleted: true,
    },
    {
      id: '2',
      title: 'To-Do list',
      description: 'Developed a robust, lightweight terminal-based To-Do List application using core Java, designed to optimize personal task management through a minimalist menu-driven solution.',
      tags: ['Java', 'CLI', 'Task Management'],
      githubLink: 'https://github.com/simitmodi/ToDoList',
      isCompleted: true,
    },
    {
      id: '3',
      title: 'AstraIntel Platform',
      description: 'A multi-page, responsive Space Intelligence Platform with a NASA-inspired UI. Featuring a Pinterest-style layout, neon accents, and smooth glass-style card transitions for a professional space agency experience.',
      tags: ['Next.js', 'React', 'Space Tech', 'UI/UX'],
      isCompleted: false,
    },
    {
      id: '4',
      title: 'WeatherX Dashboard',
      description: 'An Apple Weather-style responsive dashboard featuring dynamic themes that update based on local time. Implemented glassmorphism styling and gradual blur effects for a premium mobile-first experience.',
      tags: ['Next.js', 'Dynamic Theming', 'Glassmorphism', 'Responsive Design'],
      githubLink: 'https://github.com/hardipatel2510/WeatherX',
      isCompleted: true,
    },
    {
      id: '5',
      title: 'Stride',
      description: 'An intelligent ecosystem architected to redefine the Indian banking experience. Features Elite Dashboards for personalized financial agendas, Instant Intelligence for proactive notifications, Document Mastery for precision guidance, and Data-Driven Insights to eliminate wait times.',
      tags: ['Modern Banking', 'Personalized Dashboards', 'Proactive Notifications', 'Document Mastery'],
      githubLink: 'https://github.com/simitmodi/Stride',
      isCompleted: false,
    },
    {
      id: '6',
      title: 'SafeVoices',
      description: 'A sexual harassment support and case tracking website designed for SAL Education. Features a safe, professional environment with a modern glassmorphism UI, including features for tracking cases and administrative dashboards.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Glassmorphism'],
      githubLink: 'https://github.com/simitmodi/SafeVoices', // Placeholder/Common pattern
      isCompleted: false,
    },
  ] as Project[],
  coreValues: [
    {
      title: 'Curiosity',
      description: 'Eager to explore new technologies and solve challenging problems.',
      iconName: 'Zap'
    },
    {
      title: 'Collaboration',
      description: 'Thrive in team settings, valuing shared learning and growth.',
      iconName: 'Users'
    },
    {
      title: 'Self-Improvement',
      description: 'Dedicated to continuous learning and personal development.',
      iconName: 'ArrowUp'
    }
  ]
};
