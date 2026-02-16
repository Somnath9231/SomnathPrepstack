"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GlowButton } from "./GlowButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Roadmaps", href: "/roadmaps" },
  { name: "Practice", href: "/practice" },
  { name: "Languages", href: "/languages" },
  { name: "Resources", href: "/resources" },
  { name: "Test", href: "/test" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl font-black tracking-tighter text-neon-cyan transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(0,245,255,1)]">
              PREPSTACK
            </span>
          </Link>

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
            <Link href="/test">
              <GlowButton size="lg" variant="secondary" className="hidden sm:inline-flex text-xs uppercase tracking-tighter">Enter Exam Room</GlowButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
