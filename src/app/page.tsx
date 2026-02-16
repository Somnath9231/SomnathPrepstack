import Image from "next/image";
import Link from "next/link";
import { GlowButton } from "@/components/GlowButton";
import { BookOpen, Code2, GraduationCap, Laptop, Layout, FileText, ArrowRight, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const companies = [
  "Google", "Microsoft", "Amazon", "TCS", "Cognizant", "Deloitte", "Infosys", "Wipro", "Accenture", "Capgemini"
];

const features = [
  {
    title: "Structured Roadmaps",
    description: "Personalized learning paths for every degree and goal.",
    icon: <Layout className="w-8 h-8 text-primary" />,
    href: "/roadmaps"
  },
  {
    title: "Practice Modules",
    description: "Hands-on DSA, Aptitude, and Verbal ability challenges.",
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    href: "/practice"
  },
  {
    title: "Mock Test Engine",
    description: "Real-time placement simulation with time limits.",
    icon: <Laptop className="w-8 h-8 text-primary" />,
    href: "/test"
  },
  {
    title: "Placement Resources",
    description: "Curated guides and cheat sheets for every company.",
    icon: <BookOpen className="w-8 h-8 text-secondary" />,
    href: "/resources"
  },
  {
    title: "Resume Templates",
    description: "ATS-friendly templates designed for modern tech roles.",
    icon: <FileText className="w-8 h-8 text-primary" />,
    href: "/resources"
  },
  {
    title: "Industry Preparation",
    description: "Learn what the biggest tech firms actually look for.",
    icon: <GraduationCap className="w-8 h-8 text-secondary" />,
    href: "/about"
  }
];

const stats = [
  { label: "Students", value: "12,000+" },
  { label: "Companies", value: "150+" },
  { label: "Resources", value: "500+" },
  { label: "Success Stories", value: "3,200+" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col gap-24 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-12 min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Objects */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-blob [animation-delay:2s]" />
          <div className="absolute top-[40%] right-[30%] w-32 h-32 bg-primary/30 rounded-full blur-[60px] animate-float" />
          
          {/* Subtle Floating Orbs */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_20px_rgba(0,229,255,0.8)]" />
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse [animation-delay:1s] shadow-[0_0_15px_rgba(157,78,221,0.8)]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-xs font-semibold text-primary mb-4 animate-in slide-in-from-left duration-700">
              <Star className="w-3 h-3 fill-primary" />
              <span>India's #1 Placement Prep Hub</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight animate-in slide-in-from-left duration-1000">
              Crack Placements <br />
              <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Smarter</span> with <br />
              <span className="text-neon-purple drop-shadow-[0_0_15px_rgba(157,78,221,0.4)]">PrepStack AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-in fade-in slide-in-from-left duration-1000 delay-300">
              Coding • DSA • Aptitude • Interview Prep — An AI-powered ecosystem designed to turn your career goals into reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Link href="/practice">
                <GlowButton size="lg" className="px-8 hover:scale-105 transition-transform">Start Practicing</GlowButton>
              </Link>
              <Link href="/roadmaps">
                <GlowButton size="lg" variant="outline" className="px-8 hover:bg-primary/5">Explore Roadmaps</GlowButton>
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block animate-in zoom-in duration-1000">
            <div className="relative w-full aspect-square glass-card rounded-3xl overflow-hidden p-8 border-primary/20 shadow-2xl hover:neon-glow-blue transition-all duration-500">
               <Image 
                src={heroImage?.imageUrl || ""} 
                alt="Tech Illustration" 
                fill 
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 animate-float"
                data-ai-hint={heroImage?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 glass p-6 rounded-2xl border-white/20 backdrop-blur-xl animate-float [animation-delay:1s]">
                 <div className="flex items-center gap-4 mb-2">
                   <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,229,255,1)]" />
                   <span className="text-sm font-bold text-primary">AI Analysis Active</span>
                 </div>
                 <p className="text-sm text-muted-foreground leading-relaxed">Personalizing learning path based on industry trends...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 glass border-y border-white/5 overflow-hidden">
        <h2 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-12 opacity-70">Empowering Students Placed At</h2>
        <div className="relative overflow-hidden group">
          <div className="animate-marquee flex items-center gap-24">
            {[...companies, ...companies].map((company, i) => (
              <span 
                key={i} 
                className="text-3xl font-bold text-white/10 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] hover:scale-110 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold font-headline">Premium <span className="text-neon-blue">Features</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything you need to go from a college student to an industry-ready professional, all in one platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Link key={i} href={feature.href}>
              <div className="glass-card p-8 rounded-2xl h-full group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all" />
                <div className="p-4 bg-white/5 rounded-xl w-fit mb-6 group-hover:neon-glow-blue transition-all border border-white/5 group-hover:border-primary/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                  Explore Now <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 w-full py-12">
        <div className="glass-card rounded-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative overflow-hidden border-primary/20">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 blur-[80px] animate-pulse-slow [animation-delay:2s]" />
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 relative z-10">
              <div className="text-4xl lg:text-5xl font-bold font-headline text-neon-blue drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">{stat.value}</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
