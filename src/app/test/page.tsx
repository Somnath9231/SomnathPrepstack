
"use client";

import { useState, useEffect } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Progress } from "@/components/ui/progress";
import { Brain, Clock, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Trophy, Target, AlertCircle, RefreshCw, ShieldAlert, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUser, useFirestore } from "@/firebase";
import { collection, serverTimestamp } from "firebase/firestore";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { questionBank, Question } from "@/data/questions";
import Link from "next/link";

const domains = [
  "General Intelligence",
  "Computer Science Core",
  "Programming Mastery",
  "Aptitude & Logic",
  "Industrial Tech"
];

export default function TestPage() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const [step, setStep] = useState<"domain" | "test" | "result">("domain");
  const [currentDomain, setCurrentDomain] = useState("");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 mins
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (step === "test" && currentDomain) {
      const filtered = questionBank.filter(q => 
        currentDomain === "General Intelligence" || q.category.includes(currentDomain.split(' ')[0])
      );
      
      const shuffled = [...(filtered.length >= 20 ? filtered : questionBank)]
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);
      
      setTestQuestions(shuffled);
      setTimeLeft(1200);
      setCurrentQuestionIdx(0);
      setAnswers({});
    }
  }, [step, currentDomain]);

  useEffect(() => {
    if (step === "test" && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (step === "test" && timeLeft === 0) {
      handleFinish();
    }
  }, [step, timeLeft]);

  const handleFinish = () => {
    const results = calculateResults();
    if (user) {
      const attemptsRef = collection(db, "users", user.uid, "test_attempts");
      addDocumentNonBlocking(attemptsRef, {
        userId: user.uid,
        testDomain: currentDomain,
        score: results.score,
        totalQuestions: testQuestions.length,
        correctAnswers: results.score,
        wrongAnswers: results.attempted - results.score,
        attemptPercentage: (results.attempted / testQuestions.length) * 100,
        accuracyPercentage: results.accuracy,
        attemptDate: serverTimestamp(),
        durationTakenSeconds: 1200 - timeLeft
      });
    }
    setStep("result");
  };

  const calculateResults = () => {
    let score = 0;
    testQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });
    return {
      score,
      accuracy: testQuestions.length > 0 ? (score / testQuestions.length) * 100 : 0,
      attempted: Object.keys(answers).length,
    };
  };

  if (isUserLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-12 h-12 animate-spin text-primary" /></div>;

  if (!user) {
    return (
      <div className="max-w-xl mx-auto px-4 py-32 text-center space-y-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
          <ShieldAlert className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tighter">Mission <span className="text-neon-cyan">Unauthorized</span></h1>
        <p className="text-muted-foreground font-medium">Exam simulations are restricted to registered students. Unauthorized access to industrial tests is prohibited.</p>
        <Link href="/login" className="block">
          <GlowButton className="w-full py-7">Sign In to Authenticate Mission</GlowButton>
        </Link>
      </div>
    );
  }

  if (step === "domain") {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24 space-y-12 md:space-y-16">
        <div className="text-center space-y-4 md:space-y-6 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Industrial <span className="text-neon-pink">Simulation</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">Select a domain for a 20-question, 20-minute adaptive test. Each attempt generates a unique logic sequence.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {domains.map((domain, i) => (
            <button
              key={i}
              onClick={() => { setCurrentDomain(domain); setStep("test"); }}
              className="glass-card p-10 rounded-[2.5rem] md:rounded-[3rem] text-left hover:neon-border-cyan transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-all">
                <Brain className="w-24 h-24 text-primary" />
              </div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-primary/10 transition-colors">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{domain}</h3>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">20 Questions • 20 Minutes</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === "test" && testQuestions.length > 0) {
    const currentQuestion = testQuestions[currentQuestionIdx];
    const progress = ((currentQuestionIdx + 1) / testQuestions.length) * 100;

    return (
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 space-y-8">
        <header className="flex flex-col md:flex-row items-center justify-between gap-6 glass p-8 rounded-[2rem] border-white/5 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
           <div className="space-y-1 text-center md:text-left">
            <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-1">Active Mission: {currentDomain}</div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Question {currentQuestionIdx + 1} <span className="text-muted-foreground/30 mx-2">/</span> {testQuestions.length}</h2>
          </div>
          <div className="flex items-center gap-4 glass px-8 py-4 rounded-3xl text-secondary font-mono text-3xl font-black neon-glow-pink">
            <Clock className="w-6 h-6" />
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </header>

        <Progress value={progress} className="h-3 bg-white/5" />

        <div className="glass-card p-12 rounded-[3.5rem] space-y-10 min-h-[500px] relative overflow-hidden group">
          <div className="space-y-6 relative z-10">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black leading-tight uppercase tracking-tight">
              {currentQuestion.text}
            </h3>
          </div>
          
          <div className="grid gap-4 relative z-10">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setAnswers({ ...answers, [currentQuestionIdx]: i })}
                className={cn(
                  "w-full p-6 rounded-[2rem] text-left border-2 transition-all font-bold text-lg group/opt flex items-center justify-between",
                  answers[currentQuestionIdx] === i 
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_30px_rgba(0,245,255,0.1)]" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "w-10 h-10 rounded-xl border-2 flex items-center justify-center font-black text-sm",
                    answers[currentQuestionIdx] === i ? "border-primary bg-primary text-black" : "border-white/20"
                  )}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  {opt}
                </div>
                {answers[currentQuestionIdx] === i && <CheckCircle2 className="w-6 h-6" />}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-6">
          <GlowButton 
            variant="outline" 
            disabled={currentQuestionIdx === 0}
            onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
            className="px-12 py-8 flex-1 sm:flex-none"
            suppressHydrationWarning
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Protocol Back
          </GlowButton>
          
          {currentQuestionIdx === testQuestions.length - 1 ? (
            <GlowButton onClick={handleFinish} variant="secondary" className="px-16 py-8 flex-1 sm:flex-none text-xl" suppressHydrationWarning>Submit Mission</GlowButton>
          ) : (
            <GlowButton onClick={() => setCurrentQuestionIdx(prev => prev + 1)} className="px-16 py-8 flex-1 sm:flex-none text-xl" suppressHydrationWarning>
              Analyze Next <ChevronRight className="w-5 h-5 ml-2" />
            </GlowButton>
          )}
        </div>
      </div>
    );
  }

  if (step === "result") {
    const res = calculateResults();
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
        <div className="glass-card p-12 md:p-20 rounded-[4rem] text-center space-y-12 relative overflow-hidden">
          <div className="space-y-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-8 animate-pulse">
              <Trophy className="w-12 h-12" />
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">MISSION <span className="text-neon-cyan">CAPTURED</span></h2>
            <p className="text-2xl text-muted-foreground font-medium">Performance metrics synchronized to dashboard.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-10 border-y border-white/5">
            {[
              { label: "Precision", value: `${res.score}/${testQuestions.length}` },
              { label: "Efficiency", value: `${res.accuracy.toFixed(1)}%` },
              { label: "Captured", value: res.attempted },
              { label: "Latency", value: "20:00" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl font-black tracking-tight text-white">{item.value}</div>
                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton size="lg" className="px-16 py-8 text-xl" onClick={() => window.location.reload()} suppressHydrationWarning>Re-Initialize Simulation</GlowButton>
            <Link href="/dashboard">
              <GlowButton variant="outline" size="lg" className="px-16 py-8 text-xl w-full" suppressHydrationWarning>Access Data Hub</GlowButton>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
