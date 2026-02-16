import { GlowButton } from "@/components/GlowButton";
import { Terminal, Code, Cpu, Database, Layout } from "lucide-react";

const languages = [
  { name: "C++", color: "text-blue-500", icon: <Code />, level: "Advanced" },
  { name: "Java", color: "text-orange-500", icon: <Cpu />, level: "Intermediate" },
  { name: "Python", color: "text-yellow-500", icon: <Database />, level: "Beginner Friendly" },
  { name: "JavaScript", color: "text-yellow-300", icon: <Layout />, level: "Web Focus" },
];

export default function LanguagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Programming <span className="text-neon-blue">Languages</span></h1>
        <p className="text-muted-foreground">Master the languages that power the industry. From basics to object-oriented programming.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {languages.map((lang, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl text-center space-y-6 group hover:border-primary/50 transition-all">
            <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto ${lang.color} group-hover:scale-110 transition-all`}>
              {lang.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{lang.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{lang.level}</p>
            </div>
            <ul className="text-sm text-muted-foreground space-y-3 pt-4 border-t border-white/5">
              <li>Basics & Syntax</li>
              <li>Object Oriented (OOP)</li>
              <li>Standard Template Library</li>
              <li>Interview Questions</li>
            </ul>
            <GlowButton variant="outline" className="w-full">Explore Module</GlowButton>
          </div>
        ))}
      </div>

      <section className="glass rounded-3xl p-12 mt-12 text-center space-y-8">
        <h2 className="text-3xl font-bold">Ready to write some code?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our language modules come with live syntax examples, common pitfalls, and interview-specific programs to help you ace your technical rounds.
        </p>
        <div className="flex justify-center gap-4">
           <GlowButton>Join Practice Round</GlowButton>
        </div>
      </section>
    </div>
  );
}
