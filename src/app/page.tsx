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
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-xs font-semibold text-primary mb-4">
              <Star className="w-3 h-3 fill-primary" />
              <span>Next Gen Placement Prep</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Crack Placements <br />
              <span className="text-neon-blue">Smarter</span> with <br />
              <span className="text-neon-purple">PrepStack AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Coding • DSA • Aptitude • Interview Prep — All in one AI-powered ecosystem designed for your success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/practice">
                <GlowButton size="lg" className="px-8">Start Practicing</GlowButton>
              </Link>
              <Link href="/roadmaps">
                <GlowButton size="lg" variant="outline" className="px-8">Explore Roadmaps</GlowButton>
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative w-full aspect-square glass-card rounded-3xl overflow-hidden p-8 animate-in zoom-in duration-1000">
               <Image 
                src={heroImage?.imageUrl || ""} 
                alt="Tech Illustration" 
                fill 
                className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint={heroImage?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 glass p-6 rounded-2xl border-white/10">
                 <div className="flex items-center gap-4 mb-2">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-sm font-medium">AI Analysis Active</span>
                 </div>
                 <p className="text-sm text-muted-foreground">Generating personalized learning path for Software Engineer role...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 glass border-y border-white/5 overflow-hidden">
        <h2 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">Trusted By Students Placed At</h2>
        <div className="relative overflow-hidden group">
          <div className="animate-marquee flex items-center gap-24">
            {[...companies, ...companies].map((company, i) => (
              <span 
                key={i} 
                className="text-3xl font-bold text-white/20 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default whitespace-nowrap"
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
          <h2 className="text-4xl font-bold font-headline">What We Offer</h2>
          <p className="text-muted-foreground">The only platform you need to go from a beginner to an industry-ready professional.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Link key={i} href={feature.href}>
              <div className="glass-card p-8 rounded-2xl h-full group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                <div className="p-4 bg-white/5 rounded-xl w-fit mb-6 group-hover:neon-glow-blue transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-4 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 w-full py-12">
        <div className="glass-card rounded-3xl p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[60px]" />
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold font-headline text-neon-blue">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
