// components/Footer.tsx
"use client";
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-muted text-muted-foreground text-center">
      <div className="container mx-auto px-4">
        <p className="font-body text-sm">
          &copy; {currentYear} Hardi Patel. All rights reserved.
        </p>
        <p className="font-body text-xs mt-1">
          Designed and Developed with <span role="img" aria-label="love">❤️</span> in India.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
