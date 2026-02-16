"use client";

import { useState, useEffect } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Progress } from "@/components/ui/progress";
import { Brain, Clock, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";

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
    } else if (timeLeft === 0) {
      setStep("result");
    }
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleOptionSelect = (idx: number) => {
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
      <div className="max-w-4xl mx-auto px-4 py-24 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Select Test Domain</h1>
          <p className="text-muted-foreground">Pick a subject to start your 20-minute simulated placement test.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <button
              key={i}
              onClick={() => { setCurrentDomain(domain); setStep("test"); }}
              className="glass-card p-8 rounded-2xl text-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">{domain}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === "test") {
    const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="flex items-center justify-between glass p-6 rounded-2xl border-white/10">
          <div className="space-y-1">
            <h2 className="font-bold text-lg">{currentDomain}</h2>
            <div className="text-xs text-muted-foreground">Question {currentQuestion + 1} of {mockQuestions.length}</div>
          </div>
          <div className="flex items-center gap-3 glass px-4 py-2 rounded-xl text-primary font-mono text-xl font-bold neon-glow-blue">
            <Clock className="w-5 h-5" />
            {formatTime(timeLeft)}
          </div>
        </div>

        <Progress value={progress} className="h-2" />

        <div className="glass-card p-10 rounded-3xl space-y-8 min-h-[400px]">
          <h3 className="text-2xl font-medium leading-relaxed">
            {mockQuestions[currentQuestion].q}
          </h3>
          <div className="grid gap-4">
            {mockQuestions[currentQuestion].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                className={`w-full p-5 rounded-2xl text-left border transition-all ${
                  answers[currentQuestion] === i 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-white/5 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-4">
                   <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
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

        <div className="flex items-center justify-between pt-4">
          <GlowButton 
            variant="outline" 
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Previous
          </GlowButton>
          
          {currentQuestion === mockQuestions.length - 1 ? (
            <GlowButton onClick={() => setStep("result")}>Submit Test</GlowButton>
          ) : (
            <GlowButton onClick={() => setCurrentQuestion(prev => prev + 1)}>
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </GlowButton>
          )}
        </div>
      </div>
    );
  }

  const results = calculateResults();
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-12">
      <div className="glass-card p-12 rounded-3xl text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[100px]" />
        
        <div className="space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-4">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-5xl font-bold font-headline">Test <span className="text-neon-blue">Complete</span></h2>
          <p className="text-muted-foreground text-xl">Great effort! Here is how you performed.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          <div className="space-y-1">
            <div className="text-3xl font-bold">{results.score} / {mockQuestions.length}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Total Score</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold">{results.accuracy.toFixed(1)}%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Accuracy</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold">{results.attempted}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Attempted</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-red-400">{mockQuestions.length - results.score}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Incorrect</div>
          </div>
        </div>

        <div className="pt-12">
          <GlowButton size="lg" className="px-12" onClick={() => window.location.reload()}>Try Another Domain</GlowButton>
        </div>
      </div>
    </div>
  );
}
