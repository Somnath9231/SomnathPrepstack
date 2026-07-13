
"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlowButton } from "@/components/GlowButton";
import { 
  degreesRoadmaps, 
  DegreeRoadmap, 
  CareerPath 
} from "@/data/roadmaps";
import { Map, Target, Award, ShieldAlert, GraduationCap, ArrowRight, Search, BookOpen } from "lucide-react";
import { useUser } from "@/firebase";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RoadmapsPage() {
  const { user, isUserLoading } = useUser();
  const [selectedDegree, setSelectedDegree] = useState<DegreeRoadmap | null>(null);
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  if (isUserLoading) return <div className="min-h-screen flex items-center justify-center text-primary">SYNCING...</div>;

  if (!user) {
    return (
      <div className="max-w-xl mx-auto px-4 py-32 text-center space-y-8">
        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto text-secondary">
          <ShieldAlert className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tighter">Access <span className="text-neon-pink">Restricted</span></h1>
        <p className="text-muted-foreground font-medium">Placement Roadmaps are part of our core industrial protocol. You must be identified to access these sequences.</p>
        <Link href="/login" className="block">
          <GlowButton variant="secondary" className="w-full py-7">Enter Stack to Unlock</GlowButton>
        </Link>
      </div>
    );
  }

  const filteredPaths = selectedDegree?.careerPaths.filter(path => 
    path.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
          <Map className="w-3 h-3" /> Navigation Protocol
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          Industrial <span className="text-neon-cyan">Roadmaps</span>
        </h1>
        <p className="text-muted-foreground text-lg font-medium leading-relaxed">
          Select your degree and target career path to unlock step-by-step guidance curated by industry experts.
        </p>
      </header>

      {/* Step 1: Degree Selection */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black">01</div>
          <h2 className="text-2xl font-black uppercase tracking-tight">Select Degree</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {degreesRoadmaps.map((degree) => (
            <button
              key={degree.id}
              onClick={() => {
                setSelectedDegree(degree);
                setSelectedPath(null);
                setSearchTerm("");
              }}
              className={cn(
                "glass-card p-10 rounded-[2.5rem] text-left transition-all group relative overflow-hidden",
                selectedDegree?.id === degree.id ? "neon-border-cyan bg-primary/[0.03]" : "hover:border-primary/30"
              )}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-20 h-20" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight mb-2">{degree.name}</h3>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                {degree.careerPaths.length} Industrial Paths Available
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Step 2: Path Selection & Search */}
      {selectedDegree && (
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black">02</div>
              <h2 className="text-2xl font-black uppercase tracking-tight">Select Career Path</h2>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search Paths..."
                className="w-full pl-12 pr-4 py-3 glass rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path)}
                className={cn(
                  "p-8 glass rounded-[2rem] text-left transition-all border group",
                  selectedPath?.id === path.id ? "border-primary bg-primary/5" : "border-white/5 hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-all">
                    <Target className="w-5 h-5" />
                  </div>
                  <ArrowRight className={cn("w-4 h-4 transition-all", selectedPath?.id === path.id ? "translate-x-1" : "opacity-0")} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-2">{path.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {path.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[8px] font-black uppercase tracking-widest text-muted-foreground bg-white/5 px-2 py-0.5 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Step 3: Roadmap Display */}
      {selectedPath && (
        <section className="animate-in fade-in zoom-in-95 duration-700">
           <div className="glass-card rounded-[4rem] p-12 lg:p-20 relative overflow-hidden border-primary/20">
              <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <Award className="w-64 h-64 text-primary" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                <div className="lg:col-span-4 space-y-10">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black text-primary uppercase tracking-widest">
                      <BookOpen className="w-3 h-3" /> Industrial Master Path
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight">{selectedPath.title}</h2>
                    <p className="text-muted-foreground font-medium">This roadmap covers all necessary skills and phases required to crack placements in this role.</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] text-muted-foreground">Skill Protocol</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedPath.skills.map((skill, i) => (
                        <div key={i} className="px-5 py-2 glass rounded-xl text-xs font-black uppercase tracking-widest border-primary/10">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <GlowButton className="w-full py-8 text-lg">Download Roadmap PDF</GlowButton>
                </div>

                <div className="lg:col-span-8 space-y-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-4">
                    <Map className="w-6 h-6 text-primary" /> Sequence of Operations
                  </h3>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {selectedPath.content.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="glass rounded-[2rem] px-8 border-white/5 overflow-hidden">
                        <AccordionTrigger className="text-lg font-black uppercase tracking-tight hover:no-underline py-6">
                          <span className="flex items-center gap-6">
                            <span className="text-primary/30 font-mono text-sm">0{idx + 1}</span>
                            {item.step}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-lg leading-relaxed font-medium pb-8 border-t border-white/5 pt-6">
                          {item.details}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
           </div>
        </section>
      )}
    </div>
  );
}
