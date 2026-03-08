// components/ResumeSection.tsx
"use client";
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import {
    Mail, Linkedin, MapPin, Github,
    GraduationCap, Zap, ArrowUp,
    BookOpen, Brain, Code2, Heart, Languages,
    Download, Printer
} from 'lucide-react';
import Image from 'next/image';
import { cvData } from '@/data/cvData';
import { cn } from '@/lib/utils';
import profilePic from '@/lib/Photo.png';

const ResumeSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="resume" className="py-24 relative overflow-hidden bg-background print:bg-white print:p-0 print:m-0">
            {/* Background radial glow - Hidden on print */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none print:hidden" />

            <div className="container mx-auto px-4 relative z-10 print:max-w-none print:w-full print:p-8">
                <div className="flex justify-between items-center mb-12 print:hidden">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold">Curriculum Vitae</h2>
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-headline font-bold shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all"
                    >
                        <Download className="h-5 w-5" />
                        Download CV
                    </button>
                </div>

                <div ref={containerRef} className="space-y-8 print:space-y-4">
                    {/* Header Card: About & Profile */}
                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden print:bg-white print:border-none print:shadow-none">
                        <CardContent className="p-8 md:p-12 print:p-4">
                            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-2">
                                        <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-bold tracking-wider uppercase print:bg-black/5 print:text-black">
                                            About Me
                                        </span>
                                        <h1 className="text-4xl md:text-5xl font-headline font-bold print:text-black">{cvData.personalInfo.name}</h1>
                                        <p className="text-xl text-primary font-medium print:text-black/70">{cvData.personalInfo.title}</p>
                                    </div>

                                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-body print:text-black print:text-base">
                                        {cvData.personalInfo.bio.map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>

                                    {/* Contact Info */}
                                    <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/10 print:border-black/10">
                                        <div className="flex items-center gap-3 text-muted-foreground print:text-black">
                                            <Mail className="h-5 w-5 text-primary print:text-black" />
                                            <span>{cvData.personalInfo.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground print:text-black">
                                            <Linkedin className="h-5 w-5 text-primary print:text-black" />
                                            <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn Profile</a>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground print:text-black">
                                            <MapPin className="h-5 w-5 text-primary print:text-black" />
                                            <span>{cvData.personalInfo.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-muted-foreground print:text-black">
                                            <Github className="h-5 w-5 text-primary print:text-black" />
                                            <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub Repository</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Profile Pic */}
                                <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl animate-pulse" />
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 bg-white/5 flex items-center justify-center">
                                        <Image
                                            src={profilePic}
                                            alt="Profile Picture"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2 print:gap-4 print:pt-4">

                        {/* Education */}
                        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-xl print:bg-white print:border-black/5 print:shadow-none">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <GraduationCap className="h-6 w-6 text-primary print:text-black" />
                                    <h3 className="text-xl font-headline font-bold print:text-black">Education</h3>
                                </div>
                                {cvData.education.map((edu, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <p className="font-bold print:text-black">{edu.degree}</p>
                                        <p className="text-sm text-muted-foreground print:text-black">{edu.institution}</p>
                                        <p className="text-sm font-code text-primary print:text-black">{edu.duration}</p>
                                        {edu.coursework && (
                                            <div className="pt-2">
                                                <p className="text-xs uppercase tracking-widest text-white/40 mb-2 print:text-black/50">Relevant Coursework</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.coursework.map((course, i) => (
                                                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded print:border print:border-black/10 print:text-black">{course}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Technical Skills */}
                        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-xl md:row-span-2 print:bg-white print:border-black/5 print:shadow-none">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Code2 className="h-6 w-6 text-primary print:text-black" />
                                    <h3 className="text-xl font-headline font-bold print:text-black">Technical Skills</h3>
                                </div>
                                <div className="space-y-6">
                                    {cvData.technicalSkills.map((group, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <p className="text-sm font-bold uppercase tracking-wider text-primary print:text-black">{group.category}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {group.skills.map((skill, i) => (
                                                    <div key={i} className="px-4 py-2 bg-white text-slate-800 border border-slate-100 shadow-sm rounded-full text-sm font-bold hover:scale-105 transition-all print:border-black/10 print:text-black">
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Soft Skills */}
                        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-xl print:bg-white print:border-black/5 print:shadow-none">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Brain className="h-6 w-6 text-primary print:text-black" />
                                    <h3 className="text-xl font-headline font-bold print:text-black">Soft Skills</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {cvData.softSkills.map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground print:text-black">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full print:bg-black" />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Languages */}
                        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-xl print:bg-white print:border-black/5 print:shadow-none">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Languages className="h-6 w-6 text-primary print:text-black" />
                                    <h3 className="text-xl font-headline font-bold print:text-black">Languages</h3>
                                </div>
                                <div className="space-y-4">
                                    {cvData.languages.map((lang, idx) => (
                                        <div key={idx} className="flex justify-between items-center">
                                            <span className="font-medium print:text-black">{lang.name}</span>
                                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full print:border print:border-black/20 print:text-black">{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Interests */}
                        <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-xl print:bg-white print:border-black/5 print:shadow-none">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <h3 className="text-xl font-headline font-bold print:text-black">Interests</h3>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {cvData.interests.map((interest, idx) => (
                                        <div key={idx} className="px-8 py-3 bg-white text-slate-800 border border-slate-100 shadow-sm rounded-full hover:shadow-md hover:scale-105 transition-all duration-300 print:bg-white print:text-black print:border-black/10">
                                            <span className="text-base font-headline font-bold">
                                                {interest}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>

            <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume, #resume * {
            visibility: visible;
          }
          #resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .container {
            max-width: none !important;
            width: 100% !important;
            padding: 0 !important;
          }
        }
      `}</style>
        </section>
    );
};

export default ResumeSection;
