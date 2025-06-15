// components/ContactSection.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AnimatedSection from './AnimatedSection';
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { useActionState, useEffect, useRef } from 'react'; // Changed from react-dom
import { useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-headline">
      {pending ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
    </Button>
  );
}

const ContactSection = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed to useActionState
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success && formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 w-full max-w-4xl">
            <Card className="bg-background shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-primary" /> Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-body">Name</Label>
                    <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-1 bg-card" />
                    {state.issues && state.fields?.name === '' && <p className="text-sm text-destructive mt-1">Name is required.</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-body">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required className="mt-1 bg-card" />
                     {state.issues && state.fields?.email && state.issues.find(issue => issue.toLowerCase().includes('email')) && (
                        <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-body">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="mt-1 bg-card" />
                     {state.issues && state.fields?.message && state.issues.find(issue => issue.toLowerCase().includes('message')) && (
                        <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>
                    )}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="bg-background shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-body text-muted-foreground">
                    Feel free to reach out through the form, or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
                  </p>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contact@example.com" className="font-body hover:text-primary transition-colors">contact@example.com</a>
                  </div>
                  {/* Add more contact details if needed, e.g., phone */}
                </CardContent>
              </Card>

              <Card className="bg-background shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild aria-label="LinkedIn Profile">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild aria-label="GitHub Profile">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild aria-label="Twitter Profile">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
