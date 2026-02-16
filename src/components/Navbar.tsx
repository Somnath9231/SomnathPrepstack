"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GlowButton } from "./GlowButton";
import { useUser, useAuth } from "@/firebase";
import { signOut } from "firebase/auth";
import { LogIn, UserCircle, LogOut, Menu, X, Rocket } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Roadmaps", href: "/roadmaps" },
  { name: "Practice", href: "/practice" },
  { name: "Languages", href: "/languages" },
  { name: "Enroll", href: "/enroll" },
  { name: "Test", href: "/test" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-neon-cyan transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(0,245,255,1)]">
              PREPSTACK
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all hover:text-primary relative group",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                  pathname === link.href && "w-full"
                )} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              {!isUserLoading && (
                user ? (
                  <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                      <GlowButton variant="outline" size="sm" className="gap-2">
                        <UserCircle className="w-4 h-4" /> Dashboard
                      </GlowButton>
                    </Link>
                    <button onClick={handleSignOut} className="text-muted-foreground hover:text-secondary transition-colors p-2">
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <Link href="/login">
                    <GlowButton size="sm" variant="secondary" className="gap-2">
                      <LogIn className="w-4 h-4" /> Sign In
                    </GlowButton>
                  </Link>
                )
              )}
            </div>

            {/* Mobile Nav Toggle */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-all">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-white/5 w-[300px]">
                <SheetHeader className="mb-12">
                  <SheetTitle className="text-left">
                    <span className="text-3xl font-black tracking-tighter text-neon-cyan">PREPSTACK</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-black uppercase tracking-widest transition-all hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
                    {!isUserLoading && (
                      user ? (
                        <>
                          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                            <GlowButton variant="outline" className="w-full justify-start gap-3">
                              <UserCircle className="w-5 h-5" /> Dashboard
                            </GlowButton>
                          </Link>
                          <GlowButton 
                            variant="secondary" 
                            className="w-full justify-start gap-3"
                            onClick={() => { handleSignOut(); setIsOpen(false); }}
                          >
                            <LogOut className="w-5 h-5" /> Logout Protocol
                          </GlowButton>
                        </>
                      ) : (
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                          <GlowButton variant="secondary" className="w-full justify-start gap-3">
                            <LogIn className="w-5 h-5" /> Login Protocol
                          </GlowButton>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
