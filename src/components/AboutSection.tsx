// components/AboutSection.tsx
"use client";
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import TypewriterHeading from './TypewriterHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Heart, Users, Zap, ArrowUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <TypewriterHeading 
            text="About Me"
            className="text-3xl md:text-4xl font-headline font-bold text-center mb-12" 
          />
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center">
              <Image
                src="https://placehold.co/250x250.png"
                alt="Profile Picture"
                width={250} 
                height={250}
                className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-lg shadow-xl border-4 border-primary"
                data-ai-hint="professional portrait"
              />
            </div>

            <div className="md:col-span-2 space-y-6">
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                I’m a computer engineering student with a curious mindset and a willingness to explore new opportunities. While I’m still discovering my path, I enjoy being part of collaborative environments where I can learn, contribute, and grow. I believe in showing up, asking questions, and doing my best — no matter the challenge.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                I’m someone who values consistency, teamwork, and self-improvement. I may not have everything figured out yet, but I’m committed to learning, trying new things, and becoming the best version of myself — one step at a time.
              </p>
              
              {/* New Education Section */}
              <div className="pt-6">
                <h3 className="text-2xl font-headline font-semibold mb-4 text-foreground">
                  Education
                </h3>
                <InfoCard
                  icon={<GraduationCap className="h-8 w-8 text-primary" />}
                  title="B.E. in Computer Engineering"
                  description="SAL Institute of Technology and Engineering Research (2023 - 2027)"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                <InfoCard
                  icon={<Zap className="h-8 w-8 text-primary" />}
                  title="Curiosity"
                  description="Eager to explore new technologies and solve challenging problems."
                />
                <InfoCard
                  icon={<Users className="h-8 w-8 text-primary" />}
                  title="Collaboration"
                  description="Thrive in team settings, valuing shared learning and growth."
                />
                <InfoCard
                  icon={<ArrowUp className="h-8 w-8 text-primary" />}
                  title="Self-Improvement"
                  description="Dedicated to continuous learning and personal development."
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <Card className="bg-card shadow-md hover:shadow-lg transition-all duration-300 ease-out cursor-none transform hover:scale-105">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      {icon}
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm font-body text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;