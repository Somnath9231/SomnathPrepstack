"use client";

import { useUser } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GlowButton } from "@/components/GlowButton";
import { 
  Trophy, 
  Target, 
  Clock, 
  BookOpen, 
  Zap, 
  LineChart,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push("/login");
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Zap className="w-12 h-12 text-primary animate-pulse" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 glass p-8 rounded-[3rem] border-primary/20 bg-primary/[0.02]">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-black uppercase tracking-tighter">Welcome, <span className="text-neon-cyan">{user.displayName || user.email?.split('@')[0]}</span></h1>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-muted-foreground">Free Tier</span>
          </div>
          <p className="text-muted-foreground font-medium">Your current preparation status and performance metrics.</p>
        </div>
        <Link href="/enroll">
          <GlowButton variant="secondary" className="px-8 py-6">Upgrade to Premium</GlowButton>
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Tests Taken", value: "12", icon: <Trophy />, color: "text-primary" },
          { label: "Accuracy", value: "84%", icon: <Target />, color: "text-secondary" },
          { label: "Hours Prep", value: "48", icon: <Clock />, color: "text-primary" },
          { label: "Modules Read", value: "7", icon: <BookOpen />, color: "text-secondary" },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-8 rounded-[2rem] space-y-4 hover:neon-border-cyan transition-all group">
            <div className={`p-4 bg-white/5 rounded-2xl w-fit ${stat.color} group-hover:scale-110 transition-all`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight">{stat.value}</div>
              <div className="text-xs font-black text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="glass-card p-10 rounded-[2.5rem] space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                <LineChart className="w-6 h-6 text-primary" /> Performance Analytics
              </h2>
              <span className="text-xs font-black text-muted-foreground uppercase">Last 30 Days</span>
            </div>
            <div className="h-[300px] flex items-center justify-center border border-white/5 rounded-3xl bg-black/20 text-muted-foreground italic">
              Interactive analytics chart rendering...
            </div>
          </section>

          <section className="glass-card p-10 rounded-[2.5rem] space-y-8">
            <h2 className="text-2xl font-black uppercase tracking-tight">Recent Test History</h2>
            <div className="space-y-4">
              {[
                { domain: "Quantitative Aptitude", score: "18/20", date: "2 days ago" },
                { domain: "Data Structures", score: "15/20", date: "5 days ago" },
                { domain: "Logical Reasoning", score: "19/20", date: "1 week ago" },
              ].map((test, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-default">
                  <div>
                    <div className="font-black text-lg uppercase tracking-tight">{test.domain}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{test.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-primary">{test.score}</div>
                    <div className="text-[10px] font-black text-muted-foreground uppercase">Score</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="glass-card p-8 rounded-[2rem] border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all">
              <Zap className="w-20 h-20 text-secondary" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-secondary mb-4">PrepStack Premium</h3>
            <p className="text-sm text-muted-foreground font-medium mb-6 leading-relaxed">Unlock live mentorship, target-company mocks, and industrial case studies with our Early Bird program.</p>
            <ul className="space-y-3 mb-8 text-xs font-black text-white/70 uppercase tracking-widest">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full" /> 3 Live Classes / Week</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full" /> Industry Mentors</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full" /> Advanced Analytics</li>
            </ul>
            <Link href="/enroll">
              <GlowButton variant="secondary" className="w-full">Get Enrolled</GlowButton>
            </Link>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border-primary/20">
            <h3 className="text-xl font-black uppercase tracking-tight text-primary mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Recommended
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                <div className="text-sm font-black uppercase">Graphs Deep Dive</div>
                <div className="text-[10px] text-muted-foreground font-bold">Recommended based on your DSA scores</div>
                <Link href="/practice/dsa" className="text-[10px] text-primary font-black uppercase flex items-center gap-1 mt-2 hover:gap-2 transition-all">
                  Enter Module <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
