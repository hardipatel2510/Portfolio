// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, User, Brain, Mail, Sun, Moon, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#hero', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '#about', label: 'About', icon: <User className="h-5 w-5" /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase className="h-5 w-5" /> },
  { href: '#skills', label: 'Skills', icon: <Brain className="h-5 w-5" /> },
  { href: '#contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial theme based on localStorage or system preference
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    } else {
      setTheme('light'); // Default to light if no preference
    }
  }, []);

  useEffect(() => {
    if (!mounted) return; // Wait until mounted to avoid hydration issues with documentElement
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const NavLinkItem: React.FC<{ href: string; label: string; icon: React.ReactNode; onClick?: () => void }> = ({ href, label, icon, onClick }) => (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-out hover:bg-primary/10 hover:text-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary transform"
      aria-label={`Go to ${label} section`}
    >
      {icon}
      <span className="font-headline">{label}</span>
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-background/20 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/#hero" className="text-2xl font-headline font-bold text-primary inline-block transform hover:scale-105 transition-transform duration-200 ease-out">
            Hardi Patel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} {...link} />
            ))}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              aria-label="Toggle theme" 
              className="transform hover:scale-110 transition-transform duration-200 ease-out relative overflow-hidden"
            >
              {mounted ? (
                <>
                  <Sun className={`h-5 w-5 transition-all duration-300 ease-in-out ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
                  <Moon className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} />
                </>
              ) : (
                <div className="h-5 w-5" /> 
              )}
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu" className="transform hover:scale-110 transition-transform duration-200 ease-out">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="/#hero" className="text-xl font-headline font-bold text-primary inline-block transform hover:scale-105 transition-transform duration-200 ease-out" onClick={() => setMobileMenuOpen(false)}>
                      Hardi Patel
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu" className="transform hover:scale-110 transition-transform duration-200 ease-out">
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                  <nav className="flex-grow p-4 space-y-2">
                    {navLinks.map((link) => (
                      <NavLinkItem key={link.href} {...link} onClick={() => setMobileMenuOpen(false)} />
                    ))}
                     <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transform hover:scale-105 transition-all duration-200 ease-out"
                        onClick={() => {
                          toggleTheme();
                        }}
                        aria-label="Toggle theme"
                      >
                        <div className="relative h-5 w-5">
                          {mounted ? (
                            <>
                              <Sun className={`h-5 w-5 transition-all duration-300 ease-in-out ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
                              <Moon className={`absolute top-0 left-0 h-5 w-5 transition-all duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`} />
                            </>
                          ) : (
                            <div className="h-5 w-5 inline-block" />
                          )}
                        </div>
                        <span className="font-headline">Toggle Theme</span>
                      </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
