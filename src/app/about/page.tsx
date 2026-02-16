import { GraduationCap, Target, Users, Code2 } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
          Bridging the Gap Between <br/>
          <span className="text-neon-cyan transition-transform inline-block">College</span> and 
          <span className="text-neon-pink transition-transform inline-block ml-3">Career</span>
        </h1>
        <p className="text-xl text-muted-foreground font-medium leading-relaxed">
          PrepStack was born out of a simple need: to provide students with the structured, industry-relevant preparation they need to crack dream placements confidently.
        </p>
      </section>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="glass-card p-12 rounded-[3rem] space-y-6 border-primary/20 hover:neon-border-cyan transition-all group">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-all">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight">Our Mission</h2>
          <p className="text-muted-foreground text-lg font-medium leading-relaxed">
            To empower students with structured guidance and industry-ready preparation strategies. We believe every student deserves a clear path to their dream career, regardless of their background or college tier.
          </p>
        </div>
        <div className="glass-card p-12 rounded-[3rem] space-y-6 border-secondary/20 hover:neon-border-pink transition-all group">
          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-all">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight">Our Vision</h2>
          <p className="text-muted-foreground text-lg font-medium leading-relaxed">
            To become the world's most trusted student placement preparation platform. We aim to reach 1 million students and help them navigate the ever-evolving tech landscape through intelligent learning.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <section className="glass-card rounded-[4rem] p-12 lg:p-20 relative overflow-hidden border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-xs font-black text-primary uppercase tracking-widest">
                <GraduationCap className="w-4 h-4" /> The Architect
              </div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Founder's Story</h3>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                Somnath Podder built PrepStack as a personal initiative to solve a problem he witnessed firsthand: the disconnect between what colleges teach and what the industry actually looks for.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-black uppercase tracking-tight text-neon-cyan">Somnath Podder</div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.4em] font-black">Founder & Lead Developer</div>
              <p className="text-muted-foreground font-medium leading-relaxed max-w-lg">
                With a background in software engineering and a passion for industrial education, Somnath developed PrepStack to automate personalized guidance, making quality placement prep accessible to all students globally.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
               <Link href="/contact">
                <GlowButton className="px-10 py-7">Contact Somnath</GlowButton>
               </Link>
               <a href="https://www.linkedin.com/in/somnath-podder-538192372/" target="_blank" rel="noopener noreferrer">
                <GlowButton variant="outline" className="px-10 py-7">LinkedIn Profile</GlowButton>
               </a>
            </div>
          </div>
          <div className="relative group perspective-1000 hidden lg:block">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all rounded-full" />
            <div className="relative aspect-square glass rounded-full overflow-hidden border-2 border-primary/20 p-12 flex items-center justify-center animate-float-3d">
               <Code2 className="w-48 h-48 text-primary/40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
