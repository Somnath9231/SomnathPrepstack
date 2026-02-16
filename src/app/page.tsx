"use client";

import Image from "next/image";
import Link from "next/link";
import { GlowButton } from "@/components/GlowButton";
import { Code2, Laptop, Layout, ArrowRight, Zap, Target } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Dynamic Roadmaps",
    description: "Personalized industrial learning paths for every tech goal.",
    icon: <Layout className="w-8 h-8 text-primary" />,
    href: "/roadmaps",
    color: "cyan"
  },
  {
    title: "Deep Learning Modules",
    description: "In-depth DSA, Aptitude, and Verbal challenges with visual explanations.",
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    href: "/practice",
    color: "pink"
  },
  {
    title: "Simulation Engine",
    description: "Real-time mock tests with industry-standard patterns.",
    icon: <Laptop className="w-8 h-8 text-primary" />,
    href: "/test",
    color: "cyan"
  }
];

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Netflix", 
  "Apple", "Uber", "Airbnb", "Adobe", "TCS", "Infosys", "Wipro"
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col gap-24 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-primary/20 rounded-3xl blur-[80px] animate-float-3d" />
          <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-secondary/15 rounded-full blur-[100px] animate-float-3d [animation-delay:2s]" />
          
          <div className="absolute top-[40%] right-[20%] w-24 h-24 border-2 border-primary/30 rounded-lg animate-float-3d [animation-delay:1s] rotate-45" />
          <div className="absolute top-[25%] left-[25%] w-16 h-16 border-2 border-secondary/30 rounded-full animate-float-3d [animation-delay:4s]" />
          <div className="absolute bottom-[30%] left-[30%] w-32 h-32 border border-primary/20 animate-float-3d [animation-delay:3s] skew-x-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-xs font-black text-primary uppercase tracking-widest animate-in slide-in-from-left duration-700">
              <Zap className="w-4 h-4 fill-primary" />
              <span>Premium Tech Career Academy</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none animate-in slide-in-from-left duration-1000">
              ACE YOUR <br />
              <span className="text-neon-cyan hover:scale-105 transition-transform inline-block cursor-default">DREAM</span> <br />
              <span className="text-neon-pink hover:scale-105 transition-transform inline-block cursor-default">PLACEMENT</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-300">
              No more generic prep. Get industry-grade deep learning modules, dynamic roadmaps, and real-time simulations.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Link href="/practice">
                <GlowButton size="lg" className="px-10 py-8 text-lg">Start Learning</GlowButton>
              </Link>
              <Link href="/roadmaps">
                <GlowButton size="lg" variant="outline" className="px-10 py-8 text-lg">View Path</GlowButton>
              </Link>
            </div>
          </div>

          <div className="relative group perspective-1000 hidden lg:block">
            <div className="relative aspect-square glass-card rounded-[3rem] overflow-hidden p-10 border-white/10 hover:neon-border-cyan transition-all duration-700 preserve-3d group-hover:rotate-y-6">
              <Image 
                src={heroImage?.imageUrl || ""} 
                alt="Tech Learning" 
                fill 
                className="object-cover opacity-40 mix-blend-overlay scale-110 group-hover:scale-125 transition-all duration-1000"
                data-ai-hint={heroImage?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              
              <div className="relative h-full flex flex-col justify-end space-y-4">
                <div className="glass p-6 rounded-3xl border-primary/30 animate-float-3d">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-lg font-black text-primary uppercase">Mission Protocol</span>
                  </div>
                  <p className="text-sm font-bold text-white/80">Analyzing current industry benchmarks... Optimized path generated for top-tier roles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Marquee */}
      <section className="w-full overflow-hidden border-y border-white/5 py-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.4em] text-center">Cracked by our students at</p>
        </div>
        <div className="relative flex">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24">
            {[...companies, ...companies].map((company, i) => (
              <span 
                key={i} 
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white/10 hover:text-primary transition-colors cursor-default hover:drop-shadow-[0_0_15px_rgba(0,245,255,0.8)]"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 w-full space-y-20 py-24">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Handcrafted <span className="text-neon-cyan">Core</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Every module is built with precision to ensure you're not just practicing, but mastering.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <Link key={i} href={feature.href}>
              <div className={cn(
                "glass-card p-10 rounded-[2.5rem] h-full group transition-all duration-500 hover:-translate-y-4 relative overflow-hidden",
                feature.color === 'cyan' ? "hover:neon-border-cyan" : "hover:border-secondary/50 shadow-secondary/5"
              )}>
                <div className={cn(
                  "p-5 rounded-2xl w-fit mb-8 transition-all group-hover:scale-110",
                  feature.color === 'cyan' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                )}>
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{feature.description}</p>
                <div className={cn(
                  "flex items-center gap-3 font-black uppercase tracking-widest text-sm transition-all group-hover:gap-5",
                  feature.color === 'cyan' ? "text-primary" : "text-secondary"
                )}>
                  Enter Module <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
