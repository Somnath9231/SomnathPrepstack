"use client";

import { useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate Firebase Firestore Save
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "Message sent successfully!", description: "We'll get back to you soon." });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold font-headline">Get in <span className="text-neon-blue">Touch</span></h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Have questions about your placement preparation? Our team is here to help you navigate your career journey.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass rounded-2xl group-hover:neon-glow-blue transition-all">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email Us</div>
                <div className="font-bold">poddersomnath598@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass rounded-2xl group-hover:neon-glow-blue transition-all">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Call Us</div>
                <div className="font-bold">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 glass rounded-2xl group-hover:neon-glow-blue transition-all">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-bold">Kolkata, West Bengal, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl relative">
          {submitted ? (
            <div className="py-20 text-center space-y-6 animate-in fade-in duration-500">
               <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                 <CheckCircle2 className="w-10 h-10" />
               </div>
               <h2 className="text-3xl font-bold">Message Sent!</h2>
               <p className="text-muted-foreground">Thank you for reaching out. Our team will contact you within 24 hours.</p>
               <GlowButton variant="outline" onClick={() => setSubmitted(false)}>Send another message</GlowButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="glass h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="glass h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required placeholder="How can we help?" className="glass h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required placeholder="Type your message here..." className="glass min-h-[150px]" />
              </div>
              <GlowButton type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
              </GlowButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
