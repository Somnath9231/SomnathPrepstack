import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ShieldAlert, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="text-4xl font-black tracking-tighter text-neon-cyan group inline-block">
              PREPSTACK
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm font-medium leading-relaxed">
              Industrial preparation reimagined. We build technical excellence through deep learning and real-time simulation protocols.
            </p>
            <div className="flex gap-6">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-3 glass rounded-2xl hover:text-primary transition-all hover:neon-glow-cyan">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest mb-10 text-white/90 text-sm">Protocol</h4>
            <ul className="space-y-6 text-sm font-bold text-muted-foreground">
              <li><Link href="/roadmaps" className="hover:text-primary transition-colors">Roadmaps</Link></li>
              <li><Link href="/practice" className="hover:text-primary transition-colors">Practice</Link></li>
              <li><Link href="/test" className="hover:text-primary transition-colors">Exam Engine</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Assets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest mb-10 text-white/90 text-sm">Foundation</h4>
            <ul className="space-y-6 text-sm font-bold text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Mission</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Connect</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Development Disclaimer */}
        <div className="glass rounded-[2rem] p-10 mb-12 border-primary/10 bg-primary/[0.02]">
          <div className="flex items-start gap-6">
            <ShieldAlert className="w-10 h-10 text-primary shrink-0" />
            <div className="space-y-3">
              <h5 className="text-lg font-black text-primary uppercase tracking-widest">Platform Disclaimer</h5>
              <p className="text-sm font-bold text-muted-foreground leading-relaxed">
                PrepStack is a high-fidelity educational demonstration platform. Statistics, industrial benchmarks, and company simulations are curated for learning purposes. Built as a flagship portfolio project for modern EdTech ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 text-center text-sm font-black text-muted-foreground uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} PREPSTACK. Developed by Somnath Poddar.</p>
        </div>
      </div>
    </footer>
  );
}
