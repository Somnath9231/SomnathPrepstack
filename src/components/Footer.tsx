import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-neon-blue font-headline mb-4 block">
              PrepStack<span className="text-neon-purple">AI</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              India's most trusted platform for student placement preparation. Structured guidance, industry-ready strategies, and AI-powered insights.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/roadmaps" className="hover:text-primary">Roadmaps</Link></li>
              <li><Link href="/practice" className="hover:text-primary">Practice Modules</Link></li>
              <li><Link href="/test" className="hover:text-primary">Mock Test Engine</Link></li>
              <li><Link href="/resources" className="hover:text-primary">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PrepStack AI. Built by Somnath Poddar.</p>
        </div>
      </div>
    </footer>
  );
}
