
"use client";

import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  Loader2,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { collection, orderBy, query, limit, doc } from "firebase/firestore";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push("/login");
    }
  }, [user, isUserLoading, router]);

  const userDocRef = useMemoFirebase(() => user ? doc(db, "users", user.uid) : null, [user, db]);
  const { data: userData } = useDoc(userDocRef);

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

  const courses = [
    { name: "C Programming", slug: "c", color: "from-blue-500 to-cyan-400" },
    { name: "Data Structures", slug: "dsa", color: "from-purple-500 to-pink-400" },
    { name: "DBMS", slug: "dbms", color: "from-orange-500 to-yellow-400" },
    { name: "Python", slug: "python", color: "from-green-500 to-emerald-400" },
  ];

  const getProgress = (slug: string) => {
    return userData?.progress?.[slug] || 0;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 glass p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border-primary/20 bg-primary/[0.02]">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
              Welcome Back, <span className="text-neon-cyan">{userData?.firstName || user.displayName || user.email?.split('@')[0]}</span>
            </h1>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-muted-foreground shrink-0">
              {userData?.enrollmentStatus === 'premium' ? 'Premium Protocol' : 'Free Tier'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
             <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> ID: {userData?.customId || "INITIALIZING..."}</span>
             <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Joined: {userData?.createdAt?.toDate()?.toLocaleDateString()}</span>
          </div>
        </div>
        <Link href="/enroll" className="w-full md:w-auto">
          <GlowButton variant={userData?.enrollmentStatus === 'premium' ? 'outline' : 'secondary'} className="w-full px-8 py-6">
            {userData?.enrollmentStatus === 'premium' ? 'Manage Subscription' : 'Upgrade to Premium'}
          </GlowButton>
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <section className="lg:col-span-3 glass-card p-8 rounded-[2.5rem] space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" /> Learning Progress
              </h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.slug} className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4 hover:border-primary/20 transition-all group">
                   <div className="flex items-center justify-between">
                      <span className="font-black uppercase tracking-tighter text-lg">{course.name}</span>
                      <span className="text-xs font-black text-primary">{getProgress(course.slug)}%</span>
                   </div>
                   <Progress value={getProgress(course.slug)} className="h-2 bg-white/10" />
                   <Link href={`/practice/${course.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground hover:text-primary transition-colors">
                      Resume Learning <ChevronRight className="w-3 h-3" />
                   </Link>
                </div>
              ))}
           </div>
        </section>

        <aside className="space-y-6">
          <div className="glass-card p-6 rounded-[2rem] border-secondary/20 relative overflow-hidden group h-full">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-all">
              <Trophy className="w-24 h-24 text-secondary" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-secondary mb-4">Latest Achievement</h3>
            <div className="space-y-4">
               {testAttempts?.[0] ? (
                 <>
                   <div className="text-3xl font-black tracking-tighter">{testAttempts[0].accuracyPercentage.toFixed(1)}%</div>
                   <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Accuracy in {testAttempts[0].testDomain}</div>
                   <Link href="/test">
                     <GlowButton variant="secondary" className="w-full mt-4">Retake Mock</GlowButton>
                   </Link>
                 </>
               ) : (
                 <div className="text-sm font-medium text-muted-foreground italic">No tests taken yet. Start your journey today!</div>
               )}
            </div>
          </div>
        </aside>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <section className="glass-card p-8 rounded-[2.5rem] space-y-8">
             <div className="flex items-center justify-between">
               <h2 className="text-xl font-black uppercase tracking-tight">Recent Mission Log</h2>
               <Link href="/test" className="text-[10px] font-black text-primary uppercase">View All Missions</Link>
             </div>
             <div className="space-y-4">
                {isHistoryLoading ? (
                  <div className="py-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
                ) : testAttempts && testAttempts.length > 0 ? (
                  testAttempts.map((test, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5 hover:neon-border-cyan transition-all">
                       <div>
                          <div className="font-black text-lg uppercase tracking-tight">{test.testDomain}</div>
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                             {test.attemptDate?.toDate?.()?.toLocaleString() || "Syncing..."}
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="text-2xl font-black text-primary">{test.score}/{test.totalQuestions}</div>
                          <div className="text-[8px] font-black text-muted-foreground uppercase">Efficiency Rating</div>
                       </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center glass rounded-3xl border-dashed border-white/20">
                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">No active data streams found.</p>
                  </div>
                )}
             </div>
           </section>
        </div>

        <section className="glass-card p-8 rounded-[2.5rem] border-primary/20 flex flex-col justify-between">
           <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-primary flex items-center gap-2">
                <Target className="w-6 h-6" /> Target Analytics
              </h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-xs font-black text-muted-foreground uppercase">Missions Complete</span>
                    <span className="text-lg font-black">{testAttempts?.length || 0}</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-xs font-black text-muted-foreground uppercase">Average Precision</span>
                    <span className="text-lg font-black text-neon-cyan">
                      {testAttempts && testAttempts.length > 0 
                        ? (testAttempts.reduce((acc, curr) => acc + curr.accuracyPercentage, 0) / testAttempts.length).toFixed(1) + "%"
                        : "0%"}
                    </span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-muted-foreground uppercase">Learning Hours</span>
                    <span className="text-lg font-black">12.4H</span>
                 </div>
              </div>
           </div>
           <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Next Recommended Step</div>
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20">
                 <div className="font-black uppercase text-sm mb-1">Advanced Binary Trees</div>
                 <div className="text-[10px] font-bold text-muted-foreground">Industrial Module 4</div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
