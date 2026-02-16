"use client";

import { useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { recommendResources, RecommendResourcesOutput } from "@/ai/flows/recommend-resources";
import { FileText, Download, Bookmark, Sparkles, Loader2, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const resources = [
  { title: "Modern Tech Resume", type: "Resume Template", size: "1.2 MB" },
  { title: "Experienced Resume", type: "Resume Template", size: "1.4 MB" },
  { title: "DSA Cheat Sheet", type: "Cheat Sheet", size: "2.1 MB" },
  { title: "DBMS Guide", type: "Interview Guide", size: "3.5 MB" },
  { title: "System Design Guide", type: "Interview Guide", size: "4.8 MB" },
  { title: "OS Quick Sheet", type: "Cheat Sheet", size: "0.8 MB" },
];

export default function ResourcesPage() {
  const [loading, setLoading] = useState(false);
  const [learningProgress, setLearningProgress] = useState("");
  const [recommendations, setRecommendations] = useState<RecommendResourcesOutput | null>(null);

  const handleGetRecommendations = async () => {
    if (!learningProgress) {
      toast({ title: "Tell us a bit about your progress first", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const result = await recommendResources({
        learningProgress,
        knowledgeGaps: "General tech preparation",
        careerGoals: "Software Engineering",
        resourceTypePreference: "All"
      });
      setRecommendations(result);
    } catch (error) {
      toast({ title: "Failed to fetch recommendations", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Placement <span className="text-neon-blue">Resources</span></h1>
        <p className="text-muted-foreground">Download templates, cheat sheets, and guides to boost your preparation.</p>
      </div>

      {/* AI Recommender */}
      <section className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Sparkles className="w-5 h-5" />
              <span>AI Resource Recommender</span>
            </div>
            <p className="text-muted-foreground">What topics are you currently studying? Let our AI suggest the best cheat sheets and templates for you.</p>
            <textarea 
              className="w-full h-32 glass rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="e.g. I am currently learning about Graphs in C++ and preparing for a TCS interview next week."
              value={learningProgress}
              onChange={(e) => setLearningProgress(e.target.value)}
            />
            <GlowButton 
              onClick={handleGetRecommendations}
              disabled={loading}
              className="w-full"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Get Recommendations"}
            </GlowButton>
          </div>

          <div className="lg:w-1/2 glass rounded-2xl p-6 min-h-[250px]">
            {recommendations ? (
              <div className="space-y-4">
                <h3 className="font-bold border-b border-white/10 pb-2 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-primary" />
                  Suggested For You
                </h3>
                {recommendations.recommendations.map((rec, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-primary">{rec.title}</h4>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground px-2 py-0.5 glass rounded-md">
                        {rec.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{rec.description}</p>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mt-2">
                      <Info className="w-3 h-3 text-primary/60" />
                      <span>{rec.relevanceReason}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground opacity-30">
                <Bookmark className="w-16 h-16 mb-4" />
                <p>Personalized suggestions will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all flex items-center gap-6">
            <div className="p-4 bg-white/5 rounded-xl text-primary group-hover:neon-glow-blue transition-all">
              <FileText className="w-8 h-8" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-bold group-hover:text-primary transition-all">{res.title}</h3>
              <p className="text-xs text-muted-foreground">{res.type} • {res.size}</p>
            </div>
            <button className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
