
"use client";

import { useState, useEffect } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Progress } from "@/components/ui/progress";
import { Brain, Clock, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Trophy, Target, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const domains = ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Data Interpretation", "Programming", "Computer Science Core"];

const mockQuestions = [
  { q: "What is the time complexity of building a heap from an array of n elements?", options: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"], correct: 0 },
  { q: "Which data structure is primarily used for Breadth-First Search (BFS)?", options: ["Stack", "Queue", "Tree", "Graph"], correct: 1 },
  { q: "A sum of money doubles itself in 10 years at simple interest. In how many years will it triple itself?", options: ["15 years", "20 years", "25 years", "30 years"], correct: 1 },
  { q: "What is the correct syntax for declaring a pointer to a pointer in C++?", options: ["int *p", "int **p", "int p**", "int &*p"], correct: 1 },
  { q: "In the OSI model, which layer is responsible for routing and IP addressing?", options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"], correct: 1 },
  { q: "Which of the following SQL constraints ensures that all values in a column are different?", options: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"], correct: 1 },
  { q: "What is the result of 1011 (binary) + 1101 (binary)?", options: ["11000", "10100", "11010", "11100"], correct: 0 },
  { q: "Which sorting algorithm has the best-case time complexity of O(n)?", options: ["Quick Sort", "Merge Sort", "Insertion Sort", "Selection Sort"], correct: 2 },
  { q: "What does 'Atomicity' in ACID properties of DBMS ensure?", options: ["Data is consistent", "Transactions are all or nothing", "Data is isolated", "Data is durable"], correct: 1 },
  { q: "Which memory management technique allows the execution of processes larger than the physical memory?", options: ["Paging", "Segmentation", "Virtual Memory", "Fragmentation"], correct: 2 },
  { q: "Pointing to a photograph, a man said, 'I have no brother or sister but that man’s father is my father’s son.' Whose photograph was it?", options: ["His own", "His son's", "His father's", "His nephew's"], correct: 1 },
  { q: "If a car travels 300 km in 5 hours, what is its speed in m/s?", options: ["16.67 m/s", "60 m/s", "20 m/s", "15.5 m/s"], correct: 0 },
  { q: "Which keyword is used in Java to inherit a class?", options: ["implements", "extends", "inherits", "parent"], correct: 1 },
  { q: "What is the purpose of a 'Virtual Function' in C++?", options: ["To hide data", "To achieve Run-time Polymorphism", "To speed up code", "To use less memory"], correct: 1 },
  { q: "Which of these is NOT a necessary condition for Deadlock?", options: ["Mutual Exclusion", "No Preemption", "Circular Wait", "Total Allocation"], correct: 3 },
  { q: "In Python, which of the following is immutable?", options: ["List", "Dictionary", "Set", "Tuple"], correct: 3 },
  { q: "What is the default port for HTTP?", options: ["443", "80", "21", "22"], correct: 1 },
  { q: "If the selling price of an article is ₹120 and the cost price is ₹100, what is the profit percentage?", options: ["20%", "25%", "15%", "10%"], correct: 0 },
  { q: "Which layer of TCP/IP corresponds to the Transport layer of OSI?", options: ["Internet", "Host-to-Host", "Network Access", "Application"], correct: 1 },
  { q: "In a binary search tree, which traversal produces a sorted sequence of keys?", options: ["Pre-order", "In-order", "Post-order", "Level-order"], correct: 1 },
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
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-24 space-y-12 md:space-y-16">
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">EXAM <span className="text-neon-cyan">MODE</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">Select your specialization for the 20-minute industrial simulation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {domains.map((domain, i) => (
            <button
              key={i}
              onClick={() => { setCurrentDomain(domain); setStep("test"); }}
              className="glass-card p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-center hover:neon-border-cyan transition-all duration-500 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-all border border-white/5">
                <Brain className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">{domain}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === "test") {
    const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-6 md:space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-white/5 shadow-2xl">
          <div className="space-y-1 md:space-y-2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-primary">{currentDomain}</h2>
            <div className="text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-widest">Question {currentQuestion + 1} OF {mockQuestions.length}</div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 glass px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-secondary font-mono text-2xl md:text-3xl font-black neon-glow-pink">
            <Clock className="w-5 h-5 md:w-6 md:h-6" />
            {formatTime(timeLeft)}
          </div>
        </div>

        <Progress value={progress} className="h-2 md:h-3 bg-white/5" />

        <div className="glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] space-y-6 md:space-y-10 min-h-[350px] md:min-h-[450px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5">
            <ShieldCheck className="w-24 h-24 md:w-32 md:h-32 text-primary" />
          </div>
          <h3 className="text-xl md:text-3xl font-black leading-tight uppercase tracking-tight relative z-10">
            {mockQuestions[currentQuestion].q}
          </h3>
          <div className="grid gap-3 md:gap-5 relative z-10">
            {mockQuestions[currentQuestion].options.map((opt, i) => (
              <button
                key={i}
                disabled={timeLeft === 0}
                onClick={() => handleOptionSelect(i)}
                className={cn(
                  "w-full p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] text-left border-2 transition-all font-bold text-base md:text-lg",
                  answers[currentQuestion] === i 
                    ? "bg-primary/10 border-primary text-primary" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-4 md:gap-6">
                   <div className={cn(
                     "w-6 h-6 md:w-8 md:h-8 rounded-lg border-2 flex items-center justify-center font-black text-sm md:text-base",
                     answers[currentQuestion] === i ? "border-primary bg-primary text-black" : "border-white/20"
                   )}>
                     {String.fromCharCode(65 + i)}
                   </div>
                   {opt}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <GlowButton 
            variant="outline" 
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            className="flex-1 md:flex-none px-6 md:px-10 py-5 md:py-7"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> Back
          </GlowButton>
          
          {currentQuestion === mockQuestions.length - 1 ? (
            <GlowButton onClick={() => setStep("result")} variant="secondary" className="flex-1 md:flex-none px-6 md:px-10 py-5 md:py-7">Finish Exam</GlowButton>
          ) : (
            <GlowButton onClick={() => setCurrentQuestion(prev => prev + 1)} className="flex-1 md:flex-none px-6 md:px-10 py-5 md:py-7">
              Next <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" />
            </GlowButton>
          )}
        </div>
      </div>
    );
  }

  const results = calculateResults();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
      <div className="glass-card p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] text-center space-y-8 md:space-y-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-primary/10 blur-[80px] md:blur-[120px]" />
        
        <div className="space-y-4 md:space-y-6">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-4 md:mb-6">
            <CheckCircle2 className="w-10 h-10 md:w-14 md:h-14" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">EXAM <span className="text-neon-cyan">OVER</span></h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">Protocol complete. Performance data captured.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-6 md:pt-10">
          {[
            { label: "Score", value: `${results.score}/${mockQuestions.length}`, icon: <Trophy className="w-4 h-4" /> },
            { label: "Accuracy", value: `${results.accuracy.toFixed(1)}%`, icon: <Target className="w-4 h-4" /> },
            { label: "Attempted", value: results.attempted, icon: <CheckCircle2 className="w-4 h-4" /> },
            { label: "Errors", value: mockQuestions.length - results.score, icon: <AlertCircle className="w-4 h-4" /> },
          ].map((item, idx) => (
            <div key={idx} className="space-y-1 md:space-y-2">
              <div className="flex items-center justify-center gap-2 text-muted-foreground/50">
                {item.icon}
              </div>
              <div className="text-2xl md:text-4xl font-black tracking-tight">{item.value}</div>
              <div className="text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-[0.2em]">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="pt-8 md:pt-12">
          <GlowButton size="lg" className="w-full md:w-auto px-16 py-8 text-xl" onClick={() => window.location.reload()}>Retake Challenge</GlowButton>
        </div>
      </div>
    </div>
  );
}
