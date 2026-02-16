"use client";

import { GlowButton } from "@/components/GlowButton";
import { 
  Zap, 
  Users, 
  Target, 
  BarChart3, 
  FileCode, 
  Calendar, 
  CheckCircle2,
  Rocket
} from "lucide-react";

const programs = [
  {
    name: "6-Month Intensive",
    price: "₹4,999",
    description: "Accelerated placement preparation for high-impact roles.",
    features: [
      "2 Live Placement Prep Classes / Week",
      "1 Mentorship / Doubt Session / Week",
      "Target-Company Specific Training",
      "Advanced Mock Test Engine",
      "Personal Career Guidance"
    ],
    variant: "primary" as const
  },
  {
    name: "12-Month Complete",
    price: "₹8,999",
    description: "The ultimate end-to-end placement success protocol.",
    features: [
      "Everything in 6-Month Plan",
      "Foundational coding bootcamps",
      "Resume & Portfolio reviews",
      "Mock HR & Tech Interviews",
      "Lifetime Community Access",
      "Priority Doubt Clearing"
    ],
    variant: "secondary" as const
  }
];

export default function EnrollPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-24">
      <section className="text-center space-y-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-xs font-black text-primary uppercase tracking-widest">
          <Rocket className="w-4 h-4" /> Early Bird Enrollment Open
        </div>
        <h1 className="text-6xl font-black uppercase tracking-tighter leading-tight">
          Supercharge Your <span className="text-neon-cyan">Career</span> Protocol
        </h1>
        <p className="text-xl text-muted-foreground font-medium leading-relaxed">
          While PrepStack core modules remain free, our Early Bird Enrollment provides the structured mentorship and industrial focus needed to crack top-tier global placements.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {programs.map((program, i) => (
          <div key={i} className={`glass-card p-12 rounded-[4rem] flex flex-col h-full relative overflow-hidden group hover:-translate-y-4 transition-all duration-500 ${
            program.variant === 'primary' ? 'hover:neon-border-cyan' : 'hover:neon-border-pink'
          }`}>
            <div className={`absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-150 transition-all ${
              program.variant === 'primary' ? 'text-primary' : 'text-secondary'
            }`}>
              <Zap className="w-48 h-48" />
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="text-4xl font-black uppercase tracking-tighter">{program.name}</h3>
              <p className="text-muted-foreground font-medium">{program.description}</p>
              <div className="pt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tighter text-white">{program.price}</span>
                <span className="text-sm font-black text-muted-foreground uppercase tracking-widest">/ One-time</span>
              </div>
            </div>

            <div className="space-y-6 flex-1 mb-12">
              <div className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em]">Module Benefits</div>
              <ul className="space-y-4">
                {program.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className={`w-5 h-5 mt-1 shrink-0 ${
                      program.variant === 'primary' ? 'text-primary' : 'text-secondary'
                    }`} />
                    <span className="font-bold text-white/80 group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <GlowButton variant={program.variant} className="w-full py-8 text-xl">Enroll Protocol Now</GlowButton>
          </div>
        ))}
      </div>

      <section className="glass-card p-16 rounded-[3rem] space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Why Choose Premium <span className="text-neon-cyan">Mentorship</span>?</h2>
          <p className="text-muted-foreground font-medium">Beyond self-learning: Get the industrial edge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: "3 Live Sessions", 
              desc: "Weekly classes focused on placement patterns and live coding challenges.",
              icon: <Calendar className="w-8 h-8" />
            },
            { 
              title: "Company Mocks", 
              desc: "Simulate interviews for Google, Amazon, TCS, and more with actual industry mentors.",
              icon: <Target className="w-8 h-8" />
            },
            { 
              title: "Personal Mentor", 
              desc: "Direct access to top professors and industry leads for career mapping.",
              icon: <Users className="w-8 h-8" />
            },
          ].map((benefit, i) => (
            <div key={i} className="text-center space-y-4 p-6 hover:bg-white/[0.02] rounded-3xl transition-all group">
              <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-all">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
