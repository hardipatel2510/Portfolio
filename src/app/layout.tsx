
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const metadata: Metadata = {
  title: 'Zenithfolio - Portfolio',
  description: 'A personal portfolio showcasing projects, art, and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning><head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  try {
                    const storedTheme = localStorage.getItem('theme');
                    if (storedTheme) {
                      return storedTheme;
                    }
                    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    return systemPrefersDark ? 'dark' : 'light';
                  } catch (e) {
                    // Fallback for environments where localStorage or matchMedia is not available
                    return 'light';
                  }
                }
                const theme = getInitialTheme();
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700&display=swap" rel="stylesheet" />
      </head><body className="font-body antialiased">
        {children}
        <Toaster />
        <ScrollToTopButton />
      </body></html>
  );
}
