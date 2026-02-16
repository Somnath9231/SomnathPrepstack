
"use client";

import { GlowButton } from "@/components/GlowButton";
import { Terminal, Code, Cpu, Database, Layout, Globe, Braces, Layers, Server } from "lucide-react";
import Link from "next/link";

const languages = [
  { slug: "c", name: "C", color: "text-blue-400", icon: <Terminal />, level: "Foundational" },
  { slug: "cpp", name: "C++", color: "text-blue-500", icon: <Code />, level: "Performance" },
  { slug: "java", name: "Java", color: "text-orange-500", icon: <Cpu />, level: "Enterprise" },
  { slug: "python", name: "Python", color: "text-yellow-400", icon: <Database />, level: "Universal" },
  { slug: "javascript", name: "JavaScript", color: "text-yellow-300", icon: <Globe />, level: "Web Core" },
  { slug: "html", name: "HTML", color: "text-red-400", icon: <Layout />, level: "Structure" },
  { slug: "css", name: "CSS", color: "text-blue-300", icon: <Layers />, level: "Styling" },
  { slug: "sql", name: "SQL", color: "text-indigo-400", icon: <Server />, level: "Data" },
];

export default function LanguagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 space-y-12 md:space-y-20">
      <div className="text-center space-y-4 md:space-y-6 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Stack <span className="text-neon-cyan">Mastery</span></h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">From low-level system kernels to modern high-level abstraction. Master the code that powers the world.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {languages.map((lang, i) => (
          <div key={i} className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-center space-y-6 md:space-y-8 group hover:neon-border-cyan transition-all duration-500">
            <div className={`w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center mx-auto ${lang.color} group-hover:scale-110 transition-all border border-white/5`}>
              <div className="scale-[1.2] md:scale-[1.5]">{lang.icon}</div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{lang.name}</h3>
              <p className="text-[10px] font-black text-muted-foreground mt-2 uppercase tracking-[0.2em]">{lang.level}</p>
            </div>
            <ul className="text-xs md:text-sm font-bold text-muted-foreground space-y-2 md:space-y-3 pt-4 md:pt-6 border-t border-white/5">
              <li>System Architecture</li>
              <li>Core Paradigms</li>
              <li>Industrial Use-Cases</li>
              <li>Interview Drills</li>
            </ul>
            <Link href={`/practice/${lang.slug}`} className="block">
              <GlowButton variant="outline" className="w-full py-5 md:py-6">Deep Explore</GlowButton>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
