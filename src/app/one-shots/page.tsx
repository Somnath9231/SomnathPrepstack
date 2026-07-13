"use client";

import { GlowButton } from "@/components/GlowButton";
import { Youtube, PlayCircle, ShieldAlert, Video, BookOpen, ExternalLink } from "lucide-react";

const videos = [
  {
    title: "C PROGRAMMING BASIC-INTERMEDIATE FULL",
    url: "https://youtu.be/irqbmMNs2Bo?si=z8EdAUNAupX83lYu",
    duration: "10+ Hours",
    description: "A complete deep dive into C programming foundations."
  },
  {
    title: "C++ FULL BASIC-INTER",
    url: "https://youtu.be/z9bZufPHFLU?si=23MlOi01XYlj7UP-",
    duration: "8+ Hours",
    description: "Master C++ syntax, OOPs, and industrial logic."
  },
  {
    title: "JAVA FULL COURSE",
    url: "https://youtu.be/ntLJmHOJ0ME?si=OTlnmG4YULpnVvlL",
    duration: "12+ Hours",
    description: "Comprehensive enterprise-grade Java development."
  },
  {
    title: "DBMS COMPLETE PROTOCOL",
    url: "https://youtu.be/kBdlM6hNDAE?si=-sDSDyF_hQnJftsT",
    duration: "6+ Hours",
    description: "Database architecture and SQL mastery in one shot."
  }
];

export default function OneShotsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-16">
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
          <Video className="w-3 h-3" /> External Learning Stream
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          Open Source <span className="text-neon-pink">One Shots</span>
        </h1>
        <p className="text-muted-foreground text-lg font-medium leading-relaxed">
          High-intensity, comprehensive video sessions curated for deep learning. Perfect for marathon study sessions and concept reinforcement.
        </p>
      </header>

      {/* Disclaimer */}
      <section className="glass rounded-[2rem] p-8 md:p-10 border-secondary/20 bg-secondary/[0.02] relative overflow-hidden group">
        <div className="flex items-start gap-6 relative z-10">
          <ShieldAlert className="w-10 h-10 text-secondary shrink-0 animate-pulse" />
          <div className="space-y-3">
            <h5 className="text-lg font-black text-secondary uppercase tracking-widest">Learning Protocol Disclaimer</h5>
            <p className="text-sm font-bold text-muted-foreground leading-relaxed uppercase tracking-tight">
              WE ARE NOT SPONSORED BY ANY YOUTUBE CHANNEL. THESE ARE PROVIDED BY POPULARITY AND NOT PROMOTION.
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, i) => (
          <div key={i} className="glass-card p-8 md:p-10 rounded-[3rem] group hover:neon-border-cyan transition-all duration-500 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary/10 transition-colors">
                  <PlayCircle className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-3 py-1 glass rounded-full">
                  {video.duration}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-white/5">
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                <GlowButton className="w-full py-6 text-lg group/btn" suppressHydrationWarning>
                  Watch Session <Youtube className="w-5 h-5 ml-2 transition-transform group-hover/btn:scale-110" />
                </GlowButton>
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="text-center pt-12">
        <div className="inline-flex items-center gap-2 text-muted-foreground text-xs font-black uppercase tracking-[0.3em]">
          <BookOpen className="w-4 h-4" /> More sessions being processed...
        </div>
      </section>
    </div>
  );
}
