import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'PrepStack | Crack Placements Smarter',
  description: 'Coding, DSA, Aptitude, and Interview Prep - All in one industrial-grade platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground scroll-smooth">
        <div className="relative min-h-screen flex flex-col">
          {/* Background Decorative Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow" />
          </div>

          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
