"use client";

import { useUser, useFirestore, useCollection, useMemoFirebase } from "@/firebase";
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
  ShieldCheck,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { collection, orderBy, query, limit } from "firebase/firestore";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push("/login");
    }
  }, [user, isUserLoading, router]);

  const attemptsQuery = useMemoFirebase(() => {
    if (!user || !db) return null;
    return query(
      collection(db, "users", user.uid, "test_attempts"),
      orderBy("attemptDate", "desc"),
      limit(5)
    );
  }, [user, db]);

  const { data: testAttempts, isLoading: isHistoryLoading } = useCollection(attemptsQuery);

  if (isUserLoading || !user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <Zap className="w-12 h-12 text-primary animate-pulse" />
      </div>
    );
  }

  const stats = [
    { label: "Tests Taken", value: testAttempts?.length.toString() || "0", icon: <Trophy />, color: "text-primary" },
    { label: "Latest Accuracy", value: testAttempts?.[0]?.accuracyPercentage.toFixed(0) + "%" || "0%", icon: <Target />, color: "text-secondary" },
    { label: "Recent Domain", value: testAttempts?.[0]?.testDomain || "None", icon: <Clock />, color: "text-primary" },
    { label: "Learning Status", value: "Active", icon: <BookOpen />, color: "text-secondary" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 glass p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-primary/20 bg-primary/[0.02]">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
              Welcome, <span className="text-neon-cyan">{user.displayName || user.email?.split('@')[0]}</span>
            </h1>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-muted-foreground shrink-0">Free Tier</span>
          </div>
          <p className="text-sm md:text-base text-muted-foreground font-medium">Your real-time placement preparation dashboard.</p>
        </div>
        <Link href="/enroll" className="w-full md:w-auto">
          <GlowButton variant="secondary" className="w-full px-8 py-6">Upgrade to Premium</GlowButton>
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] space-y-4 hover:neon-border-cyan transition-all group">
            <div className={`p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl w-fit ${stat.color} group-hover:scale-110 transition-all`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black tracking-tight truncate">{stat.value}</div>
              <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          <section className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] space-y-6 md:space-y-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                <LineChart className="w-5 h-5 md:w-6 md:h-6 text-primary" /> Analytics
              </h2>
              <span className="text-[10px] font-black text-muted-foreground uppercase">Live Stream</span>
            </div>
            <div className="h-[200px] md:h-[300px] flex items-center justify-center border border-white/5 rounded-2xl md:rounded-3xl bg-black/20 text-muted-foreground text-sm italic p-4 text-center">
              Detailed performance graph will render here as you complete more industrial mock tests.
            </div>
          </section>

          <section className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Recent Mission History</h2>
            <div className="space-y-3 md:space-y-4">
              {isHistoryLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : testAttempts && testAttempts.length > 0 ? (
                testAttempts.map((test, i) => (
                  <div key={i} className="flex items-center justify-between p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-default">
                    <div>
                      <div className="font-black text-sm md:text-lg uppercase tracking-tight">{test.testDomain}</div>
                      <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        {test.attemptDate?.toDate?.()?.toLocaleDateString() || "In Progress"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg md:text-xl font-black text-primary">{test.score}/{test.totalQuestions}</div>
                      <div className="text-[8px] md:text-[10px] font-black text-muted-foreground uppercase">Score</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center glass rounded-2xl border-dashed border-white/10">
                  <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">No mission history found. Start your first test!</p>
                  <Link href="/test">
                    <GlowButton variant="outline" size="sm" className="mt-4">Go to Exam Mode</GlowButton>
                  </Link>
                </div>
              )}
            </div>
          </section>
        </div>

        <aside className="space-y-6 md:space-y-8">
          <div className="glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all">
              <Zap className="w-16 h-16 md:w-20 md:h-20 text-secondary" />
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-secondary mb-3 md:mb-4">PrepStack Premium</h3>
            <p className="text-xs md:text-sm text-muted-foreground font-medium mb-4 md:mb-6 leading-relaxed">Unlock live mentorship, target-company mocks, and industrial case studies.</p>
            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-[10px] md:text-xs font-black text-white/70 uppercase tracking-widest">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full" /> 3 Live Classes / Week</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full" /> Industry Mentors</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-secondary rounded-full" /> Mock Interviews</li>
            </ul>
            <Link href="/enroll">
              <GlowButton variant="secondary" className="w-full">Get Enrolled</GlowButton>
            </Link>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-primary/20">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-primary mb-3 md:mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Recommended
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                <div className="text-xs md:text-sm font-black uppercase">Graphs Deep Dive</div>
                <div className="text-[8px] md:text-[10px] text-muted-foreground font-bold">Recommended for Tech Students</div>
                <Link href="/practice/dsa" className="text-[8px] md:text-[10px] text-primary font-black uppercase flex items-center gap-1 mt-2 hover:gap-2 transition-all">
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
