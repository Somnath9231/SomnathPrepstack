"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlowButton } from "@/components/GlowButton";
import { Code2, Brain, MessageSquare, Terminal, Database, Globe, Network, Cpu, FileCheck, Users, ArrowRight } from "lucide-react";

const techModules = [
  { slug: "dsa", name: "Data Structures", icon: <Code2 />, topics: ["Arrays", "Linked List", "Trees", "Graphs", "DP"] },
  { slug: "algorithms", name: "Algorithms", icon: <Cpu />, topics: ["Sorting", "Searching", "Recursion", "Greedy"] },
  { slug: "dbms", name: "DBMS", icon: <Database />, topics: ["SQL", "Normalization", "Indexing", "NoSQL"] },
  { slug: "os", name: "Operating Systems", icon: <Terminal />, topics: ["Processes", "Memory", "Deadlocks", "Storage"] },
  { slug: "networks", name: "Computer Networks", icon: <Network />, topics: ["TCP/IP", "DNS", "HTTP", "OSI Model"] },
  { slug: "system-design", name: "System Design", icon: <Globe />, topics: ["Load Balancing", "Caching", "Sharding"] },
];

const nonTechModules = [
  { slug: "aptitude", name: "Aptitude", icon: <Brain />, topics: ["Quant", "Reasoning", "Data Interpretation"] },
  { slug: "verbal", name: "Verbal Ability", icon: <MessageSquare />, topics: ["Grammar", "Reading", "Vocabulary"] },
  { slug: "interview-prep", name: "Interview Prep", icon: <FileCheck />, topics: ["HR Prep", "Common Questions", "Etiquette"] },
];

export default function PracticePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-20">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-6xl font-black uppercase tracking-tighter">Deep <span className="text-neon-cyan">Practice</span></h1>
        <p className="text-xl text-muted-foreground font-medium">Select a core stream to begin deep learning. Each module contains visual breakdowns, code benchmarks, and industrial insights.</p>
      </div>

      <Tabs defaultValue="tech" className="w-full">
        <div className="flex justify-center mb-16">
          <TabsList className="glass p-2 h-16 rounded-full">
            <TabsTrigger value="tech" className="rounded-full px-12 h-full text-sm font-black uppercase tracking-widest data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Technical Streams</TabsTrigger>
            <TabsTrigger value="general" className="rounded-full px-12 h-full text-sm font-black uppercase tracking-widest data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">Foundations</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="tech" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techModules.map((module, i) => (
            <div key={i} className="glass-card p-10 rounded-[3rem] group hover:neon-border-cyan transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="p-5 bg-primary/10 rounded-2xl w-fit mb-8 text-primary group-hover:scale-110 transition-all">
                {module.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">{module.name}</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {module.topics.map((topic, j) => (
                  <li key={j} className="text-muted-foreground font-bold flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-all" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Link href={`/practice/${module.slug}`}>
                <GlowButton variant="outline" className="w-full py-7 group/btn">
                  Enter Deep Mode <ArrowRight className="w-4 h-4 ml-2 transition-all group-hover/btn:translate-x-2" />
                </GlowButton>
              </Link>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="general" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {nonTechModules.map((module, i) => (
            <div key={i} className="glass-card p-10 rounded-[3rem] group hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="p-5 bg-secondary/10 rounded-2xl w-fit mb-8 text-secondary group-hover:scale-110 transition-all">
                {module.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">{module.name}</h3>
              <ul className="space-y-4 mb-10 flex-1">
                {module.topics.map((topic, j) => (
                  <li key={j} className="text-muted-foreground font-bold flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary/40 group-hover:bg-secondary transition-all" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Link href={`/practice/${module.slug}`}>
                <GlowButton variant="secondary" className="w-full py-7 group/btn">
                  Master Now <ArrowRight className="w-4 h-4 ml-2 transition-all group-hover/btn:translate-x-2" />
                </GlowButton>
              </Link>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
