"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlowButton } from "@/components/GlowButton";
import { Code2, Brain, MessageSquare, Terminal, Database, Globe, Network, Cpu, FileCheck, Users } from "lucide-react";

const techModules = [
  { name: "Data Structures", icon: <Code2 />, topics: ["Arrays", "Linked List", "Trees", "Graphs", "DP"] },
  { name: "Algorithms", icon: <Cpu />, topics: ["Sorting", "Searching", "Recursion", "Greedy"] },
  { name: "DBMS", icon: <Database />, topics: ["SQL", "Normalization", "Indexing", "NoSQL"] },
  { name: "Operating Systems", icon: <Terminal />, topics: ["Processes", "Memory", "Deadlocks", "Storage"] },
  { name: "Computer Networks", icon: <Network />, topics: ["TCP/IP", "DNS", "HTTP", "OSI Model"] },
  { name: "System Design", icon: <Globe />, topics: ["Load Balancing", "Caching", "Sharding"] },
];

const nonTechModules = [
  { name: "Aptitude", icon: <Brain />, topics: ["Quant", "Reasoning", "Data Interpretation"] },
  { name: "Verbal Ability", icon: <MessageSquare />, topics: ["Grammar", "Reading", "Vocabulary"] },
  { name: "Interview Prep", icon: <FileCheck />, topics: ["HR Prep", "Common Questions", "Etiquette"] },
  { name: "Resume Building", icon: <FileCheck />, topics: ["ATS Friendly", "Crafting Bullet Points"] },
  { name: "Group Discussion", icon: <Users />, topics: ["Tips", "Current Affairs", "Practice Topics"] },
];

export default function PracticePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Practice <span className="text-neon-blue">Modules</span></h1>
        <p className="text-muted-foreground">Comprehensive study materials and practice problems to help you master core concepts.</p>
      </div>

      <Tabs defaultValue="tech" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="glass p-1 h-14 rounded-full">
            <TabsTrigger value="tech" className="rounded-full px-8 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Tech Streams</TabsTrigger>
            <TabsTrigger value="general" className="rounded-full px-8 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">Common For All</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="tech" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techModules.map((module, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all">
              <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 text-primary group-hover:scale-110 transition-all">
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{module.name}</h3>
              <ul className="space-y-2 mb-8">
                {module.topics.map((topic, j) => (
                  <li key={j} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {topic}
                  </li>
                ))}
              </ul>
              <GlowButton variant="outline" className="w-full">Start Learning</GlowButton>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="general" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonTechModules.map((module, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl group hover:border-secondary/50 transition-all">
              <div className="p-4 bg-secondary/10 rounded-xl w-fit mb-6 text-secondary group-hover:scale-110 transition-all">
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{module.name}</h3>
              <ul className="space-y-2 mb-8">
                {module.topics.map((topic, j) => (
                  <li key={j} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                    {topic}
                  </li>
                ))}
              </ul>
              <GlowButton variant="secondary" className="w-full">Start Practice</GlowButton>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
