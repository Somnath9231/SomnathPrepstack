import { GraduationCap, Target, Users, Code2 } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-24">
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold font-headline">Bridging the Gap Between <br/><span className="text-neon-cyan">College</span> and <span className="text-neon-pink">Career</span></h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          PrepStack was born out of a simple need: to provide students with the structured, industry-relevant preparation they need to crack dream placements confidently.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-12 rounded-3xl space-y-6 border-primary/20">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To empower students with structured guidance and industry-ready preparation strategies. We believe every student deserves a clear path to their dream career, regardless of their background.
          </p>
        </div>
        <div className="glass-card p-12 rounded-3xl space-y-6 border-secondary/20">
          <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To become India's most trusted student placement preparation platform. We aim to reach 1 million students and help them navigate the ever-evolving tech and business landscapes through intelligent learning.
          </p>
        </div>
      </div>

      <section className="glass-card rounded-3xl p-12 lg:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold">Founder's Story</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Somnath Podder built PrepStack as a personal initiative to solve a problem he witnessed firsthand: the disconnect between what colleges teach and what the industry actually looks for.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">Somnath Podder</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Founder & Developer</div>
              <p className="text-muted-foreground">
                With a background in software engineering and a passion for education, Somnath developed PrepStack to automate personalized guidance, making quality placement prep accessible to all.
              </p>
            </div>
            <div className="flex gap-4">
               <Link href="/contact">
                <GlowButton>Contact Somnath</GlowButton>
               </Link>
               <GlowButton variant="outline">Learn More</GlowButton>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all rounded-full" />
            <div className="relative aspect-square glass rounded-full overflow-hidden border-2 border-primary/20 p-8 flex items-center justify-center">
               <Code2 className="w-32 h-32 text-primary/40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
