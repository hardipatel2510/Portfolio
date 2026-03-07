// src/data/cvData.ts
import { Github, ExternalLink, Code2, Database, PencilRuler, GraduationCap, Briefcase, Zap, Users, ArrowUp, Mail, Linkedin, MapPin } from 'lucide-react';
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
  iconName: string;
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
  coursework?: string[];
}

export const cvData = {
  personalInfo: {
    name: "Hardi Patel",
    title: "Computer Engineering Student",
    email: "hardi.2510p@gmail.com",
    linkedin: "https://www.linkedin.com/in/hardipatel2510/",
    location: "Ahmedabad, Gujarat, India",
    github: "https://github.com/hardipatel2510",
    bio: [
      "Computer Engineering student at SAL Institute of Technology and Engineering Research (GTU). Passionate about software development, especially Java-based applications and problem solving.",
      "I enjoy building modern web applications and continuously improving my technical skills. My goal is to gain practical industry experience through internships and contribute to innovative software solutions."
    ],
    resumeLink: "/Hardi_Patel_CV.pdf", // We'll need to figure out how to generate this or inform user
  },
  education: [
    {
      degree: "Bachelor of Engineering (Computer Engineering)",
      institution: "SAL Institute of Technology and Engineering Research – GTU",
      duration: "2023 – 2027",
      coursework: [
        "Data Structures",
        "Database Management Systems",
        "Computer Organization",
        "Web Development"
      ]
    }
  ],
  experience: [
    {
      id: 'stride',
      company: 'Self-Directed',
      position: 'Lead Developer (Stride)',
      duration: 'Ongoing',
      description: [
        'Building an intelligent banking ecosystem to redefine financial processes.',
        'Implementing Elite Dashboards and Document Mastery features.',
      ]
    },
    {
      id: 'safevoices',
      company: 'Self-Directed',
      position: 'Full-Stack Developer (SafeVoices)',
      duration: 'Ongoing',
      description: [
        'Developing a secure support platform for sexual harassment victims.',
        'Prioritizing safety and trust through modern UI/UX principles.',
      ]
    }
  ],
  technicalSkills: [
    {
      category: 'Programming',
      skills: ['Java', 'C++']
    },
    {
      category: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']
    },
    {
      category: 'Database',
      skills: ['SQL', 'MySQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'VS Code', 'IntelliJ']
    }
  ],
  softSkills: [
    'Problem Solving',
    'Logical Thinking',
    'Team Collaboration',
    'Communication',
    'Time Management'
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Gujarati', level: 'Native' }
  ],
  interests: [
    'Web Development',
    'Learning New Technologies',
    'UI/UX Design',
    'Coding Practice'
  ],
  projects: [
    {
      id: '1',
      title: 'Stride',
      description: 'An intelligent banking ecosystem architected to redefine Indian financial processes.',
      tags: ['Next.js', 'Finance', 'System Architecture'],
      githubLink: 'https://github.com/simitmodi/Stride',
      isCompleted: false,
    },
    {
      id: '2',
      title: 'SafeVoices',
      description: 'A secure support and tracking platform for sexual harassment victims.',
      tags: ['Safety', 'Next.js', 'Glassmorphism'],
      githubLink: 'https://github.com/simitmodi/SafeVoices',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'WeatherX Dashboard',
      description: 'Premium Apple-Weather-style dashboard with time-sensitive dynamic themes.',
      tags: ['Mobile-First', 'Next.js', 'Advanced CSS'],
      githubLink: 'https://github.com/hardipatel2510/WeatherX',
      isCompleted: true,
    },
    {
      id: '4',
      title: 'AstraIntel Platform',
      description: 'Space Intelligence Platform featuring a Pinterest-style layout.',
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
    }
  ],
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
      description: 'Always evolving through self-directed learning.',
      iconName: 'ArrowUp'
    }
  ]
};
