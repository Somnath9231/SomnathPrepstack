
"use client";

import { useParams } from "next/navigation";
import { learningContent } from "@/data/learning-content";
import { GlowButton } from "@/components/GlowButton";
import { ArrowLeft, BookOpen, Code, Lightbulb, Trophy, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function LearningPage() {
  const params = useParams();
  const slug = params.slug as string;
  const content = learningContent[slug as keyof typeof learningContent];
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  if (!content) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-black">Module Not Found</h1>
        <Link href="/practice"><GlowButton>Back to Practice</GlowButton></Link>
      </div>
    );
  }

  const activeModule = content.modules[activeModuleIdx];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 space-y-12">
      <Link href="/practice" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
        <ArrowLeft className="w-4 h-4" /> Back to Streams
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 space-y-8 sticky top-24">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-neon-cyan leading-none">{content.title}</h1>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{content.description}</p>
          </div>

          <nav className="space-y-3">
            <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Course Protocol</div>
            {content.modules.map((mod, idx) => (
              <button
                key={mod.id}
                onClick={() => setActiveModuleIdx(idx)}
                className={cn(
                  "w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between group",
                  activeModuleIdx === idx 
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(0,245,255,0.1)]" 
                    : "bg-white/5 border-white/5 hover:border-white/20 text-muted-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs",
                    activeModuleIdx === idx ? "bg-primary text-black" : "bg-white/10"
                  )}>
                    {idx + 1}
                  </div>
                  <span className="font-bold text-xs uppercase tracking-tight">{mod.title}</span>
                </div>
                <ChevronRight className={cn("w-4 h-4 transition-transform", activeModuleIdx === idx ? "translate-x-1" : "opacity-0")} />
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-6 space-y-12">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
              <GraduationCap className="w-3 h-3" /> Module {activeModuleIdx + 1}
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">{activeModule.title}</h2>
            <p className="text-lg text-muted-foreground font-medium">{activeModule.description}</p>
          </header>

          <div className="space-y-10">
            {activeModule.sections.map((section, i) => (
              <section key={i} className="glass-card p-10 rounded-[3rem] space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                  {section.code ? <Code className="w-24 h-24" /> : <BookOpen className="w-24 h-24" />}
                </div>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {section.code ? <Code className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{section.subtitle}</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed relative z-10 font-medium">{section.content}</p>

                {section.code && (
                  <div className="bg-black/80 p-8 rounded-3xl border border-white/5 font-mono text-primary text-sm relative z-10 shadow-2xl">
                    <pre className="overflow-x-auto custom-scrollbar"><code>{section.code}</code></pre>
                  </div>
                )}
              </section>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-12 border-t border-white/5">
            <GlowButton 
              variant="outline" 
              disabled={activeModuleIdx === 0}
              onClick={() => setActiveModuleIdx(prev => prev - 1)}
            >
              Previous Module
            </GlowButton>
            {activeModuleIdx < content.modules.length - 1 ? (
              <GlowButton onClick={() => setActiveModuleIdx(prev => prev + 1)}>Next Module</GlowButton>
            ) : (
              <Link href="/test">
                <GlowButton variant="secondary">Take Skill Test</GlowButton>
              </Link>
            )}
          </div>
        </div>

        {/* Info Sidebar */}
        <aside className="lg:col-span-3 space-y-6 sticky top-24">
           <div className="glass-card p-8 rounded-[2.5rem] space-y-6 border-secondary/20 bg-secondary/[0.02]">
            <h3 className="text-xl font-black uppercase tracking-tight text-secondary flex items-center gap-2">
              <Lightbulb className="w-5 h-5" /> Professor's Note
            </h3>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              Industrial preparation requires more than just logic; it requires architectural thinking. Focus on how memory interacts with your code.
            </p>
          </div>

          <div className="glass-card p-8 rounded-[2.5rem] space-y-6 border-primary/20 bg-primary/[0.02]">
            <h3 className="text-xl font-black uppercase tracking-tight text-primary flex items-center gap-2">
              <Trophy className="w-5 h-5" /> Target Milestones
            </h3>
            <ul className="space-y-4">
              {[
                "Explain Core Principles",
                "Execute Code Benchmark",
                "Complete Mini-Test"
              ].map((m, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-black text-muted-foreground uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
