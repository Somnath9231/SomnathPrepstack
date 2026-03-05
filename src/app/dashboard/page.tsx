
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
  Calendar,
  Activity,
  Award
} from "lucide-react";
import Link from "next/link";
import { collection, orderBy, query, limit, doc } from "firebase/firestore";
import { Progress } from "@/components/ui/progress";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

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
      limit(10)
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

  const chartData = testAttempts?.map(attempt => ({
    name: attempt.attemptDate?.toDate?.()?.toLocaleDateString() || 'N/A',
    accuracy: attempt.accuracyPercentage,
  })).reverse() || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-12">
      {/* Hero Profile Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 glass p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] border-primary/20 bg-primary/[0.01] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-14 opacity-5 pointer-events-none">
          <ShieldCheck className="w-64 h-64 text-primary" />
        </div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              <span className="text-muted-foreground/30">ID:</span> <span className="text-neon-cyan">{userData?.firstName || user.displayName || user.email?.split('@')[0]}</span>
            </h1>
            <span className="px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-xs font-black uppercase tracking-widest text-primary shadow-[0_0_20px_rgba(0,245,255,0.2)]">
              {userData?.enrollmentStatus === 'premium' ? 'Premium Node' : 'Free Protocol'}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs font-black text-muted-foreground uppercase tracking-widest">
             <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> UID: {userData?.customId || "SYNCING..."}</span>
             <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl"><Calendar className="w-3.5 h-3.5" /> Initialized: {userData?.createdAt?.toDate()?.toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex gap-4 relative z-10">
          <Link href="/enroll" className="w-full md:w-auto">
            <GlowButton variant={userData?.enrollmentStatus === 'premium' ? 'outline' : 'primary'} className="w-full px-10 py-7 text-lg">
              {userData?.enrollmentStatus === 'premium' ? 'Manage License' : 'Upgrade Protocol'}
            </GlowButton>
          </Link>
        </div>
      </header>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 glass-card p-10 rounded-[3.5rem] space-y-10">
           <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                <Activity className="w-8 h-8 text-primary" /> Mission Performance
              </h2>
           </div>
           
           <div className="h-[350px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={chartData}>
                 <defs>
                   <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#00F5FF" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                 <XAxis dataKey="name" stroke="#ffffff30" fontSize={10} tickLine={false} axisLine={false} />
                 <YAxis stroke="#ffffff30" fontSize={10} tickLine={false} axisLine={false} domain={[0, 100]} />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#050a14', border: '1px solid #ffffff10', borderRadius: '1rem', color: '#fff' }}
                   itemStyle={{ color: '#00F5FF', fontWeight: 'bold' }}
                 />
                 <Area type="monotone" dataKey="accuracy" stroke="#00F5FF" strokeWidth={4} fillOpacity={1} fill="url(#colorAcc)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </section>

        <section className="glass-card p-10 rounded-[3.5rem] border-secondary/20 flex flex-col justify-between relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-125 transition-all">
             <Award className="w-48 h-48 text-secondary" />
           </div>
           
           <div className="space-y-8 relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-tight text-secondary flex items-center gap-3">
                <Trophy className="w-7 h-7" /> Top Efficiency
              </h3>
              <div className="space-y-8">
                 <div className="flex flex-col">
                    <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Average Precision</span>
                    <span className="text-6xl font-black text-neon-cyan">
                      {testAttempts && testAttempts.length > 0 
                        ? (testAttempts.reduce((acc, curr) => acc + curr.accuracyPercentage, 0) / testAttempts.length).toFixed(1) + "%"
                        : "0%"}
                    </span>
                 </div>
                 <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-black uppercase text-muted-foreground">Active Missions</span>
                       <span className="text-xl font-black">{testAttempts?.length || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-black uppercase text-muted-foreground">Learning Credits</span>
                       <span className="text-xl font-black">12,450</span>
                    </div>
                 </div>
              </div>
           </div>
           
           <Link href="/test" className="relative z-10 mt-8">
             <GlowButton variant="secondary" className="w-full py-8 text-lg">Start New Mission</GlowButton>
           </Link>
        </section>
      </div>

      {/* Progress & History Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 glass-card p-10 rounded-[3.5rem] space-y-10">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-4">
                <BookOpen className="w-7 h-7 text-primary" /> Industrial Roadmap Progress
              </h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div key={course.slug} className="p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/5 space-y-6 hover:neon-border-cyan transition-all group">
                   <div className="flex items-center justify-between">
                      <span className="font-black uppercase tracking-tighter text-xl">{course.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-primary">{getProgress(course.slug)}%</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      </div>
                   </div>
                   <Progress value={getProgress(course.slug)} className="h-2.5 bg-white/5" />
                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
                     <span className="text-[10px] font-black text-muted-foreground uppercase">Phase 1 Complete</span>
                     <Link href={`/practice/${course.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-primary hover:gap-4 transition-all">
                        Deep Learn <ChevronRight className="w-3 h-3" />
                     </Link>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <section className="lg:col-span-4 glass-card p-10 rounded-[3.5rem] space-y-10">
           <div className="flex items-center justify-between">
             <h2 className="text-2xl font-black uppercase tracking-tight">Mission Log</h2>
             <Link href="/test" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Full Data</Link>
           </div>
           <div className="space-y-4">
              {isHistoryLoading ? (
                <div className="py-20 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
              ) : testAttempts && testAttempts.length > 0 ? (
                testAttempts.map((test, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-primary/20 transition-all group">
                     <div>
                        <div className="font-black text-sm uppercase tracking-tight text-white/90">{test.testDomain}</div>
                        <div className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-1">
                           {test.attemptDate?.toDate?.()?.toLocaleDateString() || "SYNCING..."}
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="text-xl font-black text-primary">{test.score}</div>
                        <div className="text-[8px] font-black text-muted-foreground uppercase">Precision</div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center glass rounded-[2.5rem] border-dashed border-white/10">
                  <p className="text-muted-foreground font-black uppercase tracking-widest text-[10px]">No mission data intercepted.</p>
                </div>
              )}
           </div>
        </section>
      </div>
    </div>
  );
}
