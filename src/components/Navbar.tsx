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
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-neon-blue font-headline">
              PrepStack<span className="text-neon-purple italic">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/test">
              <GlowButton size="sm" variant="secondary">Get Started</GlowButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
