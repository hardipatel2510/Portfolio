// components/ProjectsSection.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Bank Link Integrated Service',
    description: 'A smart, data-driven web solution designed to reduce unnecessary bank visits by helping users pre-book appointments and receive precise guidance on required documents, just built the frontend using the HTML and tailwind css.',
    tags: ['HTML', 'Tailwind CSS', 'Frontend'],
    githubLink: 'https://github.com/simitmodi/Bank-Link-Integrated-Services',
  },
  {
    id: '2',
    title: 'To-Do list',
    description: 'Developed a robust, lightweight terminal-based To-Do List application using core Java, designed to optimize personal task management through a minimalist menu driven solution.',
    tags: ['Java', 'CLI', 'Task Management'],
    githubLink: 'https://github.com/simitmodi/ToDoList',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
            {projectsData.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    <span className="text-xs text-primary font-code animate-blink-text">(Working)</span>
                  </div>
                  <CardDescription className="font-body text-muted-foreground pt-1 min-h-[6rem]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs font-code rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button variant="default" size="sm" asChild>
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
