"use client";

import { useState, useEffect } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Progress } from "@/components/ui/progress";
import { Brain, Clock, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

const domains = ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Data Interpretation", "Programming"];

const mockQuestions = [
  { q: "What is the time complexity of building a heap?", options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"], correct: 0 },
  { q: "Which data structure is used for BFS?", options: ["Stack", "Queue", "Tree", "Graph"], correct: 1 },
  { q: "A sum of money doubles itself in 10 years. In how many years will it triple itself?", options: ["15 years", "20 years", "25 years", "30 years"], correct: 1 },
  { q: "Point out the correct syntax for a pointer to a pointer in C++.", options: ["int *p", "int **p", "int p**", "None"], correct: 1 },
];

export default function TestPage() {
  const [step, setStep] = useState<"domain" | "test" | "result">("domain");
  const [currentDomain, setCurrentDomain] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 mins

  useEffect(() => {
    if (step === "test" && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (step === "test" && timeLeft === 0) {
      setStep("result");
    }
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleOptionSelect = (idx: number) => {
    if (timeLeft === 0) return;
    setAnswers({ ...answers, [currentQuestion]: idx });
  };

  const calculateResults = () => {
    let score = 0;
    mockQuestions.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });
    return {
      score,
      accuracy: (score / mockQuestions.length) * 100,
      attempted: Object.keys(answers).length,
    };
  };

  if (step === "domain") {
    return (
      <div className="max-w-5xl mx-auto px-4 py-24 space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-black uppercase tracking-tighter">EXAM <span className="text-neon-cyan">MODE</span></h1>
          <p className="text-xl text-muted-foreground font-medium">Select your specialization for the 20-minute industrial simulation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, i) => (
            <button
              key={i}
              onClick={() => { setCurrentDomain(domain); setStep("test"); }}
              className="glass-card p-10 rounded-[2.5rem] text-center hover:neon-border-cyan transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all border border-white/5">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">{domain}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === "test") {
    const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-10">
        <div className="flex items-center justify-between glass p-8 rounded-[2rem] border-white/5 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-primary">{currentDomain}</h2>
            <div className="text-xs font-black text-muted-foreground uppercase tracking-widest">Question {currentQuestion + 1} OF {mockQuestions.length}</div>
          </div>
          <div className="flex items-center gap-4 glass px-6 py-3 rounded-2xl text-secondary font-mono text-3xl font-black neon-glow-pink">
            <Clock className="w-6 h-6" />
            {formatTime(timeLeft)}
          </div>
        </div>

        <Progress value={progress} className="h-3 bg-white/5" />

        <div className="glass-card p-12 rounded-[3rem] space-y-10 min-h-[450px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldCheck className="w-32 h-32 text-primary" />
          </div>
          <h3 className="text-3xl font-black leading-tight uppercase tracking-tight">
            {mockQuestions[currentQuestion].q}
          </h3>
          <div className="grid gap-5">
            {mockQuestions[currentQuestion].options.map((opt, i) => (
              <button
                key={i}
                disabled={timeLeft === 0}
                onClick={() => handleOptionSelect(i)}
                className={`w-full p-6 rounded-[1.5rem] text-left border-2 transition-all font-bold text-lg ${
                  answers[currentQuestion] === i 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-white/5 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-6">
                   <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center font-black ${
                     answers[currentQuestion] === i ? "border-primary bg-primary text-black" : "border-white/20"
                   }`}>
                     {String.fromCharCode(65 + i)}
                   </div>
                   {opt}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <GlowButton 
            variant="outline" 
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            className="px-10 py-7"
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Back
          </GlowButton>
          
          {currentQuestion === mockQuestions.length - 1 ? (
            <GlowButton onClick={() => setStep("result")} variant="secondary" className="px-10 py-7">Finish Exam</GlowButton>
          ) : (
            <GlowButton onClick={() => setCurrentQuestion(prev => prev + 1)} className="px-10 py-7">
              Forward <ChevronRight className="w-5 h-5 ml-2" />
            </GlowButton>
          )}
        </div>
      </div>
    );
  }

  const results = calculateResults();
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="glass-card p-16 rounded-[4rem] text-center space-y-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px]" />
        
        <div className="space-y-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
            <CheckCircle2 className="w-14 h-14" />
          </div>
          <h2 className="text-7xl font-black uppercase tracking-tighter">EXAM <span className="text-neon-cyan">OVER</span></h2>
          <p className="text-2xl text-muted-foreground font-medium">Protocol complete. Performance data captured.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10">
          {[
            { label: "Score", value: `${results.score} / ${mockQuestions.length}` },
            { label: "Accuracy", value: `${results.accuracy.toFixed(1)}%` },
            { label: "Attempted", value: results.attempted },
            { label: "Errors", value: mockQuestions.length - results.score },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl font-black tracking-tight">{item.value}</div>
              <div className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <GlowButton size="lg" className="px-16 py-8 text-xl" onClick={() => window.location.reload()}>Retake Challenge</GlowButton>
        </div>
      </div>
    </div>
  );
}
