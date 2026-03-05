
"use client";

import { useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, useFirestore } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { LogIn, ShieldCheck, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const customIdUpper = userId.toUpperCase();
      const mappedEmail = `${customIdUpper.toLowerCase()}@prepstack.local`;
      
      const result = await signInWithEmailAndPassword(auth, mappedEmail, password);
      
      // Update last login
      const userRef = doc(db, "users", result.user.uid);
      const userSnap = await getDoc(userRef);
      const firstName = userSnap.exists() ? userSnap.data().firstName : "Student";
      
      await updateDoc(userRef, {
        lastLoginAt: serverTimestamp()
      });

      toast({ 
        title: `Welcome Back, ${firstName}`, 
        description: "Security sequence authenticated. Redirecting to Dashboard..." 
      });
      
      router.push("/dashboard");
    } catch (error: any) {
      toast({ 
        title: "Authentication Failed", 
        description: "Invalid User ID or Password. Please verify your credentials.", 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24 min-h-[80vh] flex flex-col justify-center">
      <div className="glass-card p-10 rounded-[3rem] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <ShieldCheck className="w-24 h-24 text-primary" />
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black uppercase tracking-tighter">Enter <span className="text-neon-cyan">Stack</span></h1>
          <p className="text-muted-foreground font-medium">Identify yourself to resume your mission.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="userId">User ID (10 chars)</Label>
            <Input 
              id="userId" 
              placeholder="e.g. SOMNATH923" 
              maxLength={10}
              className="glass font-mono tracking-widest uppercase h-12"
              value={userId}
              onChange={(e) => setUserId(e.target.value.toUpperCase())}
              required
              suppressHydrationWarning
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              className="glass h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              suppressHydrationWarning
            />
          </div>
          <GlowButton type="submit" className="w-full py-6 text-lg" disabled={loading} suppressHydrationWarning>
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Login Protocol <LogIn className="w-4 h-4 ml-2" /></>}
          </GlowButton>
        </form>

        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
            First time? <Link href="/signup" className="text-primary hover:underline ml-2">Initialize Protocol</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
