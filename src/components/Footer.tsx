import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-neon-blue font-headline mb-4 block hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] transition-all">
              PrepStack<span className="text-neon-purple">AI</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Empowering the next generation of software engineers with structured guidance, AI-powered roadmaps, and industry-standard preparation tools.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all hover:neon-glow-blue"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all hover:neon-glow-blue"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all hover:neon-glow-blue"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-full hover:text-primary transition-all hover:neon-glow-blue"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white/90">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/roadmaps" className="hover:text-primary transition-colors">Roadmaps</Link></li>
              <li><Link href="/practice" className="hover:text-primary transition-colors">Practice Modules</Link></li>
              <li><Link href="/test" className="hover:text-primary transition-colors">Mock Test Engine</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white/90">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Development Disclaimer */}
        <div className="glass rounded-2xl p-6 mb-8 border-yellow-500/10 bg-yellow-500/5">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-yellow-500 shrink-0" />
            <div className="space-y-1">
              <h5 className="text-sm font-bold text-yellow-500 uppercase tracking-wider">Project Disclaimer</h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                PrepStack is currently an under-development educational platform. All data, statistics, company references, and content are provided for demonstration purposes and may not represent verified partnerships or official affiliations. This project is built as a portfolio demonstration for advanced AI-driven learning platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PrepStack AI. Built with passion by Somnath Poddar.</p>
        </div>
      </div>
    </footer>
  );
}
