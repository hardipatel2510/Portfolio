// src/app/cv/page.tsx
import Navbar from '@/components/Navbar';
import ResumeSection from '@/components/ResumeSection';
import Footer from '@/components/Footer';

export default function CVPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <ResumeSection />
            </main>
            <Footer />
        </div>
    );
}
