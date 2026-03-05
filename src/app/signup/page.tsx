
"use client";

import { useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth, useFirestore } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { UserPlus, ShieldCheck, Loader2 } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    customId: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Alphanumeric check and length check
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (formData.customId.length !== 10 || !alphanumericRegex.test(formData.customId)) {
      toast({ 
        title: "Invalid ID", 
        description: "User ID must be exactly 10 alphanumeric characters.", 
        variant: "destructive" 
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({ 
        title: "Error", 
        description: "Passwords do not match.", 
        variant: "destructive" 
      });
      return;
    }

    setLoading(true);

    try {
      const customIdUpper = formData.customId.toUpperCase();
      const idRef = doc(db, "customUserIds", customIdUpper);
      const idSnap = await getDoc(idRef);
      
      if (idSnap.exists()) {
        toast({ 
          title: "ID Already Exists", 
          description: "This ID already exists. Please choose another ID.", 
          variant: "destructive" 
        });
        setLoading(false);
        return;
      }

      // Map custom ID to a local domain email for Firebase Auth
      const mappedEmail = `${customIdUpper.toLowerCase()}@prepstack.local`;
      const result = await createUserWithEmailAndPassword(auth, mappedEmail, formData.password);
      
      await updateProfile(result.user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });

      // Reserve ID
      await setDoc(idRef, { uid: result.user.uid });
      
      // Create User Profile
      const userRef = doc(db, "users", result.user.uid);
      await setDoc(userRef, {
        id: result.user.uid,
        customId: customIdUpper,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: mappedEmail,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
        enrollmentStatus: "free",
        progress: {}
      });

      toast({ title: "Protocol Initialized", description: `Welcome to PrepStack, ${formData.firstName}!` });
      router.push("/dashboard");
    } catch (error: any) {
      toast({ title: "Signup Failed", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-24">
      <div className="glass-card p-8 md:p-12 rounded-[3rem] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <ShieldCheck className="w-32 h-32 text-primary" />
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-black uppercase tracking-tighter">Initialize <span className="text-neon-pink">Protocol</span></h1>
          <p className="text-muted-foreground font-medium">Create your unique student identity.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                placeholder="Somnath" 
                className="glass"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
                suppressHydrationWarning
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                placeholder="Podder" 
                className="glass"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customId">Unique User ID (10 chars alphanumeric)</Label>
            <Input 
              id="customId" 
              placeholder="e.g. SOMNATH923" 
              maxLength={10}
              className="glass font-mono tracking-widest uppercase"
              value={formData.customId}
              onChange={(e) => setFormData({...formData, customId: e.target.value.toUpperCase()})}
              required
              suppressHydrationWarning
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                className="glass"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
                suppressHydrationWarning
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                className="glass"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
                suppressHydrationWarning
              />
            </div>
          </div>

          <GlowButton type="submit" className="w-full py-8 text-xl" disabled={loading} suppressHydrationWarning>
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Access System <UserPlus className="w-5 h-5 ml-2" /></>}
          </GlowButton>
        </form>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">
            Already have an identity? <Link href="/login" className="text-primary hover:underline ml-2">Login Protocol</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
