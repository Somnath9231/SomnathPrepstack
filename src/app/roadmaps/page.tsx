"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlowButton } from "@/components/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { roadmapsData } from "@/data/roadmaps";
import { generateRoadmap, RoadmapGenerationOutput } from "@/ai/flows/generate-roadmap";
import { Loader2, Sparkles, Map, Target, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function RoadmapsPage() {
  const [loading, setLoading] = useState(false);
  const [careerGoals, setCareerGoals] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("beginner");
  const [aiRoadmap, setAiRoadmap] = useState<RoadmapGenerationOutput | null>(null);

  const handleGenerate = async () => {
    if (!careerGoals) {
      toast({ title: "Please enter your career goals", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const result = await generateRoadmap({ careerGoals, experienceLevel });
      setAiRoadmap(result);
    } catch (error) {
      toast({ title: "Failed to generate roadmap", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Placement <span className="text-neon-blue">Roadmaps</span></h1>
        <p className="text-muted-foreground">Step-by-step guidance curated by industry experts to help you navigate your placement journey.</p>
      </div>

      {/* AI Roadmap Generator */}
      <section className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="w-32 h-32 text-primary" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-xs font-semibold text-primary">
              <Sparkles className="w-3 h-3" />
              <span>AI Powered</span>
            </div>
            <h2 className="text-3xl font-bold">Generate Personalized Roadmap</h2>
            <p className="text-muted-foreground">Tell us your goals, and our AI will build a tailor-made learning path for you.</p>
            
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="goals">Target Role / Career Goals</Label>
                <Input 
                  id="goals"
                  placeholder="e.g. Frontend Developer at Google" 
                  className="glass" 
                  value={careerGoals}
                  onChange={(e) => setCareerGoals(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Current Experience Level</Label>
                <select 
                  id="level"
                  className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                >
                  <option value="beginner">Beginner (No coding experience)</option>
                  <option value="intermediate">Intermediate (Knows basics)</option>
                  <option value="advanced">Experienced (Final year/Professional)</option>
                </select>
              </div>
              <GlowButton 
                onClick={handleGenerate} 
                disabled={loading}
                className="w-full h-12"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate My Roadmap"}
              </GlowButton>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 min-h-[300px] flex flex-col">
            {aiRoadmap ? (
              <div className="space-y-6 overflow-auto max-h-[500px] pr-2 custom-scrollbar">
                <div className="flex items-center gap-2 text-primary">
                  <Target className="w-5 h-5" />
                  <span className="font-bold">Optimal Skills to Focus:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aiRoadmap.optimalSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="prose prose-invert prose-sm max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: aiRoadmap.roadmap.replace(/\n/g, '<br/>') }} />
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
                <Map className="w-12 h-12 opacity-20" />
                <p>Enter your details to generate <br/> a smart roadmap.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Static Roadmaps */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold font-headline text-center">Popular Roadmaps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmapsData.map((roadmap) => (
            <div key={roadmap.id} className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                {roadmap.title}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {roadmap.content.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-white/5">
                    <AccordionTrigger className="text-sm font-medium hover:text-primary transition-all">
                      {item.step}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                      {item.details}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
