"use client";

import { useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, useFirestore } from "@/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { doc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { LogIn, ShieldCheck } from "lucide-react";
import { setDocumentNonBlocking } from "@/firebase/non-blocking-updates";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();

  const syncUserProfile = (user: User) => {
    const userRef = doc(db, "users", user.uid);
    setDocumentNonBlocking(userRef, {
      id: user.uid,
      email: user.email,
      name: user.displayName || email.split('@')[0],
      lastLoginAt: serverTimestamp(),
      createdAt: serverTimestamp(), // Firestore security rules will handle merge vs create
      enrollmentStatus: "free"
    }, { merge: true });
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      syncUserProfile(result.user);
      toast({ title: "Welcome Back!", description: "Successfully logged into PrepStack." });
      router.push("/dashboard");
    } catch (error: any) {
      toast({ title: "Login Failed", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      syncUserProfile(result.user);
      toast({ title: "Welcome!", description: "Successfully logged in with Google." });
      router.push("/dashboard");
    } catch (error: any) {
      toast({ title: "Google Login Failed", description: error.message, variant: "destructive" });
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
          <p className="text-muted-foreground font-medium">Continue your placement mission.</p>
        </div>

        <div className="space-y-4">
          <GlowButton 
            variant="outline" 
            className="w-full py-6 flex gap-3 normal-case tracking-normal"
            onClick={handleGoogleLogin}
            suppressHydrationWarning
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </GlowButton>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground font-black">Or continue with</span></div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="prepstack1@student.com" 
                className="glass h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <GlowButton type="submit" className="w-full py-6" disabled={loading} suppressHydrationWarning>
              {loading ? "Authenticating..." : "Login Protocol"} <LogIn className="w-4 h-4 ml-2" />
            </GlowButton>
          </form>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground font-bold">
            Demo Credentials: prepstack1@student.com / 12345678
          </p>
        </div>
      </div>
    </div>
  );
}
