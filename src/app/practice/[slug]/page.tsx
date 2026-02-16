"use client";

import { useParams } from "next/navigation";
import { learningContent } from "@/data/learning-content";
import { GlowButton } from "@/components/GlowButton";
import { ArrowLeft, BookOpen, Code, Lightbulb, Trophy } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function LearningPage() {
  const params = useParams();
  const slug = params.slug as string;
  const content = learningContent[slug as keyof typeof learningContent];

  if (!content) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-black">Module Not Found</h1>
        <Link href="/practice"><GlowButton>Back to Practice</GlowButton></Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 space-y-12">
      <Link href="/practice" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
        <ArrowLeft className="w-5 h-5" /> BACK TO MODULES
      </Link>

      <div className="space-y-6">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-neon-cyan">{content.title}</h1>
        <p className="text-2xl text-muted-foreground leading-relaxed font-medium">{content.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {content.sections.map((section, i) => (
            <section key={i} className="glass-card p-10 rounded-[2.5rem] space-y-6 hover:neon-border-cyan transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {section.code ? <Code /> : <BookOpen />}
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight">{section.subtitle}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
              {section.code && (
                <div className="bg-black/50 p-6 rounded-2xl border border-white/5 font-mono text-primary text-sm">
                  <pre><code>{section.code}</code></pre>
                </div>
              )}
            </section>
          ))}
        </div>

        <aside className="space-y-8">
          <div className="glass-card p-8 rounded-[2rem] space-y-6 border-secondary/20">
            <h3 className="text-2xl font-black uppercase tracking-tight text-secondary flex items-center gap-2">
              <Lightbulb className="w-6 h-6" /> Interview Insight
            </h3>
            <p className="text-muted-foreground font-medium">Companies like Amazon and Google frequently ask how to optimize memory when dealing with millions of records in this domain.</p>
          </div>

          <div className="glass-card p-8 rounded-[2rem] space-y-6 border-primary/20">
            <h3 className="text-2xl font-black uppercase tracking-tight text-primary flex items-center gap-2">
              <Trophy className="w-6 h-6" /> Practice Goal
            </h3>
            <ul className="space-y-3 text-sm font-bold text-muted-foreground">
              <li>• Complete 5 Medium problems</li>
              <li>• Explain time complexity</li>
              <li>• Implement from scratch</li>
            </ul>
            <Link href="/test">
              <GlowButton className="w-full mt-4">Take Mock Test</GlowButton>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
